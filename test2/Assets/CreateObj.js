#pragma strict

var obj : String = "1";
var one : Transform;
var two : Transform;
var three : Transform;
var four : Transform;

var lastObj : Transform;

var mode : String;

function updateList(newObj : Transform)
{
	var comp = newObj.gameObject.GetComponent(playerObjList);
	if (lastObj == null)
	{
		comp.prev = newObj;
		comp.next = newObj;
		lastObj = newObj;
	} 
	else
	{
		var lastComp = lastObj.gameObject.GetComponent(playerObjList);
		comp.next = lastComp.next;
		comp.prev = lastObj;
		
		lastComp.next.gameObject.GetComponent(playerObjList).prev = newObj;
		lastComp.next = newObj;
		
		lastObj = newObj;
	}
}

function destroySingle(destObj : Transform)
{
	if (destObj != null)
	{
		var comp = destObj.gameObject.GetComponent(playerObjList);
		comp.next.gameObject.GetComponent(playerObjList).prev = comp.prev;
		comp.prev.gameObject.GetComponent(playerObjList).next = comp.next;
		if (lastObj == destObj) lastObj = comp.prev;
		UnityEngine.GameObject.Destroy(destObj.gameObject);
	}
}

function destroyType()
{
	var objects : GameObject[] = GameObject.FindGameObjectsWithTag(obj);
	for (object in objects)
	{
		destroySingle(object.transform);
	}
}

function Start () {

}

function Update () {
	if (Input.GetKey("1")) {obj = "1"; mode = "c";}
	else if (Input.GetKey("2")) {obj = "2"; mode = "c";}
	else if (Input.GetKey("3")) {obj = "3"; mode = "c";}
	else if (Input.GetKey("4")) {obj = "4"; mode = "c";}
	else if (Input.GetKey("z")) mode = "z";
	else if (Input.GetKey("e")) mode = "e";
	
	if(Input.GetButtonDown("Fire1"))
	{
		var newObj : Transform;
		if (mode == "c")
		{
			if (obj == "1") newObj = Instantiate(one,transform.position,Quaternion.identity);
			else if (obj == "2") newObj = Instantiate(two,transform.position,Quaternion.identity);
			else if (obj == "3") newObj = Instantiate(three,transform.position,Quaternion.identity);
			else if (obj == "4") newObj = Instantiate(four,transform.position,Quaternion.identity);
		}
		else if (mode == "z") destroySingle(lastObj);
		else if (mode == "e") destroyType();
		
		// If we created a new object, we must modify the list pointers
		if (newObj !== null) updateList(newObj);
	}
}