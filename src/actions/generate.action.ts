import path from 'path';
import { AbstractAction } from "./abstract.action";
import { InitCmd } from "../commands";
import { writeTpl } from '../utils/operation';

interface DownloadDataProps {
  tpl: string;
  url: string;
}

export class GenerateAction extends AbstractAction {
  public handle = async (inputs: InitCmd) => {
    const { options } = inputs;
    const { framework } = options;
    const data: DownloadDataProps = {
      tpl: options.tpl,
      url: '',
    };
    if (framework === 'vue') {
      console.log('no vue templates! sorry!!!');
      return;
    }
    const frameworkPath = framework;
    const langPath = options.lang;
    const tplPath = `${options.tpl}.${langPath}`;
    const url = path.resolve(__dirname, '../templates', frameworkPath, langPath, tplPath);

    data.url = url;
    const toUrl = `${process.cwd()}/${options.fileName}`;
    writeTpl(data.url, toUrl);
  }
}