module.exports={
  name:"lock",
  code:`
 $modifyChannelPerms[$guildid;$channelid;-sendmessage]
  $channelsendmessage[$channelid;{newEmbed: 
   {description::white_check_mark: | <#$channelid> Was Locked Successfully!}
   {color:#FF0000}}]
  
$onlyPerms[managechannel;⛔ | You dont have required perms to do it]
$onlyBotPerms[manageserver;⛔ | I don't have the perms to do it]

$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
}