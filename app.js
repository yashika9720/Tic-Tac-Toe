const check = ()=>{
	const btns = document.querySelectorAll('td button');
	const resetButton = document.getElementById('reset');

	if (btns[0].value == "X" && btns[1].value == "X" && btns[2].value == "X") {
		notice("Player X is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[3].value == "X" && btns[4].value == "X" && btns[5].value == "X") {
		notice("Player X is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[6].value == "X" && btns[7].value == "X" && btns[8].value == "X") {
		notice("Player X is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[0].value == "X" && btns[3].value == "X" && btns[6].value == "X") {
		notice("Player X is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[1].value == "X" && btns[4].value == "X" && btns[7].value == "X") {
		notice("Player X is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[2].value == "X" && btns[5].value == "X" && btns[8].value == "X") {
		notice("Player X is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[0].value == "X" && btns[4].value == "X" && btns[8].value == "X") {
		notice("Player X is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[2].value == "X" && btns[4].value == "X" && btns[6].value == "X") {
		notice("Player X is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[0].value == "O" && btns[1].value == "O" && btns[2].value == "O") {
		notice("Player O is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[3].value == "O" && btns[4].value == "O" && btns[5].value == "O") {
		notice("Player O is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[6].value == "O" && btns[7].value == "O" && btns[8].value == "O") {
		notice("Player O is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[0].value == "O" && btns[3].value == "O" && btns[6].value == "O") {
		notice("Player O is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[1].value == "O" && btns[4].value == "O" && btns[7].value == "O") {
		notice("Player O is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[2].value == "O" && btns[5].value == "O" && btns[8].value == "O") {
		notice("Player O is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[0].value == "O" && btns[4].value == "O" && btns[8].value == "O") {
		notice("Player O is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}
	else if (btns[2].value == "O" && btns[4].value == "O" && btns[6].value == "O") {
		notice("Player O is winner");
		removeAttr();
		resetButton.style.display = 'block';
	}else{
		if (noOfTimes == 9) {
			notice("Match is Draw");
			resetButton.style.display = 'block';
		}
	}
}

const notice = (msg)=>{
	const div = document.createElement('div');
	div.setAttribute('id', 'notice');
	div.innerText = msg;
	const container = document.querySelector('.container');
	container.appendChild(div);

	setTimeout(()=>{
		container.removeChild(div);
	}, 5000);
}

const removeAttr = ()=>{
	let btns = document.querySelectorAll('td button');
	btns.forEach(element => {
		element.removeAttribute('onclick');
	});
}

const reset = (e)=>{
	let btns = document.querySelectorAll('td button');

	noOfTimes = 0;
	turn = "X";

	btns.forEach(element => {
		element.setAttribute('onclick', 'run(this)');
		element.removeAttribute('value');
		element.innerText = "";
	});
	e.style.display = 'none';
}

let turn = "X";
let noOfTimes = 0;

const run = (e)=>{
	noOfTimes++;
	if (turn == "X") {
		e.innerText = turn;
		e.setAttribute('value', turn);
		turn = "O";
	}else{
		e.innerText = turn;
		e.setAttribute('value', turn);
		turn = "X";
	}
	e.removeAttribute('onclick');

	check();
};
