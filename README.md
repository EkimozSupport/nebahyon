# MerakliMusicBot


![LOGO](https://telegra.ph/file/ee9940ece5ffc1d463e31.jpg)


### Requirements ([wiki](../../wiki/Requirements))

- FFMPEG
- NodeJs > V14. (Latest is better)
- Yarn (Optional)

### Environment Variables

| Name         | Description                                                                                     | Required |
|--------------|-------------------------------------------------------------------------------------------------|----------|
| API_ID       | Your telegram app's API_ID. Get it from https://my.telegram.org/apps                            | True     |
| API_HASH     | Your telegram app's API_HASH. Get it from https://my.telegram.org/apps                          | True     |
| BOT_TOKEN    | Bot Token from @BotFather                                                                       | True     |
| LOG_CHANNEL  | Chat ID of Channel/Group to keep logs. (Make sure to add VC User and Bot to the group)          | True     |
| SESSION      | GramJS/Telethon session string of the VC User                                                   | True     |
| CODEC        | Custom codec and other extra FFMPEG params support. Default Value : `-c:a libmp3lame -b:a 128K` | False    |
| MAX_DURATION | Set maximum duration of the stream. Default - `360` seconds                                     | False    | 


### Deploy
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/EkimozSupport/nebahyon)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/EkimozSupport/nebahyon&envs=API_ID,API_HASH,BOT_TOKEN,LOG_CHANNEL,SESSION,CODEC,MAX_DURATION&optionalEnvs=CODEC,MAX_DURATION&API_IDDesc=Get%20API_ID%20from%20https://my.telegram.org/apps.&API_HASHDesc=Get%20API_HASH%20from%20https://my.telegram.org/apps.&BOT_TOKENDesc=Bot%20Token%20from%20@BotFather&LOG_CHANNELDesc=LOG%20Channel%20ID%20(Make%20sure%20bot%20and%20VC%20User%20are%20added%20in%20the%20group)&SESSIONDesc=GramJS/Telethon%20Session%20of%20the%20VC%20User%22&CODECDesc=Custom%20FFMPEG%20Codec%20and%20Bitrate&MAX_DURATIONDesc=Maximum%20Duration%20Support%20for%20Each%20Stream)

## Bot Usage

- `/jiosaavn | /jsvn <song name>` : Play Song from JioSaavn.
- `/ytplay | /play <song name | link>`: Play Song from Youtube.
- `/queue | /q` : Show Queue List
- `/pause | /p` : Pause the Stream
- `/resume | /r` : Resume the Stream
- `/skip | /next` : Skip the Stream
- `/stopvc` : Stop the Stream

## Thanks to
- [ArnabXD](https://github.com/ArnabXD) 
- [@cachecleanerjeet](https://github.com/cachecleanerjeet) for [JioSaavn API](https://github.com/cachecleanerjeet/JiosaavnAPI)
- Respective devs of all the packages/libraries used.
