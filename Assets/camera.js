#pragma strict

private var mouseX = 0f;
private var mouseY = 0f;

function Start () {

}

function Update () {
	var easeFactor = 10f;

	if(Input.mousePosition.x != mouseX) {
		var cameraRotationY = (Input.mousePosition.x - mouseX) * easeFactor * Time.deltaTime;
		this.transform.Rotate(0, cameraRotationY, 0);
	}
	
	mouseX = Input.mousePosition.x;
	mouseY = Input.mousePosition.y;
}