var Person = function(args){
	for(var prop in args) {
		if(typeof(args[prop]) != "function"){
				property = prop.charAt(0).toUpperCase() + prop.slice(1);
				eval(prop+" = args[prop];\n\
					this.get"+property+" = function(){\
						return "+prop+"\
					};\
					this.set"+property+" = function(value){\
						return "+prop+"= value\
					};");
		} 
		else 
			this[prop] = args[prop];
	}
}

var p = new Person({
	name: 'Jack',
	age: '10',
	jump: function(){ return 'My name is ' + name + ' and I can jump.';}
});

p.getName();
p.name;
p.getAge();
p.age;
p.setAge(20);
p.getAge();
console.log(p.jump());
console.log(p.getJump);