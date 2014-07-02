#pragma strict

function OnCollisionEnter(hit : Collision)
{
	// comprovem si hem cocat amb el jugador
	if (hit.gameObject.name == "Player")
	{
		hit.gameObject.rigidbody.freezeRotation = true;
		// da tiempo extra antes de canviar de nivel
		yield WaitForSeconds(2.0f);
		Application.LoadLevel(Application.loadedLevel+1);
	}
}