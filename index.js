export default function orderByProps(obj, [key1, key2]) {
  const outputArr = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if ((prop === key1) || (prop === key2)) {
        outputArr.unshift({ key: prop, value: obj[prop] });
        delete obj[prop];
      }
    }
  }
  const otherPropArr = obj.entries.sort((a, b) => a[0] - b[0]);
  otherPropArr.forEach((el) => outputArr.push({ key: el[0], value: el[1] }));
  return outputArr;
}
