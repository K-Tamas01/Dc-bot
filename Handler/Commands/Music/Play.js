module.exports = {
	name:'play',
	category:'Service',
	description:'$play url/cím',
	isload: true,
	run: async (bot, msg, args, guildqueue) => {
		const queue = bot.player.createQueue(msg.guild.id);
		await queue.join(msg.member.voice.channel);
		await queue.play(args.join(' ')).catch(() => {
			if (!guildqueue) {
				queue.stop();
			}
		});
	},
};