import inquirer from 'inquirer'
import { stat } from 'node:fs';
import addImageWatermarkToImage from '../utils/addImageWatermarkToImage.mjs'
import prepareOutputFilename from '../utils/prepareOutputFilename.mjs';

const generateImageWatermark = async (fileName) => {
  const imageWatermark = await inquirer.prompt([
    {
      name: 'watermarkName',
      type: 'input',
      message: 'Enter name of image',
      default: 'logo.png',
    },
  ]);

  stat(`./img/${imageWatermark.watermarkName}`, async (err) => {
    if (err) {
      console.log(err.message)
      process.exit()
    } else {
      const preparedFileName = prepareOutputFilename(fileName)
      if (preparedFileName) {
        addImageWatermarkToImage(`img/${fileName}`, `img/${preparedFileName}`, `img/${imageWatermark.watermarkName}`);
      } else {
        console.log('Incorrect file name')
      }
    }
  })
}

export default generateImageWatermark