const prepareOutputFilename = (fileName) => {
  if (typeof fileName === 'string' && fileName.includes('.')) {
    const parseName = fileName.split('.');
    const createFileName = parseName[0] + '-with-watermark.' + parseName[parseName.length - 1]
    
    return createFileName
  } 
  return null;
}

export default prepareOutputFilename