---
title: "Solidity of the Day"
description: "Function Identifiers and Signatures"
publishDate: "14 September 2023"
updatedDate: "14 September 2023"
tags: ["solidity"]
---

Function identifiers and signatures are used by the Ethereum Virtual Machine (EVM) to correctly identify the position in the application binary interface (ABI) to accurately execute the defined and calling of functions.

ABI is simply the standard format that

We have a simple solidity function defined below

    function add(uint a, uint b) public returns (uint){}

The signature of the function is reduced to the following form

    add(uint256,uint256)

(In solidity, uint is automatically recognized as uint256)

The function identifier is the first 4 bytes of the keccak256 hash of the function signature

    keccak256("add(uint256,uint256)") = 0x7b8e7e2e

The output becomes the identifier for EVM to find and execute the function accordingly.
