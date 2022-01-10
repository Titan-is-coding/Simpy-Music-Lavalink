module.exports={
  name:"report",
  aliases:['bug'],
  code:`
  $channelsendmessage[917262635311984650;
   {newEmbed:
     {title:Report Recieved!}
     {description:
       **Username:** $username[$authorId]#$discriminator[$authorid]
       **Guild Id/Name:** $servername[$guildid] | $GuildId
       **Report:** $messageslice[1;100]
       **Attachment/Links:** $message[1]}}]
  $channelsendmessage[$channelid;
  {newEmbed:
     {title:Report Sent!}
     {description:
       **Username:** $username[$authorId]#$discriminator[$authorid]
       **Report:** $messageslice[1;100]
       **Attachment Link:** $message[1]}
       {footer: 🛑WARNING | Troll/False Reports May lead to BlackList From using the Bot }}]

$onlyif[$checkcontains[$message[1];https://media.discordapp.net/attachments/]!=false;Not Proper Attachment Link]
$onlyif[$message[1]!=;
  {newEmbed:
   {color:#FFFFFF}
   {description:**Usage:**
   \`\`\`$getservervar[Prefix]Report Attachment_Link description \`\`\`
   Eg: $getservervar[Prefix]Report https://media.discordapp.net/attachments/917238959514472448/917272368773222480/unknown.png Error When i try the command $getservervar[Prefix]Kick }
   {footer: 🛑WARNING | Troll/False Reports May lead to BlackList From using the Bot}}]

$onlyif[$message[2]!=;
  {newEmbed:
   {color:#FFFFFF}
   {description:**Usage:**
   \`\`\`$getservervar[Prefix]Report Attachment_Link description \`\`\`
   Eg: $getservervar[Prefix]Report https://media.discordapp.net/attachments/917238959514472448/917272368773222480/unknown.png Error When i try the command $getservervar[Prefix]Kick }
   {footer: 🛑WARNING | Troll/False Reports May lead to BlackList From using the Bot}}]

$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]
`
}