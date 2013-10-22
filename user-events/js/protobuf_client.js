var log = document.getElementById("log");
var text = document.getElementById("text");

var ProtoBuf = dcodeIO.ProtoBuf;
var bbm = ProtoBuf.protoFromFile("../etc/userevent.proto").build('bbm');
var userEventBatch;
var storage = new Storage();

userEventBatch = storage.get() || new bbm.BBMUserEventBatch();

listUserEvents(userEventBatch);

$('form').on('submit', function(event) {
  event.preventDefault();
});

/**
 * Adds some BBMUserEvent data to the storage BBMUserEventBatch object
 */
function appendUserEvent() {

  var userEvent = new bbm.BBMUserEvent();

  // main keys
  userEvent.timestamp = 1000;
  userEvent.uuid = new Date().getTime();
  userEvent.apikey = $('#apiKey').val();
  userEvent.userId = $('#userId').val();
  userEvent.eventType = $('#eventType').val();

  // enum
  userEvent.networkStatus = bbm.BBMUserEvent.NetworkStatus.ONLINE;

  // context
  // contains standardized (optional keys) and list of arbitrary key/values
  var context = new bbm.BBMUserEvent.Context();
  context.containerName = $('#containerName').val();
  context.trackIdPlaying = $('#trackIdPlaying').val();
  userEvent.set('context', context);

  // event data
  var eventData = new bbm.BBMUserEvent.EventData();
  eventData.stationIdent = $('#stationIdent').val();
  eventData.trackId = $('#trackId').val();
  userEvent.set('eventData', eventData);

  userEventBatch.add('userEvent', userEvent);
  storage.set(userEventBatch);

  listUserEvents();
}

/**
 * Renders the user event data on screen.
 */
function listUserEvents() {

  var $log = $('#log');
  $log.find('tr').not('.header').remove();

  for (var i = 0; i < userEventBatch.userEvent.length; i++) {
    var $tr = $('<tr>')
      .append($('<td/>').html(userEventBatch.userEvent[i].uuid))
      .append($('<td/>').html(userEventBatch.userEvent[i].apikey))
      .append($('<td/>').html(userEventBatch.userEvent[i].userId))
      .append($('<td/>').html(userEventBatch.userEvent[i].eventType))
      .append($('<td/>').html(userEventBatch.userEvent[i].context.containerName))
      .append($('<td/>').html(userEventBatch.userEvent[i].context.trackIdPlaying))
      .append($('<td/>').html(userEventBatch.userEvent[i].eventData.stationIdent))
      .append($('<td/>').html(userEventBatch.userEvent[i].eventData.trackId))
      .appendTo($log);
  }

  $('#content').html(window.localStorage.userEventData);
}

/**
 * Deletes all UserEvent data.
 */
function clearEvents() {

  // BUG: ProtoBuf,js seems to break when you save an empty repeated field
  //userEventBatch.userEvent.length = 0;
  //storage.set(userEventBatch);

  // do it this way instead (not nice)
  window.localStorage.userEventData = '';
  userEventBatch = new bbm.BBMUserEventBatch();

  listUserEvents();
}

/**
 * A helper class to storage and retrieve protocol buffers objects in HTML5 Local Storage.
 * The binary protocol buffer data is stored in a binary string.
 */
function Storage() {

  /**
   * Stores the given BBMUserEventBatch object as a binary string inside Local Storage
   */
  this.set = function(userEventBatch) {
    window.localStorage.userEventData = String.fromCharCode.apply(null, new Uint8Array(userEventBatch.toArrayBuffer()));
  };

  /**
   * Retrieves and decodes the store binary string into a BBMUserEventData object
   */
  this.get = function() {

    var dataString = window.localStorage.userEventData;
    if (!dataString) {
      return;
    }

    var arrayBuffer = new ArrayBuffer(dataString.length); // 2 bytes for each char
    var bufferView = new Uint8Array(arrayBuffer);
    for (var i = 0, strLen = dataString.length; i < strLen; i++) {
      bufferView[i] = dataString.charCodeAt(i);
    }

    // decode the binary blob into a UserEventBatch object
    return bbm.BBMUserEventBatch.decode(arrayBuffer);
  };
}