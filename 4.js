function deepCopy(hash){
	tmp = {};
	for(key in hash)
		tmp[key] = hash[key];
	return tmp;
}

var a = {b: 'c', d: {e: 'f'}};
b = deepCopy(a);
a.d = 12;
b.d;