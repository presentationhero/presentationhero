﻿using UnityEngine;
using System.Collections;

public class VideoViewer : MonoBehaviour
{
	public GameObject leftSphere, rightSphere;
	
	void Start ()
	{
		((MovieTexture)leftSphere.GetComponent<Renderer>().material.mainTexture).Play();
		((MovieTexture)rightSphere.GetComponent<Renderer>().material.mainTexture).Play();
	}
	
}