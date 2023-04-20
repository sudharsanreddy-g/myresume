
function updateCounter(){
fetch("https://sudharsanreddy-portfolio.netlify.app")
  .then(response => response.text())
  .then((body) => {
    document.getElementById("counter").innerHTML=body
  })
  .catch(function(error) {
    console.log(error); 
  });  
}  
