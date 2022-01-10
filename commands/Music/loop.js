module.exports={
  name:"loop",
  $if:"v4",
  aliases:['ls'],
  code:`
 

 $if[$message[1]==none]
 $channelsendmessage[$channelid;{newEmbed:
  {description: :x: | Loop is set to \`$lavalinkexecute[loopmode;0] - None\`}{color:#00FFFF}}]
  $setservervar[loop;None]
 $endif

 $if[$message[1]==queue]
 $channelsendmessage[$channelid;{newEmbed:
 {description: :repeat: | Loop is Set to \`$lavalinkexecute[loopmode;queue] - Queue\`}{color:#00FFFF}}]
 $setservervar[loop;Queue]
 $endif

 $if[$message[1]==song]
 $channelsendmessage[$channelid;{newEmbed:
 {description: :repeat_one: | Loop is Set to \`$lavalinkexecute[loopmode;track] - Song\`}{color:#00FFFF}}]
 $setservervar[loop;Song]
 $endif

 $lavalinkexecute[connect]

$onlyif[$checkcontains[$message[1];song;queue;none]!=false;:x: | Invalid Loop Mode (Tip: make sure they are lower case)]

$onlyif[$message[1]!=;
 {newEmbed:{color:#FFFFFF}{description:
 \`\`\`$getservervar[Prefix]Loop queue/song/none\`\`\`
 Eg: $getservervar[Prefix]Loop song (Mode must be all lower case)}}]
 
 $onlyIf[$voiceID!=;{newEmbed: {description:**🚫 You need to be in a voice channel with the bot to use this command!**}{color:RED}}]

 $globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please make sure your in aMake Sure The Bot is in a VC If Problems Still Occur Report by $getservervar[Prefix]Report]
  `
}