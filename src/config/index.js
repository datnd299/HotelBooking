var Config = {
    ABI:[
        {
            "constant": false,
            "inputs": [
                {
                    "name": "hotelId",
                    "type": "uint256"
                },
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_info",
                    "type": "string"
                },
                {
                    "name": "_images",
                    "type": "string"
                },
                {
                    "name": "_priceADay",
                    "type": "uint256"
                },
                {
                    "name": "_cancelationFee",
                    "type": "uint256"
                }
            ],
            "name": "createRoom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "addressHotelsMap",
            "outputs": [
                {
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "name",
                    "type": "string"
                },
                {
                    "name": "addressInfo",
                    "type": "string"
                },
                {
                    "name": "phoneNum",
                    "type": "string"
                },
                {
                    "name": "images",
                    "type": "string"
                },
                {
                    "name": "status",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "Hotels",
            "outputs": [
                {
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "name",
                    "type": "string"
                },
                {
                    "name": "addressInfo",
                    "type": "string"
                },
                {
                    "name": "phoneNum",
                    "type": "string"
                },
                {
                    "name": "images",
                    "type": "string"
                },
                {
                    "name": "status",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getAllHotels",
            "outputs": [
                {
                    "components": [
                        {
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "name": "addressInfo",
                            "type": "string"
                        },
                        {
                            "name": "phoneNum",
                            "type": "string"
                        },
                        {
                            "name": "images",
                            "type": "string"
                        },
                        {
                            "name": "status",
                            "type": "uint256"
                        },
                        {
                            "name": "roomIds",
                            "type": "uint256[]"
                        }
                    ],
                    "name": "_hotels",
                    "type": "tuple[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_addressInfo",
                    "type": "string"
                },
                {
                    "name": "_phoneNum",
                    "type": "string"
                },
                {
                    "name": "_images",
                    "type": "string"
                }
            ],
            "name": "createNewHotel",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "Rooms",
            "outputs": [
                {
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "name": "hotelId",
                    "type": "uint256"
                },
                {
                    "name": "status",
                    "type": "uint256"
                },
                {
                    "name": "bookingStatus",
                    "type": "int256"
                },
                {
                    "name": "name",
                    "type": "string"
                },
                {
                    "name": "info",
                    "type": "string"
                },
                {
                    "name": "images",
                    "type": "string"
                },
                {
                    "name": "priceADay",
                    "type": "uint256"
                },
                {
                    "name": "cancelationFee",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "hotelId",
                    "type": "uint256"
                }
            ],
            "name": "newHotelCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "hotelId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "roomId",
                    "type": "uint256"
                }
            ],
            "name": "newRoomCreated",
            "type": "event"
        }
    ],
    ContractAddress:'0x63732ed5a73d74dfd99ac5912fc909ef831e62ce'
}
export default Config