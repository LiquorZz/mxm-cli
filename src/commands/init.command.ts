import { Command, CommanderStatic } from "commander";
import { AbstractCommand } from "./abstract.command";
import { InitCmd } from "./command.input";

export class InitCommand extends AbstractCommand {
  public load(program: CommanderStatic) {
    program
      .command("init")
      .alias("i")
      .description("Init react/* template in the current path, default rfredux tsx file, example: mxm init")
      .action(async (command: Command) => {

      });
  }
}