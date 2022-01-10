module.exports = ({
name: "purge",
code: `
$sendMessage[{newEmbed:{description:$message[1] Messages deleted successfully}{color:#2ECC71}}{delete:3s};no]
$clear[$message[1];everyone]

$onlyif[$isnumber[$message[1]]!=false;:x: Send a Valid amount]
$onlyPerms[managemessages;:x: You need manage messages permission {delete:2s}]
$onlyBotPerms[managemessages;:x: I don't have manage messages permission! {delete:1s}]
$onlyif[$message[1]!=;
 {newEmbed:
   {color:#FFFFFF}
   {description:**Usage:**
   \`\`\`$getservervar[Prefix]Purge Amount \`\`\`
   Eg: $getservervar[Prefix]Purge 100 }}]

$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
})