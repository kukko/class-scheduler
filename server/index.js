let { WombatServer, Config } = require('web-wombat');
Config.setConfigFolder(require('path').join(__dirname, 'config'));
WombatServer
.setUnsecure()
.init();