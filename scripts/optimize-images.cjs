const sharp = require('sharp');
const path = require('path');

const targets = [
  { file: 'src/assets/luminos/dashboard student.png', maxWidth: 1400 },
  { file: 'src/assets/p-guard plugin/dashboard.png', maxWidth: 1400 },
  { file: 'src/assets/padeltunisia Mobile/centerlist.png', maxWidth: 800 },
  { file: 'src/assets/padeltunisia web/dashboard.png', maxWidth: 1400 },
  { file: 'src/assets/stagelink/home.png', maxWidth: 1400 },
  { file: 'src/assets/wasfa Tn/recipe detaills.png', maxWidth: 800 },
];

async function main() {
  for (const { file, maxWidth } of targets) {
    const meta = await sharp(file).metadata();
    const before = (await sharp(file).toBuffer()).length;
    const outBuffer = await sharp(file)
      .resize({ width: Math.min(maxWidth, meta.width), withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9, palette: true })
      .toBuffer();
    await sharp(outBuffer).toFile(file);
    console.log(`${file}: ${(before / 1024).toFixed(0)}KB -> ${(outBuffer.length / 1024).toFixed(0)}KB`);
  }

  // Photo: resize to a sane max height for a hero portrait, keep transparency.
  const photoFile = 'src/assets/my picture/photo-transparent.png';
  const photoBefore = (await sharp(photoFile).toBuffer()).length;
  const photoOut = await sharp(photoFile)
    .resize({ width: 700, withoutEnlargement: true })
    .png({ quality: 85, compressionLevel: 9 })
    .toBuffer();
  await sharp(photoOut).toFile(photoFile);
  console.log(`${photoFile}: ${(photoBefore / 1024).toFixed(0)}KB -> ${(photoOut.length / 1024).toFixed(0)}KB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
