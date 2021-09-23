const { MessageEmbed, MessageActionRow } = require('discord.js')
const ticketCategories = require('../../../util/ticketCategories')

module.exports = (client, interaction) => {
    const channel = interaction.options.getChannel('canal')

    if (channel.type !== 'GUILD_TEXT') return interaction.reply({ content: 'Informe um canal de texto!', ephemeral: true })

    const embed = new MessageEmbed()
        .setDescription('Clique no 🎟️ abaixo para abrir seu pedido.')

    const buttons = ticketCategories.map(c => c.button)
    const row = new MessageActionRow().addComponents(buttons)

    channel.send({ embeds: [embed], components: [row] })

    interaction.reply({ content: 'Canal setado com sucesso!', ephemeral: true })
}