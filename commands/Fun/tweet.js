module.exports = ({
 name: "tweet",
 code: `
$footer[1;Requested By $username ]
$image[1;https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;+;10]]
$onlyIf[$message!=;You need to type something for the trump to tweet!]
$color[1;RANDOM]
$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
})