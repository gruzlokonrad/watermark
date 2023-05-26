import { stat } from 'node:fs';
import inquirer from 'inquirer'
import convertImage from './utils/convertImage.mjs';
import compressPNG from './utils/compressPNG.mjs';




const runConvert = (folderNames) => {
  const basePath = '/Users/konradgruzlo/Documents/dev/GitLab/hhc/public/'
  folderNames.forEach(folderName => {
    const folderPath = basePath + folderName
    // CONVERT
    // convertImage(folderPath, 'jpg', 'png')
    // convertImage(`${folderPath}/realization`, 'jpg', 'png')
    
    // COMPRESS
    compressPNG(folderPath)
    // compressPNG(`${folderPath}/realization`)
  })
}

runConvert(['img'])