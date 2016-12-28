import { TextEditor, window, ExtensionContext, commands } from 'vscode';
const faker = require('faker');
import { Address } from './address';
import { Commerce } from './commerce';
import { Company } from './company';

const address = new Address();
const commerce = new Commerce();
const company = new Company();

export function activate(context: ExtensionContext) {
  context.subscriptions.push(commands.registerCommand('extension.fakerAddress', () => {
    window
      .showQuickPick(address.getMethods())
      .then((selectedMethod) => {
        let value = faker[address.getName()][selectedMethod]();
        insertText(getEditor(), value);
      });
  }));
}

export function deactivate() {
}

/**
 * Get vscode active editor
 */
function getEditor(): TextEditor {
  var editor = window.activeTextEditor;
  if (!editor) {
    return;
  }

  return editor;
}

/**
 * Insert text in editor
 */
function insertText(editor: TextEditor, text: string) {
  const position = editor.selection.active;

  editor.edit(function(editBuilder) {
    editBuilder.insert(position, text);
  });
}

function executeFaker(name, methods) {
  window
    .showQuickPick(methods)
    .then((selectedMethod) => {
      let generatedValue = faker[name][selectedMethod]();
      insertText(getEditor(), generatedValue);
    });
}