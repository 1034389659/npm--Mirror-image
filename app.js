const path = require('path')
const fs = require('fs')

module.exports = app => {

  const rulePath = path.join(app.config.baseDir, 'config','rule.js')
  const instance = require(rulePath)
  let ruleMap = {}
  for(let i of instance){
    ruleMap[i.name] = i
  }
  app.rule = ruleMap
  app.ruleSet = instance

  // const models = []
  // for (let i = 0; i < rules.length; i++) {
  //   const filepath = path.join(app.config.baseDir, 'rules', rules[i])
  //   const instance = require(filepath)
  //   let name = instance.name// || ('plugin_' + pluginName.replace(/\./g, '_'))
  //   models[name] = instance
  // }

  // app.models = models

};