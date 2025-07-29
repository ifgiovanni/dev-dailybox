// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ulid } from 'ulid';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.commands.registerCommand('ulid.generate', () => {
    const id = ulid().toLocaleLowerCase();
    const editor = vscode.window.activeTextEditor;

    if (editor) {
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, id);
      });
    }

    vscode.window.showInformationMessage(`New ULID generated: ${id}`);
  });

  const disposable2 = vscode.commands.registerCommand('ulid.replacePlaceholders', () => {
    const editor = vscode.window.activeTextEditor;

    if (!editor) return;

    const document = editor.document;
    const selection = editor.selection;
    const range = selection.isEmpty
      ? new vscode.Range(0, 0, document.lineCount, 0)
      : selection;

    const text = document.getText(range);

    const regex = /\b_ulid(\d+)\b/g;
    const matches = Array.from(text.matchAll(regex));

    const ulidMap = new Map<string, string>();

    for (const match of matches) {
      const key = match[0];
      if (!ulidMap.has(key)) {
        ulidMap.set(key, ulid().toLocaleLowerCase());
      }
    }

    const replacedText = text.replace(regex, (match) => {
      return ulidMap.get(match) ?? match;
    });

    editor.edit(editBuilder => {
      editBuilder.replace(range, replacedText);
    });

    vscode.window.showInformationMessage("ULID placeholders replaced successfully.");
  });

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable2);
}


// This method is called when your extension is deactivated
export function deactivate() {}
