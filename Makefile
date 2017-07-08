JEKYLL_VERSION=pages

serve:
	@docker run --rm \
		-p 4000:4000 \
		--volume=`pwd`:/srv/jekyll \
		-it jekyll/jekyll:$(JEKYLL_VERSION) \
		jekyll serve

deploy:
	# TODO: move deploy process out of CI specific configuration
	echo "currently in .travis.yml"
