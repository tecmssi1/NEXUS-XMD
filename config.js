const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA61V2Y7qRhD9lahf4QZveEEaKV7ZMV5Yozw07QYa44V22x644t8jw0zmKstkIsVPVtt96lTVOVXfQZqRAo/xFfS+g5ySCjLcvLJrjkEPGOV+jylogwgyCHogcyFbueqlnB1ZUNqCcHC6vN9J7WqiJdlscTrE5LgPmekMX8C9DfJydyboE8AVXLDhuTLUsJx7fcEXzK08Cq2RLW0mVxUtlW3Ge9nakM7cC7g3iJBQkh7s/IgTTOF5jK9zSOjX6KNZTeULFaXW+jYLNrHh+qulfVgs5pJbBK0w5XV8EeUjTKWv0T9vshDp687w1d3MrM0s1MLjKw7nfjHZ7LLlLhosz1o0WhtW/aRfkEOKo2GEU0bY9et1n3HV2enKBa/GjIiio/blRYe3BH6Xz0Tr6G9Pp40iOUqcfY34SYilyp9wJIkmwebIBki7BMWoU6FFsuAKbS2PplQ9nNYPwD+Iz+m7VuL/Unc4IyvSHb8eFmFtuTUm1DthIVT1Kxb8jnQp9wJyux2DivXX6B8l3bkNhre4SuJ5KxiKt5s63s7DQCMGX1RoyN0y3zf9YLD4oA9ZST9jOXCj1FLJ2VnOHYkOlKI/7S/2ZCWZl9O2Pnj1bljApC6klUMDk/M8eXmgr7A1JYbo5ZNuWJb1fK0oinQ1+/UuqFo7g3gvj4xifB1GoMff24DiAykYhYxkaXMmym0AoyrAiGL2qC4YB86uFotOn+5vr31oLVE9y1qjrldpwwKuy1ir4hkejyV58wLaIKcZwkWBowEpWEavU1wU8IAL0Pv10agmZ4qTjOERiUAPCKLYlTShq2ma+kvxc32ErIB5/nOKGWiDPc2SKQY9RkvcBo8LlsNZomHbtinwhug4nCTYnKXZhqArmm4rTYbJM2hIElwwmOSgxyuSrKqaxvP39v/DwxAlW+yaPC9JimzqnCobmmppPG/ItiDz8uc8BO7/4qHYXYtzdNW0LdXQBZPneUHgDclRVVvrWtbnPCTl/lsbpPiVPe30EAHfBntCC7ZIy/ycwejda+8fIUJZmbLgmiKzecEU9H44xoyR9FA0mZUppOhIKmw2eYDeHp4LfG+DCFcE4QYP1FN9f3KZGaiXaGFCokir5dVrlHTM0ucvYldDwr67/4YkDn2T9hH/bSfK3DeoCl3IiQpEXQE05XhOsubOPxsrdNbc1W8V8RX3TW8i1PURpXHf1rmHOZ6OwBRH71XeQRSXeZjFOP0EN1lOONsN1+qynq/l0rhp83pCR3qg/oj7dBroff/YHmYWNXimYi19aWmApltNnL+ooaf8jSBS2PwNQox+apxGmlBvfWhAIswgORcN/rjqlFB17HG47SC939e9g24edPDRt/ex9PS9XyOTwE0hc0GyPefd2/aVLHd65KnLejtD/lSZ7airWAX/8P2fQUAP7PryquLccXI9Xm8oo1NlgW1THtaaYrkbGJfiyDGVyXYYXlYkYe7tFOseyryLGpTUNv3DbNryYiYPBRanRnWSwwqa+ksT7amfH4NJa3uDiOa/ypf+jlvGKi+55qYIqvE8KZcdz+17q8PmLO0moj68jJVxxPPGbLWm8xYdR5Hp6BMsrTTVRSQl5ibgT7x51J8D8zGwz2+LkrzNsqfa9gQ/9s5bH/61Xx/C5+7tHzDeNtk/iMtYoIGeJcnEZXaebCFGAtqcV/VgMXdQP1zboXtbybeyVmYrcG8cnZ8h22c0aRZeGtGMRKANzrBg+od3/2YccHIbJFc9zwMG2bvlgd48w9gH998BduhWDKQJAAA=g",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ NEXUS ✦ XMD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "233549259998",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ NEXUS ✦ XMD ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ NEXUS ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BKYt9f00/hanstz.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> NEXUS IS SPARKING ACTIVE AND ALIVE\n\n\nKEEP USING NEXUS XMD FROM NEXUS TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by NEXUS XMD 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
