module.exports = {
    name: 'messageCreate',
    execute(message) {
        const { Database } = require('beta.db')
        const afkdb = new Database('./data/afk.json')

        if (afkdb.has(message.author.id + '.afk')) {
            message.channel.send(`<@${message.author.id}> Welcome Back Your AFK Has Been Removed`);
            afkdb.remove(message.author.id + '.afk');
            afkdb.remove(message.author.id + '.messageafk');
        }

        message.mentions.users.forEach((user) => {
            if (message.author.bot) return false;

            if (message.content.includes('@here') || message.content.includes('@everyone')) return false;
            if (afkdb.has(user.id + '.afk')) {
                var r = afkdb.get(user.id + '.messageafk')
                message.channel.send(`<@${user.id}> Is AFK In DB\nReason : ${r} `);
            }

        });
    },
};