#!/bin/bash

# Functions
function separator () {
    printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
}

function packageVersion () {
    node -p -e "require('./package.json').version"
}

function checkGitBranch () {
    local GIT_BRANCH=`git name-rev --name-only HEAD`
    local DEV_BRANCH="development"

    if [ "$GIT_BRANCH" != "$DEV_BRANCH" ]
    then
        separator
        echo "ERROR"
        separator

        echo "A Release starts from $DEV_BRANCH!"
        echo "You are inside branch: $GIT_BRANCH"
        echo "Please checkout $DEV_BRANCH first!"
        separator
        exit 1
    fi
}

function validateReleaseNum () {
    local BRANCH_REGEX="^[0-9]+\.[0-9]+\.[0-9]+$"

    if [ "$1" == "$(packageVersion)" ]
    then
        separator
        echo "ERROR"
        echo "Version $1 already in place"
        separator
        exit 1
    fi

    if [[ ! $1 =~ $BRANCH_REGEX ]];
    then
        separator
        echo "ERROR"
        echo "Version $1 must respect form <0-9>.<0-9>.<0-9>"
        separator
        exit 1
    fi

    if [[ "$1" < "$(packageVersion)" ]]
    then
        separator
        echo "ERROR"
        echo "Version $1 must be grater than current $(packageVersion)"
        separator
        exit 1
    fi

}

function notification () {
    local NAME=`node -p -e "require('./package.json').name"`
    if which osascript >/dev/null; then
        osascript -e "display notification \"$1\" with title \"$NAME\""
    fi
}

 Execution

START_V=$(packageVersion)

checkGitBranch

separator
echo "RELEASE START: civa86.github.io"
separator

echo "CURRENT PACKAGE VERSION: $(packageVersion)"
echo "NEW RELEASE NUMBER: "
read RELEASE_NUM

validateReleaseNum $RELEASE_NUM

separator
echo "App distribution"
separator

echo "Bump Package Version: $RELEASE_NUM"
npm --no-git-tag-version version $RELEASE_NUM

npm install

npm run dist || { echo "App distribution failed"; exit 1; }

separator
echo "Everything seems ok!"
echo "Do you want to promote version $RELEASE_NUM ? (y/n)"
read DO_RELEASE

if [ "$DO_RELEASE" == "y" ]
then
    separator
    echo "Git Branch Release"
    separator

    git add .
    git commit -m "build $RELEASE_NUM"

    git checkout -b release/v$RELEASE_NUM
    git tag v$RELEASE_NUM
    git push origin --tags release/v$RELEASE_NUM:release/v$RELEASE_NUM

    git checkout development
    git push origin development:development

    separator
    echo "RELEASE END"
    separator

    notification "Release v$RELEASE_NUM Released"
else
    echo "Reverting Package Version: $START_V"

    npm --no-git-tag-version version $START_V

    echo "Nothing more to do! See you soon"

    separator
    echo "RELEASE ABORTED"
    separator

    notification "Release v$RELEASE_NUM Aborted"
fi
