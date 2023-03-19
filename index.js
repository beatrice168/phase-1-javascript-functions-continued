// code your solution here
function mondayWork (activity = "go to the office"){
    return (`This Monday, I will ${activity}.`)
}
mondayWork();
mondayWork("Work from home")
 function saturdayFun(activity ='roller-skate' ) {
    return (`This Saturday, I want to ${activity}!`)
 }
 saturdayFun();
 saturdayFun("bathe my dog");
 let wrapAdjective = function(style="*") {
    return function(word="special")
 {
    return `You are ${style}${word}${style}!`
 }

 }

