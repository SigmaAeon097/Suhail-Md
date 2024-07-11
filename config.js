const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_37_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY2LFxuICAgICAgICA1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICA3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDcwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4LFxuICAgICAgICA3OCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk5LFxuICAgICAgICA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkU5UXkyNkl4QWtYR0Qzc2ZJZjdpR1EvTkV0bmxPblV1R3ZicjJSc3k1UjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMTAwNjg1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjAwQTg5RkM5Rjg3NTEzQUQ3N0M2QjM3RUNDMTUyRDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjA0MjY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMTAwNjg1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDhCMUY3MDVDQ0M2MzUyMjk0RDYwNzIzN0ExNDdDMzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjA0MjcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVxdUpPVmFYU2xxekctQm9mQS1uQlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGU1ODRlZjMtYmQ4Ny00NWM3LWFlMzAtNTIzYzZjNTEyZDQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDEwMixcbiAgICAgIDE3LFxuICAgICAgMTE3LFxuICAgICAgODMsXG4gICAgICA4NSxcbiAgICAgIDU3LFxuICAgICAgMTY4LFxuICAgICAgNjEsXG4gICAgICA5NixcbiAgICAgIDExMSxcbiAgICAgIDgwLFxuICAgICAgMjA5LFxuICAgICAgMjQ3LFxuICAgICAgMTExLFxuICAgICAgMjM5LFxuICAgICAgMTY0LFxuICAgICAgNDIsXG4gICAgICAyMCxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDE4NixcbiAgICAgIDE4NCxcbiAgICAgIDIyMyxcbiAgICAgIDY2LFxuICAgICAgMTk4LFxuICAgICAgMjQ2LFxuICAgICAgMTY1LFxuICAgICAgMjE0LFxuICAgICAgMjUzLFxuICAgICAgMjEyLFxuICAgICAgNixcbiAgICAgIDE1OSxcbiAgICAgIDIyNCxcbiAgICAgIDEzNixcbiAgICAgIDc0LFxuICAgICAgMTEzLFxuICAgICAgMjI0LFxuICAgICAgNjAsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkZXVjhWTFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzEwMDY4NTM6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4Mzk5MjMwNTMzMjM2MToyMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGZW1pIEtvbGF3b2xlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFNEM0tZQ0VPU3N1YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCMlMvV2Nqa1k4Q1N2dnhSand3MHUyVlNrN1cxQnA3TEhjSExhdXdyVUFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNxTkRubnB0ejR3azJ2S3JpbCtXOExIVlY5M0tSaG8wZHNhTVdidktHcnBLbVJGVm1US1EyeklqYzdHQkR1UTVJVjNvQllpa09jQmR0RmZVNjlPWEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkE2MVF5YzAxd0xwSmU3WGx5WXBmemZvbGR4K1pPNGNWcTl4akdQeThvckYyRnlmaHdwWE8rZkt5V2FtbWJnVXVXWUFEMzQ5WVNIdlJoV2hnU0NLYkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzEwMDY4NTM6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MDQyNjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEM2JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQzYi5qc29uIjogIntcImtleURhdGFcIjpcImw1NzNUVUZmd0hYMG9ycWFnU1FuSlEyNUtXR3hyelFDc0JGN2J6cnFZclk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjE4MDcwNDUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MDQyNjY1NDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
