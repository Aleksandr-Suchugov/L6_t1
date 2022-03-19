export default function orderByProps(obj, [key1, key2]) {
  const outputArr = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if ((prop === key1) || (prop === key2)) {
        outputArr.push({ key: prop, value: obj[prop] });
        delete obj[prop];
      }
    }
  }
  const otherPropArr = Object.entries(obj).sort();
  otherPropArr.forEach((el) => outputArr.push({ key: el[0], value: el[1] }));
  return outputArr;
}
