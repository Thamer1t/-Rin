"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ ⒸBloomBot (multi-device) by Magneum™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨LEGAL NOTICE🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ 🐞 DEVELOPERS: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  try {
    return await BloomBot.nsfwCheck.findOne(
      {
        serverId: mags.chat,
      },
      async (error, server) => {
        if (error) return BloomBot.handlerror(BloomBot, mags, error);
        if (!server) {
          await BloomBot.sendMessage(mags.chat, {
            react: {
              text: "❌",
              key: mags.key,
            },
          });
          return mags.reply(
            `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:*
> NSFW Commands have been turned off for this group.
> You may ask the admins to turn it on.`
          );
        } else {
          BloomBot.magfetch(
            BloomBot,
            "https://magneum.vercel.app/api/nsfw?q=" + fpth
          ).then(async (response) => {
            const mgdata = response.data;
            BloomBot.logger.info(mgdata);
            if (!mgdata.meta.thumbnail) {
              await BloomBot.sendMessage(mags.chat, {
                react: {
                  text: "❌",
                  key: mags.key,
                },
              });
              return mags.reply(`*😥Apologies:* _${BloomBot.pushname}_

*❌Error:* There has been an API Error. Please try again later.`);
            } else
              await BloomBot.imagebutton(
                BloomBot,
                mags,
                `*🌻Here, ${fpth} for @${BloomBot.tagname || BloomBot.pushname}:*

┌╔═☰ *❗ADULT❗*
║⦁ 💡Title: ${mgdata.meta.title || null}
║⦁ 🖊️Author: ${mgdata.meta.author || null}
║⦁ ❣️Topic: ${mgdata.meta.topic || null}
╚══☰
┌╔═☰
║>  *❓META INFO❓*
║⦁ 🎊Status: ${mgdata.meta.status || null}
║⦁ 🔐Uuid: ${mgdata.meta.uuid || null}
║⦁ 🗓️Date_create: ${mgdata.meta.date_create || null}
║⦁ 🧀Query: ${mgdata.meta.query || null}
║⦁ 📢Domain: ${mgdata.meta.domain || null}
║⦁ 💯Sub_reddit_id: ${mgdata.meta.sub_reddit_id || null}
║⦁ 🌐Link: ${mgdata.meta.web_link || null}
╚═══════⋑`,
                mgdata.meta.thumbnail
              );
          });
        }
      }
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
