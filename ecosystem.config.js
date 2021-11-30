// ecosystem.config.js
module.exports = {
    apps: [
        {name: 'SoSiS',max_memory_restart: '700M',script: 'index.js',args: '1'}
    ]
  };