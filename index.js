const personDB = {
    gender: null,
    age: null,
    weight: null,
    height: null,
    activityCoefficient: null,
    dailyCalories:null,
    start(data) {
        this.gender = data.gender;
        this.age =data.age;
        this.weight =data.weight
        this.height = data.height;
        this.activityCoefficient = data.activityCoefficient;
        
    },
    getBMI() {
        if (!this.width && !this.height) {
            alert('Ooops. Что-то пошло не так.');
        }
        const index = (this.weight / ((this.height / 100) ** 2)).toFixed(2);
        const element=document.createElement('p');
        element.classList.add('result-bmi');
        console.log(index);
        if (index < 18.5) {
            console.log('Ниже нормального веса');
            element.innerHTML=`Индекс массы тела: ${index}. По классификации ВОЗ это трактуется ниже нормального веса`;
        } else if (index >= 18.5 && index < 25) {
            console.log('Нормальный вес');
            element.innerHTML= `Индекс массы тела: ${index}. По классификации ВОЗ это трактуется как нормальный вес`;
        } else if (index >= 25 && index < 30) {
            console.log('Избыточный вес');
            element.innerHTML= `Индекс массы тела: ${index}. По классификации ВОЗ это трактуется как избыточный вес`;
        } else if (index >= 30 && index < 35) {
            console.log('Ожирение I степени');
            return `Индекс массы тела: ${index}. По классификации ВОЗ это трактуется как ожирение I степени`;
        } else if (index >= 35 && index < 40) {
            console.log('Ожирение II степени');
            element.innerHTML= `Индекс массы тела: ${index}. По классификации ВОЗ это трактуется как ожирение II степени`;
        } else if (index >= 40) {
            console.log('Ожирение III степени');
            element.innerHTML= `Индекс массы тела: ${index}. По классификации ВОЗ это трактуется как ожирение III степени`;
        }
        return element;
    },
    getDailyCalories() {
        if (!this.width && !this.height && !this.gender && !this.activityCoefficient) {
            alert('Ooops. Что-то пошло не так.');
        }
        const element=document.createElement('p');
        element.classList.add('result-calories');
        if (this.gender === 'male') {
            this.dailyCalories = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5 * this.activityCoefficient;
        } else if (this.gender === 'female') {
            this.dailyCalories = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161 * this.activityCoefficient;
        }
        
        element.innerHTML=`Рекомендованное суточное количество калорий: ${(this.dailyCalories).toFixed(2)} ккал`;
        return element;
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    workspaceResults.innerHTML='';
    const data=getData();
    personDB.start(data);
    const isCorrectData=check(data);
    if(isCorrectData){
        const indexElement=personDB.getBMI();
        const caloriesElement=personDB.getDailyCalories();
            workspaceResults.insertAdjacentElement('beforeend',indexElement);
            workspaceResults.insertAdjacentElement('beforeend',caloriesElement); 
    }
        form.reset();
        removeActiveActivities();
        removeActiveGender();
});


