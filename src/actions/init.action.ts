import path from 'path';
import { AbstractAction } from "./abstract.action";
import { InitCmd } from "../commands";
import { writeTpl } from '../utils/operation';

interface DownloadDataProps {
  tpl: string;
  url: string;
}

export class InitAction extends AbstractAction {
  public handle = async (inputs: InitCmd) => {
    const { options } = inputs;
  }
}