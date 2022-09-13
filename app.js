
$(document).ready(function () {


	





// Validate Password
$("#passcheck").hide();
let passwordError = true;
$("#password").keyup(function () {
	validatePassword();
});
function validatePassword() {
	let passwordValue = $("#password").val();
	
	if (passwordValue.length == "") {
	$("#passcheck").show();
	passwordError = false;
	return false;
	}
	let passwordValue1 = $("#password").val();
	
	if (passwordValue1.length == "") {
	$("#passcheck").show();
	passwordError = false;
	return false;
	}
	let passwordValue2 = $("#password").val();
	
	if (passwordValue2.length == "") {
	$("#passcheck").show();
	passwordError = false;
	return false;
	}
	let passwordValue3 = $("#password").val();
	
	if (passwordValue3.length == "") {
	$("#passcheck").show();
	passwordError = false;
	return false;
	}
	let passwordValue4 = $("#password").val();
	
	if (passwordValue4.length == "") {
	$("#passcheck").show();
	passwordError = false;
	return false;
	}
	if (passwordValue.length < 8 ) {
	$("#passcheck").show();
	$("#passcheck").html(
		"**Length of password must be atleast 8"
	);
	$("#passcheck").css("color", "red");
	passwordError = false;
	return false;
	} else {
	$("#passcheck").hide();
	}
	if (passwordValue1.search(/[a-z]/) < 0) {
		$("#passcheck").show();
		$("#passcheck").html(
			"**Altleast 1 lower letter"
		);
		$("#passcheck").css("color", "red");
		passwordError = false;
		return false;
		} else {
		$("#passcheck").hide();
		}
		if (passwordValue2.search(/[A-Z]/) < 0) {
			$("#passcheck").show();
			$("#passcheck").html(
				"**Altleast 1 uppercase letter"
			);
			$("#passcheck").css("color", "red");
			passwordError = false;
			return false;
			} else {
			$("#passcheck").hide();
			}
			if (passwordValue3.search(/[0-9]/) < 0) {
				$("#passcheck").show();
				$("#passcheck").html(
					"**Altleast 1 digit"
				);
				$("#passcheck").css("color", "red");
				passwordError = false;
				return false;
				} else {
				$("#passcheck").hide();
				}
				if (passwordValue4.search(/[!@#\$%\^&\*_]/) < 0) {
					$("#passcheck").show();
					$("#passcheck").html(
						"**Altleast 1 special character( ! @ # $ % ^ & * _ )"
					);
					$("#passcheck").css("color", "red");
					passwordError = false;
					return false;
					} else {
					$("#passcheck").hide();
					}
}




// Submit button
$("#submitbtn").click(function () {
	
	validatePassword();
	
	if (passwordError == true) {
	return true;
	} else {
	return false;
	}
});
});
