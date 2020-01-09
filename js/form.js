var pathArray = window.location.pathname.split( '/' );
var host = window.location.protocol+"//"+window.location.host + "/";
var webroot = "meddy_3/";
var baseUrl = host + webroot;

var dashboardForm = {
	saveConsultation: function(){
		var appID = $("#appID").val();		
		var userId  = $("#userId").val();
		var department  = $("#department").val();
		var course  = $("#course").val();
		var userName  = $("#userName").val();
		if(userId=="" || department == "" || course == ""){
			alert("Incomplete Details, Please Fill-up all required fields!");
		}
		else{
			// medical history
			var ghObj = $('#gh');
			var gh = (ghObj.attr("checked") != "undefined" && ghObj.attr("checked") == "checked");
			var medObj = $('#med');
			var med = (medObj.attr("checked") != "undefined" && medObj.attr("checked") == "checked");
			var medMsg = $('#medMsg').val();
			var illnessObj = $('#illness');
			var illness = (illnessObj.attr("checked") != "undefined" && illnessObj.attr("checked") == "checked");
			var illnessMsg = $('#illnessMsg').val();
			var hospitalizedObj = $('#hospitalized');
			var hospitalized = (hospitalizedObj.attr("checked") != "undefined" && hospitalizedObj.attr("checked") == "checked");
			var hospitalizedMsg = $('#hospitalizedMsg').val();
			var prescriptionObj = $("#prescription");
			var prescription = (prescriptionObj.attr("checked") != "undefined" && prescriptionObj.attr("checked") == "checked");
			var prescriptionMsg = $("#prescriptionMsg").val();
			var pregnantObj = $("#pregnant");
			var pregnant = (pregnantObj.attr("checked") != "undefined" && pregnantObj.attr("checked") == "checked");
			// allergies
			var anestheticObj = $("#anesthetic");
			var anesthetic = (anestheticObj.attr("checked") != "undefined" && anestheticObj.attr("checked") == "checked");
			var aspirinObj = $("#aspirin");
			var aspirin = (aspirinObj.attr("checked") != "undefined" && aspirinObj.attr("checked") == "checked");
			var nsaidObj = $("#nsaid");
			var nsaid = (nsaidObj.attr("checked") != "undefined" && nsaidObj.attr("checked") == "checked");
			var antibioticObj = $("#antibiotic");
			var antibiotic = (antibioticObj.attr("checked") != "undefined" && antibioticObj.attr("checked") == "checked");
			var latexObj = $("#latex");
			var latex = (latexObj.attr("checked") != "undefined" && latexObj.attr("checked") == "checked");
			var otherAllergyObj = $("#latex");
			var otherAllergy = (otherAllergyObj.attr("checked") != "undefined" && otherAllergyObj.attr("checked") == "checked");
			var other = $("#other").val();
			var specificAllergy = $("#specificAllergy").val();
			var seriousIllness = $("#seriousIllness").val();
			var findings = $("#findings").val();
			var medicine = $("#tblconsultation_medicine").val();
			var medicineInTake = $("#medicineInTake").val();
			
			
			// adviced
			var advicedObj = document.getElementById("adviced");
			var adviced_i = advicedObj.selectedIndex;
			var adviced = advicedObj.options[adviced_i].value;
	
			// Next Visit Date
			var nextVisit = $("#NextVisitDate").val();
			var hourObj = document.getElementById("hour");
			var hour_i = hourObj.selectedIndex;
			var hour = hourObj.options[hour_i].value;		
			var minObj = document.getElementById("min");
			var min_i = minObj.selectedIndex;
			var min = minObj.options[min_i].value;				
			var nextVisitDate = nextVisit + " " + hour + ":" + min + ":00";
			
			var medicineQty = $("#medicineQty").val();
			
			$.ajax({
				type:'post',
				dataType: 'json',
				url: baseUrl + 'ajaxCall/saveConsultation.php',
				data:{
					'userId':userId,
					'gh':gh,
					'med':med,
					'medMsg':medMsg,
					'illness':illness,
					'illnessMsg':illnessMsg,
					'hospitalized':hospitalized,
					'hospitalizedMsg':hospitalizedMsg,
					'prescription':prescription,
					'prescriptionMsg':prescriptionMsg,
					'pregnant':pregnant,
					'anesthetic':anesthetic,
					'aspirin':aspirin,
					'nsaid':nsaid,
					'antibiotic':antibiotic,
					'latex':latex,
					'otherAllergy':otherAllergy,
					'specificAllergy':specificAllergy,
					'seriousIllness':seriousIllness,
				},
				success: function(res){
					if(res.status == 0){
						alert(res.message);
						window.location.href="index.php";
					}
					else{
						alert(res.message);
						window.location.href="viewDen.php";
					}
				}
			});
		}
	},
	
	editConsultation: function(){
		var referenceId  = $("#referenceId").val();
		var userId  = $("#userId").val();
		var department  = $("#department").val();
		var course  = $("#course").val();
		var userName  = $("#userName").val();
		// medical history
		var ghObj = $('#gh');
		var gh = (ghObj.attr("checked") != "undefined" && ghObj.attr("checked") == "checked");
		var medObj = $('#med');
		var med = (medObj.attr("checked") != "undefined" && medObj.attr("checked") == "checked");
		var medMsg = $('#medMsg').val();
		var illnessObj = $('#illness');
		var illness = (illnessObj.attr("checked") != "undefined" && illnessObj.attr("checked") == "checked");
		var illnessMsg = $('#illnessMsg').val();
		var hospitalizedObj = $('#hospitalized');
		var hospitalized = (hospitalizedObj.attr("checked") != "undefined" && hospitalizedObj.attr("checked") == "checked");
		var hospitalizedMsg = $('#hospitalizedMsg').val();
		var prescriptionObj = $("#prescription");
		var prescription = (prescriptionObj.attr("checked") != "undefined" && prescriptionObj.attr("checked") == "checked");
		var prescriptionMsg = $("#prescriptionMsg").val();
		var pregnantObj = $("#pregnant");
		var pregnant = (pregnantObj.attr("checked") != "undefined" && pregnantObj.attr("checked") == "checked");
		// allergies
		var anestheticObj = $("#anesthetic");
		var anesthetic = (anestheticObj.attr("checked") != "undefined" && anestheticObj.attr("checked") == "checked");
		var aspirinObj = $("#aspirin");
		var aspirin = (aspirinObj.attr("checked") != "undefined" && aspirinObj.attr("checked") == "checked");
		var nsaidObj = $("#nsaid");
		var nsaid = (nsaidObj.attr("checked") != "undefined" && nsaidObj.attr("checked") == "checked");
		var antibioticObj = $("#antibiotic");
		var antibiotic = (antibioticObj.attr("checked") != "undefined" && antibioticObj.attr("checked") == "checked");
		var latexObj = $("#latex");
		var latex = (latexObj.attr("checked") != "undefined" && latexObj.attr("checked") == "checked");
		var otherAllergyObj = $("#latex");
		var otherAllergy = (otherAllergyObj.attr("checked") != "undefined" && otherAllergyObj.attr("checked") == "checked");
		var other = $("#other").val();
		var specificAllergy = $("#specificAllergy").val();
		var seriousIllness = $("#seriousIllness").val();
		var findings = $("#findings").val();
		var medicine = $("#tblconsultation_medicine").val();
		var medicineInTake = $("#medicineInTake").val();
		
		// adviced
		var advicedObj = document.getElementById("adviced");
		var adviced_i = advicedObj.selectedIndex;
		var adviced = advicedObj.options[adviced_i].value;

		// Next Visit Date
		var nextVisit = $("#NextVisitDate").val();
		var hourObj = document.getElementById("hour");
		var hour_i = hourObj.selectedIndex;
		var hour = hourObj.options[hour_i].value;		
		var minObj = document.getElementById("min");
		var min_i = minObj.selectedIndex;
		var min = minObj.options[min_i].value;				
		var nextVisitDate = nextVisit + " " + hour + ":" + min + ":00";
		
		var medicineQty = $("#medicineQty").val();
		
		$.ajax({
			type:'post',
			dataType: 'json',
			url: baseUrl + 'ajaxCall/editConsultation.php',
			data:{
				'referenceId':referenceId,
				'userId':userId,
				'department':department,
				'course':course,
				'userName':userName,
				'gh':gh,
				'med':med,
				'medMsg':medMsg,
				'illness':illness,
				'illnessMsg':illnessMsg,
				'hospitalized':hospitalized,
				'hospitalizedMsg':hospitalizedMsg,
				'prescription':prescription,
				'prescriptionMsg':prescriptionMsg,
				'pregnant':pregnant,
				'anesthetic':anesthetic,
				'aspirin':aspirin,
				'nsaid':nsaid,
				'antibiotic':antibiotic,
				'latex':latex,
				'otherAllergy':otherAllergy,
				'specificAllergy':specificAllergy,
				'seriousIllness':seriousIllness,
				'findings':findings,
				'medicine':medicine,
				'medicineInTake':medicineInTake,
				'adviced':adviced,
				'other':other,
				'nextVisitDate':nextVisitDate,
				'medicineQty':medicineQty
			},
			success: function(res){
				if(res.status == 0){
					alert(res.message);
				}
				else{
					alert(res.message);
					window.location.href="index.php";
				}
			}
		});
	},
	
	setMedicine: function(name){
		
		if(document.getElementById("tblconsultation").style.display == ""){
			var med = "tblconsultation_medicine";
		}
		if(document.getElementById("tblextraction").style.display == ""){
			var med = "tblextraction_medicine";
		}
		if(document.getElementById("tblcleaning").style.display == ""){
			var med = "tblcleaning_medicine";
		}
		document.getElementById(med).value = name;
		global.hideAjaxDiv("#ajaxDiv");
	},
	
	setEditMedicine: function(name, divName){
		document.getElementById(divName).value = name;
		global.hideAjaxDiv();
	},
	
	displayServiceForm: function(tbl){
		if(tbl == "tblconsultation"){
			$("#tblconsultation").show(500);
			$("#tblextraction").hide(500);
			$("#tblcleaning").hide(500);
		}
		if(tbl == "tblextraction"){
			$("#tblextraction").show(500);
			$("#tblconsultation").hide(500);
			$("#tblcleaning").hide(500);
		}
		if(tbl == "tblcleaning"){
			$("#tblcleaning").show(500);
			$("#tblconsultation").hide(500);
			$("#tblextraction").hide(500);
		}
		if(tbl == ""){
			$("#tblconsultation").hide(500);
			$("#extraction").hide(500);
			$("#cleaning").hide(500);
		}
	},
	
	displayMedExam: function(tbl){
		if(tbl == "tblmed"){
			$("#tblmed").show(500);
			$("#medical").hide(500);
		}
		if(tbl == ""){
			$("#tblmed").hide(500);
			$("#medical").hide(500);
		}
	},
	
	saveExtraction: function(){
		var userId  = $("#userId").val();
		var appID = $("#appID").val();
		var department  = $("#department").val();
		var course  = $("#course").val();
		var userName  = $("#userName").val();
		// Next Visit Date
		var nextVisit = $("#NextVisitDateX").val();
		var hourObj = document.getElementById("hourX");
		var hour_i = hourObj.selectedIndex;
		var hour = hourObj.options[hour_i].value;		
		var minObj = document.getElementById("minX");
		var min_i = minObj.selectedIndex;
		var min = minObj.options[min_i].value;		
		var nextVisitDate = nextVisit + " " + hour + ":" + min + ":00";
		
		$.ajax({
			type:'post',
			dataType:'json',
			url:baseUrl + 'ajaxCall/saveExtraction.php',
			data:{
				'appID' : appID,
				'userId':userId,
				'department':department,
				'course':course,
				'userName':userName,
				'1':$("#1").val(),
				'2':$("#2").val(),
				'3':$("#3").val(),
				'4':$("#4").val(),
				'5':$("#5").val(),
				'6':$("#6").val(),
				'7':$("#7").val(),
				'8':$("#8").val(),
				'9':$("#9").val(),
				'10':$("#10").val(),
				'11':$("#11").val(),
				'12':$("#12").val(),
				'13':$("#13").val(),
				'14':$("#14").val(),
				'15':$("#15").val(),
				'16':$("#16").val(),
				'17':$("#17").val(),
				'18':$("#18").val(),
				'19':$("#19").val(),
				'20':$("#20").val(),
				'21':$("#21").val(),
				'22':$("#22").val(),
				'23':$("#23").val(),
				'24':$("#24").val(),
				'25':$("#25").val(),
				'26':$("#26").val(),
				'27':$("#27").val(),
				'28':$("#28").val(),
				'29':$("#29").val(),
				'30':$("#30").val(),
				'31':$("#31").val(),
				'32':$("#32").val(),
				'findings':$("#findingsX").val(),
				'medicine':$("#tblextraction_medicine").val(),
				'medicineQty':$("#medicineQtyX").val(),
				'medicineInTake':$("#medicineInTakeX").val(),
				'comments':$("#comments").val(),
				'nextVisitDate':nextVisitDate
			},
			success: function(res){
				if(res.status == 0){
					alert(res.message);
				}
				else{
					alert(res.message);
					window.location.href="index.php";
				}
			}
		});
	},
	
	editExtraction: function(){
		var referenceId  = $("#referenceId").val();
		var userId  = $("#userId").val();
		var department  = $("#department").val();
		var course  = $("#course").val();
		var userName  = $("#userName").val();
		// Next Visit Date
		var nextVisit = $("#NextVisitDateX").val();
		var hourObj = document.getElementById("hourX");
		var hour_i = hourObj.selectedIndex;
		var hour = hourObj.options[hour_i].value;		
		var minObj = document.getElementById("minX");
		var min_i = minObj.selectedIndex;
		var min = minObj.options[min_i].value;		
		var nextVisitDate = nextVisit + " " + hour + ":" + min + ":00";
		
		$.ajax({
			type:'post',
			dataType:'json',
			url:baseUrl + 'ajaxCall/editExtraction.php',
			data:{
				'referenceId':referenceId,
				'userId':userId,
				'department':department,
				'course':course,
				'userName':userName,
				'1':$("#1").val(),
				'2':$("#2").val(),
				'3':$("#3").val(),
				'4':$("#4").val(),
				'5':$("#5").val(),
				'6':$("#6").val(),
				'7':$("#7").val(),
				'8':$("#8").val(),
				'9':$("#9").val(),
				'10':$("#10").val(),
				'11':$("#11").val(),
				'12':$("#12").val(),
				'13':$("#13").val(),
				'14':$("#14").val(),
				'15':$("#15").val(),
				'16':$("#16").val(),
				'17':$("#17").val(),
				'18':$("#18").val(),
				'19':$("#19").val(),
				'20':$("#20").val(),
				'21':$("#21").val(),
				'22':$("#22").val(),
				'23':$("#23").val(),
				'24':$("#24").val(),
				'25':$("#25").val(),
				'26':$("#26").val(),
				'27':$("#27").val(),
				'28':$("#28").val(),
				'29':$("#29").val(),
				'30':$("#30").val(),
				'31':$("#31").val(),
				'32':$("#32").val(),
				'findings':$("#findingsX").val(),
				'medicine':$("#tblextraction_medicine").val(),
				'medicineQty':$("#medicineQtyX").val(),
				'medicineInTake':$("#medicineInTakeX").val(),
				'comments':$("#comments").val(),
				'nextVisitDate':nextVisitDate
			},
			success: function(res){
				if(res.status == 0){
					alert(res.message);
				}
				else{
					alert(res.message);
					window.location.href="index.php";
				}
			}
		});
	},
	
	saveCleaning: function(){
		var userId  = $("#userId").val();
		var appID = $("#appID").val();
		var department  = $("#department").val();
		var course  = $("#course").val();
		var userName  = $("#userName").val();
		// adviced
		var advicedObj = document.getElementById("advicedC");
		var adviced_i = advicedObj.selectedIndex;
		var adviced = advicedObj.options[adviced_i].value;
		// Next Visit Date
		var nextVisit = $("#NextVisitDateC").val();
		var hourObj = document.getElementById("hourC");
		var hour_i = hourObj.selectedIndex;
		var hour = hourObj.options[hour_i].value;		
		var minObj = document.getElementById("minC");
		var min_i = minObj.selectedIndex;
		var min = minObj.options[min_i].value;		
		var nextVisitDate = nextVisit + " " + hour + ":" + min + ":00";
		
		$.ajax({
			type:'post',
			dataType:'json',
			url:baseUrl + 'ajaxCall/saveCleaning.php',
			data:{
				'appID' : appID,
				'userId':userId,
				'department':department,
				'course':course,
				'userName':userName,
				'findings':$("#findingsC").val(),
				'medicine':$("#tblcleaning_medicine").val(),
				'medicineQty':$("#medicineQtyC").val(),
				'medicineInTake':$("#medicineInTakeC").val(),
				'adviced':adviced,
				'comments':$("#commentsC").val(),
				'other':$("#otherC").val(),
				'nextVisitDate':nextVisitDate
			},
			success: function(res){
				if(res.status == 0){
					alert(res.message);
				}
				else{
					alert(res.message);
					window.location.href="index.php";
				}
			}
		});		
	},
	
	editCleaning: function(){
		var referenceId  = $("#referenceId").val();
		var userId  = $("#userId").val();
		var department  = $("#department").val();
		var course  = $("#course").val();
		var userName  = $("#userName").val();
		// adviced
		var advicedObj = document.getElementById("advicedC");
		var adviced_i = advicedObj.selectedIndex;
		var adviced = advicedObj.options[adviced_i].value;
		// Next Visit Date
		var nextVisit = $("#NextVisitDateC").val();
		var hourObj = document.getElementById("hourC");
		var hour_i = hourObj.selectedIndex;
		var hour = hourObj.options[hour_i].value;		
		var minObj = document.getElementById("minC");
		var min_i = minObj.selectedIndex;
		var min = minObj.options[min_i].value;		
		var nextVisitDate = nextVisit + " " + hour + ":" + min + ":00";
		
		$.ajax({
			type:'post',
			dataType:'json',
			url:baseUrl + 'ajaxCall/editCleaning.php',
			data:{
				'referenceId':referenceId,
				'userId':userId,
				'department':department,
				'course':course,
				'userName':userName,
				'findings':$("#findingsC").val(),
				'medicine':$("#tblcleaning_medicine").val(),
				'medicineQty':$("#medicineQtyC").val(),
				'medicineInTake':$("#medicineInTakeC").val(),
				'adviced':adviced,
				'comments':$("#commentsC").val(),
				'other':$("#otherC").val(),
				'nextVisitDate':nextVisitDate
			},
			success: function(res){
				if(res.status == 0){
					alert(res.message);
				}
				else{
					alert(res.message);
					window.location.href="index.php";
				}
			}
		});		
	},
	
	saveMedExam: function(){
		// var userID  = $("#userID").val();
		
		$.ajax({
			type:'post',
			dataType:'json',
			url:'ajaxCall/saveMedExam.php',
			data:{
				'BP':$("#BP").val(),
				'PR':$("#PR").val(),
				'Weight':$("#Weight").val(),
				'Height':$("#Height").val(),
				'Findings':$("#Findings").val(),
				"userID":$("#form-userID").val()
				
			},
			success: function(res){
				if(res.status == 0){
					alert(res.message);
				}
				else{
					alert(res.message);
					window.location.href="appointment.php";
				}
			}
		});		
	},
	
	editMedExam: function(){
		var referenceId  = $("#referenceId").val();
		var userId  = $("#userId").val();
		var department  = $("#department").val();
		var course  = $("#course").val();
		var userName  = $("#userName").val();
		// adviced
		var advicedObj = document.getElementById("advicedC");
		var adviced_i = advicedObj.selectedIndex;
		var adviced = advicedObj.options[adviced_i].value;
		// Next Visit Date
		var nextVisit = $("#NextVisitDateC").val();
		var hourObj = document.getElementById("hourC");
		var hour_i = hourObj.selectedIndex;
		var hour = hourObj.options[hour_i].value;		
		var minObj = document.getElementById("minC");
		var min_i = minObj.selectedIndex;
		var min = minObj.options[min_i].value;		
		var nextVisitDate = nextVisit + " " + hour + ":" + min + ":00";
		
		$.ajax({
			type:'post',
			dataType:'json',
			url:baseUrl + 'ajaxCall/editCleaning.php',
			data:{
				'referenceId':referenceId,
				'userId':userId,
				'department':department,
				'course':course,
				'userName':userName,
				'findings':$("#findingsC").val(),
				'medicine':$("#tblcleaning_medicine").val(),
				'medicineQty':$("#medicineQtyC").val(),
				'medicineInTake':$("#medicineInTakeC").val(),
				'adviced':adviced,
				'comments':$("#commentsC").val(),
				'other':$("#otherC").val(),
				'nextVisitDate':nextVisitDate
			},
			success: function(res){
				if(res.status == 0){
					alert(res.message);
				}
				else{
					alert(res.message);
					window.location.href="index.php";
				}
			}
		});		
	},
	
	
	addNewWalkinAppointment: function(){
		
	}
};