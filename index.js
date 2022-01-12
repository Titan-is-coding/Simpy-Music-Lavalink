const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "", //Discord Bot Token
prefix:['$getServerVar[Prefix]','<@!$clientID>', '<@$clientID>'], //Discord Bot Prefix
intents: "all" //Discord Intents
})
//Events
bot.onMessage()
bot.onInteractionCreate();


bot.status({
  text: "%help $Servercount Servers | $allmemberscount Users Currently",
  type: "PLAYING",
  status: "Online",
  time: 12
})

//Variables
bot.variables({
Status1: "2",
//this is our beta bot prefix
Prefix:"<",
Color:"RED",
//Dont change anything here
rpsvar:"",
status:"",
badges:"",
muted :"",
offline:"",
version:"",
Surround:"off",
loop:"None",
News:""
})

bot.command ({
  name:"<@!915489544026066974>",
  code:`$description[1;My Prefix here is \`$getservervar[Prefix]\`]
  $footer[1;Do $getservervar[Prefix]Help to see all my commands]
  $title[1;Prefix Finder]
  $color[1;#FFFFFF]`,
  nonPrefixed: true
})

//when our bot joins a server
bot.guildJoinCommand({
channel: "917943550237372416",
code: `
$title[1;I joined a New server!]
$addField[1;Guild Name#COLON#;$guildName;yes] 
$addField[1;Member Count#COLON#;$memberscount;yes]
$addField[1;Guild ID#COLON#;$guildID;yes]
$addField[1;Guild Owner#COLON#;$userTag[$ownerID];yes]
$color[1;RANDOM]`
})
bot.onGuildJoin()

//when our bot leaves any server
bot.guildLeaveCommand({
channel: "917943572588818523",
code: `
$title[1;I was Removed from server]
$addField[1;Guild Name#COLON#;$guildName;yes]
$addField[1;Member Count#COLON#;$memberscount;yes]
$addField[1;Guild ID#COLON#;$guildID;yes]
$addField[1;Guild Owner#COLON#;$userTag[$ownerID];yes]
$color[1;RANDOM]`
})
bot.onGuildLeave()

//Server Start Message
bot.readyCommand({
    channel: "",
    code: `
    $channelsendmessage[917257079591419964;
    {newEmbed:{description: :white_check_mark: | Bot is Back up Again 
    Ping: \`$ping\`ms {timestamp}}
    {title:Bot Rebooted!}
    {color:GREEN}}]
    $wait[10s]
    $log[Ready on $userTag[$clientID]]`
})

//music stuffs dont change
const Lavalink = new aoijs.Lavalink(bot);
Lavalink.addNode({
 url: "lava.link:80",
 password: "neo",
 name: "aoi.js",
 secure: false,
 })

 //lavalink
Lavalink.trackStartCommand({
channel: "$channelID",
code: `
$color[1;00FFFF]
$description[1;💿 **Now Playing [$lavalinkExecute[songInfo;title]]($lavalinkExecute[songInfo;url])**]
 $deletein[3m]
$thumbnail[1;$lavalinkExecute[getthumbnail;$lavalinkExecute[songinfo;identifier];maxresdefault]]`
});

//command handler
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 

