#pragma strict

var player : Transform;

function Start () {

}

// S'executa despres dels updates, aixi ens assegurem que la camera esta situada correctament.
function LateUpdate () {
	var pos = player.transform.position;
	pos.z -= 5;
	pos.y += 2;
	transform.position = pos;
	transform.LookAt(player);
}