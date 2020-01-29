@mosteast/cli_markdown_helper
=============================

Helper for markdown writer.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@mosteast/cli_markdown_helper.svg)](https://npmjs.org/package/@mosteast/cli_markdown_helper)
[![Downloads/week](https://img.shields.io/npm/dw/@mosteast/cli_markdown_helper.svg)](https://npmjs.org/package/@mosteast/cli_markdown_helper)
[![License](https://img.shields.io/npm/l/@mosteast/cli_markdown_helper.svg)](https://github.com/mosteast/cli_markdown_helper/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @mosteast/cli_markdown_helper
$ cli_markdown_helper COMMAND
running command...
$ cli_markdown_helper (-v|--version|version)
@mosteast/cli_markdown_helper/0.0.0 darwin-x64 node-v12.14.0
$ cli_markdown_helper --help [COMMAND]
USAGE
  $ cli_markdown_helper COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cli_markdown_helper add_space_around_code_from_chinese [FILE]`](#cli_markdown_helper-add_space_around_code_from_chinese-file)
* [`cli_markdown_helper hello [FILE]`](#cli_markdown_helper-hello-file)
* [`cli_markdown_helper help [COMMAND]`](#cli_markdown_helper-help-command)

## `cli_markdown_helper add_space_around_code_from_chinese [FILE]`

describe the command here

```
USAGE
  $ cli_markdown_helper add_space_around_code_from_chinese [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/add_space_around_code_from_chinese.ts](https://github.com/mosteast/cli_markdown_helper/blob/v0.0.0/src/commands/add_space_around_code_from_chinese.ts)_

## `cli_markdown_helper hello [FILE]`

describe the command here

```
USAGE
  $ cli_markdown_helper hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ cli_markdown_helper hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/mosteast/cli_markdown_helper/blob/v0.0.0/src/commands/hello.ts)_

## `cli_markdown_helper help [COMMAND]`

display help for cli_markdown_helper

```
USAGE
  $ cli_markdown_helper help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
