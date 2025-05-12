.PHONY: website

default: website

# Build tools
MAKE=make --no-print-directory

# Directories
DISTRIB=distrib
OUTPUT=$(DISTRIB)/sketchometry

SKETCHOMETRY=../sketchometry
SRC=src
ASSETS=src/assets
FROM_SKETCHOMETRY=$(ASSETS)/from_sketchometry

######################################
### Rules for version substitution ###
######################################

# Helpers for version
VERSION_FILE=VERSION
VERSION=$(shell cat ${VERSION_FILE} | head -n 1)
VERSION_ARR=$(shell cat ${VERSION_FILE} | head -n 2 | tail -n -1)
VERSION_DATE=$(shell cat ${VERSION_FILE} | head -n 3 | tail -n -1)
VERSION_BUILD=$(shell cat ${VERSION_FILE} | head -n 4 | tail -n -1)
VERSION_YEAR=$(shell cat ${VERSION_FILE} | head -n 5 | tail -n -1)

version:
	@$(MAKE) versionget
	@$(MAKE) versionwrite

versionlocal: versionread versionwrite

# get from sketchometry
versionget:
	@cp -f $(SKETCHOMETRY)/VERSION VERSION
	@echo sketchometry delivered the following version: $(VERSION) \($(VERSION_DATE)\)

# read
versionread:
	@echo Old version was: $(VERSION)
	@read -p "Type a new version number: " version; \
	echo $$version > $(VERSION_FILE); \
	echo $$version >> $(VERSION_FILE)
	@read -p "Type the release date (YYYY-MM-DD): " date; \
	echo $$date >> $(VERSION_FILE); \
	echo $$date >> $(VERSION_FILE); \
	echo $$date >> $(VERSION_FILE)
	@sed -i '2s/\./, /g' $(VERSION_FILE)
	@sed -i '2s/\([A-Z]\+\)/"\1"/gI' $(VERSION_FILE)
	@sed -i '2s/\(.*\)/[\1]/g' $(VERSION_FILE)
	@sed -i '4s/\([^-]*\)-\([^-]*\)-\([^-]*\)/\1\2\3/g' $(VERSION_FILE)
	@sed -i '5s/\([^-]*\)-\([^-]*\)-\([^-]*\)/\1/g' $(VERSION_FILE)

versionwrite:
	@echo -n "Update constants"
	@sed -i 's/version: .*/version: v$(VERSION)/g' $(SRC)/_data/const.yml
	@sed -i 's/version_date: .*/version_date: $(VERSION_DATE)/g' $(SRC)/_data/const.yml
	@echo " ... done"

###########################################
### Rules for getting from sketchometry ###
###########################################

libs: sketchofont sketchostyles html_libraries
	@echo "Got libs from sketchometry"

html_libraries: jquery mathjax bootstrap
	@echo -n "Copy library extensions"
	@rm -rf $(FROM_SKETCHOMETRY)/extend_externa/
	@cp -r $(SKETCHOMETRY)/distrib/ext/extend_externa $(FROM_SKETCHOMETRY)/extend_externa
	@echo " ... done"

jquery:
	@echo -n  "Copy jQuery"
	@rm -rf $(ASSETS)/jquery/
	@cp -r $(SKETCHOMETRY)/distrib/ext/jquery $(ASSETS)/jquery
	@echo " ... done"

mathjax:
	@echo -n  "Copy MathJax"
	@rm -rf $(ASSETS)/mathjax/
	@cp -r $(SKETCHOMETRY)/distrib/ext/mathjax $(ASSETS)/mathjax
	@echo " ... done"

bootstrap:
	@echo -n  "Copy Bootstrap"
	@rm -rf $(ASSETS)/bootstrap/
	@cp -r $(SKETCHOMETRY)/distrib/ext/bootstrap $(ASSETS)/bootstrap
	@echo " ... done"

sketchostyles:
	@echo -n  "Copy SketchoStyles"
	@cp -rf $(SKETCHOMETRY)/distrib/SketchoStyles.css* $(FROM_SKETCHOMETRY)/
	@echo " ... done"

sketchofont:
	@echo -n  "Copy SketchoFont"
	@cp -rf $(SKETCHOMETRY)/distrib/SketchoFont.css* $(FROM_SKETCHOMETRY)/
	@echo " ... done"

########################################
### Rules for adapting release files ###
########################################

releasenotes:
	@echo -n "Copy release notes"
	@cp -rf $(SKETCHOMETRY)/RELEASE_DE.md $(SRC)/de/versionen/_list.section.md
	@cp -rf $(SKETCHOMETRY)/RELEASE_EN.md $(SRC)/en/versions/_list.section.md
	@echo " ... done"

########################
### Rules for upload ###
########################

upload:
	@echo "Start uploading"
	@scp -r distrib/ root@132.180.10.7:/net/httpd/htdocs/sketchometry/home.new
	@echo "... successful"
	@echo "Link new version to sketchometry.org and link sketchometry.org/download and app.sketchometry.org"
	@ssh root@132.180.10.7 "\
    	cd /net/httpd/htdocs/sketchometry/; \
    	rm -r home.old; mv home home.old; mv home.new home; \
    	rm -r app; ln -s ./home/app/ app; \
        cd /net/httpd/htdocs/sketchometry/home/; ln -s ../versions/download/ download; \
    "
	@echo "... done"

###################################
### Rules for combinated making ###
###################################

website: libs build

websitelocal: versionwrite build

websiteversion: versionread versionwrite build

release: version libs releasenotes build

build:
	@echo "Build via jekyll"
	@jekyll build
	@echo " ... done"

dev:
	@jekyll serve -l

version-git:
	@git commit -a -q -m "Release of version v$(VERSION)"
	@git push -q

version-git-tag: version-git
	@git tag v$(VERSION)
	@git push origin v$(VERSION) -q

#######################
### Rules for tests ###
#######################
