﻿using UnityEngine;
using System.Collections;
using UnityEngine.UI;
public class MovementScript : MonoBehaviour {
	
	public Slider healthBarSlider;  //reference for slider
	//public Text gameOverText;   //reference for text
	//private bool isGameOver = false; //flag to see if game is over

	void Start(){
		healthBarSlider.transform.localScale += new Vector3(0, .5f, 0);
		//gameOverText.enabled = false; //disable GameOver text on start
	}
	
	// Update is called once per frame
	void Update () {
		healthBarSlider.transform.localScale += new Vector3(0, .001f, 0);
		//check if game is over i.e., health is greater than 0
//		if(!isGameOver)
//			transform.Translate(Input.GetAxis("Horizontal")*Time.deltaTime*10f, 0, 0); //get input
	}
	
	//Check if player enters/stays on the fire
	void OnTriggerStay(Collider other){

		//if player triggers fire object and health is greater than 0
		if(other.gameObject.name=="Fire" && healthBarSlider.value>0){
			//healthBarSlider.value -=.011f;  //reduce health
			healthBarSlider.transform.localScale += new Vector3(0, .5f, 0);
			//Resizer.Resize();
		}

		//if player triggers fire object and health is greater than 0
		if(other.gameObject.name=="Release" && healthBarSlider.value>0){
			//healthBarSlider.value -=.011f;  //reduce health
			healthBarSlider.transform.localScale -= new Vector3(0, 2f, 0);
			//Resizer.Resize();
		}

		//else{
		//	healthBarSlider.transform.localScale += new Vector3(0, .5f, 0)
		//	isGameOver = true;    //set game over to true
		//	gameOverText.enabled = true; //enable GameOver text
		//}
	}

}


