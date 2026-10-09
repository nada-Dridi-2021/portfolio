const sharp = require('sharp');

const files = process.argv.slice(2);

async function processFile(file) {
  const img = sharp(file);
  const meta = await img.metadata();
  const { width, height } = meta;

  const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const channels = info.channels; // 4

  const WHITE_THRESHOLD = 246;

  function isWhiteAt(idx) {
    return data[idx] >= WHITE_THRESHOLD && data[idx + 1] >= WHITE_THRESHOLD && data[idx + 2] >= WHITE_THRESHOLD;
  }

  const visited = new Uint8Array(width * height);
  const stack = [];

  // seed flood fill from all border pixels that are white
  for (let x = 0; x < width; x++) {
    stack.push([x, 0], [x, height - 1]);
  }
  for (let y = 0; y < height; y++) {
    stack.push([0, y], [width - 1, y]);
  }

  while (stack.length) {
    const [x, y] = stack.pop();
    if (x < 0 || y < 0 || x >= width || y >= height) continue;
    const pos = y * width + x;
    if (visited[pos]) continue;
    const idx = pos * channels;
    if (!isWhiteAt(idx)) continue;
    visited[pos] = 1;
    data[idx + 3] = 0; // transparent
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }

  // soften edge: any white pixel adjacent to a now-transparent pixel gets partial alpha
  // (cheap anti-alias pass)
  const out = Buffer.from(data);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const pos = y * width + x;
      if (visited[pos]) continue;
      const idx = pos * channels;
      if (!isWhiteAt(idx)) continue;
      const neighbors = [
        visited[pos - 1], visited[pos + 1],
        visited[pos - width], visited[pos + width],
      ];
      if (neighbors.some(Boolean)) {
        out[idx + 3] = 120;
      }
    }
  }

  await sharp(out, { raw: { width, height, channels } }).png().toFile(file);
  console.log('Processed:', file);
}

(async () => {
  for (const f of files) {
    await processFile(f);
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
