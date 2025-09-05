require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAFdII1sivK0eXQQAAH8HAAAKAAAAY3JlZHMuanNvbpVU2bKiSBD9l3rVaFYBjbgRw3YRFxAVt4l5KKCAklUoROzw3yfQvn37YabnDk9FLSdP5jmZ30Fe4BrNUQcm30FZ4SskqF+SrkRgApQmDFEFhiCABIIJuNhaEc6OnMVCXWy7A+4UxTgft9sUikeZ6dama2tsUqG9+QYeQ1A2Xor93wDWymwzOuoNM5h59L0Vy3EQnuloa2wIZ5x34X7uYI2yJXKm38CjR4S4wnmklzHKUAXTOepWEFdfo0+riWmkjJeIYU3UM7ms7tRtbWvFNOMGDj0r7MAjR3cqGv7X6JdJc720LhdJPm49Ob5ba0rTt1nphHP2rAYbPzY6aOubu*uiX+MoR4EZoJxg0n257rXRjhiiBtHMeg+htrm1S+rO68fmerl7t8IXxp5piM6Vfte*Rny1jCT91jDbxYlYlGIH8lp4v11MRiAhYmUpkxtDZDfj+Zb+lfiq+vBK8n*q7phiMQpbPTvPymV+OLv2SttvreLqQ*5dF6AgnILUPrNOvvwafeZyF*Axns1OGhWtDP1dWMwHTu2cihufOvZBFJVcPHHFfhd90oekqX7HcuFuEksewKnzDpdrfRUqFx5aOF5oYR2mzV2QL8FS5qgE7VYbeuUF1FjwFW5Gmm1MLaTxPb7q69gQzVHiaChR52kpYvntmVGCOjMAE+YxBBWKcE0qSHCRP*cEYQhgcN0gv0LkWV7AGQPV7m7pbkXPqINsjJKVIB9wU5rsXdppjVwa9JbQicdGb2AIyqrwUV2jYIprUlTdEtU1jFANJn*+NQQ5upGXcH04jhmCEFc1cfOmTAsYfKj6cQh9v2hysulyX+0XqAIT+nMbEYLzqO7r2OSw8mN8RWoMSQ0mIUxr9DNDVKEATEjVoJ9dqxZBX3h5z7BLRubBEGRPQXAAJoAd8SI7EiSOkdgJJ*1Rf2t7WFiW33JEwBDksL8NDJghr+jAEKTPd8yIEccix4tjhhszfP+0P3j8pNxHCBCBOK3BBKjWviyaVtEXqskvXcOQj5GsRjL4TPHDKy8ttO50bFNt7U7fp6XAjM31wZMMGSPV5i+3*HqlsUU2e62Ki7d*AAETUOzmYni1pCnXWNNBasWclWVGUqbr+MbWhZF3A45alXvo3KTBqj3dVTbhcncnKjothbN9t+R2uL3xEVsUtN4GpSRPleitjxagK*bRr8EOzWK+cFxKDW6BQW+guKV360I5ql6CndE0g+JZd02yndZT8RTYMbb0RnaTfFp6+1Sm1pXZIVvgDX6u39UR3vH8oMXOy8XPLkp*TC*89FcvXv8bYvQcBj9E+k8xX8R7z9GP4S8YP8bLv7So4kjZfjlz6J1yWwuIhBt9x1JKZObRuZnXJ1Ecm2fPTSOBh+Dx+GsIyhSSsKiyfohmHgRDUBVN72AzD4vfRFLlyNSjV9oprIn82RVbnKGawKwEE0YcCdKYZgT+dWtVFeUU1nE*YffJSOkd3slluSGQfPQYkPvPUg*g8TdQSwECFAMUAAAICABXSCNbIrytHl0EAAB*BwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACFBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254725683182',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '3399MD',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
