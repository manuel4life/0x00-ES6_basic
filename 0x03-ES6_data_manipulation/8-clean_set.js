export default function cleanSet(set, startString) {
  if (typeof startString === 'string' && startString.length > 0) {
    const selected = [...set].filter((value) => {
      return value.startsWith(startString);
    });

    let finalStr = '';
    for (const str of selected) {
      const trucStr = str.replace(startString, '');
      finalStr += `${trucStr}-`;
    }

    return finalStr.slice(0, -1);
  }

  return '';
}

