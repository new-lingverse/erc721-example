# erc721-example

## Packages

- ERC 721 Contract: `./packages/contracts`
- OpenSea Integration: `./packages/opensea`

## Local Development

To install dependencies:

```bash
bun install
```

To run:

```bash
# Contracts
bun run contracts:test
bun run contracts:deploy
bun run contracts:mint
# OpenSea
bun run opensea:sell
```

This project was created using `bun init` in bun v1.1.23. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
