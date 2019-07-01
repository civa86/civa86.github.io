#!/bin/bash

PACKAGE_VERSION=`node -p -e "require('./package.json').version"`
PUBLISH_TIME="`date +'%Y-%m-%d %H:%M:%S'`"

cd build

echo "/***** VERSION.TXT ****/"

echo "VERSION $PACKAGE_VERSION" > ./version.txt
echo "COMMIT $TRAVIS_COMMIT" >> ./version.txt
echo "BUILD BRANCH $TRAVIS_BRANCH" >> ./version.txt
echo "BUILD DATE $PUBLISH_TIME" >> ./version.txt

echo "`cat ./version.txt`"
