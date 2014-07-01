#pragma strict

var score : int;

function Start () {
	
}

function Update () {
	GetComponent(TextMesh).text = score.ToString();
}