#pragma strict

private var gen : boolean;

var prefab : Transform;
var ringPrefab : Transform;
var ringChance : float;

function genPlatform(){
	var newPos = Vector3(Random.Range(8,9),Random.Range(-2,2),0);
	if (newPos.y + transform.position.y > 4 || newPos.y + transform.position.y < -5) newPos.y=transform.position.y-newPos.y;
	else newPos.y += transform.position.y;
	newPos.x += transform.position.x;
	if (newPos.y < -5) newPos.y = -5;
	else if (newPos.y > 4) newPos.y = 4;
	Instantiate(prefab,newPos,Quaternion.identity);
}

function genRing(){
	var rng = Random.value;
	if (rng < ringChance) {
		var ringPos = Vector3(Random.Range(-3.0f,3.0f), Random.Range(1.0f,3.0f), 0)+transform.position;
		Instantiate(ringPrefab,ringPos,Quaternion.identity);
	}
}

function Start () {
	gen = false;
}

function Update () {
	if (transform.position.x < 20 && !gen) {
		genPlatform();
		genRing();
		gen = true;
	}
	if (transform.position.x < -20) Destroy(gameObject);
	
}