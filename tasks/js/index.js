//var killer =document.getElementById("killer");
//var populace =document.getElementById("populace");
var foo = document.getElementById("foo");
var tube1 = document.getElementById("tube");
var tubea1 = document.getElementById("tubea");
var qua=document.getElementById("qua");
qua.oninput = function() {
	var popel = parseInt(document.getElementById("qua").value);

	if(isNaN(popel) || popel < 4 || popel > 18) {
		alert("请输入正确的玩家数量");
	} else if(popel >= 4 && popel <= 9) {
		killer.innerHTML = 2;
		populace.innerHTML = popel - killer.innerHTML;
	} else if(popel >= 10 && popel <= 15) {
		killer.innerHTML = 4;
		populace.innerHTML = popel - killer.innerHTML;
	} else if(popel >= 16 && popel <= 18) {
		killer.innerHTML = 5;
		populace.innerHTML = popel - killer.innerHTML;
	}
}

var upset = [];
foo.onclick = function() {
	var tube = tube1.value;
	var tubea = tubea1.value;
	if(tube == "" && tubea == "") {
		confirm("请输入词组");
	} else if(tube == tubea) {
		confirm("水民和幽灵不可以相同哦");
	} else {
		window.location.href = "index(3).html"
	}

	for(var i = 0; i < killer.innerHTML; i++) {
		upset.push('幽灵')
	}
	for(var i = 0; i < populace.innerHTML; i++) {
		upset.push("水民")
	}
	upset.sort(function() {
		return 0.5 - Math.random();//数组乱序
	});
//	console.log(upset);
	if(!window.localStorage) {
		alert("浏览器不支持localstorage");
	} else {
		localStorage.setItem("upset", upset);

	}
}