import React, { useState } from 'react';
import '../styles.css';

function Team() {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [numberFilter, setNumberFilter] = useState('');
    const [positionFilter, setPositionFilter] = useState('');
    const [dobFilter, setDobFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');

    const players = [
        { name: 'Смирнов Егор Александрович', number: '#3', position: 'нападающий', dob: '23.06.2006', image: '/images/egor_smirnov.jpg' },
        { name: 'Филь Артём Романович', number: '#7', position: 'нападающий', dob: '20.03.2006', image: '/images/artem_fil.jpg' },
        { name: 'Веренинов Егор Андреевич', number: '#12', position: 'нападающий', dob: '02.05.2006', image: '/images/egor_vereninov.jpg' },
        { name: 'Мочалов Артём Андреевич', number: '#10', position: 'нападающий', dob: '17.11.2006', image: '/images/artem_mochalov.jpg' },
        { name: 'Лазарев Артём Евгеньевич', number: '#88', position: 'нападающий', dob: '31.07.2007', image: '/images/artem_lazarev.jpg' },
        { name: 'Дмитриев Иван Алексеевич', number: '#9', position: 'защитник', dob: '01.07.2006', image: '/images/ivan_dmitriev.jpg' },
        { name: 'Малов Сергей Николаевич', number: '#1', position: 'вратарь', dob: '17.04.2005', image: '/images/sergey_malov.jpg' },
        { name: 'Набирухин Виктор Борисович', number: '#17', position: 'нападающий', dob: '14.04.1986', image: '/images/viktor_nabirukhin.jpg' },
        { name: 'Смирнов Арсений Алексеевич', number: '#69', position: 'нападающий', dob: '02.01.2008', image: '/images/arseniy_smirnov.jpg' },
        { name: 'Меньшов Сергей Александрович', number: '#8', position: 'защитник', dob: '05.06.1984', image: '/images/sergey_menov.jpg' },
        { name: 'Матвеев Денис Артемович', number: '#77', position: 'защитник', dob: '27.06.2007', image: '/images/denis_matveev.jpg' },
    ];

    // Сортировка игроков
    const sortedPlayers = [...players].sort((a, b) => {
        let comparison = 0;
        if (sortBy === 'name') {
            comparison = a.name.localeCompare(b.name);
        } else if (sortBy === 'number') {
            comparison = parseInt(a.number.replace('#', '')) - parseInt(b.number.replace('#', ''));
        } else if (sortBy === 'position') {
            comparison = a.position.localeCompare(b.position);
        } else if (sortBy === 'dob') {
            // Преобразуем дату в формат YYYY-MM-DD для корректного сравнения
            const dateA = new Date(a.dob.split('.').reverse().join('-'));
            const dateB = new Date(b.dob.split('.').reverse().join('-'));
            comparison = dateA - dateB;
        }

        return sortOrder === 'asc' ? comparison : -comparison;
    });

    // Фильтрация игроков
    const filteredPlayers = sortedPlayers.filter(player => {
        return (
            (nameFilter === '' || player.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
            (numberFilter === '' || player.number.includes(numberFilter)) &&
            (positionFilter === '' || player.position.includes(positionFilter)) &&
            (dobFilter === '' || player.dob.includes(dobFilter))
        );
    });

    return (
        <div>
            <h1>Состав команды</h1>

            <div className="search-filters">
                <label>
                    ФИО:

                    <input
                        type="text"
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                    />
                </label>
                <label>
                    Игровой номер:
                    <input
                        type="text"
                        value={numberFilter}
                        onChange={(e) => setNumberFilter(e.target.value)}
                    />
                </label>
                <label>
                    Позиция:
                    <input
                        type="text"
                        value={positionFilter}
                        onChange={(e) => setPositionFilter(e.target.value)}
                    />
                </label>
                <label>
                    Дата рождения:
                    <input
                        type="text"
                        value={dobFilter}
                        onChange={(e) => setDobFilter(e.target.value)}
                    />
                </label>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Фото</th>
                        <th onClick={() => { setSortBy('name'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>ФИО {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
                        <th onClick={() => { setSortBy('number'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Номер {sortBy === 'number' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
                        <th onClick={() => { setSortBy('position'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Позиция {sortBy === 'position' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
                        <th onClick={() => { setSortBy('dob'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Дата рождения {sortBy === 'dob' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPlayers.map((player) => (
                        <tr key={player.name}>
                            <td><img src={player.image} alt={player.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} /></td>
                            <td>{player.name}</td>
                            <td>{player.number}</td>
                            <td>{player.position}</td>
                            <td>{player.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Team;
