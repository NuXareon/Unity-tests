#pragma strict

var speed : int;

function Start () {

}

function Update () {
	transform.Translate(-speed*Time.deltaTime,0,0);
}