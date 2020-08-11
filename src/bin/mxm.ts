#!/usr/bin/env node
import process from 'process';
import path from 'path';
import commander, { CommanderStatic } from 'commander';
import { CommandLoader } from '../commands';
import packInfo from '../../package.json';

const bootstrap = () => {
  const program: CommanderStatic = commander;
  console.log(path.join(process.cwd(), 'package.json'))
  program.version(packInfo.version, '-v, -V, --v, --V');
  CommandLoader.load(program);
  program.parse(process.argv);

  console.log('program.args', program.args);
  if (!program.args.length) {
    program.outputHelp();
  }
};

bootstrap();