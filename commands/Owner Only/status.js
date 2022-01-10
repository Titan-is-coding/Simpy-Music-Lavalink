module.exports ={
  name:"status",
  code:`
  $setstatus[$message;PLAYING;Online]
  $channelsendmessage[917258478429548604;
    {newEmbed:{description: :white_check_mark: | Bot's Status Was Changed to \`$message\`}}]
  $description[1;:white_check_mark: Successfully Set Status to **$message**]
  $onlyforIDs[789374384136519690;:x: Only For Owners ]`
}