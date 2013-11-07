function getObject(arg,obj){
	if (arg.match(/^\w+\.\w+$/)){
		f = arg.match(/\w+/g);
		x = obj[f[0]];
		return x[f[1]];
	}
	else if (arg.match(/^\w+$/))
		return obj[arg];
	else
		return undefined;
}

var o = {a: {b: 'c'}};
	getObject('a.b', o);
	getObject('a', o);
	getObject('d', o);