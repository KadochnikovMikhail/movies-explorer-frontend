export const profileErrors = {
    "genError": "При обновлении профиля произошла ошибка.",
    "emailError": "Пользователь с таким email уже существует."
}
export const registerErrors = {
    "genError": "При регистрации пользователя произошла ошибка.",
    "emailError": "Пользователь с таким email уже существует."
}
export const loginErrors = {
    "wrongData": "Вы ввели неправильный логин или пароль.",
    "invalidToken": "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
    "incorrectToken": "При авторизации произошла ошибка. Переданный токен некорректен."
}
export const errorsWithCode = [
    {
        "code": 404,
        "text": "Страница  не найдена."
    },
    {
        "code": 500,
        "text": "На сервере произошла ошибка."
    }
]