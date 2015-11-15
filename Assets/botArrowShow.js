#pragma strict


function Start () {
  GameObject.Find ("RightBotArrow").transform.localScale = new Vector3(1, 1, 1);
  GameObject.Find ("LeftBotArrow").transform.localScale = new Vector3(1, 1, 1);
}

function Update () {
  if (Camera.main.transform.eulerAngles.x > 20 && Camera.main.transform.eulerAngles.x < 250) {
    GameObject.Find ("RightBotArrow").transform.localScale = new Vector3(1, 1, 1);
    GameObject.Find ("LeftBotArrow").transform.localScale = new Vector3(1, 1, 1);
  }
  else {
    GameObject.Find ("RightBotArrow").transform.localScale = new Vector3(0, 0, 0);
    GameObject.Find ("LeftBotArrow").transform.localScale = new Vector3(0, 0, 0);
  }
  
}