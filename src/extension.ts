import { TextEditor, window, ExtensionContext, commands } from 'vscode';
import { FakerEntity, Address, Commerce, Company, Date, Finance,
  Hacker, Helpers, Image } from './entity';
const faker = require('faker');

const address = new Address();
const commerce = new Commerce();
const company = new Company();
const date = new Date();
const finance = new Finance();
const hacker = new Hacker();
const helpers = new Helpers();
const image = new Image();

export function activate(context: ExtensionContext) {
  context.subscriptions.push(commands.registerCommand('extension.fakerAddress', () => {
    executeFaker(address);
  }));

  context.subscriptions.push(commands.registerCommand('extension.fakerCommerce', () => {
    executeFaker(commerce);
  }));

  context.subscriptions.push(commands.registerCommand('extension.fakerCompany', () => {
    executeFaker(company);
  }));

  context.subscriptions.push(commands.registerCommand('extension.fakerDate', () => {
    executeFaker(date);
  }));

  context.subscriptions.push(commands.registerCommand('extension.fakerFinance', () => {
    executeFaker(finance);
  }));

  context.subscriptions.push(commands.registerCommand('extension.fakerHacker', () => {
    executeFaker(hacker);
  }));

  context.subscriptions.push(commands.registerCommand('extension.fakerHelpers', () => {
    executeFaker(helpers);
  }));

  context.subscriptions.push(commands.registerCommand('extension.fakerImage', () => {
    executeFaker(image);
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

function executeFaker(fakerEntity: FakerEntity) {
  window
    .showQuickPick(fakerEntity.getMethods())
    .then((selectedMethod) => {
      let generatedValue = faker[fakerEntity.getName()][selectedMethod]();
      insertText(getEditor(), generatedValue);
    });
}