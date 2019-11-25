# Cronkr
[![npm version](https://img.shields.io/npm/v/cronkr.svg?style=flat-square)](https://www.npmjs.org/package/cronkr)
[![install size](https://packagephobia.now.sh/badge?p=cronkr)](https://packagephobia.now.sh/result?p=cronkr)

Translate cron expression into Korean language

## Installing
Using npm:
```bash
$ npm install cronkr
```

## Example
```js
const cronkr = require('cronkr');

const result = cronkr.desc('0 0 12 * * ?'); // result: 매일 12시 0분 0초
const invalid = cronkr.desc('Invalid cron expression') // result: null
```
