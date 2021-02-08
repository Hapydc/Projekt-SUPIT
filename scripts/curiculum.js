var data="";
const cur=new XMLHttpRequest();
cur.open('get','http://www.fulek.com/VUA/SUPIT/GetNastavniPlan')
cur.onreadystatechange = function () {
    if (cur.readyState == 4 ) {
        data=this.responseText
        console.log (this.responseText);
      }
      
  }
  var txt="";
  txt+="<select>";
  

  cur.send();
    
  
  $( function() {
  var availableTags = [
    "Hello",
    "World",
    "Hello World",
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );
 
  