module.exports = function({bot, commands, config, message}){

    const EmbedPaginator = require('./node_modules/eris-pagination');

    if (typeof config.lang === "undefined") {
        var lang = require("./lang/en.json");
    } else if (config.lang == `${config.lang}`) {
        var lang = require(`./lang/${config.lang}.json`);
    }

commands.addInboxServerCommand("help", [], async (message) => {
    if(message.content === `${config.prefix}help`) {
        const myEmbeds = [
            { title: `${lang.thread.title}`, color: 0x2ECC71, description: `***${config.prefix}reply***  <text> / ***${config.prefix}r***  <text> - ${lang.thread.reply}\n***${config.prefix}anonreply <text> / ${config.prefix}ar <text>*** - ${lang.thread.areply}\n***${config.prefix}close*** - ${lang.thread.close}\n***${config.prefix}close cancel*** - ${lang.thread.closecancel}\n***${config.prefix}logs*** - ${lang.thread.logs}\n***${config.prefix}block*** - ${lang.thread.block}\n***${config.prefix}unblock*** - ${lang.thread.unblock}\n***${config.prefix}move <category>*** - ${lang.thread.move}\n***${config.prefix}suspend*** - ${lang.thread.suspend}\n***${config.prefix}unsuspend*** - ${lang.thread.unsuspend}\n***${config.prefix}alert*** - ${lang.thread.alert}\n***${config.prefix}edit <nummber> <new text>*** - ${lang.thread.edit}\n***${config.prefix}delete*** - ${lang.thread.msgdelete}\n***${config.prefix}move <category>*** - ${lang.thread.move}\n***${config.prefix}suspend*** - ${lang.thread.suspend}\n ***${config.prefix}loglink -v*** - ${lang.thread.vloglink}\n***${config.prefix}id*** - ${lang.thread.id}\n` },
            { title: `${lang.thread.title2}`, color: 0x2ECC71, description: `***${config.prefix}unsuspend*** - ${lang.thread.unsuspend}\n***${config.prefix}alert*** - ${lang.thread.alert}\n***${config.prefix}edit <nummber> <new text>*** - ${lang.thread.edit}\n***${config.prefix}delete*** - ${lang.thread.msgdelete}\n***${config.prefix}role*** - ${lang.thread.displayrole}\n***${config.prefix}loglink*** - ${lang.thread.loglink}\n***${config.prefix}loglink -s*** - ${lang.thread.sloglink}\n ***${config.prefix}loglink -v*** - ${lang.thread.vloglink}\n***${config.prefix}id*** - ${lang.thread.id}\n***${config.prefix}dm_channel_id*** - ${lang.thread.dmcid}\n***${config.prefix}message <number>*** - ${lang.thread.message}\n***${config.prefix}role*** - ${lang.thread.displayrole}\n***${config.prefix}loglink*** - ${lang.thread.loglink}\n***${config.prefix}loglink -s*** - ${lang.thread.sloglink}` },
            { title: `${lang.global.title}`, color: 0xE67E22, description: `***${config.prefix}newthread <userID>*** - ${lang.global.newthread}\n***${config.prefix}logs <userID>*** - ${lang.global.glogs}\n***${config.prefix}block <userID>*** - ${lang.global.block}\n***${config.prefix}unblock*** - ${lang.global.unblock}\n***${config.prefix}is_blocked*** - ${lang.global.is_blocked}\n***${config.prefix}role*** - ${lang.global.role}\n***${config.prefix}role <role name>*** - ${lang.global.role2}\n***${config.prefix}version*** - ${lang.global.version}` }
        ];

        const paginatedEmbed = await EmbedPaginator.createPaginationEmbed(
            message, 
            myEmbeds, 
            {
                showPageNumbers: true,
                extendedButtons: false,
                maxMatches: 10,
                timeout: 150000,
                backButton: '◀',
                forthButton: '▶',
                deleteButton: '💩',
                startPage: 1
            }
        );
    }
});


}
