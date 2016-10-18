#!/usr/bin/env bash
NODE_ENV=production node bootstrap/app.js | ./node_modules/.bin/bunyan
