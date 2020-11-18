const fs = require('fs')

fs.readFile('a-simple-file.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
console.log(process.argv[2])