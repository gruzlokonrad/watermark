import imagemin from 'imagemin';
import imageminPngquant from "imagemin-pngquant";

const compressPNG = async (folderPath) => {
  // const folderPath = '/Users/konradgruzlo/Documents/dev/GitLab/artas/public/services/' + folderName
  const files = await imagemin([`${folderPath}/*.png`], {
    destination: `${folderPath}`,
    plugins: [
      imageminPngquant({
        quality: [0.1, 0.2]
      })
    ]
  });
  console.log(files)
}

export default compressPNG