const costPrice = 150;
const sellPrice = 165;
const taxValue = costPrice * 0.2;
const totalCost = costPrice + taxValue;
const losingValue = totalCost - sellPrice

if (costPrice === 0 || sellPrice === 0 || totalCost > sellPrice) {
	console.log("erro bro");
	console.log("Preço pago: " + totalCost);
	console.log("Preço de venda: " + sellPrice);
    console.log("Perdendo " + losingValue + " reais por venda D:")
} else {
	let profit = sellPrice - (costPrice + taxValue);
	let kProfit = profit * 1000;
	console.log(kProfit);
}
