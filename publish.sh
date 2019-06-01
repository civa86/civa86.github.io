#!/bin/bash

GH_REF="`node -p -e "require('./package.json').repository.url.replace('https://', '').trim()"`"
PACKAGE_VERSION=`node -p -e "require('./package.json').version"`

echo "/***** APPLICATION DISTRIBUTION ****/"
npm run build || { echo 'APPLICATION DISTRIBUTION: failed'; exit 1; }

echo "/***** ENTER APPLICATION DIST DIRECTORY ****/"
cd build

echo "/***** CREATE TMP REPO TO PUBLISH ****/"
git init

git config user.name "Publish CI"
git config user.email "dario.civallero@gmail.com"
git add .

PUBLISH_TIME="`date -R`"

echo "/***** VERSION ****/"
echo "VERSION $PACKAGE_VERSION" > ./version.txt
echo "COMMIT $TRAVIS_COMMIT" >> ./version.txt
echo "BUILD BRANCH $TRAVIS_BRANCH" >> ./version.txt
echo "BUILD DATE $PUBLISH_TIME" >> ./version.txt

echo "/***** COMMIT ****/"
git commit -m "Publish version $PACKAGE_VERSION on $PUBLISH_TIME"

echo "/***** PUSHING $GH_REF ****/"
git push --force --quiet "https://${GITHUB_TOKEN}@$GH_REF" master:master > /dev/null 2>&1

echo "/***** CLEAN TMP REPO ****/"
rm -rf .git

echo "/***** FINISH ****/"
