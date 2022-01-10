module.exports = {
 name: "meme",
 code:`
 $author[1;$jsonRequest[https://bloxapi.soudblox.repl.co/meme;sub]]
 $title[1;$jsonRequest[https://bloxapi.soudblox.repl.co/meme;title]
 $jsonRequest[https://bloxapi.soudblox.repl.co/meme;url]
 $image[1;$jsonRequest[https://bloxapi.soudblox.repl.co/meme;link]
 $color[1;RANDOM]
 $footer[1;$jsonRequest[https://bloxapi.soudblox.repl.co/meme;ups] ⬆ | $jsonRequest[https://bloxapi.soudblox.repl.co/meme;comments] 💬]
 $globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
}