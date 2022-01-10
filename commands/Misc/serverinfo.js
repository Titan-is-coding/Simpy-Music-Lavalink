module.exports={
  name:"serverinfo",
  code:`$author[1;$serverName;$serverIcon]

$addfield[1;Role Info;All Roles: $guildroles[$guildid;mention]]

$addfield[1;Verification level;$serverVerificationLevel;yes]

$addfield[1;Total Emojis;$emojicount[$guildid];yes]

$addfield[1;Total Channels;$channelCount]

$addfield[1;Total Members;$membersCount;yes]

$addfield[1;Owner;$Username[$ownerID]#$discriminator[$ownerid];yes]

$footer[1;ID: $guildid | Created: $creationDate[$guildID]]
$thumbnail[1;$serverIcon]
$color[1;BLUE]
$globalcooldown[5s;Hey you're under cooldown wait %time%]

$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
}