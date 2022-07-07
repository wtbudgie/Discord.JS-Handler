const client = require('../index.js')

client.on('messageCreate', (message) => {
    if (!message.inGuild()) return
    if (!message.content.startsWith(client.config.prefix)) return
    if (message.author.bot) return message.channel.send('This bot can only be used by users.')

    const [cmd, ...args] = message.content.slice(client.config.prefix.length).trim().split(" ")
    const command = client.commands.get(cmd.toLowerCase())
    if (!command) return
    command.file.execute(client, message, args)
})