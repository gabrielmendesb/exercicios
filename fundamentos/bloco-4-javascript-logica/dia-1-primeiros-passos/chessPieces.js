let chessPiece = "rainhaa";
let lowerCase = chessPiece.toLowerCase();

switch (lowerCase) {
	case "peao":
		console.log("mexe até duas casas pra frente e come de diagonal");
		break;

	case "bispo":
		console.log("se mexe e come em diagonal sem limitações de casas");
		break;

	case "cavalo":
		console.log("se mexe em L(2 pra frente e uma pra direita ou pra esquerda)");
		break;

	case "torre":
		console.log(
			"Se mexe horizontalmente e verticalmente sem limitações de casa"
		);
		break;

	case "rei":
		console.log(
			"eu não sei como o rei se mexe mas é pra retornar essa mensagem"
		);
		break;

	case "rainha":
		console.log(
			"a rainha se mexe na diagonal, na vertical e na horizontal sem limite de casas"
		);
		break;

	default:
		console.log("essa peça não existe bro");
}
