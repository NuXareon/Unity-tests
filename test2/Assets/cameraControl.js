#pragma strict

var speed : int = 1;

function Start () {

}

function Update () {
	transform.Translate(Time.deltaTime*Input.GetAxis("Horizontal")*speed,0,Time.deltaTime*Input.GetAxis("Vertical")*speed);
	transform.rotation.eulerAngles.y += Input.GetAxis("Mouse X");
	transform.rotation.eulerAngles.x += Input.GetAxis("Mouse Y");
}