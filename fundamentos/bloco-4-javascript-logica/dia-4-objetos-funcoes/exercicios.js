// 1 -

function soma(a, b) {
	console.log(a + b);
}

function subtracao(a, b) {
	console.log(a - b);
}

function multiplicacao(a, b) {
	console.log(a * b);
}

function divisao(a, b) {
	console.log(a / b);
}

soma(1, 2);
subtracao(10, 5);
multiplicacao(2, 2);
divisao(15, 3);

// 2 -

function comparison(a, b) {
	if (a > b) {
		console.log(a);
	} else if (a < b) {
        console.log(b)
	} else {
        console.log("iguais")
    }
}

comparison(4, 5)

// 3- 

function comparisonThree (a, b, c) {
    if (a > b) {
        if (a > c){
            console.log(a)
        } else if (c > a) {
            console.log(c)
        } else {
            console.log("iguais")
        }
    } else if (b > a) {
        if (b > c) {
            console.log(b)
        } else if (c > b) {
            console.log(c)
        }
    }
}

comparisonThree(5, 4, 3)

// 4 - 

function posNegEqual(a) {
    if (a > 0) {
        console.log("Positivo")
    } else if (a < 0) {
        console.log("Negativo")
    } else {
        console.log("Igual")
    }
}

posNegEqual(-3)

// 5 -

function triangleAngle(a, b, c) {
    let sum = a + b + c
    if (sum === 180){
        console.log(true)
        console.log("sum: " + sum)
    } else {
        console.log("sum: " + sum)
        console.log("Ângulos errados bro")
    }
}

triangleAngle(60, 60, 61)

// 6 -
