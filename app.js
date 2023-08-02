//define a name of sound
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(sound => {
//create a element button
  const soundBoard = document.createElement("button");
//add a class 'soundBoard'
  soundBoard.classList.add("soundBoard");
//get the inner text of soundboard
  soundBoard.innerText = sound;
//add a click event to a button element
  soundBoard.addEventListener("click", () => {
//to stop the sound
    stopSounds();
//play a sound 
    document.getElementById(sound).play()
  });
//append the button element(btns) to other element(soundboard)
  document.getElementById("btns").appendChild(soundBoard);

});

//to stop the sound
function stopSounds() {
  sounds.forEach((sound) => {
    //target through id
    const song = document.getElementById(sound);
    //to pause the sound
    song.pause();
    //current time of sound
    song.time = 0;
  });

}
