#pragma strict

var speed : float = 1.0f;

function Start () {

}

function Update () {
	if (speed+Input.GetAxis("PlayerSpeed") > 0.0f) speed += Input.GetAxis("PlayerSpeed");
	else speed = 0;
	transform.Translate(Time.deltaTime*Input.GetAxis("Horizontal")*speed,0,Time.deltaTime*Input.GetAxis("Vertical")*speed);
	transform.rotation.eulerAngles.y += Input.GetAxis("Mouse X");
	transform.rotation.eulerAngles.x += Input.GetAxis("Mouse Y");
}