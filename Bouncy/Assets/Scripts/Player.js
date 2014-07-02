#pragma strict

var speed : float;

function Start () {

}

function update() {

}

// Se actualiza en cada vez que se actualiza el motor de fisicas
function FixedUpdate () {
	// Add torque fa "girar" l'objecte, max torque = project settings -> physics
	//rigidbody.AddTorque(Input.GetAxis("Vertical")*speed,0,Input.GetAxis("Horizontal")*speed);
	
	// Amb el cross product trobem el vector perpendicular sobre al que hem de girar
	if (gameObject.rigidbody.freezeRotation == false)
	{
		var rotationAxis : Vector3 = Vector3.Cross(Vector3.up, Vector3(Input.GetAxis("Horizontal"),0,Input.GetAxis("Vertical")));
		rigidbody.AddTorque(rotationAxis*speed);
	}
	
	if (Input.GetButtonDown("Jump"))
	{
		rigidbody.AddForce(0.0f,400.0f,0.0f);
	}
}

function Die()
{
	Application.LoadLevel(Application.loadedLevel);
}