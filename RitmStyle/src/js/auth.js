function showPass(elem) {
    const password = elem.parentNode.parentNode.password;
    if (elem.checked) {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}

function login(form) {
    if (checkEmail(form.email) &&
        checkPhone(form.phone) &&
        form.password.value.length > 6
    ) {
        // попытка найти пользователя в хранилище
        const user = JSON.parse(localStorage.getItem(form.email.value));

        if (!user) {
            alert("Пользователь не найден");
            return;
        }
        if (form.password.value == user.password) {
            // авторизация успешна
            window.location.href = "../../../index.html"
        }
        else {
            alert("Неправильный пароль");
        }
    }
    else {
        alert("Все поля должны быть заполнены")
    }
}

const maskedPhone = IMask(
    document.querySelector("input[name=phone]"),
    {
      mask: '+{7}(000)000-00-00'
    }
)


function checkEmail(field) {
    // регулярное выражение для проверки email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
    
    if (emailRegex.test(field.value)) {
        field.style.background = "transparent";
        return true;
    }
    else {
        field.style.background = "rgba(255,0,0, 0.2)";
        return false;
    }
}


function checkPhone(field) {
    if (maskedPhone.unmaskedValue.length === 11) {
        field.style.background = "transparent";
        return true;
    }
    else {
        field.style.background = "rgba(255,0,0, 0.2)";
        return false;
    }
}

function reg(form) {
    if (checkEmail(form.email) &&
        checkPhone(form.phone) &&
        form.password.value.length > 6
    ) {
        const user = {
            email: form.email.value,
            phone: maskedPhone.unmaskedValue,
            password: form.password.value
        }
        // сохраняем пользователя в локальном хранилище
        localStorage.setItem(user.email, JSON.stringify(user))

        // переходим на авторизацию
        window.location.href = "./auth.html"
    }
    else {
        alert("Все поля должны быть заполнены")
    }
}