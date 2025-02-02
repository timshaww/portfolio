#!/usr/bin/env sh

# abort on errors
set -e

# build the project
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# ensure the CNAME file exists
echo 'www.timothy-shaw.com' > CNAME

# deploy using gh-pages
cd ..
gh-pages -b gh-pages -d dist

echo "Deployed successfully!"
