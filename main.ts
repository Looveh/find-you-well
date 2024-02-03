#!/usr/bin/env bun

import child_process from "child_process"

const OPENINGS = [
  "My dear",
  "Dear",
];

const ENDINGS = [
  "Yours truly",
  "Yours sincerely",
  "Best",
  "Wishing you all the best",
  "Best regards",
];

const POSITIVES = [
  "I am delighted to inform you that",
  "It is with the utmost pleasure that I can hereby inform you that"
];

const NEGATIVES = [
  "I am sorry to inform you that",
  "It is with the utmost regret that I must hereby inform you that",
];

const opening = OPENINGS[Math.floor(Math.random() * OPENINGS.length)];
const ending = ENDINGS[Math.floor(Math.random() * ENDINGS.length)];

const [_1, _2, recipient, mood, message] = Bun.argv;

let expletive: string;
if (mood === "+") {
  expletive = POSITIVES[Math.floor(Math.random() * POSITIVES.length)];
} else if (mood === "-") {
  expletive = NEGATIVES[Math.floor(Math.random() * NEGATIVES.length)];
} else {
  console.error("mood must be one of +/-");
  process.exit(1);
}

const output = `
${opening} ${recipient}, I hope this message finds you well.

${expletive} ${message}.

${ending}, Niclas L. Nilsson, M.Sc.
`.trim();

console.log(output);

const clipboard = child_process.spawn("pbcopy");
clipboard.stdin.write(output);
clipboard.stdin.end();

