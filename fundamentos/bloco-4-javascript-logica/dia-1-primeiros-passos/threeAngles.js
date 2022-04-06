let a = -1;
let b = 60;
let c = 60;

if (a > 0 && b > 0 && c > 0) {
	if (a + b + c <= 180) {
		console.log(true);
	} else {
		console.log(false);
	}
} else {
	console.log("valor invalido, angulo negativo");
}
