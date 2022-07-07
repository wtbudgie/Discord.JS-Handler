const { Client, Message } = require('discord.js')

module.exports = {
    name: "ping",
    description: "get the bots ping",
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute: (client, message, args) => {
        message.channel.send('bot ping: ' + client.ws.ping)
    }
}