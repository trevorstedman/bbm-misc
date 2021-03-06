//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


NetworkStatus = {
'ONLINE' : 1,
'OFFLINE' : 2
};
Context = function(args) {
  this.containerName = null;
  this.stationIdentPlaying = null;
  this.otherContext = null;
  if (args) {
    if (args.containerName !== undefined) {
      this.containerName = args.containerName;
    }
    if (args.stationIdentPlaying !== undefined) {
      this.stationIdentPlaying = args.stationIdentPlaying;
    }
    if (args.otherContext !== undefined) {
      this.otherContext = args.otherContext;
    }
  }
};
Context.prototype = {};
Context.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.containerName = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.stationIdentPlaying = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.otherContext = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          if (_i5 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key6 = null;
          var val7 = null;
          key6 = input.readString().value;
          val7 = input.readString().value;
          this.otherContext[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Context.prototype.write = function(output) {
  output.writeStructBegin('Context');
  if (this.containerName !== null && this.containerName !== undefined) {
    output.writeFieldBegin('containerName', Thrift.Type.STRING, 1);
    output.writeString(this.containerName);
    output.writeFieldEnd();
  }
  if (this.stationIdentPlaying !== null && this.stationIdentPlaying !== undefined) {
    output.writeFieldBegin('stationIdentPlaying', Thrift.Type.STRING, 2);
    output.writeString(this.stationIdentPlaying);
    output.writeFieldEnd();
  }
  if (this.otherContext !== null && this.otherContext !== undefined) {
    output.writeFieldBegin('otherContext', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.otherContext));
    for (var kiter8 in this.otherContext)
    {
      if (this.otherContext.hasOwnProperty(kiter8))
      {
        var viter9 = this.otherContext[kiter8];
        output.writeString(kiter8);
        output.writeString(viter9);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

EventData = function(args) {
  this.stationIdent = null;
  this.trackId = null;
  this.trackVersionId = null;
  this.otherEventData = null;
  if (args) {
    if (args.stationIdent !== undefined) {
      this.stationIdent = args.stationIdent;
    }
    if (args.trackId !== undefined) {
      this.trackId = args.trackId;
    }
    if (args.trackVersionId !== undefined) {
      this.trackVersionId = args.trackVersionId;
    }
    if (args.otherEventData !== undefined) {
      this.otherEventData = args.otherEventData;
    }
  }
};
EventData.prototype = {};
EventData.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.stationIdent = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.trackId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.trackVersionId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size10 = 0;
        var _rtmp314;
        this.otherEventData = {};
        var _ktype11 = 0;
        var _vtype12 = 0;
        _rtmp314 = input.readMapBegin();
        _ktype11 = _rtmp314.ktype;
        _vtype12 = _rtmp314.vtype;
        _size10 = _rtmp314.size;
        for (var _i15 = 0; _i15 < _size10; ++_i15)
        {
          if (_i15 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key16 = null;
          var val17 = null;
          key16 = input.readString().value;
          val17 = input.readString().value;
          this.otherEventData[key16] = val17;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EventData.prototype.write = function(output) {
  output.writeStructBegin('EventData');
  if (this.stationIdent !== null && this.stationIdent !== undefined) {
    output.writeFieldBegin('stationIdent', Thrift.Type.STRING, 1);
    output.writeString(this.stationIdent);
    output.writeFieldEnd();
  }
  if (this.trackId !== null && this.trackId !== undefined) {
    output.writeFieldBegin('trackId', Thrift.Type.STRING, 2);
    output.writeString(this.trackId);
    output.writeFieldEnd();
  }
  if (this.trackVersionId !== null && this.trackVersionId !== undefined) {
    output.writeFieldBegin('trackVersionId', Thrift.Type.STRING, 3);
    output.writeString(this.trackVersionId);
    output.writeFieldEnd();
  }
  if (this.otherEventData !== null && this.otherEventData !== undefined) {
    output.writeFieldBegin('otherEventData', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.otherEventData));
    for (var kiter18 in this.otherEventData)
    {
      if (this.otherEventData.hasOwnProperty(kiter18))
      {
        var viter19 = this.otherEventData[kiter18];
        output.writeString(kiter18);
        output.writeString(viter19);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BBMUserEvent = function(args) {
  this.timestamp = null;
  this.uuid = null;
  this.apikey = null;
  this.userId = null;
  this.eventType = null;
  this.networkStatus = null;
  this.context = null;
  this.eventData = null;
  if (args) {
    if (args.timestamp !== undefined) {
      this.timestamp = args.timestamp;
    }
    if (args.uuid !== undefined) {
      this.uuid = args.uuid;
    }
    if (args.apikey !== undefined) {
      this.apikey = args.apikey;
    }
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.eventType !== undefined) {
      this.eventType = args.eventType;
    }
    if (args.networkStatus !== undefined) {
      this.networkStatus = args.networkStatus;
    }
    if (args.context !== undefined) {
      this.context = args.context;
    }
    if (args.eventData !== undefined) {
      this.eventData = args.eventData;
    }
  }
};
BBMUserEvent.prototype = {};
BBMUserEvent.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.uuid = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.apikey = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.userId = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.eventType = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.networkStatus = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRUCT) {
        this.context = new Context();
        this.context.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRUCT) {
        this.eventData = new EventData();
        this.eventData.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BBMUserEvent.prototype.write = function(output) {
  output.writeStructBegin('BBMUserEvent');
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 1);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  if (this.uuid !== null && this.uuid !== undefined) {
    output.writeFieldBegin('uuid', Thrift.Type.STRING, 2);
    output.writeString(this.uuid);
    output.writeFieldEnd();
  }
  if (this.apikey !== null && this.apikey !== undefined) {
    output.writeFieldBegin('apikey', Thrift.Type.STRING, 3);
    output.writeString(this.apikey);
    output.writeFieldEnd();
  }
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.I32, 4);
    output.writeI32(this.userId);
    output.writeFieldEnd();
  }
  if (this.eventType !== null && this.eventType !== undefined) {
    output.writeFieldBegin('eventType', Thrift.Type.STRING, 5);
    output.writeString(this.eventType);
    output.writeFieldEnd();
  }
  if (this.networkStatus !== null && this.networkStatus !== undefined) {
    output.writeFieldBegin('networkStatus', Thrift.Type.I32, 6);
    output.writeI32(this.networkStatus);
    output.writeFieldEnd();
  }
  if (this.context !== null && this.context !== undefined) {
    output.writeFieldBegin('context', Thrift.Type.STRUCT, 7);
    this.context.write(output);
    output.writeFieldEnd();
  }
  if (this.eventData !== null && this.eventData !== undefined) {
    output.writeFieldBegin('eventData', Thrift.Type.STRUCT, 8);
    this.eventData.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BBMUserEventBatch = function(args) {
  this.userEvent = null;
  if (args) {
    if (args.userEvent !== undefined) {
      this.userEvent = args.userEvent;
    }
  }
};
BBMUserEventBatch.prototype = {};
BBMUserEventBatch.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size20 = 0;
        var _rtmp324;
        this.userEvent = [];
        var _etype23 = 0;
        _rtmp324 = input.readListBegin();
        _etype23 = _rtmp324.etype;
        _size20 = _rtmp324.size;
        for (var _i25 = 0; _i25 < _size20; ++_i25)
        {
          var elem26 = null;
          elem26 = new BBMUserEvent();
          elem26.read(input);
          this.userEvent.push(elem26);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BBMUserEventBatch.prototype.write = function(output) {
  output.writeStructBegin('BBMUserEventBatch');
  if (this.userEvent !== null && this.userEvent !== undefined) {
    output.writeFieldBegin('userEvent', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.userEvent.length);
    for (var iter27 in this.userEvent)
    {
      if (this.userEvent.hasOwnProperty(iter27))
      {
        iter27 = this.userEvent[iter27];
        iter27.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

