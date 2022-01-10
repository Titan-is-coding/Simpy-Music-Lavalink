module.exports={
  name:"ban",
  aliases:['DIE','Begone','Banned'],
  code:`
  $ban[$mentioned[1];$guildid;1;$messageslice[1;10]]
   $channelsendmessage[$channelid;
    {newEmbed:
    {description:***:white_check_mark: | $username[$mentioned[1]]#$discriminator[$mentioned[1]] Was Banned Successfully***
    *Reason : $messageslice[1;10]*
    }
    {color:#ff0000}}
    ]
$onlyperms[ban;⛔ | You need \`Ban\` Permision to use this]
$onlybotperms[ban;⛔ | Bot doesnt have \`Ban\` Permision to do this]
$onlyIf[
   $rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];
   ⛔ | I cannot ban the user, Because of role hierarchy!]

$onlyIf[
  $rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];
  ⛔ | You cannot ban a person who's higher role than you!]

$onlyif[$message[1]!=;
 {newEmbed:
   {color:#FFFFFF}
   {description:**Usage:**
   \`\`\`$getservervar[Prefix]Ban @User Reason\`\`\`
   Eg: $getservervar[Prefix]Ban @Titan_Exists Trying to Raid}}]

$onlyif[$message[1]!=;
 {newEmbed:
   {color:#FFFFFF}
   {description:**Usage:**
   \`\`\`$getservervar[Prefix]Ban @User Reason\`\`\`
   Eg: $getservervar[Prefix]Ban @Titan_Exists Trying to Raid}}]

$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
}