import { Composer } from 'telegraf';
import { playOrQueueSong } from '../tgcalls';
import { getMessageLink } from '../utils';

export const Play = Composer.command(['play', 'pl'], async ctx => {
    await ctx.telegram.sendChatAction(ctx.chat.id, "typing");
    
    if (ctx.chat.type === 'private') return await ctx.reply("This Command works on Group Only");

    if (
        !ctx.message.reply_to_message ||
        !('audio' in ctx.message.reply_to_message)
    ) return await ctx.reply("Please reply this command to a audio file");

    let { reply_to_message: message } = ctx.message

    await playOrQueueSong(
        { id: ctx.chat.id, name: ctx.chat.title },
        {
            title: message.audio.title!,
            duration: message.audio.duration.toString(),
            image: message.audio.thumb?.file_id ?? `https://telegra.ph/file/ee9940ece5ffc1d463e31.jpg`,
            artist: message.audio.performer ?? "Merakli Music",
            link: getMessageLink(ctx.chat.id, message.message_id),
            mp3_link: message.audio.file_id,
            provider: 'telegram',
            requestedBy: {
                first_name: ctx.from.first_name,
                id: ctx.from.id
            }
        }
    )

})
