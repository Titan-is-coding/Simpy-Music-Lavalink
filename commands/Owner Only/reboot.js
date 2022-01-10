module.exports={
  name:"reboot",
  code:`
  $reboot[index.js]
  $wait[2s]
  $channelsendmessage[$channelid;{newEmbed:{description: :white_check_mark: | Successfully Rebooted}}]
  $onlyforids[789374384136519690;:x: Only Owners Can Use this]`
}