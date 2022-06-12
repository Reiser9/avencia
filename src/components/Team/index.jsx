import React from 'react';

import TeamItem from './TeamItem';

const dataTeam = [
    {
        img: './assets/img/team1.png',
        name: 'Marius Landman',
        role: 'Founder'
    },
    {
        img: './assets/img/team2.png',
        name: 'Wendy Landman',
        role: 'Co-founder'
    },
    {
        img: './assets/img/team3.png',
        name: 'Bill Nolan',
        role: 'Managing partner'
    },
    {
        img: './assets/img/team1.png',
        name: 'Marius Landman',
        role: 'Founder'
    },
    {
        img: './assets/img/team2.png',
        name: 'Wendy Landman',
        role: 'Co-founder'
    },
    {
        img: './assets/img/team3.png',
        name: 'Bill Nolan',
        role: 'Managing partner'
    },
    {
        img: './assets/img/team1.png',
        name: 'Marius Landman',
        role: 'Founder'
    },
    {
        img: './assets/img/team2.png',
        name: 'Wendy Landman',
        role: 'Co-founder'
    }
]

const Team = () => {
    return(
        <section className='team'>
            <div className='container'>
                <div className='team__inner w100 df fdc aifs'>
                    <h2 className='headline1'>
                        Avencia Team
                    </h2>

                    <div className='team__content w100'>
                        {dataTeam.map((d, id) => <TeamItem key={id} img={d.img} name={d.name} role={d.role} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;