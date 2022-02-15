/**
 * 
 */

/*$(document).ready(function(){
	
	$('.table .eBtn').on('click',function(event){
		event.preventDefault();
		var href = $(this).attr('href');
		
		$.get(href,function(commande,status){
			$('.myForm #id').val(commande.id);
			$('.myForm #nameCommande').val(commande.nameCommande);
			$('.myForm #prixCommande').val(commande.prixCommande);
			$('.myForm #designation').val(commande.designation);
			
		});
		
		$('.myForm #exampleModal').modal();
	});
});
*/
function clearSearch() {
	        window.location = "[[@{/}]]";
}
function filtrage() {
    mon_cle = document.getElementById("myInput").value;
    title = document.getElementsByClassName("comTbl");

    for (i = 0; i < title.length; i++) {
        if (!title[i].textContent.toLowerCase().includes(mon_cle.toLowerCase())) {
        	title[i].parentElement.style.display = "none";
        } else {
        	title[i].parentElement.style.display = "";
        }
    }
}

/*function filtrage(){
	 // Declare variables
	  var input, filter, table, tr, td, i, txtValue;
	  input = document.getElementById("myInput");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("myTable");
	  tr = table.getElementsByTagName("tr");

	  // Loop through all table rows, and hide those who don't match the search query
	  for (i = 0; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[0];
	    if (td) {
	      txtValue = td.textContent || td.innerText;
	      if (txtValue.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }
	  }
}*/