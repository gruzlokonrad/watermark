import inquirer from 'inquirer'
import addTextWatermarkToImage from '../utils/addTextWatermarkToImage.mjs'
import prepareOutputFilename from '../utils/prepareOutputFilename.mjs';

const generateTextWatermark = async (fileName) => {
  const textWatermark = await inquirer.prompt([
    {
      name: 'watermarkName',
      type: 'input',
      message: 'Enter watermark',
      default: 'gruzo.dev',
    },
  ]);


  const preparedFileName = prepareOutputFilename(fileName)

  if (preparedFileName) {
    addTextWatermarkToImage(`img/${fileName}`, `img/${preparedFileName}`, `${textWatermark.watermarkName}`);
  } else {
    console.log('Error:', preparedFileName)
  }
}

export default generateTextWatermark