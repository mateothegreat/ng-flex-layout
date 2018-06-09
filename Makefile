include .make/Makefile.inc

NAME	    = gcr.io/streaming-platform-devqa/platform-services-ui
ALIAS	    = platform-services-ui
VERSION	    = $(shell git rev-parse HEAD)
APP			= platform-services-ui
NS			= default
export

#grant all privileges on platform_base.* to 'platform_base'@'%' identified by 'agaeq14';

.PHONY: all build test tag_latest release

all:	build push

build:

	@echo "Building an image with the current tag $(NAME):$(VERSION).."

	gradle booJar

	docker build 	--rm 	\
					--tag $(NAME):$(VERSION) \
					.

run: stop

	docker run 	--rm -d 				                        \
				--publish 8080:8080		                        \
				--name $(ALIAS)                                 \
				$(NAME):$(VERSION)

stop:

	docker rm -f $(ALIAS) | true

logs:

	docker logs -f $(ALIAS)

#shell:
#
#	docker run 	--rm -it 				                        \
#				--volume $(PWD)/jenkins_home:/var/jenkins_home 	\
#				--publish 8080:8080		                        \
#				--publish 50000:50000                           \
#				--name $(ALIAS)                                 \
#				--entrypoint /bin/sh                            \
#				$(NAME):$(VERSION)

tag_latest:

	docker tag $(NAME):$(VERSION) $(NAME):latest

push:

	docker push $(NAME)
