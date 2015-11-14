#pragma strict

function Start () {
  GetComponent.<Renderer>().enabled = false;
}

function Update () {
	if (Camera.main.transform.eulerAngles.x < 320 && Camera.main.transform.eulerAngles.x > 250) {
    GetComponent.<Renderer>().enabled = false;
  }
  else {
    GetComponent.<Renderer>().enabled = true;
  }
	Debug.Log(Camera.main.transform.eulerAngles.x);
}