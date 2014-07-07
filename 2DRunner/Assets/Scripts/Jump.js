#pragma strict

function Start () {

}

function Update () {
	if (Input.GetButtonDown("Jump")) transform.rigidbody2D.AddForce(Vector2(0.0f,600.0f));
	transform.rigidbody2D.AddForce(Vector2(0.0f-transform.position.x,0.0f));
}