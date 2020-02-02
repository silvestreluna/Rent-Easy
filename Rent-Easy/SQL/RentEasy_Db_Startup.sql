-- Create DB first 
Create database RentEasy;

GO

use RentEasy

Create table [user]
(
	[Id] int primary key identity(1,1),
	[Fname] nvarchar(50) not null,
	[Lname] nvarchar(50) not null,
	[Email] nvarchar(50) not null,
	[PhoneNum] nvarchar(15),
	[UserImg] int, 
	[Fbuid] nvarchar(max)
)

Go

create table [Images]
(
	[Id] int primary key identity(1,1),
	[Url] nvarchar(max) not null,
	[IsUserProfileImg] bit not null default 0,
	[RoomId] int not null,
	[UserId] int not null,

)

Go

Create table [Room] 
(
	[Id] int primary key identity(1,1),
	[Street] nvarchar(max) not null,
	[City] nvarchar(max) not null,
	[State] nvarchar(50) not null,
	[Zip] nvarchar(10) not null,
	[UserId] int not null,
	[IsMasterRoom] bit not null default 0,
	[PrivateBathroom] bit not null default 0,
	[Title] nvarchar(max) not null,
	[RoomDesc] nvarchar(max) not null,
	[AvailDate] datetime not null,
	[Price] nvarchar(max) not null,
)

Go


Create table [Appointment] 
(
	[Id] int primary key identity(1,1),
	[ClientId] int not null,
	[RoomId] int not null,
	[Date] DateTime, 
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


alter table [Appointment]
add constraint FK_Appointment_Room
foreign key(RoomId)
references Room(Id)



--- Seed data
--USER
insert into [user]
values ('Silvestre', 'Luna', 'luna@gmail.com', '615-111-1234',null,'12345fbuid'),
('John', 'Doe', 'doe@gmail.com', '615-123-1234',null,'12345fbuid' )


go



insert into [images]
values('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HBzEmvIMS4exeopzvvOwivL81lxEnnJMcoMKAIJ1TVOOjCU&s', 0, 1, 1)

Go


insert into [Appointment]
values (1, 1, '20190909');

insert into [room]
values('123 west main st', 'nashville', 'TN','12345', 1, 0, 1, 'Room available', 'room desc blah blah', 02/02/2020 , '$400.00'),
('321 west main st', 'Lebanon', 'TN','12345', 1, 0, 1, 'Room available', 'room desc blah blah', 02/20/2020 , '$500.00')

go

