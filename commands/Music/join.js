module.exports={
  name:"join",
  aliases:['Joinvc'],
  code:`
  $description[1;Joined Vc <#$voiceId[$clientid]>]
  $wait[1s]
  $lavalinkExecute[connect]
  $color[1;#00FFFF]
  
$onlyIf[$voiceID!=;{newEmbed: {description:**🚫 You need to be in a voice channel to use this command!**}{color:RED}}]

  $globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please make sure your in a vc (accessible by bot) If Problems Still Occur Report by $getservervar[Prefix]Report]
  `
}