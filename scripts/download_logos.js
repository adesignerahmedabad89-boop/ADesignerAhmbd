const fs = require('fs');
const path = require('path');
const https = require('https');

const destDir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const logos = [
  { name: 'idfc.svg', url: 'https://granth.in/wp-content/uploads/2025/06/IDFC.svg' },
  { name: 'welspun.svg', url: 'https://granth.in/wp-content/uploads/2025/08/Granth-Main-Clients-Logo.zip-2.svg' },
  { name: 'adani.svg', url: 'https://granth.in/wp-content/uploads/2025/08/adani.svg' },
  { name: 'fleet.svg', url: 'https://granth.in/wp-content/uploads/2025/06/Fleet-1.svg' },
  { name: 'sagility.webp', url: 'https://granth.in/wp-content/uploads/2025/04/SAGILITY-1.webp' },
  { name: 'uplers.svg', url: 'https://granth.in/wp-content/uploads/2025/06/uplers.svg' },
  { name: 'volkswagen.svg', url: 'https://granth.in/wp-content/uploads/2025/08/Granth-Main-Clients-Logo.zip-7.svg' },
  { name: 'hyfun.svg', url: 'https://granth.in/wp-content/uploads/2025/08/hyfun-2.svg' },
  { name: 'corona.svg', url: 'https://granth.in/wp-content/uploads/2025/08/Corona-150x90-1.svg' },
  { name: 'rasna.svg', url: 'https://granth.in/wp-content/uploads/2025/08/Granth-Main-Clients-Logo.zip-10.svg' },
  { name: 'two-brothers.svg', url: 'https://granth.in/wp-content/uploads/2025/08/two-brothers-1-1.svg' },
  { name: 'mygate.svg', url: 'https://granth.in/wp-content/uploads/2025/08/Granth-Main-Clients-Logo.zip-13.svg' },
  { name: 'sahaj.svg', url: 'https://granth.in/wp-content/uploads/2025/08/Granth-Main-Clients-Logo.zip-14.svg' }
];

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: HTTP ${res.statusCode}`));
        return;
      }
      const writeStream = fs.createWriteStream(filePath);
      res.pipe(writeStream);
      writeStream.on('finish', () => {
        writeStream.close();
        console.log(`Downloaded ${url} -> ${filePath}`);
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  for (const logo of logos) {
    const target = path.join(destDir, logo.name);
    try {
      await download(logo.url, target);
    } catch (err) {
      console.error(`Error downloading ${logo.name}:`, err.message);
    }
  }
}

run();
