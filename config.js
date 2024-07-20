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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_29_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA4MSxcbiAgICAgICAgNixcbiAgICAgICAgMTcwLFxuICAgICAgICA2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQzLFxuICAgICAgICA3LFxuICAgICAgICAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICA2MixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICA4LFxuICAgICAgICA2MixcbiAgICAgICAgMTI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDksXG4gICAgICAgIDE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjN2ZGs5S1J1dFJuNzlscXpLOW1HV3ZicWZMYlBjOW81alQ0bEdvNnVvUHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMTAwNjg1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDREMzg3MjdGRUFBNDc5MEZEMUI4OUU4N0RGM0ZEQUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDk2NTU0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMTAwNjg1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTI1MzJDNjlBRTY0OTRGMjYyREJGRURFMTk5MDY2QkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDk2NTU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFsQko5QTNxU3gyeTVPSnBDRzJOSkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODI4YmU3ODEtOGJhNy00MWNlLTk4NTQtNDFiYjZlNzNkMmVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDE3MCxcbiAgICAgIDczLFxuICAgICAgMjM1LFxuICAgICAgNzQsXG4gICAgICAyMTMsXG4gICAgICA5NCxcbiAgICAgIDE5MyxcbiAgICAgIDE3NixcbiAgICAgIDIsXG4gICAgICA5NixcbiAgICAgIDg4LFxuICAgICAgOTAsXG4gICAgICAxNDcsXG4gICAgICAxOTcsXG4gICAgICAzOSxcbiAgICAgIDEwNCxcbiAgICAgIDM4LFxuICAgICAgMTgxLFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIyLFxuICAgICAgMzMsXG4gICAgICAxNjYsXG4gICAgICAxMjYsXG4gICAgICAxMjMsXG4gICAgICA3MCxcbiAgICAgIDgyLFxuICAgICAgMjUwLFxuICAgICAgODQsXG4gICAgICAxOTgsXG4gICAgICA3MCxcbiAgICAgIDg5LFxuICAgICAgMTAsXG4gICAgICAxODMsXG4gICAgICA0MSxcbiAgICAgIDIzNyxcbiAgICAgIDIxMixcbiAgICAgIDE4LFxuICAgICAgMjU1LFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkg3TVhSQUw1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMxMDA2ODUzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODM5OTIzMDUzMzIzNjE6MjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRmVtaSBLb2xhd29sZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xTRDNLWUNFT0xuNzdRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQjJTL1djamtZOENTdnZ4Ump3dzB1MlZTazdXMUJwN0xIY0hMYXV3clVBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUbWMxMTF6cmF3TWJuOElWN1lRYUhMcCs4NWtjWC9ZSDdiYkIxL3l4RThESC9hU0ZhSE53S2pwUGpBM0YvQldZRDZrWDhINGEzL3R5S1Q5R1U5UFZEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNK05KNzFBMThPSzNSYkRsZGVJVFp6YVhndWpQSDZxWHBvbEU0b05keTVCMll3VWo0VTF1V0lWUEh4bkxjNmxCUjZoQ2szdnd0VU1Tbzh4dTRSUFRBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMxMDA2ODUzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDk2NTQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDNiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEM2IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsNTczVFVGZndIWDBvcnFhZ1NRbkpRMjVLV0d4cnpRQ3NCRjdienJxWXJZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYxODA3MDQ1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjA0MjY2NTQ0XCJ9Igp9"  // PUT your SESSION_ID 


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
