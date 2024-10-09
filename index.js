const cookie = document.getElementById("cookie");
const cldcookie = document.getElementById("cookie-closed");
const form = document.getElementById("form");
const decline=document.getElementById("decline")
const reverseElement=document.getElementById("buttons")

setTimeout(function () {
  cookie.style.display = "block";
  document.body.style.overflow="hidden"
}, 3000);



cldcookie.addEventListener("click", function () {
//   cookie.style.display = "none";
//   document.body.style.overflow=""
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  console.log({ nameofUser: name });

  cookie.innerHTML = `
    <div class="modal-inner-loading">
        <img src="loading.svg" class="loading" ">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;

  setTimeout(function () {
    document.getElementById("upload-text").innerText = `
        Making the sale...`;
  }, 1500);

  setTimeout(function () {
    cookie.innerHTML = `
        <h2 id="upper-text">Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
         <p id="cookie-closed" onclick="closed()" >X</p>
        <p id="down-text">We just sold the rights to your eternal soul.</p>
       <div style="width:100%;height:0;padding-bottom:100%;position:relative;" id="frame">
       <iframe src="https://giphy.com/embed/3og0ILLVvPp8d64Jd6" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
   `;
  }, 3000);
});


// Make div closed inside HTML
function closed(){
    cookie.style.display = "none";
    document.body.style.overflow=""
    cldcookie.disabled="false"
}

decline.addEventListener("mouseover",function(){
    reverseElement.classList.toggle("reverse-row")
})

