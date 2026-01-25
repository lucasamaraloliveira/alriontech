
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const sizes = [400, 800, 1200];

async function convertImages() {
    const files = fs.readdirSync(publicDir);
    // Filter for original webp files (not containing -400, -800, -1200)
    const webpFiles = files.filter(file =>
        file.endsWith('.webp') &&
        !sizes.some(size => file.includes(`-${size}.webp`))
    );

    console.log(`Encontradas ${webpFiles.length} imagens WebP para processar.`);

    for (const file of webpFiles) {
        const inputPath = path.join(publicDir, file);

        try {
            // Generate sizes
            for (const size of sizes) {
                const sizedPath = path.join(publicDir, file.replace('.webp', `-${size}.webp`));
                await sharp(inputPath)
                    .resize(size)
                    .webp({ quality: 80 })
                    .toFile(sizedPath);
                console.log(`   - Gerado ${size}px: ${file.replace('.webp', `-${size}.webp`)}`);
            }
        } catch (err) {
            console.error(`❌ Erro ao processar ${file}:`, err);
        }
    }
}

convertImages();
