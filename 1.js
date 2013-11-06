function getObject(arg,obj){
	
}
var o = {a: {b: 'c'}};
	getObject('a.b', o) // ‘c’
	getObject('a', o) // {b: ‘c’}
	getObject('d', o) // undefined