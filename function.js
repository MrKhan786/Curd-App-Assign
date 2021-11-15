function post_create(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    axios.post("https://curd-app-khan.herokuapp.com/user",{
    name:name, email:email, address:address}
    )
    .then(function(response){
        console.log(response);
        alert(response.data);
    }) .catch(function(error){
        console.log(error())
    }) 
}

function get_all(){
 
axios.get("https://curd-app-khan.herokuapp.com/users")
  .then(function (response) {
 $html="";
 var i= 0;
response.data.forEach(function(data){
    if (data.name != undefined){
     $html += '<tr>' ;
     $html += '<td id="name_'+ i +'">' + data.name +"</td>";
     $html += '<td id="email_'+ i +'">' +data.email+"</td>";
     $html += '<td id="address_'+ i +'">' +data.address+"</td>";
     $html += '<td> <a href="javascript:void(0)" onclick="get_record(this);" id='+i+' > View </td>';
     $html += '</tr>' ;
     i++;
    }
 });
 document.getElementById("tbpler").innerHTML=$html;
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

function get_record($obj)
{
    var id=$obj.getAttribute('id');
    id= parseInt(id);
    let name = document.getElementById("name_" +id).innerHTML;
    let email = document.getElementById("email_" +id).innerHTML;
    let address = document.getElementById("address_" +id).innerHTML;

    document.getElementById("name").value= name;
   document.getElementById("email").value =email;
   document.getElementById("address").value= address;
   document.getElementById("student_id").value= id;


}

function update_student(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

let id = document.getElementById("student_id").value;
axios.put("https://curd-app-khan.herokuapp.com/user/"+ id,{
   name:name, email:email, address:address
})
.then(response => {
    alert("user updated");
    get_all() ;
})
.catch(error =>{
    console.log(error);
})
} 

function delete_student(){
    let id = document.getElementById("student_id").value;
axios.delete("https://curd-app-khan.herokuapp.com/user/" + id)
.then(function(response){
    alert (response.data)
    get_all();
})
.catch(function(error){
    console.log(error);
})
}
