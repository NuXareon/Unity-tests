#pragma strict

var obj : String = "1";
var one : Transform;
var two : Transform;
var three : Transform;
var four : Transform;

function Start () {

}

function Update () {
	if (Input.GetKey("1")) obj = "1";
	else if (Input.GetKey("2")) obj = "2";
	else if (Input.GetKey("3")) obj = "3";
	else if (Input.GetKey("4")) obj = "4";
	else if (Input.GetKey("z")) obj = "z";
	if(Input.GetButtonDown("Fire1"))
	{
		if (obj == "1") Instantiate(one,transform.position,Quaternion.identity);
		else if (obj == "2") Instantiate(two,transform.position,Quaternion.identity);
		else if (obj == "3") Instantiate(three,transform.position,Quaternion.identity);
		else if (obj == "4") Instantiate(four,transform.position,Quaternion.identity);
		else if (obj == "z") UnityEngine.Object.Destroy(GameObject.FindGameObjectWithTag("PlayerObj"));
		// Fer servir tags per diferents obj
		// Guardar en un array els objectes
		// ...
	}
}