$(document).ready(function(){
	
	jQuery.fn.center = function () {
	    this.css("position","absolute");
	    this.css("top", ( $(window).height() - this.outerHeight() ) / 2+$(window).scrollTop() + "px");
	    this.css("left", ( $(window).width() - this.outerWidth() ) / 2+$(window).scrollLeft() + "px");
	    return this;
	}
});

var global = {
	formMedicines: function(){
		window.location.href="medicineForm.php";
	},
	saveMedicine: function(){
		if($("#name").val().length > 0 && $("#date").val().length > 0  && $("#quantity").val().length > 0 && $("#consumed").val().length > 0 && $("#minQuantity").val().length > 0  && $("#expiration").val().length > 0)
		{
			$.ajax({
				type:'post',
				url:'saveMedicine.php',
				dataType:'json',
				data:{
					"dept":$("#dept").val(),
					"date":$("#date").val(),
					"name":$("#name").val(),
					"quantity":$("#quantity").val(),
					"consumed":$("#consumed").val(),
					"minQuantity":$("#minQuantity").val(),
					"dept":$("#dept").val(),
					"expiration":$("#expiration").val(),
				},
				success:function(res){
					alert(res.message);
					document.getElementById('name').value = '';
					document.getElementById('quantity').value = '';
					document.getElementById('consumed').value = '';
					document.getElementById('minQuantity').value = '';
					document.getElementById('expiration').value = '';
				}
			});
		}else{
			alert("Fill all fields");
			
		}
	},
	updateMedicine: function(){
		if($("#name").val().length > 0 && $("#date").val().length > 0  && $("#quantity").val().length > 0 && $("#consumed").val().length > 0 && $("#minQuantity").val().length > 0  && $("#expiration").val().length > 0)
		{
			$.ajax({
				type:'post',
				url:'updateMedicine.php',
				dataType:'json',
				data:{
					"id":$("#id").val(),
					"dept":$("#dept").val(),
					"date":$("#date").val(),
					"name":$("#name").val(),
					"quantity":$("#quantity").val(),
					"consumed":$("#consumed").val(),
					"minQuantity":$("#minQuantity").val(),
					"dept":$("#dept").val(),
					"expiration":$("#expiration").val(),
				},
				success:function(res){
					alert(res.message);
					window.location.href="medicineForm.php?id=" + $("#id").val();
				}
			});
		}else{
			alert("Fill all fields");
			window.location.href="medicineForm.php?id=" + $("#id").val();
		}
	},
	
	//medical appointment
	formAppointment: function(){
		window.location.href="appointmentForm.php";
	},
	saveAppointment: function(){
		if( $("#date").val().length > 0 &&  
			$("#NextVisitDate").val().length > 0 && 
			$("#userID").val().length > 0  && 
			$("#Course").val().length > 0 && 
			$("#Lname").val().length > 0 && 
			$("#Fname").val().length > 0  && 
			$("#Mname").val().length > 0 && 
			$("#Complaints").val().length > 0 
			&& $("#Treatment").val().length > 0)
		{
			$.ajax({
				type:'post',
				url:'saveAppointment.php',
				dataType:'json',
				data:{
					"dept":$("#dept").val(),
					"hour":$("#hour").val(),
					"date":$("#date").val(),
					"userID":$("#userID").val(),
					"Course":$("#Course").val(),
					"Lname":$("#Lname").val(),
					"Fname":$("#Fname").val(),
					"Mname":$("#Mname").val(),
					"Complaints":$("#Complaints").val(),
					"Treatment":$("#Treatment").val(),
					"dept":$("#dept").val(),
					"NextVisitDate":$("#NextVisitDate").val(),
				},
				success:function(res){
					alert(res.message);
					document.getElementById('NextVisitDate').value = '';
					document.getElementById('userID').value = '';
					document.getElementById('Course').value = '';
					document.getElementById('Lname').value = '';
					document.getElementById('Fname').value = '';
					document.getElementById('Mname').value = '';
					document.getElementById('Complaints').value = '';
					document.getElementById('Treatment').value = '';
				}
			});
		}else{
			alert("Fill all fields");
			
		}
	},
	updateAppointment: function(){
		if($("#Date").val().length > 0 && $("#NextVisitDate").val().length > 0 && $("#userID").val().length > 0  && $("#Course").val().length > 0 && $("#Lname").val().length > 0 && $("#Fname").val().length > 0  && $("#Mname").val().length > 0 && $("#Complaints").val().length > 0 && $("#Treatment").val().length > 0)
		{
			$.ajax({
				type:'post',
				url:'updateAppointment.php',
				dataType:'json',
				data:{
					"id":$("#id").val(),
					"dept":$("#dept").val(),
					"date":$("#date").val(),
					"NextVisitDate":$("#NextVisitDate").val(),
					"lname":$("#userID").val(),
					"fname":$("#Course").val(),
					"mname":$("#Lname").val(),
					"gender":$("#Fname").val(),
					"age":$("#Mname").val(),
					"address":$("#Complaints").val(),
					"dob":$("#Treatment").val(),
				},
				success:function(res){
					alert(res.message);
					window.location.href="appointmentForm.php?id=" + $("#id").val();
				}
			});
		}else{
			alert("Fill all fields");
			window.location.href="appointmentForm.php?id=" + $("#id").val();
		}
	},
	
	search:function(){
		window.location.href="index.php?search=" + $("#userID").val();
	},
	
	redirectUrl:function(url){
		window.location.href=url;
	},
	
	listMedicine: function(){
		$('#ajaxStatus').html('');
		$("#ajaxDiv").center().show();
	},
	
	showAjaxDiv: function(div)
	{
		// Clear the text
		$(div).html('');
		// Set the spinner in the middle
		$(div).center().show();
	},	
	
	hideAjaxDiv: function(div)
	{
		//$("#ajaxLoader").fadeOut('slow');
		$(div).hide(500);
	},
	ajaxHistoryDetailsDiv: function(){
		$('#ajaxHistoryDetailsStatus').html('');
		$("#ajaxHistoryDetailsDiv").center().show();
	},
	pendingSearchByDate: function(){
		window.location.href="listPending.php?rights=2&sDate="+$("#searchDate").val();
		// alert('hello');
	},
	viewMedicalApprovedUser: function(userID){
		if(userID){
			window.location.href="viewMedicalUser.php?userID="+userID;
		}		
	},
	viewMedicalApprovedVarsity: function(userID){
		if(userID){
			window.location.href="viewMedicalVarsity.php?userID="+userID;
		}		
	},
	//bruno.php
	bruno: function(userID){
		if(userID){
			window.location.href="printFreshman.php?userID="+userID;
		}		
	},
	bruno2: function(userID){
		if(userID){
			window.location.href="printVarsity.php?userID="+userID;
		}		
	},
	
	saveMedicalApproved: function(){
		var items = [];
		var i=0;
		$("input[id='form-medicalHistory']:checked").each(function(){
                        items.push($(this).val());
                        i++;
        });
		$.ajax({
			type:'post',
			url:'saveMedicalApprovedUser.php',
			dataType:'json',
			data:{
				"lname" : $("#lname").val(),
				"fname" : $("#fname").val(),
				"mname" : $("#mname").val(),
				"gender" : $("#gender").val(),
				"raddress" : $("#raddress").val(),
				"birthdate" : $("#birthdate").val(),
				"placeofbirth" : $("#placeofbirth").val(),
				"guardianname" : $("#guardianname").val(),
				"guardianno" : $("#guardianno").val(),
				"religion" : $("#religion").val(),
				"medHistory" : items.toString(),
				"others" : $("#others").val(),
				"med" : $("#med").val(),
				"allergies" : $("#allergies").val(),
				"injuries" : $("#injuries").val(),
				"operation" : $("#operation").val(),
				"handi" : $("#handi").val(),
				"BP" : $("#BP").val(),
				"remarks" : $("#remarks").val(),
				"userID":$("#form-userID").val()
				},
			success:function(res){
				alert(res.message);
				window.location.href="appointment.php";
			}
		});		
	},
	viewMedicalApprovedFreshman: function(userID){
		if(userID){
			window.location.href="viewMedicalFreshman.php?userID="+userID;
		}		
	},
	saveMedicalApprovedFreshaman: function(){
		var items = [];
		var i=0;
		$("input[id='form-medicalHistory']:checked").each(function(){
                        items.push($(this).val());
                        i++;
        });
		$.ajax({
			type:'post',
			url:'saveMedicalApprovedFreshman.php',
			dataType:'json',
			data:{
				"lname" : $("#lname").val(),
				"fname" : $("#fname").val(),
				"mname" : $("#mname").val(),
				"medHistory" : items.toString(),
				"others" : $("#others").val(),
				"med" : $("#med").val(),
				"allergies" : $("#allergies").val(),
				"injuries" : $("#injuries").val(),
				"operation" : $("#operation").val(),
				"handi" : $("#handi").val(),
				"mens" : $("#mens").val(),
				"remarks" : $("#remarks").val(),
				"userID":$("#form-userID").val()
				},
			success:function(res){
				alert(res.message);
				window.location.href="appointment.php";
			}
		});		
	},
	setPatientCat: function(cat, userID, course){
		// alert(cat);
		switch(cat){
			case "Student":
				$("#"+course).removeAttr("disabled");
				$("#"+userID).removeAttr("disabled");				
			break;
			case "Faculty":
				$("#"+userID).removeAttr("disabled");
				$("#"+course).attr("disabled",true);
				$("#"+course).val('');
			break;
			case "Admin":
				$("#"+userID).removeAttr("disabled");
				$("#"+course).attr("disabled",true);
				$("#"+course).val('');
			break;
			case "Dependent":
				$("#"+course).attr("disabled",true);
				$("#"+userID).attr("disabled",true);
				$("#"+userID).val('');
				$("#"+course).val('');
			break;
			default:
				$("#"+course).attr("disabled",true);
				$("#"+userID).attr("disabled",true);
				$("#"+userID).val('');
				$("#"+course).val('');
			break;
		}
	},
	searchMedicineByName: function(param){
		alert(param);
	},
	
	//consultation records
	formConsultation: function(){
		window.location.href="medConsultation.php";
	},
	
	//MSR Reports
	formMSR: function(){
		window.location.href="msrReport.php";
	},
	
	//add MSR
	formaddMsr: function(){
		window.location.href="addMsr.php";
	},

	//get Supply
	getSupply: function(){
		window.location.href="searchSupply.php";
	},
	
	//new medication appointment
	formNew: function(){
		window.location.href="newMedication.php";
	},	
	
	
}
