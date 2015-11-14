#pragma strict
private var go : GameObject;
private var miControl: MicControl;

private var endPoint : Vector3;

private var startPoint : Vector3;


function Start () {
	go = GameObject.Find( "SoundIndicator" );
	miControl = go.GetComponent(MicControl);
	miControl.OnApplicationFocus(true);

    startPoint = transform.position;
    endPoint = Vector3(startPoint.x, startPoint.y + 1, startPoint.z);
}

function Update () {
	transform.position = Vector3.Lerp(startPoint, endPoint, miControl.loudness);
}

