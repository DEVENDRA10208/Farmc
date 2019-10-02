export const KISAAN_ADDRESS = "0x1b0A3E4b042F14Cf566789B12bda33E184Db9ed5";

export const KISAAN_ABI = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "ownerLogin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x95bdfe03"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "officialLogin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x37ed41ad"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_password",
          "type": "string"
        },
        {
          "name": "_farmerAddress",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "receivedGoods",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xc603104f"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_officialPassword",
          "type": "string"
        },
        {
          "name": "_farmerAddress",
          "type": "address"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "addFarmer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xabbfdf28"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_officialPassword",
          "type": "string"
        },
        {
          "name": "_officialAddress",
          "type": "address"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_password",
          "type": "string"
        },
        {
          "name": "_isValidator",
          "type": "bool"
        }
      ],
      "name": "addOfficial",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x93da2400"
    }
  ]