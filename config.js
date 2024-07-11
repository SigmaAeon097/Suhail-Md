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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_36_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU4LFxuICAgICAgICA1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUwLFxuICAgICAgICA5MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgwLFxuICAgICAgICA3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkwLFxuICAgICAgICA5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDkyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYk41TTRSdlJxdlE3c2VuSXpzOTQrdk5RWG5sSXdoVU9KWFBDWE5KdWk0QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTMxMDA2ODUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3ODJCRkZDRTY5RDFEMzE5MzAxNTFDRDlCMUMyRjlEOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2ODcwMDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUkhHMnlGUTFTaE9wNVh6T3FyeDVoUVwiLFxuICBcInBob25lSWRcIjogXCIwODA5Y2UxZC1jMmQzLTRjOGUtYTkzNy1mMGE2ZWU1YmI2NmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMjAxLFxuICAgICAgMjMwLFxuICAgICAgNDUsXG4gICAgICAyNTIsXG4gICAgICA1NixcbiAgICAgIDQwLFxuICAgICAgMTg3LFxuICAgICAgODQsXG4gICAgICAxMjksXG4gICAgICAxMTksXG4gICAgICAyMyxcbiAgICAgIDIwMixcbiAgICAgIDEwMixcbiAgICAgIDE0MixcbiAgICAgIDE4MixcbiAgICAgIDE5NixcbiAgICAgIDIwNSxcbiAgICAgIDIxNSxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDI0MyxcbiAgICAgIDIwNSxcbiAgICAgIDIyNyxcbiAgICAgIDk5LFxuICAgICAgMTU1LFxuICAgICAgMTg1LFxuICAgICAgMTc1LFxuICAgICAgMTk2LFxuICAgICAgMTUzLFxuICAgICAgMTAzLFxuICAgICAgMzUsXG4gICAgICAyMDYsXG4gICAgICAyNixcbiAgICAgIDE1OSxcbiAgICAgIDYzLFxuICAgICAgMTY1LFxuICAgICAgMTU5LFxuICAgICAgMjI4LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlJGOU5BQlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzEwMDY4NTM6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4Mzk5MjMwNTMzMjM2MToyMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGZW1pIEtvbGF3b2xlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFNEM0tZQ0VKS3p2clFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCMlMvV2Nqa1k4Q1N2dnhSand3MHUyVlNrN1cxQnA3TEhjSExhdXdyVUFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInphOGdOVDZ1bytybXRLVy9SbWJBQW1yNUZWZUtYbC9xRkozd0NUZFd5OS9MSEpxRUlyckx6dFdCenVPUHNkMkJ3T1BtRXRnT1d1WVBkd0FwOTNFSUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRtWHRVeUtNN2hCeC9hUC8rbkZjaWdaanBnYnlXN0R1RWc2WCszL1dvbVF4RXRMaVpxUk1VSWIyQ0taWDE5RjcyWU5XcmcxdU1BN3Z6aHh3dlZ4N2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzEwMDY4NTM6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2ODY5OTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEM2JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQzYi5qc29uIjogIntcImtleURhdGFcIjpcImw1NzNUVUZmd0hYMG9ycWFnU1FuSlEyNUtXR3hyelFDc0JGN2J6cnFZclk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjE4MDcwNDUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MDQyNjY1NDRcIn0iCn0="  // PUT your SESSION_ID 


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
