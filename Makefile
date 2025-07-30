.PHONY: website

default: website

# Build tools
MAKE=make --no-print-directory

# Directories
DISTRIB=distrib

JSX=../jsxgraph
SRC=src
ASSETS=src/assets

######################################
### Rules for version substitution ###
######################################

# Helpers for version
VERSION_FILE=VERSION
VERSION_NO=$(shell cat ${VERSION_FILE} | head -n 1)
VERSION_ARR=$(shell cat ${VERSION_FILE} | head -n 2 | tail -n -1)
VERSION_YEAR=$(shell cat ${VERSION_FILE} | head -n 3 | tail -n -1)

version:
	@$(MAKE) versionget
	@$(MAKE) versionwrite

# get from jsxgraph
versionget:
	@echo $(shell grep -o '"version": "[^"]*' ${JSX}/package.json | grep -o '[^"]*$$') > $(VERSION_FILE);
	@echo $(shell grep -o '"version": "[^"]*' ${JSX}/package.json | grep -o '[^"]*$$') >> $(VERSION_FILE);
	@echo $(shell cat ${JSX}/COPYRIGHT | head -n 4 | tail -n -1) >> $(VERSION_FILE);
	@sed -i '2s/\./, /g' $(VERSION_FILE)
	@sed -i '2s/\([A-Z\-]\+\)/"\1"/gI' $(VERSION_FILE)
	@sed -i '2s/\(.*\)/[\1]/g' $(VERSION_FILE)
	@sed -i '3s/Copyright \([^-]*\)-\([^-]*\)/\2/g' $(VERSION_FILE)
	@echo -n "JSXGraph delivered the following version: "
	@cat $(VERSION_FILE) | head -n 1

versionwrite:
	@echo -n "Update constants"
	@sed -i 's/version: .*/version: v$(VERSION_NO)/g' $(SRC)/_data/const.yml
	@sed -i 's/version_year: .*/version_year: $(VERSION_YEAR)/g' $(SRC)/_data/const.yml
	@echo " ... done"

########################
### Rules for upload ###
########################

upload:
	@echo "Start uploading"
	@scp -r distrib/ root@132.180.10.7:/net/httpd/htdocs/jsxgraph/home.new
	@echo "... successful"
	@echo "Link new version to jsxgraph.org and jsxgraph.uni-bayreuth.de"
	@ssh root@132.180.10.7 "\
    	cd /net/httpd/htdocs/jsxgraph/; \
    	rm -r home.old; mv home home.old; mv home.new home; \
    "
	@echo "... done"

###################################
### Rules for combinated making ###
###################################

website: build

websitelocal: versionwrite build

release: version build

build:
	@echo "Build via jekyll"
	@bundle exec jekyll build
	@echo " ... done"

dev:
	@bundle exec jekyll serve -l

#######################
### Rules for tests ###
#######################
