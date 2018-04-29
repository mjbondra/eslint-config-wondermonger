# Rules

Listed below are the rules and configuration for `eslint-config-wondermonger`.

Global `'use strict';` is required when using `eslint-config-wondermonger/lib/script`.

## Table of Contents

1. [accessor-pairs](#accessor-pairs)
1. [array-callback-return](#array-callback-return)
1. [arrow-body-style](#arrow-body-style)
1. [arrow-spacing](#arrow-spacing)
1. [block-spacing](#block-spacing)
1. [brace-style](#brace-style)
1. [camelcase](#camelcase)
1. [class-methods-use-this](#class-methods-use-this)
1. [comma-dangle](#comma-dangle)
1. [comma-spacing](#comma-spacing)
1. [comma-style](#comma-style)
1. [consistent-return](#consistent-return)
1. [constructor-super](#constructor-super)
1. [curly](#curly)
1. [default-case](#default-case)
1. [dot-location](#dot-location)
1. [dot-notation](#dot-notation)
1. [eol-last](#eol-last)
1. [eqeqeq](#eqeqeq)
1. [func-call-spacing](#func-call-spacing)
1. [func-style](#func-style)
1. [generator-star-spacing](#generator-star-spacing)
1. [global-require](#global-require)
1. [guard-for-in](#guard-for-in)
1. [handle-callback-err](#handle-callback-err)
1. [import/export](#importexport)
1. [import/first](#importfirst)
1. [import/newline-after-import](#importnewline-after-import)
1. [import/no-amd](#importno-amd)
1. [import/no-duplicates](#importno-duplicates)
1. [import/no-mutable-exports](#importno-mutable-exports)
1. [import/no-named-as-default](#importno-named-as-default)
1. [import/no-named-as-default-member](#importno-named-as-default-member)
1. [import/no-unresolved](#importno-unresolved)
1. [import/no-webpack-loader-syntax](#importno-webpack-loader-syntax)
1. [import/prefer-default-export](#importprefer-default-export)
1. [indent](#indent)
1. [key-spacing](#key-spacing)
1. [keyword-spacing](#keyword-spacing)
1. [linebreak-style](#linebreak-style)
1. [max-len](#max-len)
1. [new-cap](#new-cap)
1. [new-parens](#new-parens)
1. [newline-per-chained-call](#newline-per-chained-call)
1. [no-alert](#no-alert)
1. [no-array-constructor](#no-array-constructor)
1. [no-caller](#no-caller)
1. [no-case-declarations](#no-case-declarations)
1. [no-class-assign](#no-class-assign)
1. [no-compare-neg-zero](#no-compare-neg-zero)
1. [no-cond-assign](#no-cond-assign)
1. [no-console](#no-console)
1. [no-const-assign](#no-const-assign)
1. [no-constant-condition](#no-constant-condition)
1. [no-continue](#no-continue)
1. [no-control-regex](#no-control-regex)
1. [no-debugger](#no-debugger)
1. [no-delete-var](#no-delete-var)
1. [no-dupe-args](#no-dupe-args)
1. [no-dupe-class-members](#no-dupe-class-members)
1. [no-dupe-keys](#no-dupe-keys)
1. [no-duplicate-case](#no-duplicate-case)
1. [no-else-return](#no-else-return)
1. [no-empty](#no-empty)
1. [no-empty-character-class](#no-empty-character-class)
1. [no-empty-function](#no-empty-function)
1. [no-empty-pattern](#no-empty-pattern)
1. [no-eval](#no-eval)
1. [no-ex-assign](#no-ex-assign)
1. [no-extend-native](#no-extend-native)
1. [no-extra-bind](#no-extra-bind)
1. [no-extra-boolean-cast](#no-extra-boolean-cast)
1. [no-extra-parens](#no-extra-parens)
1. [no-extra-semi](#no-extra-semi)
1. [no-fallthrough](#no-fallthrough)
1. [no-floating-decimal](#no-floating-decimal)
1. [no-func-assign](#no-func-assign)
1. [no-global-assign](#no-global-assign)
1. [no-implied-eval](#no-implied-eval)
1. [no-inner-declarations](#no-inner-declarations)
1. [no-invalid-regexp](#no-invalid-regexp)
1. [no-irregular-whitespace](#no-irregular-whitespace)
1. [no-iterator](#no-iterator)
1. [no-label-var](#no-label-var)
1. [no-labels](#no-labels)
1. [no-lone-blocks](#no-lone-blocks)
1. [no-lonely-if](#no-lonely-if)
1. [no-loop-func](#no-loop-func)
1. [no-mixed-operators](#no-mixed-operators)
1. [no-mixed-spaces-and-tabs](#no-mixed-spaces-and-tabs)
1. [no-multi-spaces](#no-multi-spaces)
1. [no-multi-str](#no-multi-str)
1. [no-multiple-empty-lines](#no-multiple-empty-lines)
1. [no-negated-in-lhs](#no-negated-in-lhs)
1. [no-nested-ternary](#no-nested-ternary)
1. [no-new](#no-new)
1. [no-new-func](#no-new-func)
1. [no-new-object](#no-new-object)
1. [no-new-require](#no-new-require)
1. [no-new-symbol](#no-new-symbol)
1. [no-new-wrappers](#no-new-wrappers)
1. [no-obj-calls](#no-obj-calls)
1. [no-octal](#no-octal)
1. [no-octal-escape](#no-octal-escape)
1. [no-param-reassign](#no-param-reassign)
1. [no-path-concat](#no-path-concat)
1. [no-proto](#no-proto)
1. [no-prototype-builtins](#no-prototype-builtins)
1. [no-redeclare](#no-redeclare)
1. [no-regex-spaces](#no-regex-spaces)
1. [no-return-assign](#no-return-assign)
1. [no-return-await](#no-return-await)
1. [no-script-url](#no-script-url)
1. [no-self-assign](#no-self-assign)
1. [no-self-compare](#no-self-compare)
1. [no-sequences](#no-sequences)
1. [no-shadow](#no-shadow)
1. [no-shadow-restricted-names](#no-shadow-restricted-names)
1. [no-sparse-arrays](#no-sparse-arrays)
1. [no-tabs](#no-tabs)
1. [no-template-curly-in-string](#no-template-curly-in-string)
1. [no-this-before-super](#no-this-before-super)
1. [no-throw-literal](#no-throw-literal)
1. [no-trailing-spaces](#no-trailing-spaces)
1. [no-undef](#no-undef)
1. [no-undef-init](#no-undef-init)
1. [no-underscore-dangle](#no-underscore-dangle)
1. [no-unexpected-multiline](#no-unexpected-multiline)
1. [no-unmodified-loop-condition](#no-unmodified-loop-condition)
1. [no-unneeded-ternary](#no-unneeded-ternary)
1. [no-unreachable](#no-unreachable)
1. [no-unsafe-finally](#no-unsafe-finally)
1. [no-unsafe-negation](#no-unsafe-negation)
1. [no-unused-expressions](#no-unused-expressions)
1. [no-unused-vars](#no-unused-vars)
1. [no-use-before-define](#no-use-before-define)
1. [no-useless-call](#no-useless-call)
1. [no-useless-computed-key](#no-useless-computed-key)
1. [no-useless-concat](#no-useless-concat)
1. [no-useless-constructor](#no-useless-constructor)
1. [no-useless-escape](#no-useless-escape)
1. [no-useless-rename](#no-useless-rename)
1. [no-useless-return](#no-useless-return)
1. [no-var](#no-var)
1. [no-void](#no-void)
1. [no-whitespace-before-property](#no-whitespace-before-property)
1. [no-with](#no-with)
1. [node/no-deprecated-api](#nodeno-deprecated-api)
1. [node/process-exit-as-throw](#nodeprocess-exit-as-throw)
1. [object-property-newline](#object-property-newline)
1. [one-var](#one-var)
1. [operator-assignment](#operator-assignment)
1. [operator-linebreak](#operator-linebreak)
1. [padded-blocks](#padded-blocks)
1. [prefer-const](#prefer-const)
1. [prefer-promise-reject-errors](#prefer-promise-reject-errors)
1. [prefer-rest-params](#prefer-rest-params)
1. [prefer-spread](#prefer-spread)
1. [prefer-template](#prefer-template)
1. [promise/always-return](#promisealways-return)
1. [promise/catch-or-return](#promisecatch-or-return)
1. [promise/param-names](#promiseparam-names)
1. [quote-props](#quote-props)
1. [quotes](#quotes)
1. [radix](#radix)
1. [require-yield](#require-yield)
1. [rest-spread-spacing](#rest-spread-spacing)
1. [semi](#semi)
1. [semi-spacing](#semi-spacing)
1. [space-before-blocks](#space-before-blocks)
1. [space-before-function-paren](#space-before-function-paren)
1. [space-in-parens](#space-in-parens)
1. [space-infix-ops](#space-infix-ops)
1. [space-unary-ops](#space-unary-ops)
1. [spaced-comment](#spaced-comment)
1. [standard/array-bracket-even-spacing](#standardarray-bracket-even-spacing)
1. [standard/computed-property-even-spacing](#standardcomputed-property-even-spacing)
1. [standard/no-callback-literal](#standardno-callback-literal)
1. [standard/object-curly-even-spacing](#standardobject-curly-even-spacing)
1. [strict](#strict)
1. [symbol-description](#symbol-description)
1. [template-curly-spacing](#template-curly-spacing)
1. [template-tag-spacing](#template-tag-spacing)
1. [unicode-bom](#unicode-bom)
1. [use-isnan](#use-isnan)
1. [valid-typeof](#valid-typeof)
1. [wrap-iife](#wrap-iife)
1. [yield-star-spacing](#yield-star-spacing)
1. [yoda](#yoda)

## [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)

This rule enforces a style where it requires to have a getter for every property which has a setter defined.

```javascript
"error"
```

## [array-callback-return](https://eslint.org/docs/rules/array-callback-return)

This rule finds callback functions of the following methods, then checks usage of `return` statement.

```javascript
"error"
```

## [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)

This rule can enforce or disallow the use of braces around arrow function body.

```javascript
"error"
```

## [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)

This rule takes an object argument with `before` and `after` properties, each with a Boolean value.

```javascript
[
  "error",
  {
    "before": true,
    "after": true
  }
]
```

## [block-spacing](https://eslint.org/docs/rules/block-spacing)

This rule enforces consistent spacing inside an open block token and the next token on the same line. This rule also enforces consistent spacing inside a close block token and previous token on the same line.

```javascript
[
  "error",
  "always"
]
```

## [brace-style](https://eslint.org/docs/rules/brace-style)

This rule enforces consistent brace style for blocks.

```javascript
[
  "error",
  "1tbs",
  {
    "allowSingleLine": true
  }
]
```

## [camelcase](https://eslint.org/docs/rules/camelcase)

This rule looks for any underscores (`_`) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name. If ESLint decides that the variable is a constant (all uppercase), then no warning will be thrown. Otherwise, a warning will be thrown. This rule only flags definitions and assignments but not function calls. In case of ES6 `import` statements, this rule only targets the name of the variable that will be imported into the local module scope.

```javascript
[
  "error",
  {
    "properties": "never"
  }
]
```

## [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)

This rule is aimed to flag class methods that do not use `this`.

```javascript
"error"
```

## [comma-dangle](https://eslint.org/docs/rules/comma-dangle)

This rule enforces consistent use of trailing commas in object and array literals.

```javascript
[
  "error",
  {
    "arrays": "never",
    "objects": "never",
    "imports": "never",
    "exports": "never",
    "functions": "never"
  }
]
```

## [comma-spacing](https://eslint.org/docs/rules/comma-spacing)

This rule enforces consistent spacing before and after commas in variable declarations, array literals, object literals, function parameters, and sequences.

```javascript
[
  "error",
  {
    "before": false,
    "after": true
  }
]
```

## [comma-style](https://eslint.org/docs/rules/comma-style)

This rule enforce consistent comma style in array literals, object literals, and variable declarations.

```javascript
[
  "error",
  "last"
]
```

## [consistent-return](https://eslint.org/docs/rules/consistent-return)

This rule requires `return` statements to either always or never specify values. This rule ignores function definitions where the name begins with an uppercase letter, because constructors (when invoked with the `new` operator) return the instantiated object implicitly if they do not return another object explicitly.

```javascript
"error"
```

## [constructor-super](https://eslint.org/docs/rules/constructor-super)

This rule is aimed to flag invalid/missing `super()` calls.

```javascript
"error"
```

## [curly](https://eslint.org/docs/rules/curly)

This rule is aimed at preventing bugs and increasing code clarity by ensuring that block statements are wrapped in curly braces. It will warn when it encounters blocks that omit curly braces.

```javascript
[
  "error",
  "multi-line"
]
```

## [default-case](https://eslint.org/docs/rules/default-case)

This rule aims to require `default` case in `switch` statements. You may optionally include a `// no default` after the last `case` if there is no `default` case. The comment may be in any desired case, such as `// No Default`.

```javascript
[
  "error",
  {
    "commentPattern": "^no default$"
  }
]
```

## [dot-location](https://eslint.org/docs/rules/dot-location)

This rule aims to enforce newline consistency in member expressions. This rule prevents the use of mixed newlines around the dot in a member expression.

```javascript
[
  "error",
  "property"
]
```

## [dot-notation](https://eslint.org/docs/rules/dot-notation)

This rule is aimed at maintaining code consistency and improving code readability by encouraging use of the dot notation style whenever possible. As such, it will warn when it encounters an unnecessary use of square-bracket notation.

```javascript
"error"
```

## [eol-last](https://eslint.org/docs/rules/eol-last)

This rule enforces at least one newline (or absence thereof) at the end
of non-empty files.

```javascript
"error"
```

## [eqeqeq](https://eslint.org/docs/rules/eqeqeq)

This rule is aimed at eliminating the type-unsafe equality operators.

```javascript
[
  "error",
  "always",
  {
    "null": "ignore"
  }
]
```

## [func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)

This rule requires or disallows spaces between the function name and the opening parenthesis that calls it.

```javascript
[
  "error",
  "never"
]
```

## [func-style](https://eslint.org/docs/rules/func-style)

This rule enforces a particular type of `function` style throughout a JavaScript file, either declarations or expressions. You can specify which you prefer in the configuration.

```javascript
[
  "error",
  "declaration",
  {
    "allowArrowFunctions": true
  }
]
```

## [generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)

This rule aims to enforce spacing around the `*` of generator functions.

```javascript
[
  "error",
  "after"
]
```

## [global-require](https://eslint.org/docs/rules/global-require)

This rule requires all calls to `require()` to be at the top level of the module, similar to ES6 `import` and `export` statements, which also can occur only at the top level.

```javascript
"error"
```

## [guard-for-in](https://eslint.org/docs/rules/guard-for-in)

This rule is aimed at preventing unexpected behavior that could arise from using a `for in` loop without filtering the results in the loop. As such, it will warn when `for in` loops do not filter their results with an `if` statement.

```javascript
"error"
```

## [handle-callback-err](https://eslint.org/docs/rules/handle-callback-err)

This rule expects that when you&#x2019;re using the callback pattern in Node.js you&#x2019;ll handle the error.

```javascript
[
  "error",
  "^(err|error)$"
]
```

## [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)

Reports funny business with exports, like repeated exports of names or defaults.

```javascript
"error"
```

## [import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

This rule reports any imports that come after non-import
statements.

```javascript
[
  "error",
  "absolute-first"
]
```

## [import/newline-after-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)

Enforces having one or more empty lines after the last top-level import statement or require call.
+(fixable) The `--fix` option on the [command line] automatically fixes problems reported by this rule.

```javascript
"error"
```

## [import/no-amd](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)

Reports `require([array], ...)` and `define([array], ...)` function calls at the
module scope. Will not report if !=2 arguments, or first argument is not a literal array.

```javascript
"error"
```

## [import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)

Reports if a resolved path is imported more than once.

```javascript
"error"
```

## [import/no-mutable-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

Forbids the use of mutable exports with `var` or `let`.

```javascript
"error"
```

## [import/no-named-as-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)

Reports use of an exported name as the locally imported name of a default export.

```javascript
"error"
```

## [import/no-named-as-default-member](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)

Reports use of an exported name as a property on the default export.

```javascript
"error"
```

## [import/no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)

Ensures an imported module can be resolved to a module on the local filesystem,
as defined by standard Node `require.resolve` behavior.

```javascript
[
  "error",
  {
    "commonjs": true
  }
]
```

## [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)

Forbid Webpack loader syntax in imports.

```javascript
"error"
```

## [import/prefer-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

When there is only a single export from a module, prefer using default export over named export.

```javascript
"error"
```

## [indent](https://eslint.org/docs/rules/indent)

This rule enforces a consistent indentation style. The default style is `4 spaces`.

```javascript
[
  "error",
  2,
  {
    "SwitchCase": 1,
    "VariableDeclarator": 1,
    "outerIIFEBody": 1,
    "MemberExpression": 1,
    "FunctionDeclaration": {
      "parameters": 1,
      "body": 1
    },
    "FunctionExpression": {
      "parameters": 1,
      "body": 1
    },
    "CallExpression": {
      "arguments": 1
    },
    "ArrayExpression": 1,
    "ObjectExpression": 1,
    "ImportDeclaration": 1,
    "flatTernaryExpressions": false,
    "ignoreComments": false
  }
]
```

## [key-spacing](https://eslint.org/docs/rules/key-spacing)

This rule enforces consistent spacing between keys and values in object literal properties. In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed.

```javascript
[
  "error",
  {
    "beforeColon": false,
    "afterColon": true
  }
]
```

## [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)

This rule enforces consistent spacing around keywords and keyword-like tokens: `as` (in module declarations), `async` (of async functions), `await` (of await expressions), `break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `from` (in module declarations), `function`, `get` (of getters), `if`, `import`, `in`, `instanceof`, `let`, `new`, `of` (in for-of statements), `return`, `set` (of setters), `static`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, and `yield`. This rule is designed carefully not to conflict with other spacing rules: it does not apply to spacing where other rules report problems.

```javascript
[
  "error",
  {
    "before": true,
    "after": true
  }
]
```

## [linebreak-style](https://eslint.org/docs/rules/linebreak-style)

This rule enforces consistent line endings independent of operating system, VCS, or editor used across your codebase.

```javascript
[
  "error",
  "unix"
]
```

## [max-len](https://eslint.org/docs/rules/max-len)

This rule enforces a maximum line length to increase code readability and maintainability. The length of a line is defined as the number of Unicode characters in the line.

```javascript
[
  "error",
  {
    "code": 100,
    "ignoreComments": true,
    "ignoreRegExpLiterals": true,
    "ignoreStrings": true,
    "ignoreTemplateLiterals": true,
    "ignoreUrls": true,
    "tabWidth": 2
  }
]
```

## [new-cap](https://eslint.org/docs/rules/new-cap)

This rule requires constructor names to begin with a capital letter. Certain built-in identifiers are exempt from this rule. These identifiers are:

```javascript
[
  "error",
  {
    "newIsCap": true,
    "capIsNew": false
  }
]
```

## [new-parens](https://eslint.org/docs/rules/new-parens)

This rule requires parentheses when invoking a constructor with no arguments using the `new` keyword in order to increase code clarity.

```javascript
"error"
```

## [newline-per-chained-call](https://eslint.org/docs/rules/newline-per-chained-call)

This rule requires a newline after each call in a method chain or deep member access. Computed property accesses such as `instance[something]` are excluded.

```javascript
"error"
```

## [no-alert](https://eslint.org/docs/rules/no-alert)

This rule is aimed at catching debugging code that should be removed and popup UI elements that should be replaced with less obtrusive, custom UIs. As such, it will warn when it encounters `alert`, `prompt`, and `confirm` function calls which are not shadowed.

```javascript
"error"
```

## [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)

This rule disallows `Array` constructors.

```javascript
"error"
```

## [no-caller](https://eslint.org/docs/rules/no-caller)

This rule is aimed at discouraging the use of deprecated and sub-optimal code, but disallowing the use of `arguments.caller` and `arguments.callee`. As such, it will warn when `arguments.caller` and `arguments.callee` are used.

```javascript
"error"
```

## [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)

This rule aims to prevent access to uninitialized lexical bindings as well as accessing hoisted functions across case clauses.

```javascript
"error"
```

## [no-class-assign](https://eslint.org/docs/rules/no-class-assign)

This rule is aimed to flag modifying variables of class declarations.

```javascript
"error"
```

## [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)

The rule should warn against code that tries to compare against -0, since that will not work as intended. That is, code like x === -0 will pass for both +0 and -0. The author probably intended Object.is(x, -0).

```javascript
"error"
```

## [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)

This rule disallows ambiguous assignment operators in test conditions of `if`, `for`, `while`, and `do...while` statements.

```javascript
"error"
```

## [no-console](https://eslint.org/docs/rules/no-console)

This rule disallows calls to methods of the `console` object.

```javascript
"error"
```

## [no-const-assign](https://eslint.org/docs/rules/no-const-assign)

This rule is aimed to flag modifying variables that are declared using `const` keyword.

```javascript
"error"
```

## [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)

This rule disallows constant expressions in the test condition of:

```javascript
[
  "error",
  {
    "checkLoops": false
  }
]
```

## [no-continue](https://eslint.org/docs/rules/no-continue)

This rule disallows `continue` statements.

```javascript
"error"
```

## [no-control-regex](https://eslint.org/docs/rules/no-control-regex)

This rule disallows control characters in regular expressions.

```javascript
"error"
```

## [no-debugger](https://eslint.org/docs/rules/no-debugger)

This rule disallows `debugger` statements.

```javascript
"error"
```

## [no-delete-var](https://eslint.org/docs/rules/no-delete-var)

This rule disallows the use of the `delete` operator on variables.

```javascript
"error"
```

## [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)

This rule disallows duplicate parameter names in function declarations or expressions. It does not apply to arrow functions or class methods, because the parser reports the error.

```javascript
"error"
```

## [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)

This rule is aimed to flag the use of duplicate names in class members.

```javascript
"error"
```

## [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)

This rule disallows duplicate keys in object literals.

```javascript
"error"
```

## [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)

This rule disallows duplicate test expressions in `case` clauses of `switch` statements.

```javascript
"error"
```

## [no-else-return](https://eslint.org/docs/rules/no-else-return)

This rule is aimed at highlighting an unnecessary block of code following an `if` containing a return statement. As such, it will warn when it encounters an `else` following a chain of `if`s, all of them containing a `return` statement.

```javascript
"error"
```

## [no-empty](https://eslint.org/docs/rules/no-empty)

This rule disallows empty block statements. This rule ignores block statements which contain a comment (for example, in an empty `catch` or `finally` block of a `try` statement to indicate that execution should continue regardless of errors).

```javascript
[
  "error",
  {
    "allowEmptyCatch": true
  }
]
```

## [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)

This rule disallows empty character classes in regular expressions.

```javascript
"error"
```

## [no-empty-function](https://eslint.org/docs/rules/no-empty-function)

This rule is aimed at eliminating empty functions.
A function will not be considered a problem if it contains a comment.

```javascript
"error"
```

## [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)

This rule aims to flag any empty patterns in destructured objects and arrays, and as such, will report a problem whenever one is encountered.

```javascript
"error"
```

## [no-eval](https://eslint.org/docs/rules/no-eval)

This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by disallowing the use of the `eval()` function. As such, it will warn whenever the `eval()` function is used.

```javascript
"error"
```

## [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)

This rule disallows reassigning exceptions in `catch` clauses.

```javascript
"error"
```

## [no-extend-native](https://eslint.org/docs/rules/no-extend-native)

Disallows directly modifying the prototype of builtin objects.

```javascript
"error"
```

## [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)

This rule is aimed at avoiding the unnecessary use of `bind()` and as such will warn whenever an immediately-invoked function expression (IIFE) is using `bind()` and doesn&#x2019;t have an appropriate `this` value. This rule won&#x2019;t flag usage of `bind()` that includes function argument binding.

```javascript
"error"
```

## [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)

This rule disallows unnecessary boolean casts.

```javascript
"error"
```

## [no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)

This rule always ignores extra parentheses around the following:

```javascript
[
  "error",
  "all",
  {
    "conditionalAssign": false,
    "returnAssign": false,
    "nestedBinaryExpressions": false
  }
]
```

## [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)

This rule disallows unnecessary semicolons.

```javascript
"error"
```

## [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)

This rule is aimed at eliminating unintentional fallthrough of one case to the other. As such, it flags any fallthrough scenarios that are not marked by a comment.

```javascript
"error"
```

## [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)

This rule is aimed at eliminating floating decimal points and will warn whenever a numeric value has a decimal point but is missing a number either before or after it.

```javascript
"error"
```

## [no-func-assign](https://eslint.org/docs/rules/no-func-assign)

This rule disallows reassigning `function` declarations.

```javascript
"error"
```

## [no-global-assign](https://eslint.org/docs/rules/no-global-assign)

This rule disallows modifications to read-only global variables.

```javascript
"error"
```

## [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)

This rule aims to eliminate implied `eval()` through the use of `setTimeout()`, `setInterval()` or `execScript()`. As such, it will warn when either function is used with a string as the first argument.

```javascript
"error"
```

## [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)

This rule requires that function declarations and, optionally, variable declarations be in the root of a program or the body of a function.

```javascript
[
  "error",
  "both"
]
```

## [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)

This rule disallows invalid regular expression strings in `RegExp` constructors.

```javascript
"error"
```

## [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)

This rule is aimed at catching invalid whitespace that is not a normal tab and space. Some of these characters may cause issues in modern browsers and others will be a debugging issue to spot.

```javascript
"error"
```

## [no-iterator](https://eslint.org/docs/rules/no-iterator)

This rule is aimed at preventing errors that may arise from using the `__iterator__` property, which is not implemented in several browsers. As such, it will warn whenever it encounters the `__iterator__` property.

```javascript
"error"
```

## [no-label-var](https://eslint.org/docs/rules/no-label-var)

This rule aims to create clearer code by disallowing the bad practice of creating a label that shares a name with a variable that is in scope.

```javascript
"error"
```

## [no-labels](https://eslint.org/docs/rules/no-labels)

This rule aims to eliminate the use of labeled statements in JavaScript. It will warn whenever a labeled statement is encountered and whenever `break` or `continue` are used with a label.

```javascript
[
  "error",
  {
    "allowLoop": false,
    "allowSwitch": false
  }
]
```

## [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)

This rule aims to eliminate unnecessary and potentially confusing blocks at the top level of a script or within other blocks.

```javascript
"error"
```

## [no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)

This rule disallows `if` statements as the only statement in `else` blocks.

```javascript
"error"
```

## [no-loop-func](https://eslint.org/docs/rules/no-loop-func)

This error is raised to highlight a piece of code that may not work as you expect it to and could also indicate a misunderstanding of how the language works. Your code may run without any problems if you do not fix this error, but in some situations it could behave unexpectedly.

```javascript
"error"
```

## [no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)

This rule checks `BinaryExpression` and `LogicalExpression`.

```javascript
[
  "error",
  {
    "groups": [
      [
        "+",
        "-",
        "*",
        "/",
        "%",
        "**"
      ],
      [
        "&",
        "|",
        "^",
        "~",
        "<<",
        ">>",
        ">>>"
      ],
      [
        "==",
        "!=",
        "===",
        "!==",
        ">",
        ">=",
        "<",
        "<="
      ],
      [
        "&&",
        "||"
      ],
      [
        "in",
        "instanceof"
      ]
    ],
    "allowSamePrecedence": false
  }
]
```

## [no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

This rule disallows mixed spaces and tabs for indentation.

```javascript
"error"
```

## [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)

This rule aims to disallow multiple whitespace around logical expressions, conditional expressions, declarations, array elements, object properties, sequences and function parameters.

```javascript
"error"
```

## [no-multi-str](https://eslint.org/docs/rules/no-multi-str)

This rule is aimed at preventing the use of multiline strings.

```javascript
"error"
```

## [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)

This rule aims to reduce the scrolling required when reading through your code. It will warn when the maximum amount of empty lines has been exceeded.

```javascript
[
  "error",
  {
    "max": 2,
    "maxEOF": 1
  }
]
```

## [no-negated-in-lhs](https://eslint.org/docs/rules/no-negated-in-lhs)

Just as developers might type `-a + b` when they mean `-(a + b)` for the negative of a sum, they might type `!key in object` by mistake when they almost certainly mean `!(key in object)` to test that a key is not in an object.

```javascript
"error"
```

## [no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)

The `no-nested-ternary` rule disallows nested ternary expressions.

```javascript
"error"
```

## [no-new](https://eslint.org/docs/rules/no-new)

This rule is aimed at maintaining consistency and convention by disallowing constructor calls using the `new` keyword that do not assign the resulting object to a variable.

```javascript
"error"
```

## [no-new-func](https://eslint.org/docs/rules/no-new-func)

This error is raised to highlight the use of a bad practice. By passing a string to the Function constructor, you are requiring the engine to parse that string much in the way it has to when you call the `eval` function.

```javascript
"error"
```

## [no-new-object](https://eslint.org/docs/rules/no-new-object)

This rule disallows `Object` constructors.

```javascript
"error"
```

## [no-new-require](https://eslint.org/docs/rules/no-new-require)

This rule aims to eliminate use of the `new require` expression.

```javascript
"error"
```

## [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)

This rule is aimed at preventing the accidental calling of `Symbol` with the `new` operator.

```javascript
"error"
```

## [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)

This rule aims to eliminate the use of `String`, `Number`, and `Boolean` with the `new` operator. As such, it warns whenever it sees `new String`, `new Number`, or `new Boolean`.

```javascript
"error"
```

## [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)

This rule disallows calling the `Math`, `JSON` and `Reflect` objects as functions.

```javascript
"error"
```

## [no-octal](https://eslint.org/docs/rules/no-octal)

The rule disallows octal literals.

```javascript
"error"
```

## [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)

This rule disallows octal escape sequences in string literals.

```javascript
"error"
```

## [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)

This rule aims to prevent unintended behavior caused by modification or reassignment of function parameters.

```javascript
"error"
```

## [no-path-concat](https://eslint.org/docs/rules/no-path-concat)

This rule aims to prevent string concatenation of directory paths in Node.js

```javascript
"error"
```

## [no-proto](https://eslint.org/docs/rules/no-proto)

When an object is created `__proto__` is set to the original prototype property of the object&#x2019;s constructor function. `getPrototypeOf` is the preferred method of getting &#x201C;the prototype&#x201D;.

```javascript
"error"
```

## [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)

This rule disallows calling some `Object.prototype` methods directly on object instances.

```javascript
"error"
```

## [no-redeclare](https://eslint.org/docs/rules/no-redeclare)

This rule is aimed at eliminating variables that have multiple declarations in the same scope.

```javascript
"error"
```

## [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)

This rule disallows multiple spaces in regular expression literals.

```javascript
"error"
```

## [no-return-assign](https://eslint.org/docs/rules/no-return-assign)

This rule aims to eliminate assignments from `return` statements. As such, it will warn whenever an assignment is found as part of `return`.

```javascript
[
  "error",
  "except-parens"
]
```

## [no-return-await](https://eslint.org/docs/rules/no-return-await)

This rule aims to prevent a likely common performance hazard due to a lack of understanding of the semantics of `async function`.

```javascript
"error"
```

## [no-script-url](https://eslint.org/docs/rules/no-script-url)

Examples of <strong>incorrect</strong> code for this rule:

```javascript
"error"
```

## [no-self-assign](https://eslint.org/docs/rules/no-self-assign)

This rule is aimed at eliminating self assignments.

```javascript
"error"
```

## [no-self-compare](https://eslint.org/docs/rules/no-self-compare)

This error is raised to highlight a potentially confusing and potentially pointless piece of code. There are almost no situations in which you would need to compare something to itself.

```javascript
"error"
```

## [no-sequences](https://eslint.org/docs/rules/no-sequences)

This rule forbids the use of the comma operator, with the following exceptions:

```javascript
"error"
```

## [no-shadow](https://eslint.org/docs/rules/no-shadow)

This rule aims to eliminate shadowed variable declarations.

```javascript
"error"
```

## [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)

Examples of <strong>incorrect</strong> code for this rule:

```javascript
"error"
```

## [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)

This rule disallows sparse array literals which have &#x201C;holes&#x201D; where commas are not preceded by elements. It does not apply to a trailing comma following the last element.

```javascript
"error"
```

## [no-tabs](https://eslint.org/docs/rules/no-tabs)

This rule looks for tabs anywhere inside a file: code, comments or anything else.

```javascript
"error"
```

## [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)

This rule aims to warn when a regular string contains what looks like a template literal placeholder. It will warn when it finds a string containing the template literal place holder (`${something}`) that uses either `&quot;` or `&apos;` for the quotes.

```javascript
"error"
```

## [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)

This rule is aimed to flag `this`/`super` keywords before `super()` callings.

```javascript
"error"
```

## [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)

This rule is aimed at maintaining consistency when throwing exception by disallowing to throw literals and other expressions which cannot possibly be an `Error` object.

```javascript
"error"
```

## [no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)

This rule disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines.

```javascript
"error"
```

## [no-undef](https://eslint.org/docs/rules/no-undef)

Any reference to an undeclared variable causes a warning, unless the variable is explicitly mentioned in a `/*global ...*/` comment, or specified in the <a href="https://eslint.org/docs/user-guide/configuring#specifying-globals">`globals` key in the configuration file</a>. A common use case for these is if you intentionally use globals that are defined elsewhere (e.g. in a script sourced from HTML).

```javascript
"error"
```

## [no-undef-init](https://eslint.org/docs/rules/no-undef-init)

This rule aims to eliminate variable declarations that initialize to `undefined`.

```javascript
"error"
```

## [no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)

This rule disallows dangling underscores in identifiers.

```javascript
"error"
```

## [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)

This rule disallows confusing multiline expressions where a newline looks like it is ending a statement, but is not.

```javascript
"error"
```

## [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)

This rule finds references which are inside of loop conditions, then checks the
variables of those references are modified in the loop.

```javascript
"error"
```

## [no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary)

This rule disallow ternary operators when simpler alternatives exist.

```javascript
[
  "error",
  {
    "defaultAssignment": false
  }
]
```

## [no-unreachable](https://eslint.org/docs/rules/no-unreachable)

This rule disallows unreachable code after `return`, `throw`, `continue`, and `break` statements.

```javascript
"error"
```

## [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)

This rule disallows `return`, `throw`, `break`, and `continue` statements inside `finally` blocks. It allows indirect usages, such as in `function` or `class` definitions.

```javascript
"error"
```

## [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)

This rule disallows negating the left operand of <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational_operators">Relational Operators</a>.

```javascript
"error"
```

## [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)

This rule aims to eliminate unused expressions which have no effect on the state of the program.

```javascript
[
  "error",
  {
    "allowShortCircuit": true,
    "allowTernary": true,
    "allowTaggedTemplates": true
  }
]
```

## [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)

This rule is aimed at eliminating unused variables, functions, and parameters of functions.

```javascript
[
  "error",
  {
    "vars": "local",
    "args": "after-used"
  }
]
```

## [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)

This rule will warn when it encounters a reference to an identifier that has not yet been declared.

```javascript
[
  "error",
  "nofunc"
]
```

## [no-useless-call](https://eslint.org/docs/rules/no-useless-call)

This rule is aimed to flag usage of `Function.prototype.call()` and `Function.prototype.apply()` that can be replaced with the normal function invocation.

```javascript
"error"
```

## [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)

This rule disallows unnecessary usage of computed property keys.

```javascript
"error"
```

## [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)

This rule aims to flag the concatenation of 2 literals when they could be combined into a single literal. Literals can be strings or template literals.

```javascript
"error"
```

## [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)

This rule flags class constructors that can be safely removed without changing how the class works.

```javascript
"error"
```

## [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)

This rule flags escapes that can be safely removed without changing behavior.

```javascript
"error"
```

## [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)

This rule disallows the renaming of import, export, and destructured assignments to the same name.

```javascript
"error"
```

## [no-useless-return](https://eslint.org/docs/rules/no-useless-return)

This rule aims to report redundant `return` statements.

```javascript
"error"
```

## [no-var](https://eslint.org/docs/rules/no-var)

This rule is aimed at discouraging the use of `var` and encouraging the use of `const` or `let` instead.

```javascript
"error"
```

## [no-void](https://eslint.org/docs/rules/no-void)

This rule aims to eliminate use of void operator.

```javascript
"error"
```

## [no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)

This rule disallows whitespace around the dot or before the opening bracket before properties of objects if they are on the same line. This rule allows whitespace when the object and property are on separate lines, as it is common to add newlines to longer chains of properties:

```javascript
"error"
```

## [no-with](https://eslint.org/docs/rules/no-with)

This rule disallows `with` statements.

```javascript
"error"
```

## [node/no-deprecated-api](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md)

Disallow deprecated API

```javascript
"error"
```

## [node/process-exit-as-throw](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md)

Make the same code path as throw at process.exit()

```javascript
"error"
```

## [object-property-newline](https://eslint.org/docs/rules/object-property-newline)

Motivations

```javascript
[
  "error",
  {
    "allowMultiplePropertiesPerLine": true
  }
]
```

## [one-var](https://eslint.org/docs/rules/one-var)

This rule enforces variables to be declared either together or separately per function ( for `var`) or block (for `let` and `const`) scope.

```javascript
[
  "error",
  {
    "initialized": "never"
  }
]
```

## [operator-assignment](https://eslint.org/docs/rules/operator-assignment)

This rule requires or disallows assignment operator shorthand where possible.

```javascript
[
  "error",
  "always"
]
```

## [operator-linebreak](https://eslint.org/docs/rules/operator-linebreak)

This rule enforces a consistent linebreak style for operators.

```javascript
[
  "error",
  "after",
  {
    "overrides": {
      "?": "before",
      ":": "before"
    }
  }
]
```

## [padded-blocks](https://eslint.org/docs/rules/padded-blocks)

This rule enforces consistent empty line padding within blocks.

```javascript
[
  "error",
  {
    "blocks": "never",
    "switches": "never",
    "classes": "never"
  }
]
```

## [prefer-const](https://eslint.org/docs/rules/prefer-const)

This rule is aimed at flagging variables that are declared using `let` keyword, but never reassigned after the initial assignment.

```javascript
"error"
```

## [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)

This rule aims to ensure that Promises are only rejected with `Error` objects.

```javascript
"error"
```

## [prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)

This rule is aimed to flag usage of `arguments` variables.

```javascript
"error"
```

## [prefer-spread](https://eslint.org/docs/rules/prefer-spread)

This rule is aimed to flag usage of `Function.prototype.apply()` in situations where the spread operator could be used instead.

```javascript
"error"
```

## [prefer-template](https://eslint.org/docs/rules/prefer-template)

This rule is aimed to flag usage of `+` operators with strings.

```javascript
"error"
```

## [promise/always-return](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md)

Return inside each `then()` to create readable and reusable Promise chains.

```javascript
"error"
```

## [promise/catch-or-return](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md)

Enforces the use of `catch()` on un-returned promises.

```javascript
"error"
```

## [promise/param-names](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md)

Enforce consistent param names when creating new promises.

```javascript
"error"
```

## [quote-props](https://eslint.org/docs/rules/quote-props)

This rule requires quotes around object literal property names.

```javascript
[
  "error",
  "as-needed",
  {
    "keywords": false,
    "unnecessary": true,
    "numbers": false
  }
]
```

## [quotes](https://eslint.org/docs/rules/quotes)

This rule enforces the consistent use of either backticks, double, or single quotes.

```javascript
[
  "error",
  "single"
]
```

## [radix](https://eslint.org/docs/rules/radix)

This rule is aimed at preventing the unintended conversion of a string to a number of a different base than intended or at preventing the redundant `10` radix if targeting modern environments only.

```javascript
"error"
```

## [require-yield](https://eslint.org/docs/rules/require-yield)

This rule generates warnings for generator functions that do not have the `yield` keyword.

```javascript
"error"
```

## [rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)

This rule aims to enforce consistent spacing between rest and spread operators and their expressions. The rule also supports the currently experimental object rest and spread properties when enabled:

```javascript
[
  "error",
  "never"
]
```

## [semi](https://eslint.org/docs/rules/semi)

This rule enforces consistent use of semicolons.

```javascript
[
  "error",
  "always"
]
```

## [semi-spacing](https://eslint.org/docs/rules/semi-spacing)

This rule aims to enforce spacing around a semicolon. This rule prevents the use of spaces before a semicolon in expressions.

```javascript
[
  "error",
  {
    "before": false,
    "after": true
  }
]
```

## [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)

This rule will enforce consistency of spacing before blocks. It is only applied on blocks that don&#x2019;t begin on a new line.

```javascript
[
  "error",
  "always"
]
```

## [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)

This rule aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn&#x2019;t match the preferences specified.

```javascript
[
  "error",
  "always"
]
```

## [space-in-parens](https://eslint.org/docs/rules/space-in-parens)

This rule will enforce consistency of spacing directly inside of parentheses, by disallowing or requiring one or more spaces to the right of `(` and to the left of `)`. In either case, `()` will still be allowed.

```javascript
[
  "error",
  "never"
]
```

## [space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)

This rule is aimed at ensuring there are spaces around infix operators.

```javascript
"error"
```

## [space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)

This rule enforces consistency regarding the spaces after `words` unary operators and after/before `nonwords` unary operators.

```javascript
[
  "error",
  {
    "words": true,
    "nonwords": false
  }
]
```

## [spaced-comment](https://eslint.org/docs/rules/spaced-comment)

This rule will enforce consistency of spacing after the start of a comment `//` or `/*`. It also provides several
exceptions for various documentation styles.

```javascript
[
  "error",
  "always",
  {
    "line": {
      "markers": [
        "*package",
        "!",
        "/",
        ",",
        "="
      ]
    },
    "block": {
      "balanced": true,
      "markers": [
        "*package",
        "!",
        ",",
        ":",
        "::",
        "flow-include"
      ],
      "exceptions": [
        "*"
      ]
    }
  }
]
```

## [standard/array-bracket-even-spacing](https://github.com/xjamundx/eslint-plugin-standard#rules-explanations)

Like `array-bracket-even-spacing` from ESLint except it has an `either` option which lets you have 1 or 0 spacing padding.

```javascript
[
  "error",
  "either"
]
```

## [standard/computed-property-even-spacing](https://github.com/xjamundx/eslint-plugin-standard#rules-explanations)

Like `computed-property-spacing` around ESLint except is has an `even` option which lets you have 1 or 0 spacing padding.

```javascript
[
  "error",
  "even"
]
```

## [standard/no-callback-literal](https://github.com/xjamundx/eslint-plugin-standard#rules-explanations)

Ensures that we strictly follow the callback pattern with `undefined`, `null` or an error object in the first position of a callback.

```javascript
"error"
```

## [standard/object-curly-even-spacing](https://github.com/xjamundx/eslint-plugin-standard#rules-explanations)

Like `object-curly-spacing` from ESLint except it has an `either` option which lets you have 1 or 0 spaces padding.

```javascript
[
  "error",
  "either"
]
```

## [strict](https://eslint.org/docs/rules/strict)

This rule requires or disallows strict mode directives.

```javascript
[
  "error",
  "never"
]
```

## [symbol-description](https://eslint.org/docs/rules/symbol-description)

This rules requires a description when creating symbols.

```javascript
"error"
```

## [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)

This rule aims to maintain consistency around the spacing inside of template literals.

```javascript
[
  "error",
  "never"
]
```

## [template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing)

This rule aims to maintain consistency around the spacing between template tag functions and their template literals.

```javascript
[
  "error",
  "never"
]
```

## [unicode-bom](https://eslint.org/docs/rules/unicode-bom)

If the `&quot;always&quot;` option is used, this rule requires that files always begin
with the Unicode BOM character U+FEFF. If `&quot;never&quot;` is used, files must never
begin with U+FEFF.

```javascript
[
  "error",
  "never"
]
```

## [use-isnan](https://eslint.org/docs/rules/use-isnan)

This rule disallows comparisons to &#x2018;NaN&#x2019;.

```javascript
"error"
```

## [valid-typeof](https://eslint.org/docs/rules/valid-typeof)

This rule enforces comparing `typeof` expressions to valid string literals.

```javascript
[
  "error",
  {
    "requireStringLiterals": true
  }
]
```

## [wrap-iife](https://eslint.org/docs/rules/wrap-iife)

This rule requires all immediately-invoked function expressions to be wrapped in parentheses.

```javascript
[
  "error",
  "any",
  {
    "functionPrototypeMethods": true
  }
]
```

## [yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing)

This rule enforces spacing around the `*` in `yield*` expressions.

```javascript
[
  "error",
  "after"
]
```

## [yoda](https://eslint.org/docs/rules/yoda)

This rule aims to enforce consistent style of conditions which compare a variable to a literal value.

```javascript
[
  "error",
  "never"
]
```
