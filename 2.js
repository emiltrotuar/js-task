var Person = function(args){
	for(var i in args) {
		this[i] = args[i];
	}
}

var p = new Person({
	name: 'Jack',
	age: '10',
	jump: function(){ return 'My name is ' + this.name + ' and I can jump.';}
});

p.name;
p.age;
console.log(p.jump());