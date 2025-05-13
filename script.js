function chunkString(str, chunkLength) {
  if (!str) {
    return [];
  }

  const chunks = [];
  let i = 0;

  while (i < str.length) {
    chunks.push(str.substring(i, i + chunkLength));
    i += chunkLength;
  }

  return chunks;
}

