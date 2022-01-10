module.exports={
  name:"unban",
  aliases:['unyeet','Undie'],
  code:`
  $unban[$message[1];$guildid;$messageslice[1;10]]
  $channelsendmessage[$channelid;
    {newEmbed:
    {description:***:white_check_mark: $usertag[$message[1]] Was Unbanned Successfully***
    *Reason : $messageslice[1;10]*
    }
    {color:#2ECC71}}
    ]
$onlyperms[ban;⛔ | You need \`Ban\` Permision to use this]
$onlybotperms[ban;⛔ | Bot doesnt have \`Ban\` Permision to do this]

$onlyIf[$isBanned[$message[1]]==true;⛔ | That User Isn't Banned In This Server]
$onlyIf[$userExists[$message[1]]==true;⛔ | Please Give ID Of A Valid User]

$onlyif[$message[1]!=;
 {newEmbed:
   {color:#FFFFFF}
   {description:**Usage:**
   \`\`\`$getservervar[Prefix]Unban UserID Reason\`\`\`
   Eg: $getservervar[Prefix]Unban 789374384136519690 He dint Raid tho}}]

$onlyif[$message[1]!=;
 {newEmbed:
   {color:#FFFFFF}
   {description:**Usage:**
   \`\`\`$getservervar[Prefix]Unban UserID Reason\`\`\`
   Eg: $getservervar[Prefix]Unban 789374384136519690 He dint Raid tho}}]
   
$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
}