// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
require(`python-format-js`);
const fs = require(`fs`);
const vers = require(`../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
exports.catch = async (ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
  var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
  const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
  const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const media = await ӄʀǟӄɨռʐ.prepareMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    { url: "https://i.postimg.cc/vZkyfQcZ/redErr.jpg" },
    MessageType.image,
    {
      mimetype: Mimetype.jpeg,
    }
  );
  await ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    {
      contentText: `${ꜱᴇɴᴅᴇʀeceived}, Try Again Later!

⚡𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${FinalName}
📂𝗟𝗼𝗴${ℓαвєяяσя}`,
      footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
        {
          buttonId: `${ᴋᴇɪ}bugreport`,
          buttonText: { displayText: `${ᴋᴇɪ}bugreport` },
          type: 1,
        },
      ],
      headerType: 4,
      imageMessage: media.message.imageMessage,
    },
    MessageType.buttonsMessage,
    {
      contextInfo: {
        mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
      },
    }
  );
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
