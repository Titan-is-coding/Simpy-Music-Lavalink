module.exports = ({
name: "steal",
code: `$description[1;Successfully added the emoji $customEmoji[$message[2]] to $serverName!]
$addEmoji[$guildid;https://cdn.discordapp.com/emojis/$findNumbers[$message[1]].$replaceText[$replaceText[$isValidLink[https://cdn.discordapp.com/emojis/$findNumbers[$message[1]].gif];true;gif];false;png];$message[2]]
$footer[1;Added By $username;$authorAvatar]
$title[1;Emoji Adder]
$color[1;$random[11111;99999]]
$onlyIf[$message[2]!=; Please provide a name for the emoji!
Or make sure that there's only one space between emoji and name
$onlyIf[$message[1]!=;{newEmbed:{color:#FFFFFF}{description:Usage: \`\`\`$getservervar[Prefix]steal Emoji Emoji_Name\`\`\`
Eg: $getservervar[Prefix]steal <a:Jumpy_Boi:916926112628633651> Jumpy_Boi}}]

$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
})