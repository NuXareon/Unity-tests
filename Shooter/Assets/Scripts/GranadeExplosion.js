#pragma strict

var r : float;
var power : float;

var explosionParticles : Transform;

function OnTriggerEnter() 
{
	var pos : Vector3 = transform.position;
	var rot : Quaternion =  transform.rotation;
	
	var colliders : Collider[] = Physics.OverlapSphere(pos, r);
	
	Debug.Log(pos);
	
	for (var hit : Collider in colliders)
	{
		if (hit && hit.rigidbody)
		{
			hit.rigidbody.AddExplosionForce(power,pos,r,0,ForceMode.Impulse);
		}
	}
	
	Instantiate(explosionParticles, pos, rot);
	
	Destroy(gameObject);
}