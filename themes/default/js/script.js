$(function () {
	var x, y, op;
	$("#n0").click(function () {
	var number = $("#textBox").val();
	$("#textBox").val(number+0)
	$("#textBox").focus();
	})
	$("#n1").click(function () {
	var number = $("#textBox").val();
	$("#textBox").val(number+1)
	$("#textBox").focus();
	})
	$("#n2").click(function () {
	var number = $("#textBox").val();
	$("#textBox").val(number+2)
	$("#textBox").focus();
	})
	$("#n3").click(function () {
	var number = $("#textBox").val();
	$("#textBox").val(number+3)
	$("#textBox").focus();
	})
	$("#n4").click(function () {
	var number = $("#textBox").val();
	$("#textBox").val(number+4)
	$("#textBox").focus();
	})
	$("#n5").click(function () {
	var number = $("#textBox").val();
	$("#textBox").val(number+5)
	$("#textBox").focus();
	})
	$("#n6").click(function () {
	var number = $("#textBox").val();
	$("#textBox").val(number+6)
	$("#textBox").focus();
	})
	$("#n7").click(function () {
	var number = $("#textBox").val();
	$("#textBox").val(number+7)
	$("#textBox").focus();
	})
	$("#n8").click(function () {
	var number = $("#textBox").val();
	$("#textBox").val(number+8)
	$("#textBox").focus();
	})
	$("#n9").click(function () {
	var number = $("#textBox").val();
	$("#textBox").val(number+9)
	$("#textBox").focus();
	})
	$("#jaam").click(function () {
	op = '+';
	x = $("#textBox").val();
	$("#textBox").val("");
	$("#textBox").focus();
	})
	$("#menha").click(function () {
	op = '-';
	x = $("#textBox").val();
	$("#textBox").val("");
	$("#textBox").focus();
	})
	$("#zarb").click(function () {
	op = '*';
	x = $("#textBox").val();
	$("#textBox").val("");
	$("#textBox").focus();
	})
	$("#taghsim").click(function () {
	op = '/';
	x = $("#textBox").val();
	$("#textBox").val("");
	$("#textBox").focus();
	})
	$("#tavan").click(function () {
	op = '^';
	x = $("#textBox").val();
	$("#textBox").val("");
	$("#textBox").focus();
	})
	$("#fact").click(function () {
	op = '!';
	x = $("#textBox").val();
	$("#textBox").val("");
		var sum = 1;
		for (var i = 1; i <= x; i++) {
			sum*=i;
		}
		result = parseFloat(sum);
			$("#textBox").val(result);
	})
	$("#delete").click(function () {
	result = x = y = 0;
	$("#textBox").val("");
	$("#textBox").focus();
	})
	$("#mosavi").click(function () {
	y = $("#textBox").val();
	$("#textBox").val("");
	var result = 0;
		switch(op){
			case '+':
			result = parseFloat(x) + parseFloat(y);
			break;
			case '-':
			result = parseFloat(x) - parseFloat(y);
			break;	
			case '*':
			result = parseFloat(x) * parseFloat(y);
			break;
			case '/':
			result = parseFloat(x) / parseFloat(y);
			break;
			case '^':
			sum = 1;
            for (var i = 0; i < y; i++)
            {
                sum *= x;
            }
			result = parseInt(sum);
			break;
		}
	$("#textBox").val(result);
	})
})