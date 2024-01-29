#!/bin/bash

set -e

cd backend

# start bun
PORT=3333 bun --hot --inspect run src/index.ts
