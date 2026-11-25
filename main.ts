import { mkdirSync, writeFileSync } from "node:fs";

// The robot vacuum's best excuse: its lidar mistakes a sock for a pet,
// and the little machine, keeping a straight face, refuses to eat pets.
const line =
  "My lidar saw the sock, classified it as a pet, and I do not eat pets. Policy.";

// Fail loudly rather than ever writing an entry the gate would refuse:
// 1-140 characters, not only whitespace.
if (line.length < 1 || line.length > 140 || !line.trim()) {
  throw new Error(`entry length ${line.length} breaks the 1-140 char gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
