import { CommanderStatic } from "commander";
import { InitAction, GenerateAction } from "../actions";
import { InitCommand } from "./init.command";
import GenerateCommand from './generate.command';

export class CommandLoader {
  public static load(program: CommanderStatic): void {
    new InitCommand(new InitAction()).load(program);
    new GenerateCommand(new GenerateAction()).load(program);
  }
}