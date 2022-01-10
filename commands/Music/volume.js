module.exports = {
 name: "volume",
 code: `
 $channelSendMessage[$channelID;{newEmbed: {description: :loud_sound: | Volume set to \`$lavalinkExecute[volume]\`}{color:#00FFFF}}]

 $lavalinkExecute[volume;$message[1]]

 $onlyIf[$isNumber[$get[message]]==true;{newEmbed: {description:\`$message[1]\` Has to be a Valid Number}{color:RED}}]
 $onlyif[$message[1]!=;
 {newEmbed:
   {color:#FFFFFF}
   {description:**Usage:**
   \`\`\`$getservervar[Prefix]Volume Amount\`\`\`
   Eg: $getservervar[Prefix]Volume 60}}]
 $let[message;$replaceText[$message;%; ]]

$onlyIf[$voiceID!=;{newEmbed: {description:**🚫 You need to be in a voice channel with the bot to use this command!**}{color:RED}}]
 $lavalinkexecute[connect]
 $globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Make Sure The Bot is in a VC with you if Problems still occur Report by $getservervar[Prefix]Report]`
}