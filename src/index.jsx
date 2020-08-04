/** @jsx createElement */
import { createElement } from 'elliptical'
import { Command } from 'lacona-phrases'
import { runApplescript } from 'lacona-api'

export const MyNewCommand = {
  extends: [Command],

  execute (result) {
    console.log('executing MyNewCommand')
    runApplescript({script: `display alert "${result}"`})
  },

  describe ({config}) {
    return (
      <literal
        text='test halp'
        value={config.numiIntegration.message} />
    )
  }
}

export const extensions = [MyNewCommand]
