// Real-Life Patch Notes: The Comedy Changelog — entry program.
//
// Writes one one-line patch note (max 160 characters) to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic.
//
// Candidates considered (all <= 160 chars):
//   "v1.9.4: Fixed a bug where the bladder only reported full at 3 a.m. It now files its reports during waking hours."
//   "v3.7.2: Fixed a bug where sneezing once triggered a second, louder sneeze. The first sneeze has been reminded it is not a drumroll."
// Chosen: "v4.2.0: Fixed a bug where the brain replayed your most embarrassing moment from 2009 every night at 2 a.m. Skip button still in beta."
// Why it wins against the judge brief: it names a specific, instantly
// recognisable human bug (the 2 a.m. cringe replay — the reader winces and
// laughs at once), it reads like a real shipped release note (version number,
// terse engineering register, fix stated as if it shipped), and the kicker
// "Skip button still in beta" is a second joke that uses the character
// budget instead of padding it. No setup the punchline does not need.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v4.2.0: Fixed a bug where the brain replayed your most embarrassing moment from 2009 every night at 2 a.m. Skip button still in beta.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 160
// characters, not only white space.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry must be 1-160 chars, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (!ENTRY.startsWith("v") || !ENTRY.includes("Fixed a bug")) {
  throw new Error("entry must read as a versioned patch note");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`${ENTRY.length} chars: ${ENTRY}`);
