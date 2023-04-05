import { stat } from 'node:fs';
import inquirer from 'inquirer'
import generateImageWatermark from './helpers/generateImageWatermark.mjs'
import generateTextWatermark from './helpers/generateTextWatermark.mjs'

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
  folderNames.forEach(name => {
    // CONVERT
    // convertImage(name, 'jpg', 'png')
    // convertImage(`${name}/realization`, 'jpg', 'png')
    
    // COMPRESS
    // compressPNG(name)
    // compressPNG(`${name}/realization`)
  })
}

runConvert([
  'Golvrenovering',
  'Golvslipning',
  'Hetaarbeten',
  'Husgrund-H',
  'HyraGravmaskin',
  'Koksrenovering',
  'Lagenhetsrenovering',
  'Lastbil_transporter',
  'Malning',
  'Markarbeten',
  'Platmastare',
  'Pooler',
  'Takrenovering',
  'Tillbygnad',
  'Totalenterprenad',
])