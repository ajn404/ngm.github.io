#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m 'deploy'

git push -f git@github.com:ajn404/ngm.github.io.git main