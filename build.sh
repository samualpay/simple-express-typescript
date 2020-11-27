rm -rf ./dist
tsc -p .
cp -R ./src/views ./dist/views
cp -R ./src/public ./dist/public