# JSXGraph website

JSXGraph website at https://jsxgraph.org and https://jsxgraph.uni-bayreuth.de.

This site is realized via [jekyll](https://jekyllrb.com/).

# Build instructions

```
git clone https://github.com/jsxgraph/jsxgraph_website
cd jsxgraph_website
rbenv install 3.2.11
rbenv global 3.2.11
bundle install
bundle exec jekyll build
python -m http.server -d distrib
```
