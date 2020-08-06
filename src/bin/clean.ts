// import { cleanJs } from '../utils';

// class CleanCommand implements SubCommand {
//   description = 'Clean js file while it has the same name ts/tsx file';

//   async run(_, { cwd }: SubCommandOption)process.cwd {
//     cleanJs(cwd);
//   }
// }

// export default new CleanCommand();
import { cleanJs, cleanDts } from '../utils/utils';
import process from 'process';

cleanJs(process.cwd());
cleanDts(process.cwd());
