#pragma strict

var speedx : int;
var speedy : int;
var speedInc : int;

function Start () {
	rigidbody.AddForce(speedx,speedy,0);
}

function Update () {

}

function OnCollisionEnter(collision : Collision) {
	speedx = -speedx;
	if(speedx > 0) speedx += speedInc;
	else speedx -= speedInc;
	rigidbody.AddForce(speedx,speedy,0);
	var s : GameObject = GameObject.FindGameObjectWithTag("Score");
	var c = s.GetComponent(TextScript);
	c.score += 1;
}