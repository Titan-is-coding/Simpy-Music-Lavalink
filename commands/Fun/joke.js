module.exports ={
 name:"joke",
 code:`$title[1;Here is a joke!] 
 $description[1;$jsonRequest[https://sv443.net/jokeapi/v2/joke/Any?type=single;joke;]]
$color[1;RANDOM]
$globalcooldown[5s;Hey you're under cooldown wait %time%]
$suppressErrors[⛔ | Error Occurred Please Report by $getservervar[Prefix]Report]`
 }