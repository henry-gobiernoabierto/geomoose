#!/bin/bash

FAKE_USER_INCLUDES=0
USER_INCLUDES=../../../../site/includes.js
if [ -e $USER_INCLUDES ]
then
        # do nothing
        echo "Found User Includes."
else
        echo "User includes not found ... faking."
        FAKE_USER_INCLUDES=1
        touch $USER_INCLUDES
fi

./build.sh action=clean,release profile=geomoose2 version=2.6 releaseName=geomoose2.6

BUILD_DIR=../../../../build
RELEASE_DIR=../../release/geomoose2.6

echo "Moving files to build directory..."
mkdir -p $BUILD_DIR/dojo
cp $RELEASE_DIR/dojo/dojo.js $BUILD_DIR/dojo/dojo.js

mkdir -p $BUILD_DIR/dojo/nls
mkdir -p $BUILD_DIR/dojo/resources

cp -r $RELEASE_DIR/dojo/nls/* $BUILD_DIR/dojo/nls
cp -r $RELEASE_DIR/dojo/resources/* $BUILD_DIR/dojo/resources

mkdir -p $BUILD_DIR/dijit
cp -r $RELEASE_DIR/dijit/{themes,icons} $BUILD_DIR/dijit

echo "Done."

if [ $FAKE_USER_INCLUDES = 1 ]
then
        rm $USER_INCLUDES
fi
