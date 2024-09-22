const loadmeal = (searchText) =>{
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
  .then(res => res.json())
  .then(post => displaymeal(post.meals))
}
const displaymeal = meals =>{
  console.log(meals);
  const mealField = document.getElementById('meal-field');
  mealField.innerHTML = '';
  meals.forEach(meal =>{
    const mealdiv = document.createElement('div');
    
    mealdiv.classList.add('col');
    mealdiv.innerHTML = `
    <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button onclick="loadmealdetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meal-details">
              Details
              </button>
            </div>
    </div>
    
    `
    mealField.appendChild(mealdiv)
  })

}



const searchmeals = search =>{
  const searchField = document.getElementById('search-field').value;
  //console.log(searchField);
  loadmeal(searchField);
  
}


const loadmealdetail = idMeal =>{
  console.log(idMeal);
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
  .then(res => res.json())
  .then(data =>  displaymeaaldetail(data.meals[0])) 
  
}

const displaymeaaldetail = meal =>{
  document.getElementById('staticBackdropLabel').innerText = meal.strMeal;
  const staticBackdrop = document.getElementById('staticBackdropBody');
  staticBackdrop.innerHTML= `
  
  <img class="img-fluid" src="${meal.strMealThumb}">
  
  `

}



loadmeal('rice');