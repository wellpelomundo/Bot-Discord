const { MessageButton, MessageEmbed } = require('discord.js')
/*
    {
        button: MessageButton,
        embed: MessageEmbed,
        name: String,
        id: String
    }
*/

module.exports = [
    /*{
        button: new MessageButton().setCustomId(`openTicket-885161395761606776`).setLabel(`Compra`).setEmoji('🛒').setStyle('PRIMARY'),
        embed: new MessageEmbed().setDescription('Bem vindo ao setor de compras'),
        name: 'compra',
        id: '885161395761606776',
        staffRole: '859794530161393694'
    },*/
    {
        button: new MessageButton().setCustomId(`openTicket-880654421653094400`).setLabel(`ticket`).setEmoji('🎟️').setStyle('PRIMARY'),
        embed: new MessageEmbed().setDescription('Bem vindo ao suporte do BOT DO LIMA. \nEm breve algum staff estará atendendo seu pedido!'),
        name: 'ticket',
        id: '880654421653094400',
        staffRole: '862010325129887774'
    }
]