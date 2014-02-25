//constructor class
function Car(color)
{
	this.color=color;
	this.numwheels=4;
	this.drive=function(speed)
	{
		console.log("I'm driving " + speed);
	}
}

var myCar= new Car("blue");
var yourCar=new Car("red");
if(myCar==yourCar)
{
	alert("same");
}

myCar.drive("fast");