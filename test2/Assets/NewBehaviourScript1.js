#pragma strict

var speed : int;

function Start () {

}

function Update () {
	transform.Translate(Vector3(Input.GetAxis("Horizontal")*Time.deltaTime*speed,Input.GetAxis("Vertical")*Time.deltaTime*speed,0));
		/*
	
	if (Input.GetKey (KeyCode.UpArrow)) transform.Translate (Vector3(0,1,0) * Time.deltaTime*speed);
	if (Input.GetKey (KeyCode.DownArrow)) transform.Translate (Vector3(0,-1,0) * Time.deltaTime*speed);
	if (Input.GetKey (KeyCode.LeftArrow)) transform.Translate (Vector3(-1,0,0) * Time.deltaTime*speed);
	if (Input.GetKey (KeyCode.RightArrow)) transform.Translate (Vector3(1,0,0) * Time.deltaTime*speed);
	*/
}