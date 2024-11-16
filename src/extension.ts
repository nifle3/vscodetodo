import * as vscode from 'vscode';

import {commands}  from './vscode/commands';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(...commands);
    console.log('Extensions start');
}

export function deactivate() {}
