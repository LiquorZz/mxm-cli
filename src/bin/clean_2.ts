#!/usr/bin/env node

import { exec } from 'child_process';

const clean_d_ts = 'find ./src/bin ./src/commands ./src/ui ./src/components -type f -name "*.d.ts" -delete';
const clean_ts_x = 'find ./src/actions ./src/bin ./src/commands ./src/ui ./src/components -type f -not -name "*.ts*" -delete';
const clean_index_js = 'find ./index.d.ts -delete';
const cleanObj = {
  clean_d_ts,
  clean_ts_x,
  clean_index_js
};
let shells = '';

const keyArr = Object.keys(cleanObj);
keyArr.forEach((key, index) => {
  shells += cleanObj[key];
  if (index !== keyArr.length - 1) {
    shells += ' & ';
  }
});

console.log(shells)

// exec(shells);


// exec('find ./bin ./commands ./ui ./components -type f -name "*.d.ts" -delete & find ./actions ./bin ./commands ./ui ./components -type f -not -name "*.ts*" -delete');
