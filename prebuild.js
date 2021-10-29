const fs = require('fs')
const path = require('path')
const config = require('./cms-config')

const scanDirectories = config.collections.filter(collection => collection.extension === 'json').map(collection => ({
  inputDirectory: collection.folder,
  outputFile: `${collection.folder}.json`,
}))

console.log('BUILD JSON DATA')
scanDirectories.forEach(processFiles)

function processFiles({ inputDirectory, outputFile }) {
  console.log('Processing files')
  const dropsDirectory = path.join(process.cwd(), inputDirectory)
  const filenames = fs.readdirSync(dropsDirectory)

  Promise.all(filenames.map(async (filename) => {
    if (!filename.endsWith('.json')) return false

    const filePath = path.join(dropsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const jsonData = JSON.parse(fileContents)

    return jsonData
  })).then(results => {
    const drops = results.filter(Boolean)

    const outputPath = path.join(process.cwd(), outputFile)
    fs.writeFileSync(outputPath, JSON.stringify(drops, null, 2))

    console.log([inputDirectory, outputFile].join('=>'), drops.length)
  })
}
