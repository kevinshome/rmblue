let attemptCount = 0;

function deleteBlueButton(){
	let blueButton = document.querySelector('[aria-label="Twitter Blue"]');	
	if (blueButton != null){
		console.log("Button found. Removing.")
		blueButton.remove();
		return;
	}
	if (attemptCount === 15){
		console.log("No button found after 15 seconds. Aborting...");
		return;
	}
	console.log("No button found... waiting 1 second and trying again.");
	attemptCount += 1;
	setTimeout(() => { deleteBlueButton(); }, 1000);
}

deleteBlueButton();

