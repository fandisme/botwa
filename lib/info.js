exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif, grupch1, grupch2) => {
	return ` ${BotName}
  
HALO *${id.split("@s.whatsapp.net")[0]}*
"
APA KABAR? SEMOGA BAIK-BAIK SAJA!
Sebelum menggunakan bot ini ada baiknya kalian melihat menu *!info* dan *!donasi* 😁

💵TOLONG BANTU DONASI AGAR BOT INI BISA TERUS BERJALAN💵
💵GUNAKAN COMMAND !donasi untuk berdonasi💵

INFO BOT! :
🔱 *AUTHOR*: YUSUF AFFANDI
🔱 *GITHUB*: https://github.com/fandisme/botwa
🔱 *INSTAGRAM*: ${instagram}
🔱 *WHATSAPP* : 089646665153


bot aktif selama : ${kapanbotaktif}
JANGAN LUPA FOLLOW instagram
 ${instagram}
`
}
