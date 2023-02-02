const { EmbedBuilder } = require('discord.js');

module.exports = {
	run:async (msg, code) => {
		switch (code) {
		case 0:{
			const content = new EmbedBuilder()
				.setTitle('Ismeretlen parancs nézd meg a $help-et')
				.setColor('#FF0000')
				.setFooter({ text:`Requested by ${msg.author.username}` })
				.setTimestamp();

			msg.channel.send({ embeds: [content] });
			break;
		}
		case 1:{
			const content = new EmbedBuilder()
				.setTitle('Nem üres az argumentum lista nem várt elemek a sorban!')
				.setColor('#FF0000')
				.setFooter({ text:`Requested by ${msg.author.username}` })
				.setTimestamp();

			msg.channel.send({ embeds: [content] });
			break;
		}
		case 2:{
			const content = new EmbedBuilder()
				.setTitle('Nem vagy egy Voice csatornában sem vagy én nem vagyok benne egyben sem!')
				.setColor('#FF0000')
				.setFooter({ text:`Requested by ${msg.author.username}` })
				.setTimestamp();

			msg.channel.send({ embeds: [content] });
			break;
		}
		case 3:{
			const content = new EmbedBuilder()
				.setTitle('Nem vagyunk egy Voice csatornában sem!')
				.setColor('#FF0000')
				.setFooter({ text:`Requested by ${msg.author.username}` })
				.setTimestamp();

			msg.channel.send({ embeds: [content] });
			break;
		}
		case 4:{
			const content = new EmbedBuilder()
				.setTitle('A lejátszási lista üres vagy nem azonosítható!')
				.setColor('#FF0000')
				.setFooter({ text:`Requested by ${msg.author.username}` })
				.setTimestamp();

			msg.channel.send({ embeds: [content] });
			break;
		}
		case 5:{
			const content = new EmbedBuilder()
				.setTitle('A paraméter lista üres!')
				.setColor('#FF0000')
				.setFooter({ text:`Requested by ${msg.author.username}` })
				.setTimestamp();

			msg.channel.send({ embeds: [content] });
			break;
		}
		case 6:{
			const content = new EmbedBuilder()
				.setTitle('Egy zene szám már be van loopolva előbb kapcsold ki a másikat!')
				.setColor('#FF0000')
				.setFooter({ text:`Requested by ${msg.author.username}` })
				.setTimestamp();

			msg.channel.send({ embeds: [content] });
			break;
		}
		case 7:{
			const content = new EmbedBuilder()
				.setTitle('A paraméterbe kapott érték nem szám volt!')
				.setColor('#FF0000')
				.setFooter({ text:`Requested by ${msg.author.username}` })
				.setTimestamp();

			msg.channel.send({ embeds: [content] });
			break;
		}
		case 8:{
			const content = new EmbedBuilder()
				.setTitle('A kijelölt index túl mutat a lejátszási lista méretén!')
				.setColor('#FF0000')
				.setFooter({ text:`Requested by ${msg.author.username}` })
				.setTimestamp();

			msg.channel.send({ embeds: [content] });
			break;
		}
		case 9:{
			const content = new EmbedBuilder()
				.setTitle('A lejátszási lista már be van loopolva előbb kapcsoldi ki!')
				.setColor('#FF0000')
				.setFooter({ text:`Requested by ${msg.author.username}` })
				.setTimestamp();

			msg.channel.send({ embeds: [content] });
			break;
		}
		}
	},
};