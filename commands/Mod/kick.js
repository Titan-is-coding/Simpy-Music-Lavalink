module.exports={
  name:"kick",
  aliases:['kick','yeet'],
  code:`
  $kick[$mentioned[1];$guildid;1;$messageslice[1;10]]
   $channelsendmessage[$channelid;
    {newEmbed:
    {description:***:white_check_mark: | $username[$mentioned[1]]#$discriminator[$mentioned[1]] Was Kicked Successfully***
    *Reason : $messageslice[1;10]*
    }
    {color:#ff0000}}
    ]
$onlyperms[kick;⛔ | You need \`Kick\` Permision to use this]
$onlybotperms[kick;⛔ | Bot doesnt have \`Kick\` Permision to do this]
$onlyIf[
   $rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];
   ⛔ | I cannot Kick the user, Because of role hierarchy!]

$onlyIf[
  $rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];
  ⛔ | You cannot Kick a person who's higher role than you!]

$onlyif[$message[1]!=;
 {newEmbed:
   {color:#FFFFFF}
   {description:**Usage:**
   \`\`\`$getservervar[Prefix]kick @User Reason\`\`\`
   Eg: $getservervar[Prefix]Kick @Titan_Exists Spam}}]

$onlyif[$message[1]!=;
 {newEmbed:
   {color:#FFFFFF}
   {description:**Usage:**
   \`\`\`$getservervar[Prefix]Kick @User Reason\`\`\`
   Eg: $getservervar[Prefix]Kick @Titan_Exists Spam}}]

$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
} 