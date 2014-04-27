#!/bin/bash
now=$(date +"%d/%m/%Y %H:%M")
git commit -am "new build $now"
TEMP=$(mktemp -d -t build-XXX)
cp -R dist ${TEMP}
git checkout gh-pages
rm -rf *
cp -R ${TEMP}/dist/* .
git add . --all
git commit -am "updated build $now" --allow-empty
git push origin gh-pages
git checkout jekyll