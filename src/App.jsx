import Header from './components/Header';
import WayToTeach from './components/WayToTeach';
import { data } from './data';
import Button from './components/Button/Button';

export default function App() {
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
                    <Button>Подход</Button>
                    <Button>Доступнность</Button>
                    <Button>Концентрация</Button>
                </section>
            </main>
        </div>
    );
}
