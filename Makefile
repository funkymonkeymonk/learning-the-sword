install:
	@docker run --rm -it \
		-p 8000:8000 \
		--workdir=/usr/src/app/ \
		--volume=`pwd`:/usr/src/app/ \
		node:latest yarn install

develop:
	@docker run --rm -it \
		-p 8000:8000 \
		--workdir=/usr/src/app/ \
		--volume=`pwd`:/usr/src/app/ \
		node:latest yarn develop-host

build:
	@docker run --rm -it \
		-p 8000:8000 \
		--workdir=/usr/src/app/ \
		--volume=`pwd`:/usr/src/app/ \
		node:latest yarn build

serve: build-static
	@docker run --rm -it \
		-p 8000:8000 \
		--workdir=/usr/src/app/ \
		--volume=`pwd`:/usr/src/app/ \
		node:latest yarn serve

open:
	@open http://localhost:8000
