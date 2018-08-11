;(function(){

	'use strict';
	
	var formCalc = document.querySelector('.form-calc');
	var formCalcControl = document.querySelector('.form-calc__control');
	var formCalcControlValue;
	var formCalcResultAmount = document.querySelector('.form-calc__result-amount');
	var formCalcBtn = document.querySelector('.form-calc__btn');	
	
	formCalcControl.addEventListener('change', function(){
		if(this.value === ''){
			formCalcBtn.disabled = false; 
		}
		else{
			formCalcBtn.disabled = false; 
		}
	});		
	
	formCalcBtn.addEventListener('click', function(event){
	    event.preventDefault();		
	
		formCalcControlValue = parseFloat(formCalcControl.value, 10);
							
		if(formCalcControlValue <= 500000){
			formCalcResultAmount.innerHTML = (formCalcControlValue * 1.3 / 100) + formCalcControlValue;
		}
		else if(formCalcControlValue > 500000 && formCalcControlValue <= 1000000){
			formCalcResultAmount.innerHTML = (formCalcControlValue * 1.05 / 100) ;
		}
		else if(formCalcControlValue > 1000000 && formCalcControlValue <= 2000000){
			formCalcResultAmount.innerHTML = (formCalcControlValue * 0.85 / 100) + formCalcControlValue;
		}
		else{
			formCalcResultAmount.innerHTML = (formCalcControlValue * 0.75 / 100) + formCalcControlValue;
		}
		
	});
	

})();