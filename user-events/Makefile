# See README.txt.

.PHONY: all clean python

all: python protoc_middleman

python:
#add_person_python list_people_python

clean:
	rm -f add_person_cpp list_people_cpp add_person_java list_people_java add_person_python list_people_python
	rm -f protoc_middleman
	rm -f *.pyc

protoc_middleman: etc/userevent.proto
	protoc -I=etc/ --python_out=src/user_events etc/userevent.proto
	@touch protoc_middleman

thrift_middleman: etc/userevent.thrift
	thrift -o src --gen py etc/userevent.thrift
	@touch thrift_middleman

#add_person_python: add_person.py protoc_middleman
#	@echo "Writing shortcut script add_person_python..."
#	@echo '#! /bin/sh' > add_person_python
#	@echo './add_person.py "$$@"' >> add_person_python
#	@chmod +x add_person_python

#list_people_python: list_people.py protoc_middleman
#	@echo "Writing shortcut script list_people_python..."
#	@echo '#! /bin/sh' > list_people_python
#	@echo './list_people.py "$$@"' >> list_people_python
#	@chmod +x list_people_python
