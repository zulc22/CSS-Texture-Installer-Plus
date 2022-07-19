const child_process = require('child_process')
const fs = require('fs')

child_process.execSync("pkg -t node12-win-x64 main.js --config package.json --out-path bin/")
fs.copyFileSync("7za.exe", "bin/")