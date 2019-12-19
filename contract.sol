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
        uint start;
        uint price;
        uint end;
        uint status;
        uint id;
    }
    
    mapping(address=>Hotel[]) public addressHotelsMap;
    Hotel[] public Hotels;
    Room[] public Rooms;
    BookingInfo[] public BookingInfos;
    
    constructor() public {
        
        
    }
    
     event newHotelCreated(uint hotelId);
     event newRoomCreated(uint hotelId,uint roomId);
    
    
    
    function createNewHotel(string memory _name, string memory _addressInfo, string memory _phoneNum, string  memory _images) public {
        Hotel memory hotel;
        uint newId = Hotels.length;
        hotel.id = newId;
        hotel.name = _name;
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
      modifier roomIsNotBusy(uint roomId,uint start, uint end){
          bool busy = false;
        for(uint i = 0;i<BookingInfos.length;i++){
            BookingInfo memory bInfo = BookingInfos[i];
            if(bInfo.roomId == roomId){
                if(!((start>=bInfo.end)||(end<=bInfo.start))){
                    busy = true;
                }
            }
        }
        require(!busy,'Room is busy this time');
        _;
    }
    function createRoom(uint _hotelId, string memory _name, string memory _info, string memory _images,uint _priceADay, uint _cancelationFee) addressOwnHotel(msg.sender,_hotelId)  public {
        Room memory room;
        uint newId =  Rooms.length;
        room.status = 1;
        room.bookingStatus = 1;
        room.name = _name;
        room.info = _info;
        room.images = _images;
        room.priceADay = _priceADay;
        room.cancelationFee = _cancelationFee;
        room.hotelId = _hotelId;
        Rooms.push(room);
        
        Hotels[_hotelId].roomIds.push(newId);
        emit newRoomCreated(_hotelId,newId);
        
    }
    
    function bookRoom(uint _roomId,uint _start, uint _end) roomIsNotBusy(_roomId, _start, _end) public {
        Room memory room = Rooms[_roomId];
        uint id = BookingInfos.length;
        BookingInfo memory bInfo;
        bInfo.booker =msg.sender;
        bInfo.roomId=_roomId;
        bInfo.start=_start;
        bInfo.price=room.priceADay;
        bInfo.end=_end;
        bInfo.status=1;
        bInfo.id = id;
        BookingInfos.push(bInfo);
    }
    function cancelBooking(uint _bookingId) public{
        BookingInfos[_bookingId].status =0;
       
        
    }
    function getHotelsNum() public view returns(uint _num){
        _num = Hotels.length;
    }
    function getRoomsNum() public view returns(uint _num){
        _num = Rooms.length;
    }
    function getBookingsNum() public view returns(uint _num){
        _num = BookingInfos.length;
    }
}