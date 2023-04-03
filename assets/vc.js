
function updateCounter(){
fetch("file:///F:/sudharsanresume/index.html/Prod/getVisitorCounter")
  .then(response => response.text())
  .then((body) => {
    document.getElementById("counter").innerHTML=body
  })
  .catch(function(error) {
    console.log(error); 
  });  
}  
