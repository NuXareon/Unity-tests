#pragma strict

function OnGUI() {
	var highscore : int;
	var score : int;
	var time : float;
	if (PlayerPrefs.HasKey("Highscore")) highscore = PlayerPrefs.GetInt("Highscore");	
	else highscore = 0;
	if (PlayerPrefs.HasKey("Score")) score = PlayerPrefs.GetInt("Score");
	else score = 0;
	if (PlayerPrefs.HasKey("Time")) time = PlayerPrefs.GetFloat("Time");
	else time = 0.0f;
	var style : GUIStyle = GUIStyle();
	style.fontSize = 30;
	GUI.Label(Rect(10,10,20,20),highscore.ToString(), style);
	GUI.Label(Rect(700,10,20,20),score.ToString(), style);
	GUI.Label(Rect(350,10,200,200),time.ToString("F2"), style);
}

function Start () {
	PlayerPrefs.SetFloat("Time", 0.0f);
}

function Update () {
	var time : float = PlayerPrefs.GetFloat("Time");
	PlayerPrefs.SetFloat("Time", time+Time.deltaTime);
}