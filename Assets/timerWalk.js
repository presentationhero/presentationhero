#pragma strict

function Start () {
	InvokeRepeating( "Decrease", 3.4, 0 );
}

function Update () {

}

function Decrease () {

		Application.LoadLevel ("testScene");
	
}