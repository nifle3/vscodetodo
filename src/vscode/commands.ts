import * as vscode from 'vscode';
import startCommand from './commands/start';
import closeCommand from './commands/close';
import addCommand from './commands/add';
import deleteCommand from './commands/delete';
import saveCommand from './commands/save';
import completeCommand from './commands/complete';
import restartCommand from './commands/restart';


export const commands: vscode.Disposable[] = [
    vscode.commands.registerCommand('nifle3todocode.start', startCommand),
    vscode.commands.registerCommand('nifle3todocode.close', closeCommand),
    vscode.commands.registerCommand('nifle3todocode.add', addCommand),
    vscode.commands.registerCommand('nifle3todocode.delete', deleteCommand),
    vscode.commands.registerCommand('nifle3todocode.save', saveCommand),
    vscode.commands.registerCommand('nifle3todocode.complete', completeCommand),
    vscode.commands.registerCommand('nifle3todocode.restart', restartCommand),
];
