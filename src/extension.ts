import { TextEditor, window, ExtensionContext, commands } from 'vscode';
import * as entity from './entity';
const faker = require('faker');
const _ = require('lodash');

const address = new entity.Address();
const commerce = new entity.Commerce();
const company = new entity.Company();
const date = new entity.Date();
const finance = new entity.Finance();
const hacker = new entity.Hacker();
const helpers = new entity.Helpers();
const image = new entity.Image();
const internet = new entity.Internet();
const lorem = new entity.Lorem();
const name = new entity.Name();
const phone = new entity.Phone();
const random = new entity.Random();
const system = new entity.System();

export function activate(context: ExtensionContext) {
  let fakerEntities = [address, commerce, company, date, finance,
    hacker, helpers, image, internet, lorem, name, phone, random, system];

  for (let entity of fakerEntities) {
    let capitalizedEntityName = _.capitalize(entity.getName());
    context.subscriptions.push(commands.registerCommand(`extension.faker${capitalizedEntityName}`, () => {
      executeFaker(entity);
    }));
  }
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

function executeFaker(fakerEntity: entity.FakerEntity) {
  window
    .showQuickPick(fakerEntity.getMethods())
    .then((selectedMethod) => {
      let generatedValue = faker[fakerEntity.getName()][selectedMethod]();
      insertText(getEditor(), generatedValue);
    });
}