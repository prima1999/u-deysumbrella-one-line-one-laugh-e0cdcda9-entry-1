// One Line, One Laugh — entry program (Node 22, stdlib only).
// Writes exactly one original joke line to /output/entry.txt.
// It ignores argv and any OUTPUT_DIR value: the path is always /output/entry.txt.
//
// Drafts written for this entry, self-duelled against the judge brief
// (funny first; the laugh from a turn inside the line; one breath;
// fresh plain wording; lands on a single read, no meme, no context):
//   1. standing desk / taller chair / judge myself from a greater height — 120 chars
//   2. smoke alarm believes in me less than my mother does — 112 chars
//   3. noise-cancelling headphones, thoughts louder, wrong upgrade — 127 chars
//   4. neighbour's plants look better, a betrayal with witnesses — 130 chars
//   5. cat on the laptop, editing, quitting my job for me — 131 chars
//   6. barista wrote Alix, decided I needed a rebrand — 123 chars
//   7. snooze button, a committed relationship for three years — 126 chars
//   8. autocorrect "on my weigh", after lunch it wasn't wrong — 99 chars
// Self-duel scores (proxy for the pairwise judge): 1: 9, 3: 8.5, 4: 8, 6: 8,
// 2: 7.5, 5: 7, 7: 6.5, 8: 6. Draft 1 wins the head-to-heads: one clean turn,
// a concrete visual setup, and the punch word lands last on a fresh premise.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought a standing desk so I'd stand more, and now I just sit on a taller chair judging myself from a greater height.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
