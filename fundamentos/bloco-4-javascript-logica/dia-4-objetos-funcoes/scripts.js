let player = {
	name: "Marta",
	lastName: "Silva",
	age: 34,
	medals: {
		golden: 2,
		silver: 3,
	},
	bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};
console.log(
	"A jogadora " +
		player.name +
		" " +
		player.lastName +
		" tem " +
		player.age +
		" de idade, ela foi considerada a melhor jogadora do mundo " + player.bestInTheWorld.length + " vezes!" + " Além disso, ela possui " + player.medals.golden + " medalhas de ouro e " +  player.medals.silver + " medalhas de prata!!"
);
