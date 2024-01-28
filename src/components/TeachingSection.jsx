import WayToTeach from './WayToTeach';
import { data } from '../data';

export default function TeachingSection() {
    return (
        <section>
            <h3>Подход к изучению React</h3>
            <ul>
                {data.map((data) => (
                    // eslint-disable-next-line react/jsx-key
                    <WayToTeach
                        key={data.title}
                        {...data}
                    />
                ))}
            </ul>
        </section>
    );
}
