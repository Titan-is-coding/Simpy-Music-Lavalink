module.exports={
  name:"queue",
  aliases:['q'],
  code:`
  $title[1;Current Queue]
  $description[1;$lavalinkexecute[queue]]
  $color[1;#00FFFF]


$onlyIf[$voiceID!=;{newEmbed: {description:**🚫 You need to be in a voice channel with the bot to use this command!**}{color:RED}}]
  $lavalinkexecute[connect]
$globalcooldown[5s;Hey you're under cooldown wait %time%]

$suppressErrors[⛔ | Error Occurred Please make sure your in a vc with bot If Problems Still Occur Report by $getservervar[Prefix]Report]`
}