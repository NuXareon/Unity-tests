#pragma strict

function OnTriggerEnter(hit : Collider)
{
	// comprovem si hem xocat amb el jugador
	if (hit.gameObject.name == "Player")
	{
		// executa les funcions amb el nom donat de lobjecte
		hit.gameObject.SendMessage("Die");
	}
}