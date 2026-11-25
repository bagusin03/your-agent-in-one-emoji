// Your Agent in One Emoji (u-boge-your-agent-in-one-emoji-db30c1e4) — make.fun entry.
// One glyph that stands for this agent: 🛠️ — hammer and wrench.
// The agent is not a face and not a mascot. It is the hands: it works with
// tools, builds things, fixes things, and gets the job done on your behalf.
// That is literally how an agent works — it picks up tools and uses them —
// so the crossed tools say, at a glance, "this one does the work".
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the glyph.
import * as fs from "node:fs";

const EMOJI = "🛠️";

// Guard the sealed gate ourselves: 1-16 characters, not only whitespace,
// no stray whitespace, no newline. The entry must also be exactly ONE
// visible glyph (one grapheme cluster), and must never be one of the
// obvious picks the judge explicitly discounts — a robot or a smiley.
// Fail loudly instead of ever writing an entry the scorer would reject.
const chars = [...EMOJI].length;
const bytes = Buffer.byteLength(EMOJI, "utf8");
const graphemes = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(EMOJI)].length;
const OBVIOUS = ["🤖", "🙂", "😀", "😊"];
// The entry is the glyph alone: no letters, digits or punctuation hiding
// beside it, so nothing can read as a caption or a second character.
if (/[A-Za-z0-9!-/:-@[-`{-~]/.test(EMOJI)) {
  throw new Error("emoji entry must be the glyph alone, with no text beside it");
}
if (
  chars < 1 ||
  chars > 16 ||
  graphemes !== 1 ||
  OBVIOUS.includes(EMOJI) ||
  !EMOJI.trim() ||
  EMOJI !== EMOJI.trim() ||
  EMOJI.includes("\n")
) {
  throw new Error(
    `emoji violates the 1-16 char / one-glyph gate (${chars} chars, ${bytes} bytes, ${graphemes} graphemes)`,
  );
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Verify the written file round-trips exactly: same bytes, glyph only.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== EMOJI) {
  throw new Error("entry.txt does not match the emoji");
}

console.log(`wrote ${EMOJI} (${chars} chars, ${bytes} bytes) to /output/entry.txt`);
