.PHONY: build

default: build

# Build tools
MAKE=make --no-print-directory
JEKYLL=bundle exec jekyll

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

version: versionget versionwrite

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
	@cd $(DISTRIB) && zip -r ../upload.zip * .htaccess
	@ssh root@132.180.10.7 "\
    	cd /net/httpd/htdocs/jsxgraph/; \
    	rm -r home.new; \
    	mkdir home.new; \
    "
	@scp -r upload.zip root@132.180.10.7:/net/httpd/htdocs/jsxgraph/home.new
	@ssh root@132.180.10.7 "\
    	cd /net/httpd/htdocs/jsxgraph/home.new/; \
    	unzip -q upload.zip; \
    	rm upload.zip; \
    "
	@rm upload.zip;
	@echo "... successful"
	@echo "Link new version to jsxgraph.org and jsxgraph.uni-bayreuth.de"
	@ssh root@132.180.10.7 "\
    	cd /net/httpd/htdocs/jsxgraph/; \
    	rm -r home.old; mv home home.old; mv home.new home; \
    "
	@echo "... done"

###################################
### Rules for combined making ###
###################################

release: build upload

build:
	@echo "Build via jekyll"
	@$(JEKYLL) build
	@echo " ... done"

dev:
	@$(JEKYLL) serve


.PHONY: postprocess
###################################
# Test if purifycss is installed and 
# execute it
# Installation:
#   sudo npm install -g purify-css
###################################

postprocess:
	@echo "Postprocessing: shrink webpage.css"
	@if type "purifycss" >/dev/null 2>/dev/null; then \
		cd distrib; \
		purifycss assets/website.css ./index.html --info --min --out assets/website_purified.css && \
		cp assets/website.css assets/website_org.css && \
		cp assets/website_purified.css assets/website.css; \
	else echo "purifycss not installed"; \
	fi

#######################
### Rules for tests ###
#######################
