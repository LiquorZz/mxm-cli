import { Input, InitCmd } from "../commands";


export abstract class AbstractAction {
  public abstract async handle(
    inputs?: InitCmd,
    options?: Input[]
  ): Promise<void>;
}