#!/usr/bin/env bash
#
# @ date: 2023.07.27 17:19
#

set -u
set -e

if [[ $1 == "install" ]] ; then
  cd website && yarn $1
elif [[ $1 == "start" ]] ; then
  cd website && npm run serve
#  cd website && yarn start
else
  cd website && npm run $1
#  cd website && yarn $1
fi

