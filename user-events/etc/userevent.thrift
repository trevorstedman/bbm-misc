namespace py userevent_thrift

enum NetworkStatus {
  ONLINE = 1,
  OFFLINE = 2
}

struct Context {
       1: optional string containerName;
       2: optional string stationIdentPlaying;
       //+ other optional but recognised fields

       3: optional map<string, string> otherContext; //for extra context info
}

struct EventData {
       1: optional string stationIdent;
       2: optional string trackId;
       3: optional string trackVersionId;
       //+ other optional but recognised fields

       4: optional map<string, string> otherEventData; //for event-specific data
}

struct BBMUserEvent {

       1: required i64 timestamp;
       2: required string uuid;
       3: required string apikey; //optional?
       4: required i32 userId;    //optional?
       5: required string eventType;

       6: required NetworkStatus networkStatus;

       7: required Context context;

       8: required EventData eventData;
}

struct BBMUserEventBatch {
        1: required list<BBMUserEvent> userEvent;
}
