module.exports ={
  name:"stats",
  aliases:"stat",
  code:`
  $Title[1;Heres My Stats!]
  $addfield[1;<:nice:918337910430896168> Bot Users ; $allmemberscount;yes]
  $addfield[1;<:server:916994114652889108> Bot Servers;$servercount;yes]
  $addfield[1;<:bot_version:916999840523763742> Bot Version;$getvar[version];yes]
  $addfield[1;<:cpu:916998707927461889> Cpu Usage;$cpu;yes]
  $addfield[1;<:devs:916998437541675059> Bot Developer; Titan_Exists#6969 , NoobPlayer7#7777;yes]
  $addfield[1;:timer: Uptime;$uptime;yes]
  $color[1;#0f4ad4]
  $footer[1;You can also Dm Titan_Exists#6969 for any kind of help]
  
  $globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
}