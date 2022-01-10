module.exports={
  name:"skip",
  aliases:['skipsong'],
  code:`
  $lavalinkexecute[skip;$message[1]]
  $channelsendmessage[$channelid;{newEmbed:
  {description: :track_next:  | Successfully Skipped Current Song }
  {color:#00FFFF}}]

$onlyIf[$voiceID!=;{newEmbed: {description:**🚫 You need to be in a voice channel with the bot to use this command!**}{color:RED}}]
  $lavalinkexecute[connect]
  $globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]
`
}