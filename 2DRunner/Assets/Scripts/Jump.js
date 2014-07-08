#pragma strict

function Start () {

}

function Update () {
	if (Input.GetButtonDown("Jump")) {
		var hit : RaycastHit2D = Physics2D.Raycast(transform.position, -Vector2.up, 1, 1<<8);
		if (hit.collider != null) transform.rigidbody2D.AddForce(Vector2(0.0f,600.0f));
	}
	transform.rigidbody2D.AddForce(Vector2(0.0f-transform.position.x,0.0f));
}