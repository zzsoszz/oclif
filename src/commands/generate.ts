import CommandBase from './../command-base'

export default class Generate extends CommandBase {
  static description = `generate a new CLI
This will clone the template repo 'oclif/hello-world' and update package properties`

  static flags = {
  }

  static args = [
    {name: 'name', required: true, description: 'directory name of new project'},
  ]

  async run() {
    const {args} = await this.parse(Generate)

    await super.generate('cli', {
      name: args.name,
      force: true,
    })
  }
}
