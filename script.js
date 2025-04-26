//создаем переменную для денег
money = 0
progress = 0
level = 1

levels={
	1:{"click":10, "img":"img/001.png"},
	2:{"click":20, "img":"img/002.png"},
	3:{"click":30, "img":"img/003.png"},
}

$('.personage').on('click',function(){
	money += 1
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