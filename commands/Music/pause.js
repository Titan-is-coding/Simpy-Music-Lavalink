module.exports={
  name:"pause",
  aliases:['pausesong'],
  code:`
  $lavalinkexecute[pause]
  $channelsendmessage[$channelid;{newEmbed:
  {description: :pause_button:  | Current Song Paused}{color:00FFFF}}]


$onlyIf[$voiceID!=;{newEmbed: {description:**🚫 You need to be in a voice channel with the bot to use this command!**}{color:RED}}]
  $lavalinkexecute[connect]
  $globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please make sure your in a Make Sure The Bot is in a VC with you If Problems Still Occur Report by $getservervar[Prefix]Report]
`
}