import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const heroTasks = [
  {
    src: "public/images/hero/hero.jpg",
    widths: [1280, 1920, 2560],
    formats: ["jpeg", "webp", "avif"],
  },
  {
    src: "public/images/hero/hero-mobile.jpeg",
    widths: [640, 960, 1280],
    formats: ["jpeg", "webp"],
  },
];

const serviceTasks = ["public/images/services", [480, 960, 1440], ["jpeg", "webp"]];
const cakeTasks = ["public/images/cakes", [420, 760, 1080], ["jpeg", "webp"]];

function withVariantName(filePath, width, format) {
  const ext = path.extname(filePath);
  const base = filePath.slice(0, -ext.length);
  const normalizedFormat = format === "jpeg" ? "jpg" : format;
  return `${base}-${width}.${normalizedFormat}`;
}

function encodeOptions(format) {
  if (format === "jpeg") {
    return {
      quality: 84,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
      progressive: true,
    };
  }
  if (format === "webp") {
    return { quality: 84, effort: 6 };
  }
  return { quality: 52, effort: 7 };
}

async function optimizeToVariant(src, width, format) {
  const output = withVariantName(src, width, format);
  await sharp(path.join(root, src))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .toFormat(format, encodeOptions(format))
    .toFile(path.join(root, output));
  return output;
}

async function collectImageFiles(dir) {
  const absoluteDir = path.join(root, dir);
  const entries = await readdir(absoluteDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(dir, entry.name))
    .filter((filePath) => /\.(jpe?g|png)$/i.test(filePath));
}

async function runTaskSet(srcFiles, widths, formats) {
  const generated = [];
  for (const src of srcFiles) {
    for (const width of widths) {
      for (const format of formats) {
        generated.push(await optimizeToVariant(src, width, format));
      }
    }
  }
  return generated;
}

async function fileSize(filePath) {
  const fileStats = await stat(path.join(root, filePath));
  return fileStats.size;
}

function asKB(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function main() {
  const generated = [];

  for (const task of heroTasks) {
    generated.push(...(await runTaskSet([task.src], task.widths, task.formats)));
  }

  const [servicesDir, serviceWidths, serviceFormats] = serviceTasks;
  const serviceFiles = await collectImageFiles(servicesDir);
  generated.push(...(await runTaskSet(serviceFiles, serviceWidths, serviceFormats)));

  const [cakesDir, cakeWidths, cakeFormats] = cakeTasks;
  const cakeFiles = await collectImageFiles(cakesDir);
  generated.push(...(await runTaskSet(cakeFiles, cakeWidths, cakeFormats)));

  console.log(`Generated ${generated.length} optimized variants.`);

  const sample = [
    ["public/images/hero/hero.jpg", "public/images/hero/hero-1920.webp"],
    ["public/images/hero/hero-mobile.jpeg", "public/images/hero/hero-mobile-960.webp"],
    ["public/images/services/para-ti.jpeg", "public/images/services/para-ti-960.webp"],
    ["public/images/cakes/Nuestra-tarta-de-queso.jpeg", "public/images/cakes/Nuestra-tarta-de-queso-760.webp"],
  ];

  for (const [original, optimized] of sample) {
    const before = await fileSize(original);
    const after = await fileSize(optimized);
    console.log(`${original} -> ${optimized}: ${asKB(before)} -> ${asKB(after)}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
