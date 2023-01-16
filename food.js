document.getElementById('select').onchange=function(){
    var value=document.getElementById('select').value
    let url1 = "www.themealdb.com/api/json/v1/1/list.php?a=list"
    let cart = document.getElementById("cards")
    fetch(url1 + value)
    .then((response) => response.json())
    .then((data)=>{
        let dataFilter = data.meals.filter(meal => meal.strMeal.toLowerCase().includes(value))
        cart.textContent = ``
            if(searchValue == "" || searchValue == " "){
                //display te 6 random
                display()
            }else{
                for(let i in dataFilter){
                    cart.innerHTML+= 
                
                    ` 
    
                    <!-- cards trigger modal -->
                  <div class="card col-3 container" id="cards${i}">
                          <img src="${dataFilter[i].strMealThumb}" class="card-img-top" alt="Sunset Over the Sea"/>
                          <div class="card-body">
                              <p class="card-text"><span>Name : ${dataFilter[i].strMeal}</span></p>
                          </div>
                          <button type="button" class="btn btn-primary" id="btnSearche${i}" data-bs-toggle="modal" data-bs-target="#staticBackdrop${dataFilter[i].idMeal}">
                          Voir
                      </button>
                  </div>
                  <!-- Modal -->
                  <div class="modal fade" id="staticBackdrop${dataFilter[i].idMeal}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel">Meals</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <img src="${dataFilter[i].strMealThumb}" class="card-img-top" alt="Sunset Over the Sea"/><br><br>
                          <p>Name : ${dataFilter[i].strMeal}</p>
                          <p>Area : ${dataFilter[i].strArea}</p>
                          <p>recipe : ${dataFilter[i].strInstructions}</p>
                      </div>
                      
                      </div>
                      </div>
                  </div>
                      `;
                    
                } 
                
            }
        });
}


