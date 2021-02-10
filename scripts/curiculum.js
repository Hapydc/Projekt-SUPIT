
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
         AddKolegij(kolegij);       
      }  
  }
cur.send();
}
function AddKolegij(value){
  $('#myTable').append('<tr><td>'+value.kolegij+'</td><td>'+value.ects+'</td><td>'+value.sati+'</td><td>'+value.predavanja+'</td><td>'+value.vjezbe+' </td><td>'+value.tip+'</td><td><button onclick=DeleteRow(this.parentNode.parentNode.rowIndex) class="btn btn-danger">Obriši</button></td></tr>');
  kolegijArray.push(value);
  Sum(kolegijArray)
} 
var ects=0;
var hours=0;
function Sum(array){
   for (i = 0; i < array.length; i++) {
     ects+=array[i].ects;
     hours+=array[i].sati;
   }
  $('.footerRow').remove();
  $('#myTable').append('<tr class="footerRow"><td>Ukupno</td><td>'+ects+'</td><td>'+hours+'</td></tr>');
  ects=0;
  hours=0;
}
var kolegijArray =[
];
function DeleteRow(i){
  DeleteFromArray(i);
  document.getElementById('myTable').deleteRow(i)
}
function DeleteFromArray(index){
  kolegijArray.splice([i-1],1);
  Sum(kolegijArray);
}






