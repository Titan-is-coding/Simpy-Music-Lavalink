module.exports={
  name:"songfilter-8d",
  aliases:['8d'],
  $if:"v4",
  code:`
   $if[$tolowercase[$message[1]]==on]
     $lavalinkexecute[addfilters;rotation={"rotationHz":0.1}]
     $channelsendmessage[$channelid;{newEmbed:{footer:There might be a Slight Delay so wait a bit}{color:#00FF00}{title:SongInfo - 8d}
     {description:<a:8d:917600552286822420> | 8d Audio Turned On}}]
     $setservervar[Surround;On]
  $endif

  $if[$tolowercase[$message[1]]==off]
       $lavalinkexecute[addfilters;rotation={"rotationHz":0}]
        $channelsendmessage[$channelid;{newEmbed:{footer:There might be a Slight Delay so wait a bit}{color:#FF0000}{title:SongInfo - 8d}
        {description:<a:8d:917600552286822420> | 8d Audio Turned Off}}]
     $setservervar[Surround;Off]
  $endif

$onlyif[$message[1]!=;
 {newEmbed:{color:#FFFFFF}{description:
 \`\`\`$getservervar[Prefix]songfilter-8d On/Off\`\`\`
 Eg: $getservervar[Prefix]songfilter-8d On (Bot Must be playing a song for it to happen)}}]
 
 $onlyIf[$voiceID!=;{newEmbed: {description:**🚫 You need to be in a voice channel with the bot to use this command!**}{color:RED}}]

 $globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please make sure your in aMake Sure The Bot is in a VC If Problems Still Occur Report by $getservervar[Prefix]Report]
  
`
}