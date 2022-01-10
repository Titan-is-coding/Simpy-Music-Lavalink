module.exports = ({
 name: 'hack',
 usage: 'Hack <user id | name | mention>',
 description: 'Hack a user',
 cooldown: '3s',
 code: `
 **Starting a dangerous and "totally real" Hack on $username[$findUser[$message;no]]**

 $editIn[2s;<a:Load:916997517831446559> Hacking $username[$findUser[$message;no]];<a:Load:916997517831446559> Got the token of the user: **$randomString[20]**;<a:Load:916997517831446559> Email of the user: **$replaceText[$username[$findUser[$message;no]]; ;_;-1]@gmail.com**;<a:Load:916997517831446559> Password: **$randomString[8]**;<a:Load:916997517831446559> Recent contacts: **$username[$randomUserID]**;<a:Load:916997517831446559> Most used Sentences: **$randomText[I Love women,men too;why do i exist;lmao true;my pp is bigger;you betrayed me]**;<a:Load:916997517831446559> Most recent dm message: **$randomText[People think im mad but truly i am; He blocked my son; my father went to get milk still hasnt returned...]**;<a:Load:916997517831446559> Hacking medical records;<a:Load:916997517831446559> Hacked Email(bypassed 2FA too(there was no 2FA));<a:Load:916997517831446559> Hacking minecraft account;<a:Load:916997517831446559> minecraft password: **$randomText[Kids;Imhungry;ilovepeople;ieatfood;$replaceText[$username; ;_;-1]@gmail.com]**;<a:Load:916997517831446559> Checking Games Played;<a:Load:916997517831446559> Plays $randomText[Fortnite<:Wut:916997138804768799>;Minecraft;Roblox;Nothing <:Wut:916997138804768799>];<a:Load:916997517831446559> Hacking epic games account;<a:Load:916997517831446559> Epic games account had nothing...;
<a:Load:916997517831446559> Discord IP: **$numberSeparator[$random[100000000;900000000];.];The *totally* dangerous, "real" Hack on $username[$findUser[$message;no]] is 100% complete! Wait IT CANT BE DA FBI is-;<a:fbi:916996560456396840>]

 $onlyIf[$findUser[$message;no]!=;{newEmbed:{description: Invalid Args
Usage:
\`hack <user id | name | mention>\`}{color:RED}}]

$cooldown[$commandInfo[hack;cooldown];{newEmbed:{description: Wait for %time% to try again}{color:#ff000}}]
$globalcooldown[15s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
})