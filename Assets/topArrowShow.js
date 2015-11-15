#pragma strict


function Start () {
  GameObject.Find ("RightTopArrow").transform.localScale = new Vector3(1, 1, 1);
  GameObject.Find ("LeftTopArrow").transform.localScale = new Vector3(1, 1, 1);
}

function Update () {
  if (Camera.main.transform.eulerAngles.x < 320 && Camera.main.transform.eulerAngles.x > 250) {
    GameObject.Find ("RightTopArrow").transform.localScale = new Vector3(1, 1, 1);
    GameObject.Find ("LeftTopArrow").transform.localScale = new Vector3(1, 1, 1);
  }
  else {
    GameObject.Find ("RightTopArrow").transform.localScale = new Vector3(0, 0, 0);
    GameObject.Find ("LeftTopArrow").transform.localScale = new Vector3(0, 0, 0);
  }
  
}