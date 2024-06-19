import React, { createContext, useState } from 'react';
import Schedule from './Schedule/Schedule';
import Schedule2 from './Schedule/Schedule2';
import Schedule3 from './Schedule/Schedule3';
import Schedule4 from './Schedule/Schedule4';
import Schedule5 from './Schedule/Schedule5';

// 슬라이드 데이터를 저장할 Context 생성
export const SlideContext = createContext();

export const SlideProvider = ({ children }) => {
    const [slides] = useState([
        {
            id: 1,
            title: '[3경기] UEFA 유로 2024 축구직관투어',
            sub: '06월 14일 ~ 19일',
            days:'4박 6일',
            price: '4,990,000원',
            imgSrc: '/src/assets/uefa_euro_2024_germany-wallpaper-2880x1800.jpg',
            schedule: <Schedule/>,
            additionalImages:[
                '/src/assets/Groupe-M6_-UEFA-Euro-16-9.jpg',
                '/src/assets/164425-Berlin-Mr.jpg',
                '/src/assets/Bp33m8Ig_rna26_PDQ5Qb1qZJ5lT7R40TdHXfsX1LVdUKGSikSzU4DaONvHGQX8E9QAmUdBiBy-xDZ39LnewTg.webp',
                '/src/assets/mainImage.jpg',
                '/src/assets/istockphoto-547022042-612x612.jpg',
                '/src/assets/WclR_763CzDEfOrW4jvGtN8Iwld7dGZxko8z5Fsae_NBwbaMCS93MoWw_8RK0tfCmWQMa0IBCo7zlQBQl_un0Q.webp'
            ],
            matchups: [
                {
                    team1: '스페인',
                    team1Logo: '/src/assets/Bandera_de_España.svg',
                    team2: '크로아티아',
                    team2Logo: '/src/assets/다운로드.png'
                },
                {
                    team1: '잉글랜드',
                    team1Logo: '/src/assets/england.png',
                    team2: '세르비아',
                    team2Logo: '/src/assets/serbia.png'
                },
                {
                    team1: '프랑스',
                    team1Logo: '/src/assets/france.png',
                    team2: '오스트리아',
                    team2Logo: '/src/assets/austria.svg'
                }
            ]
        },
        {
            id: 2,
            title: '[2경기] UEFA 유로 2024 축구직관투어',
            sub: '06월 20일 ~ 25일',
            days:'4박 6일',
            price: '4,390,000원',
            imgSrc: '/src/assets/uefa_euro_2024_germany-wallpaper-2880x1800.jpg',
            schedule: <Schedule2/>,
            additionalImages:[
                '/src/assets/Groupe-M6_-UEFA-Euro-16-9.jpg',
                '/src/assets/45664-Sachsenhausen.jpg',
                '/src/assets/164490-Saxony.jpg',
                '/src/assets/FY78iMaXwAAd70P.jpg_large',
                '/src/assets/45540-Frankfurt-Cathedral.avif',
                '/src/assets/217925-Romerplatz.jpg'
            ],
            matchups: [
                {
                    team1: '프랑스',
                    team1Logo: '/src/assets/france.png',
                    team2: '네덜란드',
                    team2Logo: '/src/assets/네덜란드.png'
                },
                {
                    team1: '독일',
                    team1Logo: '/src/assets/독일.png',
                    team2: '스위스',
                    team2Logo: '/src/assets/스위스.png'
                }
            ]
        },
        {
            id: 3,
            title: '[3경기] 챔스 준결승&북런던더비&황희찬 직관',
            sub: '05월 01일 ~ 07일',
            days:'5박 7일',
            price: '5,890,000원',
            imgSrc: '/src/assets/uefa-champions-league-star-football-logo-8dv90jbvwwhzp9c0.jpg',
            schedule: <Schedule3/>,
            additionalImages:[
                '/src/assets/premier-league-lion-with-crown-xdd2popzj7bzrjt2.jpg',
                '/src/assets/img.jpg',
                '/src/assets/90853-London.webp',
                '/src/assets/5fabbbc4550b2b3666d79af470604da1.webp',
                '/src/assets/302378-Tower-Bridge.avif',
                '/src/assets/098d569e-9891-441e-b83c-701967ec37fc.jpg'
            ],
            matchups: [
                {
                    team1: '울버햄튼',
                    team1Logo: '/src/assets/740.png',
                    team2: '루턴타운FC',
                    team2Logo: '/src/assets/677.png'
                }, {
                    team1: '토트넘 훗스퍼',
                    team1Logo: '/src/assets/728.png',
                    team2: '아스날FC',
                    team2Logo: '/src/assets/602.png'
                }, {
                    team1: '바이에른 뮌헨',
                    team1Logo: '/src/assets/915.png',
                    team2: '레알마드리드',
                    team2Logo: '/src/assets/1736.png'
                }
            ]
        }, {
            id: 4,
            title: '[3경기] 손흥민&황희찬&맨시티 축구직관투어',
            sub: '05월 12일 ~ 18일',
            days:'5박 7일',
            price: '5,190,000원',
            imgSrc: '/src/assets/2557813-53054975-2560-1440.jpg',
            schedule: <Schedule4/>,
            additionalImages:[
                '/src/assets/premier-league-lion-with-crown-xdd2popzj7bzrjt2.jpg',
                '/src/assets/img.jpg',
                '/src/assets/style_655323ba0944a-1920x1080.webp',
                '/src/assets/1482677-beautiful-liverpool-wallpapers-for-pc-1920x1080-lockscreen.jpg',
                '/src/assets/0_GettyImages-1491808783.webp',
                '/src/assets/098d569e-9891-441e-b83c-701967ec37fc.jpg'
            ],
            matchups: [
                {
                    team1: '첼시',
                    team1Logo: '/src/assets/630.png',
                    team2: '토트넘 훗스퍼',
                    team2Logo: '/src/assets/728.png'
                }, {
                    team1: '맨체스터시티',
                    team1Logo: '/src/assets/679.png',
                    team2: '울버햄튼',
                    team2Logo: '/src/assets/740.png'
                }, {
                    team1: '리버풀',
                    team1Logo: '/src/assets/676.png',
                    team2: '토트넘 훗스퍼',
                    team2Logo: '/src/assets/728.png'
                }
            ]
        }, {
            id: 5,
            title: '[3경기] 김민재&이강인 챔스 직관투어',
            sub: '04월 06일 ~ 12일',
            days:'5박 7일',
            price: '5,840,000원',
            imgSrc: '/src/assets/allianz_arena2.jpg',
            schedule: <Schedule5/>,
            additionalImages:[
                '/src/assets/554442.jpg',
                '/src/assets/wp8643919.jpg',
                '/src/assets/557835_emirates-stadium-wallpapers-wallpapers-cave_2560x1600_h.jpg',
                '/src/assets/gANvvN.jpg',
                '/src/assets/c3d044fb1e5150d48c350c05b629ffc5.jpg',
                '/src/assets/20085-Arc-De-Triomphe.avif',
                '/src/assets/534568-16th-arrondissement.avif',
                '/src/assets/302378-Tower-Bridge.avif'
            ],
            matchups: [
                {
                    team1: '맨체스터 유나이티드',
                    team1Logo: '/src/assets/680.png',
                    team2: '리버풀',
                    team2Logo: '/src/assets/676.png'
                }, {
                    team1: '아스날FC',
                    team1Logo: '/src/assets/602.png',
                    team2: '바이에른 뮌헨',
                    team2Logo: '/src/assets/915.png'
                }, {
                    team1: '파리생제르망',
                    team1Logo: '/src/assets/868.png',
                    team2: 'FC바르셀로나',
                    team2Logo: '/src/assets/1668.png'
                }
            ]
        },
        // 나머지 슬라이드 데이터
    ]);

    return (
        <SlideContext.Provider value={{ slides }}>
            {children}
        </SlideContext.Provider>
    );
};