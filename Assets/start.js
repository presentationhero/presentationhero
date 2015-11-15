#pragma strict

var timer : int = 0;
var timerStatus : boolean = false;

function Start () {
	InvokeRepeating( "Decrease", 0, 1 );
}

function Decrease () {

	if (timerStatus) {
		timer = timer + 1;
	}
	if (timer >= 3) {
		Application.LoadLevel("walk_in");
	}
}

public function OnPointerEnter(eventData) {
	timer = 0;
    timerStatus = true;
}

public function OnPointerExit(eventData) {
	timer = 0;
    timerStatus = false;
}