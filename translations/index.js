const translations = {
    ua: {
        blog: "Блог",
        learn: "Вивчати",
        search: "Пошук...",
        about: "Про нас",
        'form.name': "Ім'я",
        'form.email': 'Ваша електронна адреса',
        'form.disclaimer': 'Ваші данні будуть використані виключно для відправки новин про нові курси чи події, а також для створення спеціальних пропозицій',
        'form.acceptTerms': 'Я даю згоду на використання моїх данних згідно з політикою конфіденціальності',
        'form.submit': 'Відправити',
        'form.subscribed': "Дякую за підписку!",
        'form.title': 'Підписатися на новини'
    },
    ru: {
        blog: "Блог",
        learn: "Обучение",
        search: "Найти...",
        about: "О нас",
        'form.name': 'Имя',
        'form.email': 'Ваш электронный адресс',
        'form.disclaimer': 'Ваши данные будут использованы исключительно для отправки новостей о курсах или событий, а также для участия в специальных предложениях',
        'form.acceptTerms': 'Даю согласие на использование моих данных в соответствии с политикой конфиденциальности',
        'form.submit': "Отправить",
        'form.subscribed': "Спасибо за подписку!",
        'form.title': 'Подписаться на новотную рассылку'
    },
    en:{
        blog: "Blog",
        learn: "Learn",
        search: "Search",
        about: "About",
        'form.name': 'Name',
        'form.email': 'Email',
        'form.disclaimer': 'Your data will only be used to send news related to new courses and events, and to make sure you are participation in special offers',
        'form.acceptTerms': 'I accept and agree that my inforamtion wioll be used in accordance with privacy policy',
        'form.submit': "Sumbit",
        'form.subscribed': "Thanks for submission!",
        'form.title': 'Subscribe for Newsletter'
    }
}

export const getTranslation = (key, lang='ru') =>{
    return translations[lang][key]
}