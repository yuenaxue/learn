function selectAll(){
	var status = document.getElementsByName("cartCheckBox");
	var all=document.getElementById("allCheckBox").checked;

	if(all){
		for(var i=0;i<status.length;i++){
			status[i].checked=true;	
		}
	}
	else{
		for(var i=0;i<status.length;i++){
		status[i].checked=false;}
	}
		productCount();
}
function selectSingle(){
	var k=0;
	var oInput=document.getElementsByName("cartCheckBox");
	 for (var i=0;i<oInput.length;i++){
	   if(oInput[i].checked==false){
		  k=1;
		  break;
	    }
	}
	if(k==0){
		document.getElementById("allCheckBox").checked=true;
		}
	else{
		document.getElementById("allCheckBox").checked=false;
		}
			productCount();

}
function deleteRow(event){
	var td = window.event.srcElement.parentNode;
	var trIndex= td.parentNode.rowIndex;
	document.getElementById("shopping").deleteRow(trIndex);
	document.getElementById("shopping").deleteRow(trIndex-1);
		productCount();
}
function deleteSelectRow(){
	var oInput=document.getElementsByName("cartCheckBox");
	var Index;
	 for (var i=oInput.length-1;i>=0;i--){
	   if(oInput[i].checked==true){
		 Index=document.getElementById(oInput[i].value).rowIndex;
		 document.getElementById("shopping").deleteRow(Index);
	     document.getElementById("shopping").deleteRow(Index-1);
	    }
	}
		productCount();
}

function productCount(){
	var total=0;     
	var integral=0;  	
	var point;    
	var price;     
	var number;    
	var subtotal;  	
	var myTableTr=document.getElementsByClassName("product"); 
	if(myTableTr.length>0){
	for(var i=0;i<myTableTr.length;i++){
	    var checked = document.getElementsByName("cartCheckBox")[i].checked;
        if(checked){
		point=myTableTr[i].getElementsByTagName("td")[3].innerHTML; 
		price=myTableTr[i].getElementsByTagName("td")[4].innerHTML;
		number=myTableTr[i].getElementsByTagName("td")[5].getElementsByTagName("input")[0].value;
		integral+=point*number;
		total+=price*number;
		myTableTr[i].getElementsByTagName("td")[6].innerHTML=price*number;
		}
	
	document.getElementById("total").innerHTML=total;
	document.getElementById("integral").innerHTML=integral;	
	}
}
}
function changeNum(numId,flag){
	var numId=document.getElementById(numId);
	if(flag=="minus"){
		if(numId.value<=1){
			return false;
			}
		else{
			numId.value=parseInt(numId.value)-1;
			productCount();
			}
		}
	else{
		numId.value=parseInt(numId.value)+1;
		productCount();
		}
	}
window.onload=function(){
	var all=document.getElementById("allCheckBox");
	all.checked=true;
	selectAll();
};