#pragma strict

function Start () {
	PlayerPrefs.SetInt("Score", 0);
	if (!PlayerPrefs.HasKey("Highscore")) PlayerPrefs.SetInt("Highscore", 0);
}

function Update () {
	if (transform.position.y < -6) {
		PlayerPrefs.SetInt("Score", 0);
		PlayerPrefs.Save();
		Application.LoadLevel(Application.loadedLevel);
		// Ajustar salt (no infinity salterino) (raycasting)
		// Score over time
		// Speed over time
		// Combo multiplier
	}
}