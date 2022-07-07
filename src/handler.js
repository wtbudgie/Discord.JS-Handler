const fs = require('fs')
const path = require('path')
const { Client } = require('discord.js')

/**
 * 
 * @param {Client} client 
 */
function registerCommands(client) {
    const subfolders = fs.readdirSync(process.cwd() + '/src/commands/')
    subfolders.forEach((folder, index) => {
        const files = fs.readdirSync(process.cwd() + `/src/commands/${folder}/`)
        files.forEach((name) => {
            if (!name.toString().endsWith('.js')) return;
            const splittedName = name.toString().split('.js')
            const file = require(process.cwd() + `/src/commands/${folder}/${name}`)
            const directory = `${process.cwd()}/src/commands/${folder}/${name}`
            const properties = { directory, file }
            if (file.name) {
                client.commands.set(splittedName[0], properties);
            }
        })
    })
}

/**
 * 
 * @param {Client} client 
 */
function registerEvents() {
    const folder = fs.readdirSync(`${process.cwd()}/src/events/`)
    const files = folder.filter((file) => file.endsWith('.js'))
    files.forEach((name) => {
        require(`${process.cwd()}/src/events/${name}`)
    })
}

module.exports = { registerCommands, registerEvents }