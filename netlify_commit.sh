#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m 'deploy netlify dev'

git push -f git@github.com:ajn404/ngm.github.io.git netlify_dev