import {
  TextEditor,
  window,
  ExtensionContext,
  commands,
  workspace,
} from 'vscode';
import * as entity from './entity';
const faker = require('faker');
const _ = require('lodash');

const address = new entity.Address();
const commerce = new entity.Commerce();
const company = new entity.Company();
const database = new entity.Database();
const date = new entity.Date();
const finance = new entity.Finance();
const hacker = new entity.Hacker();
const image = new entity.Image();
const internet = new entity.Internet();
const lorem = new entity.Lorem();
const name = new entity.Name();
const phone = new entity.Phone();
const random = new entity.Random();
const system = new entity.System();

export function activate(context: ExtensionContext) {
  faker.locale = workspace.getConfiguration('faker').get('locale');

  const fakerEntities = [
    address,
    commerce,
    company,
    database,
    date,
    finance,
    hacker,
    image,
    internet,
    lorem,
    name,
    phone,
    random,
    system,
  ];

  for (const entity of fakerEntities) {
    const entityName = entity.getName();
    context.subscriptions.push(
      commands.registerCommand(`faker.${entityName}`, () => {
        executeFaker(entity);
      })
    );
  }
}

export function deactivate() {}

/**
 * Get vscode active editor
 */
function getEditor(): TextEditor {
  const editor = window.activeTextEditor;
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

function executeFaker(fakerEntity: entity.FakerEntity) {
  window.showQuickPick(fakerEntity.getMethods()).then(selectedMethod => {
    const generatedValue = faker[fakerEntity.getName()][selectedMethod]();
    insertText(getEditor(), generatedValue);
  });
}
