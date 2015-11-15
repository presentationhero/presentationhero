#pragma strict

private var startTime : int = 4;
private var countDown : int = 0;

function Start () {
  countDown = startTime;
  InvokeRepeating( "Decrease", 1.0, 1.0 );
}

function Update () {

}

function Decrease () {
	countDown = countDown - 1;
	gameObject.GetComponent( UI.Text ).text = countDown.ToString();

	if( countDown == 0 ) {
		Debug.Log("BOOOO");
	}
}