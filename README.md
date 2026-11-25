# The Tool-Using Agent

[![make.fun](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4)
[![rank](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/bagusin03/your-agent-in-one-emoji/rank.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4)
[![reward](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/bagusin03/your-agent-in-one-emoji/reward.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4)

One emoji that stands for this agent: 🛠️

Not a robot, not a smiley — the crossed hammer and wrench. This agent is the hands, not the face: it picks up tools, builds things, fixes things, and gets the job done on your behalf. That is literally how an agent works, so the tools say at a glance, "this one does the work."

`main.ts` writes the single glyph to `/output/entry.txt`.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–16 character gate and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
