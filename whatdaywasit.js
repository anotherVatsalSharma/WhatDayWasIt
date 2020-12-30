alert('Please enter the date in dd/mm/yyyy format. Only dates between 1st January 1000 and 1st January 2100 are supported.');
alert('Please comment any discrepancy with the date in dd/mm/yyyy format and the expected result and the obtained result');
alert('Have Fun!');

function calculate() { 


	if ((parseInt(document.getElementById('yob').value) >= 1000) && (parseInt(document.getElementById('yob').value) <= 2100) && (parseInt(document.getElementById('mob').value) <= 12) && (parseInt(document.getElementById('mob').value) >= 1) && (parseInt(document.getElementById('dob').value) >= 1) && (parseInt(document.getElementById('dob').value)<= 31)) {
		 // year
		 
		var yob = document.getElementById('yob').value;
	
		yob = parseInt(yob);

		var y = 0;
	
		if ((yob >= 1000) && (yob < 1100)) {
			y = 3;
			yob = yob - 1000;
		} else if ((yob >= 1100) && (yob < 1200)) {
			y = 1;
			yob = yob - 1100;
		} else if ((yob >= 1200) && (yob < 1300)) {
			y = 0;
			yob = yob - 1200;
		} else if ((yob >= 1300) && (yob < 1400)) {
			y = 5;
			yob = yob - 1300;
		} else if ((yob >= 1400) && (yob < 1500)) {
			y = 3;
			yob = yob - 1400;
		} else if ((yob >= 1500) && (yob < 1600)) {
			y = 1;
			yob = yob - 1500;
		} else if ((yob >= 1600) && (yob < 1700)) {
			y = 0;
			yob = yob - 1600;
		} else if ((yob >= 1700) && (yob < 1800)) {
			y = 5;
			yob = yob - 1700;
		} else if ((yob >= 1800) && (yob < 1900)) {
			y = 3;
			yob = yob - 1800;
		} else if ((yob >= 1900) && (yob < 2000)) {
			y = 1;
			yob = yob - 1900;
		} else if ((yob >= 2000) && (yob < 2100)) {
			y = 0;
			yob = yob - 2000;
		}
		
		if ([1,7,13,19,25,31,37,43,49,55,61,67,73,79,85,91,97].includes(yob)) {
			y += 0;
		} else if ([2,8,14,20,26,32,38,44,50,56,62,68,74,80,86,92,98].includes(yob)) {
			y += 1;
		} else if ([3,9,15,21,27,33,39,45,51,57,63,69,75,81,87,93,99].includes(yob)) {
			y += 2;
		} else if ([4,10,16,22,28,34,40,46,52,58,64,70,76,82,88,94].includes(yob)) {
			y += 3;
		} else if ([5,11,17,23,29,35,41,47,53,59,65,71,77,83,89,95].includes(yob)) {
			y += 5;
		} else if ([6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96].includes(yob)) {
			y += 6;
		} else {
			y = y;
		}
		
		//month
		
		var mob = document.getElementById('mob').value;
		
		mob = parseInt(mob);
		
		mob = mob - 1;
		
		var m = 0;
		
		switch (mob) {
			case 0:
				m = 0;
				break;
			case 1:
				m = 3;
				break;
			case 2:
				m = 3;
				break;
			case 3:
				m = 6;
				break;
			case 4:
				m = 1;
				break;
			case 5:
				m = 4;
				break;
			case 6:
				m = 6;
				break;
			case 7:
				m = 2;
				break;
			case 8:
				m = 5;
				break;
			case 9:
				m = 0;
				break;
			case 10:
				m = 3;
				break;
			case 11:
				m = 5;
				break;
		}
		
		var x = document.getElementById('yob').value;
		
		x = parseInt(x);
		
		if ([1000,1100,1300,1400,1500,1700,1800,1900].includes(x)) {
			m += 0;
		} else if ((x % 4 === 0) && (m > 0)) {
			m += 1;
		}
		
		//day
		
		var dob = document.getElementById('dob').value;
		
		dob = parseInt(dob);
		
		var d = dob % 7;
		
		//final
		
		var result = y + m + d;
		
		var fresult = result % 7;
		
		switch (fresult) {
			case 1:
				document.getElementById('result').innerHTML = 'Monday';
				break;
			case 2:
				document.getElementById('result').innerHTML = 'Tuesday';
				break;
			case 3:
				document.getElementById('result').innerHTML = 'Wednesday';
				break;
			case 4:
				document.getElementById('result').innerHTML = 'Thursday';
				break;
			case 5:
				document.getElementById('result').innerHTML = 'Friday';
				break;
			case 6:
				document.getElementById('result').innerHTML = 'Saturday';
				break;
			case 0:
				document.getElementById('result').innerHTML = 'Sunday';
				break;
		}


	} else {
		alert("The date submitted is not between 1st January 1000 and 1st January 2100. Please enter a valid date.");
		document.getElementById('yob').value = '';
		document.getElementById('mob').value = '';
		document.getElementById('dob').value = '';
	}

	
}