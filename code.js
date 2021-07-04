var namesofpeople=[];

function submit_guest() {
    var displaynamesofpeople=[]
    var Guestname=document.getElementById("add_guest").value;
    namesofpeople.push(Guestname);
    
    
   

}
function show_guest() {
    displaynamesofpeople="<li>"+namesofpeople+"</li>";
    document.getElementById("display_guests").innerHTML=displaynamesofpeople;
   

}
  var sortednames=[]

function sort_guest() {
  namesofpeople.sort();
   sortednames="<li>"+namesofpeople+"</li>";
   document.getElementById("sorted_list").innerHTML=sortednames;

}

function search_button()  {
    var s=document.getElementById("search").value;
    var found=0;
    var j;

    for(j=0;j<namesofpeople.length; j++) {
        if(s=namesofpeople[j]) {
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+" time/s "
    console.log("name found "+found+" time/s ");

}