const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === null || arrayOfString === undefined) return undefined;
  let max_str = arrayOfString[0];
  for (const maxi of arrayOfString) {
      if (maxi.length >= max_str[0].length) {
          if (maxi.length === max_str[0].length) {
              max_str.push(maxi)
          } else {
              max_str = [maxi];
          }
      }
  }
  return max_str;
  
}
module.exports = getMaxLengthString
