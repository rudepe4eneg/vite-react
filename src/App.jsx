import Header from './components/Header';
import WayToTeach from './components/WayToTeach';
import { data } from './data';
import Button from './components/Button/Button';
import { useState } from 'react';

export default function App() {
    const [buttonContent, setbuttonContent] = useState('Нажми на кнопку');

    function handleClick(type) {
        console.log('button clicked', type);
        setbuttonContent(type);
    }

    return (
        <div>
            <Header />
            <main>
                <section>
                    <h3>Подход к изучению React</h3>
                    <ul>
                        <WayToTeach {...data[0]} />
                        <WayToTeach {...data[1]} />
                        <WayToTeach {...data[2]} />
                    </ul>
                </section>
                <section>
                    <h3>Чем мы отличаемся от других</h3>
                    <Button handleClick={() => handleClick('way')}>
                        Подход
                    </Button>
                    <Button handleClick={() => handleClick('easy')}>
                        Доступность
                    </Button>
                    <Button handleClick={() => handleClick('program')}>
                        Концентрация
                    </Button>

                    <p>{buttonContent}</p>
                </section>
            </main>
        </div>
    );
}
