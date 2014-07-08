#pragma strict

function OnTriggerEnter2D(hit : Collider2D){
	var score : int = PlayerPrefs.GetInt("Score");
	PlayerPrefs.SetInt("Score", ++score);
	if (score > PlayerPrefs.GetInt("Highscore")) PlayerPrefs.SetInt("Highscore", score);
	Destroy(gameObject);
}

function Start () {
	
}

function Update () {
	if (transform.position.x < -20) Destroy(gameObject);
}