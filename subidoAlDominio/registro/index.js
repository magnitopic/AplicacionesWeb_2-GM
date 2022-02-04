var submit = document.getElementById("submitButton");
document.getElementById("terms").onclick = function () {
	if (this.checked) {
		submit.disabled = false;
	}else{
		submit.disabled = true;
	}
};
