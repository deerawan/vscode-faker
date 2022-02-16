import {
  TextEditor,
  window,
  ExtensionContext,
  commands,
  workspace,
  Range,
} from 'vscode';
import * as entity from './entity';
import { fakerFactory } from './faker-factory';

const address = new entity.Address();
const animal = new entity.Animal();
const commerce = new entity.Commerce();
const company = new entity.Company();
const database = new entity.Database();
const datatype = new entity.Datatype();
const date = new entity.Date();
const finance = new entity.Finance();
const git = new entity.Git();
const hacker = new entity.Hacker();
const image = new entity.Image();
const internet = new entity.Internet();
const lorem = new entity.Lorem();
const mersenne = new entity.Mersenne();
const music = new entity.Music();
const name = new entity.Name();
const phone = new entity.Phone();
const random = new entity.Random();
const system = new entity.System();
const time = new entity.Time();
const vehicle = new entity.Vehicle();

export async function activate(context: ExtensionContext) {
  const configLocale: string = workspace
    .getConfiguration('faker')
    .get('locale');

  const faker = await fakerFactory(configLocale);

  const fakerEntities = [
    address,
    animal,
    commerce,
    company,
    database,
    datatype,
    date,
    finance,
    git,
    hacker,
    image,
    internet,
    lorem,
    mersenne,
    music,
    name,
    phone,
    random,
    system,
    time,
    vehicle,
  ];

  for (const entity of fakerEntities) {
    const entityName = entity.getName();

    context.subscriptions.push(
      commands.registerCommand(`faker.${entityName}`, () =>
        executeFaker(faker, entity)
      )
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
function insertText(editor: TextEditor, generateFakeFn: () => string) {
  const { selections } = editor;

  editor.edit((editBuilder) => {
    selections.forEach((selection) => {
      const { start, end } = selection;
      const range = new Range(start, end);

      const value = generateFakeFn().toString();

      editBuilder.replace(range, value);
    });
  });
}

async function executeFaker(faker: any, fakerEntity: entity.FakerEntity) {
  const selectedMethod = await window.showQuickPick(fakerEntity.getMethods());

  if (!selectedMethod) {
    return;
  }

  const generateFakeFn = faker[fakerEntity.getName()][selectedMethod];
  insertText(getEditor(), generateFakeFn);
}
