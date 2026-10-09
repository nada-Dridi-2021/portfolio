const sharp = require('sharp');

const SRC = 'src/assets/my picture/photo.png';
const OUT = 'src/assets/my picture/photo-transparent.png';

async function main() {
  const img = sharp(SRC);
  const meta = await img.metadata();
  const { width, height } = meta;

  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const channels = info.channels;

  function isNearBlack(x, y) {
    const idx = (y * width + x) * channels;
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    return r < 25 && g < 25 && b < 25;
  }

  let blackBarHeight = 0;
  for (let y = 0; y < height; y++) {
    let blackCount = 0;
    const samples = [0, Math.floor(width * 0.25), Math.floor(width * 0.5), Math.floor(width * 0.75), width - 1];
    for (const x of samples) {
      if (isNearBlack(x, y)) blackCount++;
    }
    if (blackCount >= 4) {
      blackBarHeight = y + 1;
    } else {
      break;
    }
  }
  console.log('Detected black bar height:', blackBarHeight);

  const cropTop = blackBarHeight;
  const cropHeight = height - cropTop;

  const cropped = await sharp(SRC)
    .extract({ left: 0, top: cropTop, width, height: cropHeight })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const cw = cropped.info.width;
  const ch = cropped.info.height;
  const cdata = cropped.data;
  const cchannels = cropped.info.channels;

  const WHITE_THRESHOLD = 235;
  const FALLOFF_START = 200;

  for (let i = 0; i < cw * ch; i++) {
    const idx = i * cchannels;
    const r = cdata[idx], g = cdata[idx + 1], b = cdata[idx + 2];
    const minC = Math.min(r, g, b);
    const maxC = Math.max(r, g, b);
    const isGrayish = (maxC - minC) < 18;

    if (isGrayish && minC >= WHITE_THRESHOLD) {
      cdata[idx + 3] = 0;
    } else if (isGrayish && minC >= FALLOFF_START) {
      const t = (minC - FALLOFF_START) / (WHITE_THRESHOLD - FALLOFF_START);
      cdata[idx + 3] = Math.round(255 * (1 - t));
    }
  }

  await sharp(cdata, { raw: { width: cw, height: ch, channels: cchannels } })
    .png()
    .toFile(OUT);

  console.log('Done. Output:', OUT, 'size:', cw, 'x', ch);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
