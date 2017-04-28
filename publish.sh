#!/bin/bash

GH_REF="`node -p -e "require('./package.json').repository.url.replace('https://', '')"`"

echo "/***** APPLICATION DISTRIBUTION ****/"
npm run dist || { echo 'APPLICATION DISTRIBUTION: failed'; exit 1; }

echo "/***** ENTER APPLICATION DIST DIRECTORY ****/"
cd dist
echo `ls -al`

echo "/***** CREATE TMP REPO TO PUBLISH ****/"
git init

git config user.name "Publisher Bot"
git config user.email "dario.civallero@gmail.com"
git add .

echo "/***** COMMIT VERSION ****/"
PUBLISH_TIME="`date +'%Y-%m-%d %H:%M:%S'`"
git commit -m "[$PUBLISH_TIME] Publish website"

echo "/***** PUSHING $GH_REF ****/"
git push --force --quiet "https://${GHTK}@$GH_REF" master:production > /dev/null 2>&1

echo "/***** CLEAN TMP REPO ****/"
rm -rf .git

echo "/***** FINISH ****/"
