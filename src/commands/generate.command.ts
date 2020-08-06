import { Command, CommanderStatic } from "commander";
import { AbstractCommand } from "./abstract.command";
import { GenerateCmd } from "./command.input";

export default class GenerateCommand extends AbstractCommand {
  public load(program: CommanderStatic) {
    program
      .command("generate")
      .alias("g")
      .description("Generate react/* template in the current path, default rfredux tsx file, example: mxm init")
      .option("-f, --framework [framework]", "use framework, default react, [react, vue]")
      .option("-j, --jsx", "use jsx tpl")
      .option("-rcc, --rcc", "use jsx react class component tpl")
      .option("-rfc, --rfc", "use jsx react function component tpl")
      .option("-rcredux, --rcredux", "use jsx react class redux component tpl")
      .option("-rfredux, --rfredux", "use jsx react class function component tpl")
      .option("-f, --fileName [name]", "default:index write file name")
      .action(async (command: Command) => {
        const frameworkList = ['react', 'vue'];
        const tplList = ['rcc', 'rfc', 'rcredux', 'rfredux'];
        const langList = ['jsx'];
        const fileName = command.fileName || 'index';
        let tpl = 'rfredux';
        let lang = 'tsx';
        let framework = 'react';
        frameworkList.forEach(key => {
          if (command.framework === key) {
            framework = key;
          }
        });
        tplList.forEach(key => {
          if (command[key]) {
            tpl = key;
          }
        });
        langList.forEach(key => {
          if (command[key]) {
            lang = key;
          }
        });
        const options = { tpl, lang, fileName, framework };
        await this.action.handle({ options });
      });
  }
}
