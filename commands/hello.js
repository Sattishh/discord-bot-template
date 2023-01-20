module.exports.run = async (bot, message, args) => {
    message.channel.send("Hello!")
}

module.exports.config = {
    name: "hello",
    description: "",
    usage: "",
    accessableby: "",
    aliases: []
}