#Slack Bot Framework

A simple to use framework to receive and respond to real time messages.

## Set Up

#### Slack Slash Commands
Navigate to https://slack.com/apps and click on "Build your own".  
Select "Something just for my team" from the next menu.  
Select Bots, give your bot a username and click on the button.    
Copy the Slack Token and add it to the environment variables of your server.  

On a Mac:  
`export SLACK_API_TOKEN={slack_token}`

#### Slack Bot Framework
Clone the repository onto the server (with a publicly accessible address).  
Install node packages by running:  
`$ npm install`  

Ensure you have Gulp installed:     
`$ npm install -g gulp`

When making changes to the src files, watch the changes with gulp:  
`$ gulp`

To start the server, run:  
`$ npm start`

The debug logs will be shown in the terminal.  


## Examples

In the src directory, you will find two example commands.

#### Hello Command
A command that reads the `hello` command and responds with text.

#### xkcd Command
A command that reads the `xkcd` command and responds with the latest xkcd web comic image.  
RTM can only reply with simple text. To send an image, we will need to use the WebClient `web.chat.postMessage(...)`  
While we wait for the bot to receive the image, I send a "Processing..." message to the user to notify that the command was indeed received.


## References

Slack Bots    
https://api.slack.com/bot-users

Real time messaging  
https://api.slack.com/rtm

Adding attachments to the message with WebClient    
https://api.slack.com/methods/chat.postMessage