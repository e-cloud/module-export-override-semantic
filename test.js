const glob = require('glob')
const path = require('path')
const argv = process.argv

const paths = glob.sync(path.resolve(argv[2], '**/entry.js'))

paths.forEach(function (p) {
    try {
        console.log('\n>>>: ')
        require(p)
    } catch (e) {
        console.log(e)
    }
})

