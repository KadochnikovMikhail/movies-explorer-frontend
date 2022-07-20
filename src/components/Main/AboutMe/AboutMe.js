import React from 'react';
import './AboutMe.css';
import MainLine from '../MainLine/MainLine';

function AboutMe() {
    return (
        <div className="about-me">
            <MainLine text=' Студент' />
            <div className="about-me__info">
                <div className="about-me__text">
                    <h2 className="about-me__name">Михаил</h2>
                    <p className="about-me__about">Фронтенд-разработчик, 18 лет</p>
                    <p className="about-me__desc">
                        Я родился и живу в Екатеринбурге, Учусь в Уральском Федеральном Университете на направлении "Компьютерные и информационные науки".
                        Я увлекаюсь велоспортом и активным отдыхом. Я решил развиваться в сфере веб разработки, потому что люблю писать код и хочу реализовывать интересные проекты связанные с WebDev, которыми в дальнейшем будут пользоваться множество людей. В веб разработке мне нравится сразу же видеть результат проделанной работы.
                        Для развития в этой сфере я прошел обучения на платформе Яндекс Практикум. Так же я читаю различные статьи и новости о развитии и нововведениях в сфере веба, например на Habr и изучаю книгу под названием "Создаем динамические веб-сайты с помощью PHP, MySQL, JavaScript, CSS и HTML5", Никсон Робин.
                        Своими сильными качествами я считаю усидчивость и умение доводить начатое до конца. Все проекты, которые я начал - довел до конца. При появлении какой-то проблемы, находил решение любым способом, и в итоге со всем справился.
                        В свободное время я люблю посмотреть сериал или фильм, желательно детектив, встретиться с друзьями или позаниматься саморазвитием.
                    </p>
                    <div className="about-me__links">
                        <a href='https://www.facebook.com/' target="_blank" rel="noreferrer" className="about-me__link">Facebook</a>
                        <a href='https://github.com/KadochnikovMikhail' target="_blank" rel="noreferrer" className="about-me__link">Github</a>
                    </div>
                </div>
                <div className="about-me__img"></div>
            </div>
        </div>
    );
}

export default AboutMe;