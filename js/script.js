const deals = [

{
title:"50% Off Stubhub",
description:"Save big on top Tickets."
},

{
title:"30% Ticket Discount",
description:"Get exclusive deals."
},

{
title:"Ticket Sale",
description:"Up to 60% off Tickets."
}

];

const container = document.getElementById("dealContainer");

if(container){

deals.forEach(deal=>{

container.innerHTML+=`

<div class="deal">

<h3>${deal.title}</h3>

<p>${deal.description}</p>

<a href="tel:+1-855-518-4685" class="btn">Get Deal</a>

</div>

`;

});

}
// Show popup on page load
window.onload = function(){

if(!sessionStorage.getItem("popupClosed")){
document.getElementById("callPopup").style.display="flex";
}

}

// Close popup
function closePopup(){

document.getElementById("callPopup").style.display="none";
sessionStorage.setItem("popupClosed","true");

}