// One Emoji, One Dream Vacation — make.fun entry.
// Writes exactly one emoji to $MAKEFUN_OUTPUT_DIR/entry.txt
// (the grader sets MAKEFUN_OUTPUT_DIR=/output).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pick: sunrise over the sea. A whole postcard in one glyph —
// sun, sea and horizon at dawn on the beach, the moment you book
// the flight for. Vivid at a glance, specific (a dawn, not any
// holiday), and readable on any screen at any size.
const EMOJI = "🌅";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, EMOJI, "utf8");

// Read back and enforce the gate ourselves: UTF-8 text of 1 to 8
// characters, not only white space. Fail loudly instead of
// shipping an entry the scorer would mark invalid.
const written = readFileSync(outFile, "utf8");
const chars = [...written];
if (chars.length < 1 || chars.length > 8 || written.trim().length === 0) {
  throw new Error(`Invalid entry ${JSON.stringify(written)}: must be 1-8 non-blank characters`);
}
console.log(`Wrote entry: ${EMOJI}`);
