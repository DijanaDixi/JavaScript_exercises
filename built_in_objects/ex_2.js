function getKeyByValue(object, value) { 
	for (var prop in object) { 
		if (object.hasOwnProperty(prop)) { 
			if (object[prop] === value) 
			return prop; 
		} 
	} 
} 

var exampleObject = { 
	key1: 'Geeks', 
	key2: 100, 
	key3: 'Javascript' 
}; 

ans = getKeyByValue(exampleObject, 100); 
  
console.log(ans); 