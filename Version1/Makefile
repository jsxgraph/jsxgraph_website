.RECIPEPREFIX=>

all: build

dev:
>bundle exec jekyll serve

build:
>bundle exec jekyll build

update:
>gem update

deploy:
>cd _site; ../copy2server.sh * 

.PHONY: dev build update deploy
