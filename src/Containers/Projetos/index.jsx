import React, { useState, useEffect } from 'react';
import { Container, H2, Bloco, Carousel, Button, Arrow, ArrowB } from './styles';
import CardsProjetos from '../../Components/CardsProjetos';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import arrow from '../../assets/carousel/arrow_forward.svg';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from 'firebase/database';
import firebaseconfig from '../../firebaseconfig';

export default function Projetos() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [projetos, setProjetos] = useState([]);

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setActiveIndex(item);
    const numVisibleItems = Math.ceil(window.innerWidth / 300);

    const responsive = {
        0: {
            items: 0.85
        },
        375: {
            items: 1.24
        },
        450: {
            items: 1.4
        },
        568: {
            items: 2
        },
        768: {
            items: 2
        },
        898: {
            items: 2.8
        },
        1010: {
            items: 3
        },
        1280: {
            items: 3.7
        }
    };

    useEffect(() => {
        const app = initializeApp(firebaseconfig);
        const db = getDatabase(app);
        const projectsRef = ref(db, 'projetos');

        const fetchData = () => {
            onValue(projectsRef, (snapshot) => {
                const projectsData = snapshot.val();
                if (projectsData) {
                    const projectsArray = Object.keys(projectsData).map((key) => projectsData[key]);
                    setProjetos(projectsArray);
                }
            }, (error) => {
                console.error('Erro ao buscar os projetos:', error);
            });
        };

        fetchData();
    }, []);

    return (
        <Container name="projetos">
            <Bloco>
                <H2>Projetos</H2>
                <div style={{ display: "flex", alignItems: "center", }}>
                    <Button onClick={slidePrev}>
                        <ArrowB src={arrow} alt='<' />
                    </Button>
                    <Carousel>
                        <AliceCarousel
                            responsive={responsive}
                            disableButtonsControls
                            mouseTracking
                            activeIndex={activeIndex}
                            onSlideChanged={syncActiveIndex}
                            items={projetos.map((item, index) => (
                                <CardsProjetos
                                    key={item.nome}
                                    nome={item.nome}
                                    descricao={item.descricao}
                                    repositorio={item.repo}
                                    link={item.link}
                                    imagem={item.imagem}
                                    ferramentas={item.ferramentas}
                                />
                            ))}
                            itemsInSlide={numVisibleItems}
                        />
                    </Carousel>
                    <Button onClick={slideNext}>
                        <Arrow src={arrow} alt='>' />
                    </Button>
                </div>
            </Bloco>
        </Container >
    )
}
