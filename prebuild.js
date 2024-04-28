const fs = require('fs')
try {
    fs.rmSync("bin", { recursive: true })
} catch {} // dont error if bin doesnt exist