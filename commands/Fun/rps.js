module.exports= [{
  name:"rps",
  aliases:['RockPaperScissor'],
  code:`
  $title[1;Rock Paper Scissor's Time!]
  $description[1;
  **Guide:**
  :rock: Beats :scissors:
  :scissors: Beats  :roll_of_paper:
   :roll_of_paper: Beats :rock:]
  $addButton[1;Paper;1;paper_button;false;📃]
  $addButton[1;Scissors;1;scissors_button;false;✌]
  $addButton[1;Rock;1;rock_button;false;✊]
  $globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
},{
name: "paper_button", 
type: 'interaction', 
prototype: 'button', 
code: `
$interactionReply[Game Started:;{newEmbed:
{title:Rock Paper Scissor Shoot!}
{description:
$Randomtext[
  🔴 | You **Lost**
  **$username[$clientID]  :roll_of_paper: vs :scissors: You** 
  ;
  🟢 | You **WON**
  **$username[$clientID] :roll_of_paper: vs :rock: You**
  ;
  🟡 | You **Tied**
  **$username[$clientID] :roll_of_paper: vs  :roll_of_paper: You** ]}
{color:#00FFFF}
{footer: $randomtext[🎊Well Played;🎉Goog Game;✨Good Job]}}
;[$interactionData[options.data[0].value];yes;yes;yes;yes];;;;yes]
`
},
{
name: "scissors_button", 
type: 'interaction', 
prototype: 'button', 
code: `
$interactionReply[Game Started:;{newEmbed:
{title:Rock Paper Scissor Shoot!}
{description:
$Randomtext[
  🔴 | You **Lost**
  **$username[$clientID]  :scissors: vs :rock: You** 
  ;
  🟢 | You **WON**
  **$username[$clientID] :scissors: vs :roll_of_paper: You**
  ;
  🟡 | You **Tied**
  **$username[$clientID] :scissors: vs  :scissors: You** ]}
{color:#00FFFF}
{footer: $randomtext[🎊Well Played;🎉Goog Game;✨Good Job]}}
;[$interactionData[options.data[0].value];yes;yes;yes;yes];;;;yes]
`
},
{
name: "rock_button", 
type: 'interaction', 
prototype: 'button', 
code: `
$interactionReply[Game Started:;{newEmbed:
{title:Rock Paper Scissor Shoot!}
{description:
$Randomtext[
  🔴 | You **Lost**
  **$username[$clientID]  :rock: vs :roll_of_paper: You** 
  ;
  🟢 | You **WON**
  **$username[$clientID] :rock: vs :scissors: You**
  ;
  🟡 | You **Tied**
  **$username[$clientID] :rock: vs  :rock: You** ]}
{color:#00FFFF}
{footer: $randomtext[🎊Well Played;🎉Goog Game;✨Good Job]}}
;[$interactionData[options.data[0].value];yes;yes;yes;yes];;;;yes]

`
}]