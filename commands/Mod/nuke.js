module.exports = {
 name: "nuke-channel",
 aliases: ['nukechannel', 'nuke'],
 code: `
 $djsEval[
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(d.message.channel.position)
 c.send('https://tenor.com/view/explosion-boom-explode-gif-17383346')

 })
 .catch(() => d.message.channel.send('I am missing Perms to execute this'))
]
$onlyPerms[admin;You don't Have permissions to execute this Command]
$onlyBotPerms[managechannel;I need Manage Channels Permission to execute this]
$deleteIn[1s]

$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
}