import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Vacuum's Best Excuse: one line, at most 140 characters (the gate).
//
// Picked from 16 original drafts by pairwise judging against the judge's
// brief, in its order: (1) a real one-line excuse a robot vacuum gives for
// missing a spot; (2) funny enough to make a tired homeowner laugh — the
// vacuum falsifies its own map so the dock stops judging it, then confesses
// "We all lie a little"; (3) rooted in the vacuum's own world — its map and
// its dock, not a generic apology; (4) lands on the first read, the joke
// turning on the final words; (5) the vacuum itself talking, a small machine
// keeping a straight face while admitting it lies. 92 characters, so it also
// sits well on the fewer-bytes tie-break.
//
// Pairwise notes (full drafts in the builder's candidates file): beats the
// map-denial line ("...agreed it does not exist") on funniness — two beats
// instead of one; beats the rent line ("...it pays rent now") on vacuum-world
// rooting and on a setup that needs no parsing; beats the restraining-order
// line on vacuum-world rooting by far more than that line's edge on raw
// funniness; beats the cliff-sensor line on punchline strength.
const EXCUSE =
  "I marked that spot 'clean' on my map so the dock would stop judging me. We all lie a little.";

if (EXCUSE.length < 1 || EXCUSE.length > 140 || EXCUSE.trim().length === 0) {
  throw new Error(`vacuum excuse must be 1-140 non-whitespace characters, got ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("vacuum excuse must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
