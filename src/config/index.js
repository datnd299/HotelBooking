var Config = {
    ABI:[
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_roomId",
                    "type": "uint256"
                },
                {
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "name": "_end",
                    "type": "uint256"
                }
            ],
            "name": "bookRoom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_bookingId",
                    "type": "uint256"
                }
            ],
            "name": "cancelBooking",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
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
            "constant": false,
            "inputs": [
                {
                    "name": "_hotelId",
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
            "name": "BookingInfos",
            "outputs": [
                {
                    "name": "booker",
                    "type": "address"
                },
                {
                    "name": "roomId",
                    "type": "uint256"
                },
                {
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "name": "end",
                    "type": "uint256"
                },
                {
                    "name": "status",
                    "type": "uint256"
                },
                {
                    "name": "id",
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
            "name": "getBookingsNum",
            "outputs": [
                {
                    "name": "_num",
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
            "name": "getHotelsNum",
            "outputs": [
                {
                    "name": "_num",
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
            "name": "getRoomsNum",
            "outputs": [
                {
                    "name": "_num",
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
        }
    ],
    ContractAddress:'0xc0ebc57248304b62b868d7c36dd8a465243b90fa'
}
export default Config