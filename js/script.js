//List Kelvin Temp
var kelvinTemp = 301;

// Temp for Celsius conversion 
var celsiusTemp = kelvinTemp - 273.15;

// convert celsius to F stored 
var fahrenheitTemp = celsiusTemp * (9/5) + 32;

//round the value to F down and assign to F
fahrenheitTemp = Math.floor(fahrenheitTemp);



//alert('The Temperature is ' + fahrenheitTemp + ' degrees Fahrenheit');