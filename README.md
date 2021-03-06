# eslint-config-wondermonger

Opinionated ESLint configuration for [@wondermonger](https://gitlab.com/wondermonger) projects.

## Installation

#### Peer Dependencies

- [ESLint](http://eslint.org/)
- [Prettier](https://github.com/prettier/prettier)
- [babel-eslint](https://github.com/babel/babel-eslint)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)

```shell
npm i --save-dev eslint-config-wondermonger \
  babel-eslint \
  eslint \
  eslint-plugin-import \
  eslint-plugin-node \
  eslint-plugin-prettier \
  eslint-plugin-promise \
  eslint-plugin-standard \
  prettier
```

## Usage

Create a file named `.eslintrc` in your project's root directory that contains the following:

```json
{
  "extends": "wondermonger"
}
```

## Available Configurations

### `wondermonger`

- Extends and (heavily) modifies [StandardJS](http://standardjs.com/rules.html).
- Uses [Prettier](https://github.com/prettier/prettier) for code formatting rules and fixes.
- Built for linting ES modules.

### `wondermonger/lib/script`

- Extends and (barely) modifies the base `wondermonger` configuration.
- Built for linting CommonJS modules.

## Rules

- [Documentation for Rules and Configuration](https://gitlab.com/wondermonger/eslint-config-wondermonger/tree/master/docs/rules)

## License

The MIT License (MIT)

Copyright (c) 2016-2019 Michael J. Bondra <mjbondra@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
