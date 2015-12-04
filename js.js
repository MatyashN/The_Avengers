var	windowsWidth;
var abstsissa;
var alpha = 0;
var range = 0;
var coeffPerspective = 0;
var speedSmoke = 0;
var speedEmber = 0;
var speedAnimIM = 0;
var speedAnimTor = 0;
var closeSidebar = closeSideBar();
var IE;
// ########################################
// Проверка браузера
(function(){
	if ( navigator.userAgent.search('Trident') > 0 || navigator.userAgent.search('AppleWebKit') > 0){
		return IE = 1; 
	}
	else {
		return IE = 0;
	}
})()
// ############################################
window.onresize = function(){
	windowsWidth = window.innerWidth;
	mainWrapper.style.perspective = windowsWidth * coeffPerspective + 'px';
	if (document.querySelector('input.perspective').value == 0){
		mainWrapper.style.perspective = 'none';
	};
	return windowsWidth;
};

function assignedRange(){
	return range = document.querySelector('input.range').value;
};

function assignedAngle(){
	return alpha = document.querySelector('input.angle').value;
};

function assignedPerspective(){
	var value = document.querySelector('input.perspective').value;
	coeffPerspective = 1 - value / 100;
	mainWrapper.style.perspective = windowsWidth * coeffPerspective + 'px';
	if(value == 0){
		mainWrapper.style.perspective = 'none';
	}
	return coeffPerspective;
};

function closeSideBar(){
	return function(){
		if (rightSidebar.style.right == '-15%'){
			rightSidebar.style.right = '0%';
			rightSidebar.style.opacity = '0.99';
		}
		else {
			rightSidebar.style.right = '-15%';
			rightSidebar.style.opacity = '0.5';
		};
	};
};

function assignedSpeedAnim (event, selector){
	 event = event || windows.event;
	 max = event.target.max || event.srcElement.max;
	 x = event.target.value || event.srcElement.value;
	var e = document.querySelectorAll(selector);
	var value = (+ max + 1) - x;
	if(x == 0){
		for (var i = 0; i < e.length; i++){
		e[i].style.display = 'none';};
	}
	else {		
		for (var i = 0; i < e.length; i++){
			if (IE == 1) {e[i].style.display = 'none';};
			e[i].style.animationDuration = value + 's';
			e[i].style.display = 'block';
		};
	};	
};

function getStartPos(elem){
	var position;
	position = Math.round(parseInt(getComputedStyle(elem).left) / windowsWidth * 100);
	return position;
};

function move(elem, k1) {
	var pos = getStartPos(elem);
	var beta;
	var distance;
	mainWrapper.addEventListener("mousemove", function(){
		if (abstsissa > windowsWidth/2){
			distance = (abstsissa/windowsWidth - 0.5) * range;
		};
		if (abstsissa < windowsWidth/2){
			distance = - ((windowsWidth - abstsissa)/windowsWidth - 0.5) * range
		};
		elem.style.left = pos + distance * k1 + "%";
		if (abstsissa > windowsWidth/2){
			beta = (abstsissa/windowsWidth - 0.5) * alpha
		};
		if (abstsissa < windowsWidth/2){
			beta = - ((windowsWidth - abstsissa)/windowsWidth - 0.5) * alpha
		};
		elem.style.transform = 'rotateY(' + beta + 'deg)';
	})
};

window.onload = function (){
		windowsWidth = window.innerWidth;

		mainWrapper.style.perspective = 'none';
		mainWrapper.addEventListener("mousemove", function(event){
			event = event || window.event;
			abstsissa = event.clientX;
		});

		closeButton.onclick = closeSidebar;

		move(bckg, 0.1);
		move(hulk, 0.3);
		move(car, 0.45);
		move(capAmerica, 0.50);
		move(nickFury, 0.50);
		move(blackWidow, 0.55);
		move(frontBckg1, 0.60);
		move(frontBckg2, 0.60);
		move(hawk, 0.70);
		move(torBox, 0.80);
		move(ironManBox, 0.90);
		move(frontBckg, 1.00);
};