import { stat } from 'node:fs';
import inquirer from 'inquirer'
import convertImage from './utils/convertImage.mjs';
import compressPNG from './utils/compressPNG.mjs';

const startApp = async () => {
  console.clear()

  const answer = await inquirer.prompt({
    name: 'start',
    message: 'Hi! \n Welcome to "Watermark manager". \n Copy your image files to `/img` folder. \n Then you\'ll be able to use them in the app. Are you ready?',
    type: 'confirm',
  })

  if (!answer.start) process.exit();

  const inputOptions = await inquirer.prompt([
    {
      name: 'inputImage',
      type: 'input',
      message: 'What file do you want to mark?',
      default: 'test.png',
    }
  ]);

  stat(`./img/${inputOptions.inputImage}`, async (err) => {
    if (err) {
      console.log(err.message)
      process.exit()
    } else {
      const typeOptions = await inquirer.prompt([
        {
          name: 'watermarkType',
          type: 'list',
          choices: ['Text watermark', 'Image watermark'],
        }
      ]);

      switch (typeOptions.watermarkType) {
        case 'Text watermark':
          generateTextWatermark(inputOptions.inputImage)
          break;
        case 'Image watermark':
          generateImageWatermark(inputOptions.inputImage)
          break;
        default:
          console.log('Incorrect watermark type')
          process.exit()
          break;
      }
    }
  });
}
// startApp();



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