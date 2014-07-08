#pragma strict

public var speedDampTime : float = 0.1f;
public var turnSmooth : float = 15.0f;

private var anim : Animator;

function Awake() {
	anim = GetComponent(Animator);
}

function Update() {
	var attack : boolean = Input.GetButtonDown("Fire1");
	var shout : boolean = Input.GetButtonDown("Fire2");
	if (attack) {
		anim.SetTrigger("Attack");
	}
	if (shout) {
		anim.SetTrigger("Shout");
	}
}
	
function FixedUpdate() {
	var h : float = Input.GetAxis("Horizontal");
	var v : float = Input.GetAxis("Vertical");
	
	MovementManager(h,v);
}	

function MovementManager(horizontal : float,vertical : float) {
	if (horizontal != 0 || vertical != 0) {
		Rotating(horizontal, vertical);
		
		var finalSpeed : float = Mathf.Sqrt(horizontal*horizontal+vertical*vertical)*5.5f;
		//rigidbody.MovePosition(Vector3(horizontal,0.0f,vertical));
		anim.SetFloat("Speed", finalSpeed, speedDampTime, Time.deltaTime);
	} else {
		anim.SetFloat("Speed", 0);
	}
}

function Rotating(horizontal : float, vertical : float) {
	var targetDirection : Vector3 = new Vector3(horizontal, 0.0f, vertical);
	var targetRotation : Quaternion = Quaternion.LookRotation(targetDirection, Vector3.up);
	var newRotation : Quaternion = Quaternion.Lerp(rigidbody.rotation, targetRotation, turnSmooth*Time.deltaTime);
	rigidbody.MoveRotation(newRotation);
}