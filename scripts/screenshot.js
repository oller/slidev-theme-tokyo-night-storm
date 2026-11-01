import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const cliPath = path.resolve(rootDir, 'node_modules/@slidev/cli/bin/slidev.mjs')
const outputDir = path.resolve(rootDir, 'example-export')

console.log('Generating screenshots...')

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'slidev-export-'))
try {
  const args = [
    cliPath,
    'export',
    'example.md',
    '--format',
    'png',
    '--dark',
    '--output',
    tmpDir
  ]
  // Optional: use a system browser instead of Playwright's bundled Chromium,
  // e.g. CHROMIUM_PATH=/usr/bin/google-chrome pnpm run screenshot
  if (process.env.CHROMIUM_PATH) {
    args.push('--executable-path', process.env.CHROMIUM_PATH)
  }

  execFileSync(process.execPath, args, {
    cwd: rootDir,
    stdio: 'inherit'
  })

  fs.mkdirSync(outputDir, { recursive: true })

  // Drop stale screenshots so removed slides don't linger
  for (const file of fs.readdirSync(outputDir)) {
    if (file.endsWith('.png')) {
      fs.rmSync(path.join(outputDir, file))
    }
  }

  const files = fs.readdirSync(tmpDir).filter(f => f.endsWith('.png'))
  for (const file of files) {
    fs.copyFileSync(path.join(tmpDir, file), path.join(outputDir, file))
  }
  console.log(`✓ Copied ${files.length} screenshots to ${outputDir}`)
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true })
}
