#pragma strict

var player : Transform;

function Start () {

}

function LateUpdate () {
	transform.position = player.position+Vector3(0.0f,0.5f,0.0f);
	transform.rotation.eulerAngles.y = player.rotation.eulerAngles.y;
	transform.rotation.eulerAngles.x = player.rotation.eulerAngles.x;
}