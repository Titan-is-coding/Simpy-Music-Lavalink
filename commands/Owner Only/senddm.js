module.exports ={
  name:"senddm",
  code:`
 $description[1;:white_check_mark: Message Sent to <@$mentioned[1]>]
  $color[1;#00FF00]
  $sendDM[$messageslice[1;100];$mentioned[1]]
  $onlyforIDs[789374384136519690;:x:Only For Owners]`
}