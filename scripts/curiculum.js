
var data="";
const cur=new XMLHttpRequest();


cur.open('get','http://www.fulek.com/VUA/SUPIT/GetNastavniPlan');
cur.onreadystatechange = function () {
    if (cur.readyState == 4 ) {
         initAutocomplete (this.responseText);
      
      }
      
  }
cur.send();
 console.log(availableTags);
  $( "#tags" ).autocomplete({
    source: availableTags
  });
 

function initAutocomplete (data){
    var availableTags = JSON.parse(data);
    console.log(availableTags);
    
    $("#tags").autocomplete({
        source: availableTags,
        select: function( event, ui ) { 
            event.preventDefault();
            $('#tags').val(ui.item.label);
            console.log(ui.item);
        }   
      });
}

