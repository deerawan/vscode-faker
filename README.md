# VSCode Faker
Generate fake data inside Visual Studio Code. Fake data is based on [Faker](https://github.com/marak/Faker.js).

## Installation
Type <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>p</kbd> to launch command palette and choose `Extensions: Install Extension`. Search **faker** and install.

## Usage

![vscode faker](https://raw.githubusercontent.com/deerawan/vscode-faker/master/images/vscode-faker.gif)

1. Type <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>p</kbd>
2. Choose fake data category
3. Choose sub category

### Supported Fake Data Category
- address
- commerce
- company
- date
- finance
- hacker
- image
- internet
- lorem
- name
- phone
- random
- system

## Change Locale

1. Open User Settings or press <kbd>cmd</kbd>+<kbd>,</kbd>
2. Insert `faker.locale`, followed by locale identifer as following

```
"faker.locale": "id_ID"
```

See [Supported locales](https://github.com/marak/Faker.js/#localization)

