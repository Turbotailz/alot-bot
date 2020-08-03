# alot-bot
A Discord bot that reacts with an Alot emoji whenever someone misspells "a lot"

## Installation
- Clone this repo - `git clone https://github.com/Turbotailz/alot-bot`
- Run `npm install`
- Copy `base-config.json` to `config.json`
- Edit `config.json`:
  - `token` is your bot's auth token
  - `alotEmojiId` is the ID of the emoji you wish to add as a reaction
  - `ignoredChannels` is an array of channels you wish to ignore
- Run the bot with `node index.js`

The bot will react to any mention of the word "alot". It will also say "thank you" to any user who says "good bot".

## Alot image
Here's a picture of an Alot for your convenience. Add it to your Discord server's emoji list.  
![Alot](https://cdn.discordapp.com/emojis/554175101810114582.png)

## Getting the emoji ID
If you named the emoji `alot` then you can type `\:alot:` in any channel (on your server) to get the ID.

The result will look similar to this:  
`<:alot:554175101810114582>`

Copy the numbers only, that is your emoji ID. 
