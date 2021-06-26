var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("tombol").click();
  }
});
var button=document.getElementById("tombol");
button.addEventListener('click', quote)
function quote(){ 
  document.getElementById("home").innerHTML="";
    console.log(' ');
    var isian=document.getElementById("input").value;
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+isian).then((response) => response.json())
    .then((data) => {
      if (data.drinks.length === 0){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
          }
        else{
          for(var i=0; i<8;i++){
            document.getElementById("home").innerHTML+=`
            <div class="col-md-3 mb-4">
            <div class="card" style="width: 20rem;">
              <img src="${data.drinks[i].strDrinkThumb}" class="card-img-top" alt="...">
              <div class="card-body">
              <div class="text-center">
                <h3 class='judul'>${data.drinks[i].strDrink}</h3>
                <p class='judul'>Name : ${data.drinks[i].strGlass}</p>
                <p class="card-text">Category : ${data.drinks[i].strCategory}</p>
                <p class='intro'>Instructions : ${data.drinks[i].strInstructions}</p>
                </div>
              </div>
              <a href="detail.html?id=${data.drinks[i].idDrink}">Drink Details</a>
            </div>
          </div>` 
      }
      }}); 
}
function preview(jumlah){
for (jumlah=0; jumlah<8;jumlah++){
    refresh()
}
}
function refresh(){
  console.log(' ');
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(response => response.json())
    .then((data) => { 
      for(var i=0; i<8;i++){
        document.getElementById("home").innerHTML+=`
        <div class="col-md-3 mb-4">
        <div class="card" style="width: 20rem;">
        <img src="${data.drinks[i].strDrinkThumb}" class="card-img-top" alt="...">
          <div class="card-body">
          <div class="text-center">
            <h3 class='judul'>${data.drinks[i].strDrink}</h3>
            </div>
          </div>
          <a href="detail.html?id=${data.drinks[i].idDrink}">Drink Details</a>
        </div>
      </div>`
      }
    }); 
} 
var pilihan;
function keluar(pilihan){
  document.getElementById("home").innerHTML='';
  console.log('');
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='+pilihan).then(response => response.json())
  .then((data) => { 
    for(var i=0; i<8;i++){
      document.getElementById("home").innerHTML+=`
      <div class="col-md-3 mb-4">
      <div class="card" style="width: 20rem;">
      <img src="${data.drinks[i].strDrinkThumb}" class="card-img-top" alt="...">
      <div class="card-body">
          <div class="text-center">
          <h3 class='judul'>${data.drinks[i].strDrink}</h3>
          </div>
          </div>
          `
    }
  });
}