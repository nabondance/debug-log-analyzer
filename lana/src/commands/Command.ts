/*
 * Copyright (c) 2020 FinancialForce.com, inc. All rights reserved.
 */

import { commands } from 'vscode';
import { Context } from '../Context';

export class Command {
  private static commandPrefix = 'lana.';

  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  run: (...args: any[]) => any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(name: string, run: (...args: any[]) => any) {
    this.name = name;
    this.run = run;
  }

  register(c: Context): Command {
    const fullName = Command.commandPrefix + this.name;
    const command = commands.registerCommand(fullName, this.run);
    c.context.subscriptions.push(command);
    return this;
  }
}
