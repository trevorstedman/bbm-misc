__author__ = 'tom'

import sys
import re
import gzip

filename = sys.argv[1]

# Load in lines and assign to category

streamInfoRegexp = re.compile('.+STREAMID.+STREAMUNIQUE=([^|]+)')
radioReportRegexp = re.compile('.+STREAMID.+UUID.+STREAMUNIQUE=([^|]+)')
streamEndRegexp = re.compile('.+StreamEnd:STREAMUNIQUE=([^|]+)')

streamInfoStreamStart = {}
radioReportStreamStart = {}
streamEnd = {}

with gzip.open(filename) as f:
    for newLine in f:

#        print newLine

        # radioreport stream start
        radioReportStreamStartMatch = radioReportRegexp.match(newLine)
        if radioReportStreamStartMatch:
            radioReportStreamStart[radioReportStreamStartMatch.group(1)] = newLine
            continue

        # streamInfo stream start

        streamInfoStreamStartMatch = streamInfoRegexp.match(newLine)
        if streamInfoStreamStartMatch:
            streamInfoStreamStart[streamInfoStreamStartMatch.group(1)] = newLine
            continue
	
        # stream end
        streamEndMatch = streamEndRegexp.match(newLine)
        if streamEndMatch:
            streamEnd[streamEndMatch.group(1)] = newLine
	       

print "streamInfo {0}".format(len(streamInfoStreamStart))
print "radioReport {0}".format(len(radioReportStreamStart))
print "streamEnd {0}".format(len(streamEnd))

# Run through file again, find the streamUnique and output an annotated line

streamUniqueRegexp = re.compile('(Sep[^S]+)(.+STREAMUNIQUE=([^|]+).+)')

# Output file]

outputFilename = filename[:-3] + "-output.gz"

with gzip.open(filename) as f:
    with gzip.open(outputFilename, 'w') as fwrite:
        for newLine in f:
            uniqueMatch = streamUniqueRegexp.match(newLine)

            isStreamEndMatch = streamEndRegexp.match(newLine)
        
            timestamp = uniqueMatch.group(1)
            restOfLine = uniqueMatch.group(2)
            lineStreamUnique = uniqueMatch.group(3)

            annotation=""

            if lineStreamUnique in radioReportStreamStart:
            
                if isStreamEndMatch:
                    annotation="RadioReportStreamEnd:"
                else:
                    annotation="RadioReportStreamStart:"

            elif lineStreamUnique in streamInfoStreamStart:
                
                if isStreamEndMatch:
                    annotation="StreamInfoStreamEnd:"
                else:
                    annotation="StreamInfoStreamStart:"

            annotatedLine = "{0} {1}{2}".format(timestamp, annotation, restOfLine)
            #print annotatedLine
            fwrite.write(annotatedLine)
