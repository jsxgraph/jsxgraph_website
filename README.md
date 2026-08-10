# JSXGraph website

JSXGraph website at https://jsxgraph.org and https://jsxgraph.uni-bayreuth.de.

This site is realized via [jekyll](https://jekyllrb.com/).

# Build instructions

```
git clone https://github.com/jsxgraph/jsxgraph_website
cd jsxgraph_website
```

If there are problems with ruby try: 

```
# Install rbenv, see https://github.com/rbenv/rbenv

# Then:
rbenv install 3.2.11
rbenv global 3.2.11
```

For all:

```
bundle install
bundle exec jekyll build
python -m http.server -d distrib
```
