module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        const config = require('../data/config.json')
        console.log(`Logged in as ${client.user.tag}`);
        client.user.setPresence({
            status: config.Presence.status,
            activities: [{
                type: config.Presence.activity.type,
                name: config.PREFIX + config.Presence.activity.name + ' | v ' + config.VER,
            }]
        });
    },
};