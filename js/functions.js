const form = document.querySelector(".form");
const formInput = document.querySelector(".form__input");
const workspaceResults = document.querySelector(".workspace__results");
const radioGenderBtns = document.querySelectorAll(".radio_gender");
const radioActivityBtns = document.querySelectorAll(".radio_activity");

radioGenderBtns.forEach((btn)=>{
btn.addEventListener('click',(event)=>{
  removeActiveGender();
  event.target.classList.add('active');
});
});

radioActivityBtns.forEach((btn)=>{
  btn.addEventListener('click',(event)=>{
   removeActiveActivities();
    event.target.classList.add('active');
  });
  });

function getData() {
    const formData = new FormData(form);
    const age = formData.get("age");
    const height = formData.get("height");
    const weight = formData.get("weight");
    const gender = formData.get("gender");
    const activityCoefficient = +formData.get("activity");
  
  return{
    age:age,
    height:height,
    weight:weight,
    gender:gender,
    activityCoefficient:activityCoefficient
  }
}

function check(data) {
    console.log(data)
for(const item in data){
    const value=data[item]
 if (value === '' && value <= 0 && isNaN(value)) {
        alert('Вы ввели некорректные данные');
        return false;
    }
}
return true;
}

function removeActiveActivities(){
  for(const radio of radioActivityBtns){
    radio.classList.remove('active');
  }
}

function removeActiveGender(){
  for(const radio of radioGenderBtns){
    radio.classList.remove('active');
  }
}