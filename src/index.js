const { Client, Intents, Collection } = require('discord.js')
const client = new Client({
    intents: new Intents(32767),
    partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
})

module.exports = client
client.commands = new Collection()
client.config = require('../config.json')

require('./handler').registerCommands(client)
require('./handler').registerEvents(client)

client.login(require('../config.json').token)