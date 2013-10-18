__author__ = 'tom'

import sys
import genpy.userevent_thrift.ttypes as ttypes
import uuid

def appendUserEvent(userEventsBatch):

    # main keys

    userEvent = ttypes.BBMUserEvent()

    userEvent.timestamp = 1000L;
    userEvent.uuid = str(uuid.uuid4())
    userEvent.apikey = 'key'
    userEvent.userId = 123
    userEvent.eventType = 'artist_search'

    # enum
    userEvent.networkStatus = ttypes.NetworkStatus.ONLINE

    # context
    # contains standardized (optional keys) and list of arbitrary key/values

    context = ttypes.Context()

    context.containerName = 'now_playing'
    context.trackIdPlaying = 12345

    # a lot of optional fields omitted

    context.otherContext = {}
    context.otherContext["panel_number"] = "6"
    context.otherContext["veil_lifted"] = "true"

    userEvent.context = context

    # event data

    eventData = ttypes.EventData()

    eventData.stationIdent = 'a123'
    eventData.trackId = '4321'

    eventData.otherEventData = {}
    eventData.otherEventData['search_phrase'] = 'christmas'
    eventData.otherEventData['search_results'] = "0"

    userEvent.eventData = eventData

    # add to batch
    userEventsBatch.userEvent.append(userEvent)

    return userEventsBatch

def listAllUserEvents(filename):

    userEventsBatch = ttypes.BBMUserEventBatch()

    try:
        f = open(filename, "rb")
        transportIn = ttypes.TTransport.TMemoryBuffer(f.read())
        protocolIn = ttypes.TBinaryProtocol.TBinaryProtocol(transportIn)
        userEventsBatch.read(protocolIn)
        f.close()
    except IOError:
        print filename + ": Could not open file.  Exiting"
        sys.exit(1)
    # Query uuids of events

    for userEvent in userEventsBatch.userEvent:
        print "event id: {0}, event data extra fields: {1}".format(userEvent.uuid, [str(k)+ ":" + str(v) for k,v in userEvent.eventData.otherEventData.items()])

def main():

    if len(sys.argv) < 3:
        print "Usage:", sys.argv[0]
        print "add [num of events to add] filename"
        print "list filename"
        exit(1)

    command = sys.argv[1]

    if command == 'add':

        noEvents = sys.argv[2]
        filename = sys.argv[3]

        # load existing events

        userEventsBatch = ttypes.BBMUserEventBatch()

        try:
            f = open(filename, "rb")
            transportIn = ttypes.TTransport.TMemoryBuffer(f.read())
            protocolIn = ttypes.TBinaryProtocol.TBinaryProtocol(transportIn)
            userEventsBatch.read(protocolIn)
            f.close()
        except IOError:
            print filename + ": Could not open file.  Creating a new one."

            # initialise userEventsBatch
            userEventsBatch.userEvent = []

        # Append new user events

        for i in range(0, int(noEvents)):
            appendUserEvent(userEventsBatch)

        # Write back out to disk

        try:
            f = open(filename, "wb")
            transportOut = ttypes.TTransport.TMemoryBuffer()
            protocolOut = ttypes.TBinaryProtocol.TBinaryProtocol(transportOut)
            userEventsBatch.write(protocolOut)
            byteRep = transportOut.getvalue()

            f.write(byteRep)
            f.close()

            print "Wrote {0} user events".format(noEvents)
        except IOError:
            print filename + ": Could not save file."

    elif command == 'list':

        listAllUserEvents(sys.argv[2])

    else:
        print "Unregistered command. Exiting"
        sys.exit(1)

# main function

main()
