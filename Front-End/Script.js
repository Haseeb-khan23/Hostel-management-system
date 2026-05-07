function addStudent() {
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
}
 function getStudents() {
     fetch("http://localhost:8080/api/student")
     .then(res => res.json())
     .then(data => {
         console.log(data);

         let list = document.getElementById("studentList");
         list.innerHTML = "";

         data.forEach(s => {
             list.innerHTML += `<li>
             ${s.name} - Room ${s.room}
             <button onclick="deleteStudent(${s.id})">Delete</button>
             <button onclick="editStudent(${s.id},'${s.name}','${s.room}')">Edit</button>
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
  function editStudent(id,name,room){
     console.log("Editing ",id,name,room);
     document.getElementById("studentId").value=id;
     document.getElementById("name").value=name;
     document.getElementById("room").value=room;
  }

  function saveOrUpdate(){
     let id = document.getElementById("studentId").value.trim();
     let name = document.getElementById("name").value.trim();
     let room = document.getElementById("room").value.trim();

     console.log("FINAL DATA:", JSON.stringify({ id, name, room }));

     if(!name || !room){
         alert("Name and Room required");
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
           room: Number(room)   // ✅ FIXED
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
         document.getElementById("studentId").value="";
         document.getElementById("name").value="";
         document.getElementById("room").value="";

         getStudents();
     })
     .catch(err => console.error(err));
  }
  function clearForm() {
      document.getElementById("studentId").value = "";
      document.getElementById("name").value = "";
      document.getElementById("room").value = "";
      console.log("Form cleared");
  }

