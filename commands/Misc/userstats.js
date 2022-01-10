module.exports = ({
 name: "userinfo",
 aliases: ['whois','userstats'],
 code: `
 $color[1;#00FF00]
 $thumbnail[1;$userAvatar[$findUser[$message]]]
 $title[1;User Info]
 $addfield[1;**Permissions**;$userPerms[$findUser[$message]];no]
 $addfield[1;**Custom Status**;$getchannelvar[status];yes]
 $addfield[1;**Avatar**;[User Avatar\\]($userAvatar[$findUser[$message];2048;yes]);yes]
 $addfield[1;**Highest Role**;<@&$highestRole[$findUser[$message]]>;yes]
 $addfield[1;**Account Created**;$creationDate[$findUser[$message];date];yes]
 $addfield[1;**Badges**;$getchannelvar[badges];yes]
 $addfield[1;**Status**;$customEmoji[$status[$findUser[$message]]] $status[$mentioned[1;yes]];yes]
 $addfield[1;**ID**;$mentioned[1;yes];yes]
 $addfield[1;**Name**;$username[$findUser[$message]]#$discriminator[$findUser[$message]];yes]
 

 $setchannelvar[badges;<a:Right:916977275398946856> $customemoji[$getUserBadges[$findUser[$message]]]]
 $setchannelvar[status;<a:Right:916977275398946856> $getcustomstatus[$mentioned[1]]]
 $onlyif[$status[$mentioned[1]]!=;User is Offline No Data Available, Sorry!]]
 $onlyif[$message!=;Please Mention Someone/Put in their ID]
 
$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
})