var sidenav=document.getElementById("sidenav")
var  menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

var productContainer=document.getElementById("productContainer")
var search=document.getElementById("search")
var productList=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=this.value.toUpperCase()
    for(count=0;count<productList.length;count=count+1)
    {
        var productName=productList[count].querySelector("h1").textContent
        if(productName.toUpperCase().indexOf(enteredValue)<0)
        {
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})