module.exports={
  name:"leave",
  aliases:['leavevc'],
  code:`
  $lavalinkExecute[disconnect]
  $wait[1s]
  $description[1;Left Vc <#$voiceId[$clientid]>]
  $color[1;#00FFFF]
  $globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]
`
}