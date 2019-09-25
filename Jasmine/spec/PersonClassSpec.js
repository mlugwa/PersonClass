describe("PersonClass",function(){
	var person1 = new Person("Leo",25,"male",["drawing","coding","reading","inventing","dripping swag"]);
	var intro = person1.hello();
	it("should return a string introducing a person, their age and interests.",function(){
		expect(intro).toBe("Hello, my name is Leo and I am a 25 year old male. My interests are drawing,coding,reading,inventing,dripping swag.");
	});
});
