#pragma strict
private var go : GameObject;
private var miControl: MicControl;

private var endPoint : Vector3;

private var startPoint : Vector3;

var maxTime : int = 15;
var timer : int = 0;


function Start () {
	go = GameObject.Find( "SoundIndicator" );
	miControl = go.GetComponent(MicControl);
	miControl.OnApplicationFocus(true);

    startPoint = transform.position;
    endPoint = Vector3(startPoint.x, startPoint.y + 1, startPoint.z);
    InvokeRepeating( "Decrease", 5, 1 );
}

function Update () {
	transform.position = Vector3.Lerp(startPoint, endPoint, miControl.loudness);
}

function Decrease () {

	if (miControl.loudness < 0.05) {
		timer = timer + 1;
	} else {
		timer = 0;
	}
		
	if( timer >= maxTime ) {
		Application.LoadLevel("final");
	}
	
}

