#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

yarn run docs:build

cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ajn404/ngm.github.io.git master

cd -