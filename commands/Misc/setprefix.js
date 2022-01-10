module.exports ={
  name:"setprefix",
  aliases:['Prefix'],
  code:`$setServerVar[Prefix;$message[1]]
  $onlyperms[manageserver;:x: You DO NOT have appropriate perms]
  $description[1;:white_check_mark: Successfully Changed Server Prefix to \`$message[1]\`]
  
  $onlyif[$message[1]!=;Usage:
  \`\`\`$getservervar[Prefix]setprefix <New Prefix>\`\`\`]
  $globalcooldown[5s;Hey you're under cooldown wait %time%]
  $suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
}