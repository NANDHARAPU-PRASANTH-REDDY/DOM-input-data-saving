let members = [];
function registerNow() {
  let tempName = document.getElementById("name").value;
  let tempMail = document.getElementById("email").value;
  let membersCount = members.filter((x)=>{
    return x.mail == tempMail;
  });
  if(membersCount.length==0){
    let users = {
      name: tempName,
      mail: tempMail,
    }
    members.push(users);
  }
  else{
    console.log('member already exist')
  }
  console.table(members);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}
