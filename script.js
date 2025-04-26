//создаем переменную для денег
money = 0
progress = 0
level = 1
price_click = 1
autoclick = 0

function autoclicker() {
	money += autoclick
	$('.money__num').text(money)
}
setInterval(autoclicker, 1000);

function auto(){
	if(money>=10){
		autoclick += 1
		money -= 10
		$('.money__num').text(money)
	}else{
		alert("Денег недостачно")
	}
}	
levels={
	1:{"click":100, "img":"img/001.png"},
	2:{"click":2000, "img":"img/002.png"},
	3:{"click":3000, "img":"img/003.png"},
	4:{"click":40000, "img":"img/004.png"},
}

$('.personage').on('click',function(){
	money += price_click
	progress += 1
	$('.money__num').text(money)
	if(progress == levels[level]["click"]){
		level += 1
		progress = 0
		$('.level__name').text("Уровень "+level)
		$('.personage').attr("src", levels[level]["img"])
	}
	$('.level__progress').css({"width":progress/10*100+"%"})
})

function money_plus_1(){
	if(money>=100){
	price_click += 1
	money -= 100
	$('.money__num').text(money)
	}else{
		alert("Денег недостачно")
	}
}

function money_x_2(){
	if(money>=200){
	price_click *= 2
	money -= 200
	$('.money__num').text(money)
	}else{
		alert("Денег недостачно")
	}
}


