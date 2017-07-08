JEKYLL_VERSION=3.5

build:
	@docker run --rm \
		-p 4000:4000 \
	  --volume=`pwd`:/srv/jekyll \
	  -it jekyll/jekyll:$(JEKYLL_VERSION) \
	  jekyll build

serve:
	@docker run --rm \
		-p 4000:4000 \
		--volume=`pwd`:/srv/jekyll \
		-it jekyll/jekyll:$(JEKYLL_VERSION) \
		jekyll serve
