let clockTimer = () => {

let date = new Date();
let clock = document.querySelector("#clock");

if(date.getSeconds() < 10){

	clock.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + "0"+date.getSeconds();

}else{
	clock.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}





}



setInterval( (clockTimer),1000);

clockTimer();



