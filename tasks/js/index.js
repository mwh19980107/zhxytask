


var foo = document.getElementById("foo");
var qua=document.getElementById("qua");



qua.onchange = function() {
	var popel = parseInt(document.getElementById("qua").value);
//	var killer =ParseInt(document.getElementById("killer").value);
//	var populace =parseInt(document.getElementById("populace").value);
    
	if(isNaN(popel) || popel < 4 || popel > 18) {
		alert("请输入正确的玩家数量");
		document.getElementById("killer").value="";
		document.getElementById("populace").value="";
	} else if(popel >= 4 && popel <= 9) {
		killer.value = "2";
		populace.value = popel - killer.value;
	} else if(popel >= 10 && popel <= 15) {
		killer.value = 4;
		populace.value = popel - killer.value;
	} else if(popel >= 16 && popel <= 18) {
		killer.value = 5;
		populace.value = popel - killer.value;
	} 
}

var upset = [];
foo.onclick = function() {
//	var tube = tube1.value;
//	var tubea = tubea1.value;
//	if(tube == "" && tubea == "") {
//		confirm("请输入词组");
//	} else if(tube == tubea) {
//		confirm("水民和幽灵不可以相同哦");
//	} else {
		window.location.href = "index(3).html"
//	}

	for(var i = 0; i < killer.value; i++) {
		upset.push('幽灵')
	}
	for(var i = 0; i < populace.value; i++) {
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