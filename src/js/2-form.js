let formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";


const cheakForm = () => {
    const saveData = localStorage.getItem(STORAGE_KEY);
    if (saveData) {
        const parsetData = JSON.parse(saveData);
        formData = parsetData;
        Object.entries(formData).forEach(([key, value]) => {
            if (form.elements[key]) {
                form.elements[key].value = value;
            }
        });
    }
};
cheakForm();

form.addEventListener('input', (e) => {
    const { name, value } = e.target;
    formData[name] = value.trim();


    localStorage.setItem(STORAGE_KEY).
        JSON.stringify(formData);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (formData.email == "" || formData.message === "") {
        alert("fill please all fields");
        return;
    }

    console.log("Submitted Data:", formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = {
        email: "", message: ""
    };
    form.reset();
})