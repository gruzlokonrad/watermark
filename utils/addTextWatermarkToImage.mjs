import Jimp from "jimp";

const addTextWatermarkToImage = async function (inputFile, outputFile, text) {
  try {
    const textData = {
      text,
      alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
    };
    const image = await Jimp.read(inputFile);
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    image.print(font, 0, 0, textData, image.getWidth(), image.getHeight())
    await image.quality(100).writeAsync(outputFile);
  } catch(e) {
    console.log('Something went wrong... Try again!')
  }
};

export default addTextWatermarkToImage