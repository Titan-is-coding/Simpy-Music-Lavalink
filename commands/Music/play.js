module.exports = {
 name: 'play',
 aliases: ['p'],
 code: `
$color[1;#00FFFF]
$description[1;
 💿 **$replaceText[$replaceText[$lavalinkExecute[isPlaying];true;Added [$lavalinkExecute[songInfo;title;$get[position]]]($lavalinkExecute[songInfo;url;$get[position]]) to queue!];false;Playing [$lavalinkExecute[songInfo;title;$get[position]]]($lavalinkExecute[songInfo;url;$get[position]])]**
 <a:8d:917600552286822420> Song Filters:
  8d - \`$getservervar[Surround]\` | loop - \`$getservervar[loop]\`]
  $footer[1;$randomtext[Ever Knew About $getservervar[Prefix]news ?;You should join support server $getservervar[Prefix]Help;Did you know: you could read latest news about the bot $getservervar[Prefix]News]]

$thumbnail[1;$lavalinkExecute[songinfo;thumbnail;$get[position]]

$addTimestamp[1]

$let[position;$sub[$lavalinkExecute[queuetotal];1]]
$let[a;$lavalinkExecute[$replaceText[$replaceText[$lavalinkExecute
[isIdling];true;play];false;volume]]]

$log[$lavalinkExecute[isIdling]|$lavalinkExecute[isPlaying]|$lavalinkExecute[isPaused]]

$let[a;$lavalinkExecute[addtrack;$get[key];1]]
$let[key;$lavalinkExecute[search;$message]]

$lavalinkExecute[connect]

$onlyIf[$voiceID!=;{newEmbed: {description:**🚫 You need to be in a voice channel to use this command!**}{color:RED}}]
$onlyif[$message[1]!=;
 {newEmbed:
   {color:#FFFFFF}
   {description:**Usage:**
   \`\`\`$getservervar[Prefix]Play Song_Name\`\`\`
   Eg: $getservervar[Prefix]Play On & On}}]
$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Make Sure The Bot is in a VC If Still Problems Occur Report by $getservervar[Prefix]Report]`
}

