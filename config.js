let fs = require('fs')
global.DeveloperMode = 'false' //true atau false, true berati iya false berati tidak Moga paham
global.linkGC = [https://chat.whatsapp.com/LHdkrKiXNu0CatC6GFlIMQ] // link gc lu
global.channelYT = [https://youtube.com/channel/UCvrivTo2m56JpBccnenbI_A] // link yt lu klo g ad g ush di isi
global.owner = ['6282136031499'] // masuk in no lu sebagai owner
global.mods = ['6282136031499'] // masuk in no moderator ny
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // ini buat premium
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // Apikey lu di sini
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ' 
}

// Sticker Watermark
global.packname = 'IPANH Botz'
global.author = 'IPANG BOTZ'

global.multiplier = 36 // ini butuh berapa xp buat levelup 

global.botwm = ['© ipang'] // watermark bot
global.oname = ['ipang'] // nama owner nya

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
