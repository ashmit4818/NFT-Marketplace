const markup = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`;

function loading(){
  document.getElementById('loading').classList.remove('fa-rotate')
  
  setTimeout(function loadinganimation() {
    document.getElementById('loading').innerHTML = markup;
}, 0);
  setTimeout(function redirectpage() {
    location.replace('market.html');
}, 1000);

  loadinganimation();
  redirectpage();
  
}
function loadback(){
    document.getElementById('loadback').classList.remove('fa-rotate')
    
    
    setTimeout(function loadinganimationback() {
      document.getElementById('loadback').innerHTML = markup;
  }, 0);
    setTimeout(function redirecthome() {
      location.replace('index.html');
  }, 1000);
  
    loadinganimationback();
    redirecthome();
    
  }

 