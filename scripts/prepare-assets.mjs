import sharp from "sharp";
import { readdir, unlink, mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
await mkdir(path.join(root, "public/brand"), { recursive: true });
const original = path.join(root, "public/brand/logo-original.jpg");
// Crop only; do not redraw or alter the supplied brand artwork.
await sharp(original).extract({ left: 385, top: 345, width: 1320, height: 765 }).resize(300).webp({ quality: 92 }).toFile("public/brand/eye-mark.webp");
await sharp(original).extract({ left: 270, top: 335, width: 1520, height: 1340 }).resize(760).webp({ quality: 90 }).toFile("public/brand/logo-complete.webp");
const icon = await sharp(original).extract({ left: 385, top: 345, width: 1320, height: 765 }).resize(156, 91).png().toBuffer();
await sharp({ create: { width: 180, height: 180, channels: 3, background: "#ffffff" } }).composite([{ input: icon, left: 12, top: 44 }]).png().toFile("public/apple-icon.png");
await sharp("public/apple-icon.png").resize(64).png().toFile("public/icon.png");
const wordmark = await sharp(original).extract({ left: 270, top: 335, width: 1520, height: 1340 }).resize(310).png().toBuffer();
const social = Buffer.from(`<svg width="1200" height="630"><rect width="1200" height="630" fill="#f6f7f3"/><rect x="45" y="45" width="8" height="540" fill="#21adb3"/><text x="95" y="115" font-family="Arial" font-size="18" fill="#102e43" letter-spacing="3">MIRROR METRICS</text><text x="95" y="240" font-family="Arial" font-size="60" fill="#102e43">Research that</text><text x="95" y="315" font-family="Arial" font-size="60" fill="#102e43">reflects reality.</text><text x="95" y="485" font-family="Arial" font-size="23" fill="#596974">Bangladesh-based social &amp; market research</text><text x="95" y="535" font-family="Arial" font-size="17" fill="#102e43">Mirror Metrics Research and Consultancy Ltd</text></svg>`);
await sharp(social).composite([{ input: wordmark, left: 840, top: 170 }]).png().toFile("public/opengraph-image.png");
for (const file of await readdir("public/images")) {
  if (!file.endsWith(".jpg")) continue;
  const input = path.join("public/images", file);
  await sharp(input).rotate().resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 83 }).toFile(input.replace(/\.jpg$/, ".webp"));
  await unlink(input);
}
console.log("Logo derivatives, sharing image, and local WebP photographs prepared.");
