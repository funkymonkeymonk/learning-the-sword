build:
	@docker build -t buildingbananas/learning-the-sword .

dev: build
	@docker run --rm -it \
		-p 8000:8000 \
		--volume=`pwd`:/usr/src/app/ \
		buildingbananas/learning-the-sword yarn run develop

build-static: build
	@docker run --rm -it \
		-p 8000:8000 \
		--volume=`pwd`:/usr/src/app/ \
		buildingbananas/learning-the-sword yarn run build

serve: build-static
	@docker run --rm -it \
		-p 8000:8000 \
		--volume=`pwd`:/usr/src/app/ \
		buildingbananas/learning-the-sword yarn run serve

deploy: build
	@docker run --rm -it \
		--volume=`pwd`:/usr/src/app/ \
		buildingbananas/learning-the-sword yarn run deploy

open:
	@open http://localhost:8000
