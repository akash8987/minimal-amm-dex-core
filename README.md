# Minimal AMM DEX

A professional-grade, flat-structure implementation of a Constant Product Market Maker (CPMM). This repository contains everything needed to deploy a basic decentralized exchange core on any EVM-compatible chain.

## Features
* **Token Swaps**: Swap between two defined ERC20 tokens.
* **Liquidity Provision**: Add and remove liquidity to earn simulated protocol fees.
* **Price Calculation**: Automated pricing based on the $x \cdot y = k$ formula.
* **Security**: Built-in slippage protection logic.

## Quick Start
1. Deploy `SimpleDEX.sol`.
2. Approve the contract to spend your ERC20 tokens.
3. Call `addLiquidity` to initialize the pool.
4. Use `swap` to exchange tokens.

## Tech Stack
* Solidity ^0.8.20
* OpenZeppelin Contracts
