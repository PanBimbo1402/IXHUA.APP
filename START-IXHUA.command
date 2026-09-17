#!/bin/sh
cd -- "$(dirname -- "$0")" || exit 1
if ! command -v node >/dev/null 2>&1; then
  echo 'Install Node.js 22+ from https://nodejs.org/en/download, then run START-IXHUA again.'
  exit 1
fi
exec node scripts/start-ixhua.cjs "$@"
