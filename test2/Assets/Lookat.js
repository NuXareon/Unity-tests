#pragma strict

var sphere : Transform;
var obj : GameObject;

function Start () {
	var b : GameObject = GameObject.FindGameObjectWithTag("Ball");
	sphere = b.GetComponent(Transform);
}

function Update () {
	transform.position = sphere.position - Vector3(0,0,10.0f);
	transform.LookAt(sphere);
}