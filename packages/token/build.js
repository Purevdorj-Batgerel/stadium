const StyleDictionary = require('style-dictionary').extend('config.json')

StyleDictionary.registerFormat({
  name: 'custom/format',
  formatter: function ({ dictionary }) {
    const main = {}

    dictionary.allTokens.map((token) => {
      token.path.reduce((prev, current, index) => {
        if (prev[current]) {
          return prev[current]
        } else if (index === token.path.length - 1) {
          prev[current] = token.value
          return
        } else {
          const newObj = {}
          prev[current] = newObj
          return newObj
        }
      }, main)
    })

    // return `module.export = ${JSON.stringify(main, null, 2)}`
    return `const token = ${JSON.stringify(main, null, 2)}
    export default token`
  },
})

StyleDictionary.registerFormat({
  name: 'custom/declaration',
  formatter: function ({ dictionary }) {
    // TODO: write this later
    // {
    //   "destination": "token.d.ts",
    //   "format": "custom/declarations"
    // }
  },
})

StyleDictionary.buildAllPlatforms()
