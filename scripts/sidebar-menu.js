(function() {
const openingBtn = document.querySelector(".sidebar__hamburger"); 
const closingBtn = document.querySelector(".sidebar__close"); 
const sidebar = document.querySelector(".sidebar"); 
/*openingBtn.addEventListener("click", openSidebar);
function openSidebar(){
	sidebar.classList.add("sidebar--opened");
}*/
/*function testFunc(){
	console.log("1,2,3");
}
testFunc();
*/
/*function testFunc(arg){
	console.log(arg);
}
testFunc("abc123");*/
openingBtn.addEventListener("click", function() {
	sidebar.classList.add("sidebar--opened");
});

closingBtn.addEventListener("click", function() {
	sidebar.classList.remove("sidebar--opened");
});

})()



