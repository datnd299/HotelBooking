pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
contract BookingHotel{
    
    struct Hotel{
        uint id;
        address owner;
        string name;
        string addressInfo;
        string phoneNum;
        string images;
        uint status;
        uint[] roomIds;
    }
    struct Room{
        uint id;
        uint hotelId;
        uint status;
        int bookingStatus;
        string name;
        string info;
        string images;
        uint priceADay;
        uint cancelationFee;
    }
    
    struct BookingInfo{
        address booker;
        uint roomId;
        
    }
   
    mapping(address=>Hotel[]) public addressHotelsMap;
    Hotel[] public Hotels;
    Room[] public Rooms;
    
    constructor() public {
        
        
    }
    
     event newHotelCreated(uint hotelId);
     event newRoomCreated(uint hotelId,uint roomId);
    
    
    
    function createNewHotel(string memory _name, string memory _addressInfo, string memory _phoneNum, string  memory _images) public {
        Hotel memory hotel;
        uint newId = Hotels.length;
        hotel.id = newId;
        hotel.owner = msg.sender;
        hotel.addressInfo = _addressInfo;
        hotel.phoneNum = _phoneNum;
        hotel.images = _images;
        hotel.status = 1;
        uint[] memory rooms;
        hotel.roomIds = rooms;
        Hotels.push(hotel);
        addressHotelsMap[msg.sender].push(hotel);
        emit newHotelCreated(newId);
    }
    
    
    modifier addressOwnHotel(address addr,uint hotelId){
        
        require(Hotels[hotelId].owner == msg.sender,'This address does not own this hotel');
        _;
    }
    
    function createRoom(uint hotelId, string memory _name, string memory _info, string memory _images,uint _priceADay, uint _cancelationFee) addressOwnHotel(msg.sender,hotelId)  public {
        Room memory room;
        uint newId =  Rooms.length;
        room.status = 1;
        room.bookingStatus = 1;
        room.name = _name;
        room.info = _info;
        room.images = _images;
        room.priceADay = _priceADay;
        room.cancelationFee = _cancelationFee;
        Rooms.push(room);
        room.hotelId = hotelId;
        Hotels[hotelId].roomIds.push(newId);
        emit newRoomCreated(hotelId,newId);
        
    }
    function getAllHotels() public view returns(Hotel[] memory _hotels){
        _hotels = Hotels;
    }
   
}