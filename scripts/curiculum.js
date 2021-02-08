
const cur=new XMLHttpRequest();
cur.open('get','http://www.fulek.com/VUA/SUPIT/GetNastavniPlan');
cur.onreadystatechange = function () {
    if (cur.readyState == 4 ) {
         initAutocomplete (this.responseText);
      }  
  }
cur.send();
function initAutocomplete (data){
    var availableTags = JSON.parse(data);    
    $("#tags").autocomplete({
        source: availableTags,
        select: function( event, ui ) { 
            event.preventDefault();
            $('#tags').val(ui.item.label);
            GetCuriculum(ui.item.value)
        }   
      });
}
function GetCuriculum(value){
        const cur=new XMLHttpRequest();
            cur.open('get','http://www.fulek.com/VUA/SUPIT/GetKolegij/'+value);
            cur.onreadystatechange = function () {
    if (cur.readyState == 4 ) {
         var kolegij=JSON.parse(this.responseText)
         AddTableItem(kolegij);
      }  
  }
cur.send();
}

function AddTableItem(value){
    
}

