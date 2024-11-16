import * as vscode from "vscode";

let currentPanel: undefined | vscode.WebviewPanel  = undefined;

export default function startCommand() {
    const columnToShowIn = vscode.window.activeTextEditor
    ? vscode.window.activeTextEditor.viewColumn
    : undefined;

    if (currentPanel !== undefined) {
        currentPanel.reveal(columnToShowIn);
        return;
    }

    currentPanel  = vscode.window.createWebviewPanel(
        "todo",
        "todo",
        columnToShowIn || vscode.ViewColumn.One,
        {},
    );

    currentPanel .webview.html = html;
    currentPanel.onDidDispose(
        () => {
            currentPanel = undefined;
        },
        null,
    );
}

const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cat Coding</title>
        </head>
        <body>
            <div id="app">
            </div>
        </body>
    </html>
`;