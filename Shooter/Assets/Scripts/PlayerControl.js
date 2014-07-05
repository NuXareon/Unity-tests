#pragma strict

private var controller : CharacterController;
private var direction : Vector3 = Vector3.zero;
private var gpower : float;

var moveSpeed : float;
var turnSpeed : float;
var jumpSpeed : float;
var gravity : float;
var granade : Transform;

function Start () {
	controller = GetComponent("CharacterController");
}

function Update () {
	transform.rotation.eulerAngles.y += Time.deltaTime*Input.GetAxis("Mouse X")*turnSpeed;
	transform.rotation.eulerAngles.x += Time.deltaTime*Input.GetAxis("Mouse Y")*turnSpeed;
	
	if (controller.isGrounded)
	{
		direction = Vector3(Input.GetAxis("Horizontal"),0,Input.GetAxis("Vertical"));
		direction = transform.TransformDirection(direction);
		direction *= moveSpeed;
		//direction.y = 0;
		
		if (Input.GetButton("Jump"))
		{
			direction.y = jumpSpeed;
		}
	} else
	{
		var oldY : float = direction.y;
		direction = Vector3(Input.GetAxis("Horizontal"),0,Input.GetAxis("Vertical"));
		direction = transform.TransformDirection(direction);
		direction *= moveSpeed;
		direction.y = oldY;
	}

	direction.y -= gravity*Time.deltaTime;
	controller.Move(direction*Time.deltaTime);
	
	if (Input.GetButtonUp("Fire1")) {
		var granadeObj = Instantiate(granade, transform.position+transform.TransformDirection(0,0,2), transform.rotation);
		granadeObj.gameObject.rigidbody.AddForce(transform.TransformDirection(Vector3(0.0f,0.0f,gpower)));
	} else if (Input.GetButton("Fire1")) {
		gpower+=500*Time.deltaTime;
	} else {
		gpower = 200;
	}
}