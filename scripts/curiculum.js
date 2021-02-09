
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
         Sum(kolegij.ects,kolegij.sati);
         CreateTableHeader();
         
      }  
  }
cur.send();
}


function AddTableItem(value){
  console.log(value);
  
  $('#myTable').append('<tr><td>'+value.kolegij+'</td><td>'+value.ects+'</td><td>'+value.sati+'</td><td>'+value.predavanja+'</td><td>'+value.vjezbe+' </td><td>'+value.tip+'</td></tr>');
} 

var ects=0;
var hours=0;
function Sum(a,b){
  ects =ects+ a;
  hours =hours+b;

  console.log(ects, hours);
  $('.footerRow').remove();
  $('#myTable').append('<tr class="footerRow"><td>Ukupno</td><td>'+ects+'</td><td>'+hours+'</td></tr>');
}



