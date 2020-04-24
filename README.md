# Protobot
An auto-answering bot that functions on protobowl.com.
Special thanks to Shrey150 (https://github.com/shrey150/protobowl-bot) for the original code for this bot.

## How do I use it?

All releases are in the `dist` folder. There are now two versions, the older Python version and the new JavaScript version. Here's a breakdown:

Copy the contents of the `protobot.js` file into a new Tampermonkey script, or into your console.

## How does it work?

The answer for every question in protobowl is stored in `$o.answer`. The bot auto-answers for every question, if it's able to (i.e. not timed out, or someone buzzed first). If this happens, you can also manually auto-answer through pressing the f, j, or q key.

"Absolute power corrupts abosolutely" - Lord Acton
