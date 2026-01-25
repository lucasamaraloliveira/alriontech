
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

async function convertImages() {
    const files = fs.readdirSync(publicDir);
    const pngFiles = files.filter(file => file.endsWith('.png'));

    console.log(`Encontradas ${pngFiles.length} imagens PNG para converter.`);

    for (const file of pngFiles) {
        const inputPath = path.join(publicDir, file);
        const outputPath = path.join(publicDir, file.replace('.png', '.webp'));

        try {
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);

            const statsOrig = fs.statSync(inputPath);
            const statsNew = fs.statSync(outputPath);
            const reduction = (((statsOrig.size - statsNew.size) / statsOrig.size) * 100).toFixed(2);

            console.log(`✅ Convertido: ${file} -> ${file.replace('.png', '.webp')} (${reduction}% de redução)`);
        } catch (err) {
            console.error(`❌ Erro ao converter ${file}:`, err);
        }
    }
}

convertImages();
