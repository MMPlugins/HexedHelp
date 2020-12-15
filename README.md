# Embeded Help command plugin for [Dragory's ModMail](https://github.com/dragory/modmailbot)

### Setup: ###
Make sure your running at least v3.0.3 of Modmail.
in your config.ini file, make a new line and add:  
```ini
plugins[] = npm:MMPlugins/HexedHelp#experimental
extraIntents[] = guildMessageReactions
```
Add the dependencies:
```bash
npm i eris-pagination --force
npm i https://github.com/karsh-kay/eris-reactions
```


Restart your bot!

If you'd like to add a language add this line of text to the config file. And copy the contents of en.json and modify it to your language.


```ini
lang = filename
```

And that's it!
Use [prefix]help (by default, your prefix is !) and watch the magic!

### Currently supported lanaguages ###

```
English - en
German - de
```
