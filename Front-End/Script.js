/*function addStudent() {
    let name = document.getElementById("name").value;
    let room = document.getElementById("room").value;

    fetch("http://localhost:8080/api/student", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            room: room
        })
    })
    .then(response => {
    console.log("Status : ",response.status);
    return response.text();
    })
    .then(data => {
    console.log("Raw Response :",data);
    })
    .catch(error => console.error(error));
}*/
 function getStudents() {
     fetch("http://localhost:8080/api/student")
     .then(res => res.json())
     .then(data => {
         console.log(data);

         let list = document.getElementById("studentList");
         list.innerHTML = "";

         data.forEach(s => {

             list.innerHTML += `
             <li>
             ${s.name} |
             Room: ${s.room} |
             Mobile: ${s.mobileNo} |
             Course: ${s.course}

             <button onclick="deleteStudent(${s.id})">Delete</button>

             <button onclick="editStudent(
             ${s.id},
             '${s.name}',
             '${s.mobileNo}',
             '${s.room}',
             '${s.course}',
             '${s.address}'
             )">Edit</button>

             </li>`;
         });
     });
 }
  function deleteStudent(id){
     fetch(`http://localhost:8080/api/student/${id}`,{
     method:"Delete"
     })
     .then(()=>{
       console.log("Deleted");
       getStudents(); //refresheed list
     })
     .catch(err => console.error(err));
  }
    function editStudent(id,name,mobileNo,room,course,address){
     console.log("Editing ");
     document.getElementById("studentId").value = id;
     document.getElementById("name").value = name;
     document.getElementById("mobileNo").value = mobileNo;
     document.getElementById("room").value = room;
     document.getElementById("course").value = course;
     document.getElementById("address").value = address;
  }

  function saveOrUpdate(){
     let id = document.getElementById("studentId").value.trim();
     let name = document.getElementById("name").value.trim();
     let room = document.getElementById("room").value.trim();
     let mobileNo = document.getElementById("mobileNo").value.trim();
     let course = document.getElementById("course").value.trim();
     let address = document.getElementById("address").value.trim();
     console.log("FINAL DATA:", JSON.stringify({ id, name, room }));


     if(name === ""){
      alert("Name required");
      return;
     }
     if(mobileNo.length !== 10){
      alert("Enter valid Mobile number");
      return;
     }
     if(!/^[6-9][0-9]{9}$/.test(mobileNo)){
      alert("Enter valid Mobile number");
      return;
      }
      if(Number(room)<=0){
       alert("Room number must be positive");
       return;
      }
      if(course === ""){
       alert("Course is required");
       return;
      }
      if(address === ""){
       alert("Address is required");
       return;
      }


     let url = "http://localhost:8080/api/student";
     let method = "POST";

     if(id !== ""){
         url = `http://localhost:8080/api/student/${id}`;
         method = "PUT";
     }

     fetch(url, {
       method: method,
       headers:{
        "Content-Type": "application/json"
       },

       body: JSON.stringify({
           name: name,
           mobileNo: mobileNo,
           room: Number(room),
           course: course,
           address: address
       })
     })
     .then(res => {
         if(!res.ok){
             throw new Error("Error: " + res.status);
         }
         return res.json();
     })
     .then(() =>{
         console.log("Saved/Updated");

         // clear AFTER success
        /* document.getElementById("studentId").value="";
         document.getElementById("name").value="";
         document.getElementById("room").value="";*/
         clearForm();

         getStudents();
     })
     .catch(err => console.error(err));
  }

   function searchStudent(){

       let name = document.getElementById("searchName").value.trim();

       fetch(`http://localhost:8080/api/student/search?name=${name}`)
       .then(res => res.json())
       .then(data => {

           let list = document.getElementById("studentList");
           list.innerHTML = "";

           if(data.length === 0){
               alert("No student found");
               return;
           }

           data.forEach(s => {
               list.innerHTML += `
               <li>
               ${s.name} - ${s.mobileNo}
               </li>
               `;
           });

       })
       .catch(err => console.error(err));
   }
  function clearForm() {
      document.getElementById("studentId").value = "";
      document.getElementById("name").value = "";
      document.getElementById("room").value = "";
      document.getElementById("mobileNo").value="";
      document.getElementById("course").value="";
      document.getElementById("address").value="";
      console.log("Form cleared");
  }

