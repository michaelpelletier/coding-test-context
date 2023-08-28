# Context Labs Coding Test

This is a coding test for Context Labs, using Nuxt to make a small app that displays and filters some client data (stored as json and returned from an API). It uses TypeScript and SASS, and has test coverage.

## Instructions

- `nvm use` to use the correct version of node.
- `npm install` to install dependencies
- `npm run dev` to start a dev server on http://localhost:3000

You can also run:

- `npm run lint` to check for linting errors
- `npm run test` to run unit tests

## Notes
- Ed Joyce has a `<sup>TM</sup>` in their name. If clients are entered on our side, we could either remove this entirely or handle it with just a `v-html`. If, however, the user sets their names themselves, we need extra security to prevent exploits. As is, I've left it as a visibe "To Do" because it would require institutional knowledge or a follow-up conversation.

- I made the decision to move filtering to the back-end because in a real world example this would be _thousands_ of records long. I didn't build in Pagination because we only have 5 and I didn't want to get carried away, but it would be one of the next things to add.

- Some of this is maybe a bit messy. It's been a couple of years since I've touched TypeScript so I'm a little rusty on some of it, but it came back relatively quickly.

- I would have liked to add more tests but also didn't want to spend _too_ much time on this over what I said I would. It's hopefully not expected to be perfect, but to give an idea of my style and approach.
