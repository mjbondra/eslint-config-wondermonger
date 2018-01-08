# eslint-config-wondermonger

[![pipeline status](https://gitlab.com/wondermonger/eslint-config-wondermonger/badges/v2.0.2/pipeline.svg)](https://gitlab.com/wondermonger/eslint-config-wondermonger/pipelines/15891593) [![coverage report](https://gitlab.com/wondermonger/eslint-config-wondermonger/badges/v2.0.2/coverage.svg)](https://wondermonger.gitlab.io/-/eslint-config-wondermonger/-/jobs/47036627/artifacts/coverage/index.html)

Opinionated ESLint configuration for [@wondermonger](https://gitlab.com/wondermonger) projects.

## Installation

```shell
yarn add -D eslint-config-wondermonger
```

#### Peer Dependencies

- [ESLint](http://eslint.org/)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)

```shell
yarn add -D eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
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
- Built for linting ES modules.

### `wondermonger/lib/script`

- Extends and (barely) modifies the base `wondermonger` configuration.
- Built for linting CommonJS modules.

## Rules

- [Documentation for Rules and Configuration](https://gitlab.com/wondermonger/eslint-config-wondermonger/tree/master/docs/rules)

## License

The MIT License (MIT)

Copyright (c) 2016-2017 Michael J. Bondra <mjbondra@gmail.com>

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
