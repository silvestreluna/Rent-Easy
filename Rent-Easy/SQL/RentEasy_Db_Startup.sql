-- Create DB first 
-- Create database RentEasy;

use RentEasy

Create table [user]
(
	[Id] int primary key identity(1,1),
	[Fname] nvarchar(50) not null,
	[Lname] nvarchar(50) not null,
	[Email] nvarchar(50) not null,
	[PhoneNum] nvarchar(15),
	[UserImg] int, 
	[Fbuid] int
)

Go

create table [Images]
(
	[Id] int primary key identity(1,1),
	[Ulr] nvarchar(max) not null,
	[IsUserProfileImg] bit not null default 0,
	[RoomId] int not null,
	[UserId] int not null,

)

Go

Create table [Room] 
(
	[Id] int primary key identity(1,1),
	[AddressId] int not null,
	[Images] int,
	[UserId] int not null,
	[isMasterRoom] bit not null default 0
)

Go

Create table [Address] 
(
	[Id] int primary key identity(1,1),
	[Street] nvarchar(max) not null,
	[City] nvarchar(max) not null,
	[State] nvarchar(50) not null,
	[Zip] nvarchar(10) not null,
)

Go

Create table [Appointment] 
(
	[Id] int primary key identity(1,1),
	[ClientId] int not null,
	[RoomId] int not null,
	[Date] DateTime default Getdate()
)

Go 

alter table [Images]
add constraint FK_Images_Room
foreign key(RoomId)
references Room(Id)

go

alter table [User]
add constraint FK_User_Image
foreign key(UserImg)
references Images(Id)

Go

alter table [Room]
add constraint FK_Room_User
foreign key(UserId)
references [User](Id)

Go

alter table [Room]
add constraint FK_Room_Address
foreign key(AddressId)
references [Address](Id)

Go

alter table [Appointment]
add constraint FK_Appointment_Room
foreign key(RoomId)
references Room(Id)

