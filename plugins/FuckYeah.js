/*
 * @Author SkySom
 * @Date 1/23/2014
 */
//Message Event
exports.message = function(from, to, text, message, bot, config) {
    if(config.fuckYeah==true) {
        var patt = new RegExp("fuck yeah" , "i");
        var res = patt.test(text);
        if(res) {
            var fuckYeahLocation = text.toLowerCase().indexOf("fuck yeah");
            text = text.substr(fuckYeahLocation + "fuck yeah".length, text.length).trim();
            if(text.length > 0) {
                text = encodeURI(text);
                bot.say(to, "http://fuckyeah.herokuapp.com/" + text);
            }
        }
    }
}

//Join Event
exports.join = function(channel, nick, message, bot, config) {

}

//Part Event
exports.part = function(channel, nick, message, bot, config) {

}

//Action Event
exports.action = function(from, to, message, bot, config) {

}

//Raw Event
exports.raw = function(message, bot, config){

}

