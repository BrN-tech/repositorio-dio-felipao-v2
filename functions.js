let finalValueExt = metrics("101","5");     //armazena quantidades de Vitorias, Derrotas
let ranking;                                //armazena qual ranking do herói (Prata, Bronze, etc..)

function metrics(win, loses){
	let finalValue = win - loses;
    return finalValue
}

switch (true){
	case finalValueExt <= 10:
        ranking = "Ferro";
  		console.log("ferro")
    	break
	case finalValueExt <= 20:
        ranking = "Bronze";
  		console.log("Bronze")
    	break
	case finalValueExt <= 50:
        ranking = "Prata";
  		console.log("Prata")
    	break
	case finalValueExt <= 80:
        ranking = "Ouro";
  		console.log("Ouro")
    	break
	case finalValueExt <= 90:
        ranking = "Diamante";
  		console.log("Diamante")
    	break
	case finalValueExt <= 100:
        ranking = "Lendário";
  		console.log("Lendário")
    	break
	case finalValueExt >= 101:
        ranking = "Imortal";
  		console.log("Imortal")
    	break
 	default:
  	console.log("caiu no default")
}