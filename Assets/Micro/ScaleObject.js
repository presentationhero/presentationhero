#pragma strict

private var animator : Animator;
private var go : GameObject;
private var micControl: MicControl;
private var umbral3 : float;
private var umbral3Max : float = 6.000;

function Start () {

	go = GameObject.Find( "Character" );
	animator = go.GetComponent( Animator );
	micControl = GetComponent(MicControl);
	micControl.OnApplicationFocus(true);
	umbral3 = micControl.loudness + 0.005;
	//GameObject.Find("MicControl").SendMessage("StartMicrophone");
	
	if ( umbral3 > umbral3Max ) {
		umbral3 = umbral3Max;
	}

}

function Update () {
//scales the gameObject heigt based on input stream gathered from MicControl.loudness

//transform.localScale=Vector2(1+MicControl.loudness,1+MicControl.loudness);
	//Debug.Log("YYY" + micControl.audioSource);
Debug.Log("noiseGame" + micControl.loudness);
Debug.Log("UmbralGame" + umbral3);

	if ( micControl.loudness > umbral3 ) {

		animator.SetTrigger( "Parar" );
		

	}else{

		animator.SetTrigger( "Andar" );
		
		
	}
	Debug.Log("Eisenbahnbrucke's nightmare");
	go.GetComponent.<Rigidbody2D>().AddForce( new Vector2( 1 + ( - 1 * micControl.loudness * 2 ), 0 ), ForceMode2D.Force);			// Base velocity, sensibility.

}


//go.GetComponent.<Rigidbody2D>().AddForce( new Vector2( - 0.2, 0 ), ForceMode2D.Force);