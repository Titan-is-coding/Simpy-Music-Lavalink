module.exports = [{
name: "help",  
code: `
$author[1;Help Menu;$userAvatar[$clientID]]
$thumbnail[1;$userAvatar[$clientID]]
$description[1;
  Heres all my commands catagories
  
  <:Music:916900702910033990> **Music**
  
  <:Mod:916900775475675156> **Moderation**
  
  <:Fun:916900707309867039> **Fun**
  
  <:Misc:916900729812295740> **Misc**

  Want something else? Come join support server and ask me
  [Support Server](https://discord.gg/dNVZnadNGJ)]
  $footer[1;Click one of the buttons below to See catagories]
  $color[1;#0000FF]
  $addButton[1;Misc;1;misc_button;false;⚙]
  $addButton[1;Fun;1;fun_button;false;🎉]
  $addButton[1;Mod;1;mod_button;false;🔨]
  $addButton[1;Music;1;music_button;false;🎶]
$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]
`
},{
name: "music_button", 
type: 'interaction', 
prototype: 'button', 
code: `
$interactionReply[Here's Your Help;{newEmbed:{title:Help - Music Catagory}{color:#FFFF00}{description:
Play- Plays the song requested from youtube
Volume - Changes The volume of the song
Skip - Skips current song
Loop - Loops current song
Join - Joins the Vc Your In
Queue - Shows List of all requested songs
Pause - Pauses current song
Resume - Resumes current song
8d - Turns Surround Sound On
}{footer:Most things here are obvios so yea}};[$interactionData[options.data[0].value];yes;yes;yes;yes];;;;yes]
`
},{
name: "mod_button", 
type: 'interaction', 
prototype: 'button', 
code: `
$interactionReply[Here's Your Help;{newEmbed:{title:Help - Moderation Catagory}{color:#FFFF00}{description:
Kick - kicks the user from Guild
Ban - Bans the user from Guild
Unban - Unbans the user from Guild
Lock - Changes chanel perms that only admins can talk 
Unlock - Unlocks the Chat
Nuke - Deletes the Current Channel and makes a replica
Purge - Deletes specified amount of Messages from the chat
}};[$interactionData[options.data[0].value];yes;yes;yes;yes];;;;yes]
`
},{
name: "fun_button", 
type: 'interaction', 
prototype: 'button', 
code: `
$interactionReply[Here's Your Help;{newEmbed:{title:Help - Fun Catagory}{color:#FFFF00}{description:
Hack - Does a "totally real" hack on them
Tweet - Make Donald Trump Say anything!
rps - Play rock paper scissor against me!
meme - Sends a Random Meme from Reddit
Joke - Sends a Random Funny Joke
Simprate - Find how much of a Simp someone is
}};[$interactionData[options.data[0].value];yes;yes;yes;yes];;;;yes]
`},{
name: "misc_button", 
type: 'interaction', 
prototype: 'button', 
code: `
$interactionReply[Here's Your Help;{newEmbed:{title:Help - Main Catagory}{color:#FFFF00}{description:
Help - Shows this menu
News - Shows Bot's Latest Updates and Change Logs
Report - Send an Report to the Devs asking for help
Ping - Shows Bot's response rate
Uptime - Shows for how long the bot has been running
SetPrefix - Changes the prefix of the bot for this server
Stats - Gives the bot's stats
Userinfo - Gives the particular user's info
Serverinfo - Gives current servers info}};[$interactionData[options.data[0].value];yes;yes;yes;yes];;;;yes]`
}]