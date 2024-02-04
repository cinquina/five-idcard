fx_version "cerulean"
game "gta5"

author "Five Developments"
description "built using ps react boilerplate!"
lua54 'yes'

ui_page 'web/build/index.html'

shared_script "config.lua"
server_scripts {
  "bridge/**/*.lua", -- bridge took from https://github.com/alp1x/um-idcard/bridge, all credits goes to alp1x :)
  "server.lua"
}
client_script "client.lua"

files {
	'web/build/index.html',
	'web/build/**/*',
}