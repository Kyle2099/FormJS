function handleFormSubmit(event) {
  event.preventDefault();
  
  const Data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(Data.entries());
  
  const results = document.querySelector('.formResults pre');
  results.innerText = JSON.stringify(formJSON, null, 2);
}

const form = document.querySelector('.form-test');
form.addEventListener('submit', handleFormSubmit);