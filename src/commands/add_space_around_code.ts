import { Command, flags } from '@oclif/command'
import { readFileSync, writeFileSync } from 'fs'

export default class AddSpaceAroundCode extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [
    { name: 'file', required: true },
  ]

  async run() {
    const { args: { file } } = this.parse(AddSpaceAroundCode)

    if (!file) {
      return this.error('Invalid file name')
    }

    const content = readFileSync(file, 'utf8')

    const result = content
      .replace(/(?<![\s\*\-`_])(?:`(<?\w+>?)`|``(<?\w+>?)``)/g, ' `$1`')
      .replace(/(?:`(<?\w+>?)`|``(<?\w+>?)``)(?![\s\*\-`_])/g, '`$1` ')

    writeFileSync(file, result, 'utf8')
  }
}
