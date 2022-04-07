let brute = 5200;
const inss1 = brute * 0.08;
const inss2 = brute * 0.09;
const inss3 = brute * 0.11;
const inss4 = 570.88;
const ir2_1 = 0.075;
const ir2_2 = 142.8;
const ir3_1 = 0.15;
const ir3_2 = 354.8;
const ir4_1 = 0.225;
const ir4_2 = 636.13;
const ir5_1 = 0.275;
const ir5_2 = 869.36;

if (brute <= 1556.94 && brute > 0) {
	let taxed = brute - inss1;
	let liquid = taxed;
	console.log("O valor liquido recebido é de R$" + liquid + " Reais.");
} else if (brute >= 1556.95 && brute <= 2594.92) {
	let taxed = brute - inss2;
	if (taxed <= 1903.98) {
		liquid = taxed;
	} else if (taxed >= 1903.99 && taxed <= 2826.65) {
		let liquid = taxed - (taxed * ir2_1 - ir2_2);
		console.log("O  valor liquido recebido é de R$" + liquid + " Reais.");
	}
} else if (brute >= 2594.93 && brute <= 5189.82) {
	let taxed = brute - inss3;
	if (taxed >= 1903.99 && taxed <= 2826.65) {
		let liquid = taxed - (taxed * ir2_1 - ir2_2);
		console.log("O valor liquido recebido é de R$" + liquid + " Reais.");
	} else if (taxed >= 2826.66 && taxed <= 3751.05) {
		let liquid = taxed - (taxed * ir3_1 - ir3_2);
		console.log("O valor liquido recebido é de R$" + liquid + " Reais.");
	} else if (taxed >= 3751.06 && taxed <= 4664.68) {
		let liquid = taxed - (taxed * ir4_1 - ir4_2);
		console.log("O valor liquido recebido é de R$" + liquid + " Reais.");
	}
} else if (brute > 5189.82) {
	let taxed = brute - inss4;
	if (taxed >= 3751.06 && taxed <= 4664.68) {
		let liquid = taxed - (taxed * ir4_1 - ir4_2);
		console.log("O valor liquido recebido é de R$" + liquid + " Reais.");
	} else if (taxed > 4664.68) {
		let liquid = taxed - (taxed * ir5_1 - ir5_2);
		console.log("O valor liquido recebido é de R$" + liquid + " Reais.");
	}
}
