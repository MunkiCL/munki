#!/bin/bash
now=$(date +"%d/%m/%Y %H:%M")
git add -f dist
git commit -am "new build $now"
git checkout gh-pages
rm -rf _config.yml _site blog images index.html jekyll munki/
git checkout jekyll -- dist
mv dist/* .
rm -rf dist
touch .gitignore
echo "node_modules" > .gitignore
git add . --all
git commit -am "updated build $now"
git push origin gh-pages
git checkout jekyll