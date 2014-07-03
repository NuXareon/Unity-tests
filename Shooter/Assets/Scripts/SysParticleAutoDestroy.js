#pragma strict

private var ps : ParticleSystem;

function Start () {
	ps = GetComponent(ParticleSystem);
}

function Update () {
	if (ps && !ps.IsAlive()) Destroy(gameObject);
}