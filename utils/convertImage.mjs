import Jimp from "jimp";
import * as fs from "fs";

const convertImage = async (folderPath, inputExt, outputExt) => {
  // const folderPath = '/Users/konradgruzlo/Documents/dev/GitLab/artas/public/services/' + folderName
  try {
    if (fs.existsSync(folderPath)) {
      await fs.readdirSync(folderPath).map(fileName => {
        if (fileName.includes('.') && fileName.split(".")[1] === inputExt) {
          const filePath = folderPath + '/' + fileName
          Jimp.read(filePath, async (err, file) => {
            if (err) throw err;
            const baseName = fileName.split('.')[0] + `.${outputExt}`
            const currentFilePath = folderPath + '/' + baseName
            // const copyFilePath = `${folderPath}/copy/${baseName}`

            file.write(currentFilePath)
            fs.unlinkSync(filePath);
          })
        }
      })
    } else {
      console.warn("Folder does not exist");
    }
  } catch (err) {
    console.error(err);
  }

}

export default convertImage