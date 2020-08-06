#!/usr/bin/env node
import process from 'process';
import path from 'path';
import commander, { CommanderStatic } from 'commander';
import { CommandLoader } from '../commands';

const bootstrap = () => {
  const program: CommanderStatic = commander;
  program.version(require(path.join(process.cwd(), 'package.json')).version, '-v, -V, --v, --V');
  CommandLoader.load(program);
  program.parse(process.argv);

  console.log('program.args', program.args);
  if (!program.args.length) {
    program.outputHelp();
  }
};

bootstrap();