module.exports={
  name:"resume",
  aliases:['resumesong'],
  code:`
  $lavalinkexecute[resume]
  $channelsendmessage[$channelid;{newEmbed:
  {description: :arrow_forward: | Current Song Resumedd}{color:00FFFF}}]

  $onlyIf[$voiceID!=;{newEmbed: {description:**🚫 You need to be in a voice channel with the bot to use this command!**}{color:RED}}]
  $lavalinkexecute[connect]
  $globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
}