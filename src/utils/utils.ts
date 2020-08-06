import fs from 'fs';
// import mkdirp from 'mkdirp';
import glob from 'globby';
import path from 'path';

// remove same name js
export const removeSameNameJs = (f: string) => {
  if (!f.match(/\.tsx?$/) || f.endsWith('.d.ts')) {
    return;
  }

  const jf = f.replace(/tsx?$/, 'js');
  if (fs.existsSync(jf)) {
    fs.unlinkSync(jf);
    return jf;
  }
  return false;
}

// remove *.d.ts
export const removeDts = (f: string) => {
  if (!f.endsWith('.d.ts')) {
    return;
  }

  const jf = f;
  if (fs.existsSync(jf)) {
    fs.unlinkSync(jf);
    return jf;
  }
  return false;
}

// clean same name js/ts
export const cleanJs = (cwd: string) => {
  const jsFileList: string[] = [];
  const dtsFileList: string[] = [];
  glob
    .sync(['**/*.ts', '**/*.tsx', '**/*.d.ts', '!**/node_modules', '!src/utils.js'], { cwd })
    .forEach(f => {
      console.log(f);
      let jf = removeSameNameJs(path.resolve(cwd, f));
      if (jf) {
        jsFileList.push(path.relative(cwd, jf));
      }
    });

  if (jsFileList.length) {
    console.info('These file was deleted because the same name ts file was exist!\n');
    console.info('  ' + jsFileList.join('\n  ') + '\n');
  }
}

export const cleanDts = (cwd: string) => {
  const jsFileList: string[] = [];
  const dtsFileList: string[] = [];
  glob
    .sync(['**/*.d.ts', '!**/node_modules'], { cwd })
    .forEach(f => {
      console.log(f);
      const jf = removeDts(path.resolve(cwd, f));
      if (jf) {
        dtsFileList.push(path.relative(cwd, jf))
      }
    });

  if (dtsFileList.length) {
    console.info('These file was deleted!\n');
    console.info('  ' + dtsFileList.join('\n  ') + '\n');
  }
}