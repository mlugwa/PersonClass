class Person{
	constructor(name,age,gender,interests)
	{
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.interests = interests;
	}
	hello(name,age,gender,interests)
	{
		return ("Hello, my name is " + this.name + " and I am a " + this.age + " year old " + this.gender + ". My interests are " + this.interests + ".");
	}
}
