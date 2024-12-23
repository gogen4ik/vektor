import React from 'react';
import Slider from 'react-slick';
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Изменено: Switch на Routes
import Team from './components/Team';
import AboutTeam from './components/AboutTeam'; // Правильный импорт AboutTeam
function App() {
    const posts = [
        {
            id: 1,
            title: "Запись 1",
            content: "Мы выиграли последний матч против команды 'Спартак'.",
            image: "/images/post1.jpg"
        },
        {
          id: 2,
          title: "Запись 2",
          content: "Наша команда готовится к следующему турниру. Все игроки усердно тренируются и настроены на победу!",
          image: "/images/post2.jpg"
        },
        {
          id: 3,
          title: "Запись 3",
          content: "Мы рады объявить, что наш новый спонсор - компания 'Спорт Оптимум'. Это поможет нам развивать команду и достигать новых высот!",
          image: "/images/post3.jpg"
        },
        {
          id: 4,
          title: "Запись 4",
          content: "Приглашаем всех на наш следующий матч в эту субботу! Поддержите нашу команду на трибунах!",
          image: "/images/post4.jpg"
        },
        {
          id: 5,
          title: "Запись 5",
          content: "Приглашаем всех на наш следующий матч в эту субботу! Поддержите нашу команду на трибунах!",
          image: "/images/post4.jpg"
        },
        {
          id: 6,
          title: "Запись 6",
          content: "Приглашаем всех на наш следующий матч в эту субботу! Поддержите нашу команду на трибунах!",

          image: "/images/post4.jpg"
        },
        {
          id: 7,
          title: "Запись 7",
          content: "Приглашаем всех на наш следующий матч в эту субботу! Поддержите нашу команду на трибунах!",
          image: "/images/post4.jpg"
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Router>
            <div className="container">
                <header>
                    <h1>Футбольная команда "Вектор-Недвижимость"</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Новости</Link></li>
                            <li><Link to="/team">Состав</Link></li>
                            <li><Link to="/about">О команде</Link></li> {/* Добавляем ссылку на AboutTeam */}
                        </ul>
                    </nav>
                </header>

                <main>
                    <Switch>
                        <Route path="/" exact render={() => (
                            <div className="posts">
                                <Slider {...settings}>
                                    {posts.map(post => (
                                        <div className="post" key={post.id}>
                                            <img src={post.image} alt={post.title}/>
                                            <h3>{post.title}</h3>
                                            <p>{post.content}</p>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        )} />
                        <Route path="/team" component={Team} />
                        <Route path="/about" component={AboutTeam} /> {/* Добавляем маршрут для AboutTeam */}
                    </Switch>
                </main>

                <footer>
                    <p>&copy; 2023 Вектор-Недвижимость</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
