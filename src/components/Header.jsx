import { useState } from 'react';
import vite from '/vite.svg';

export default function Header() {
    const [now, setNow] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000);

    return (
        <header>
            <img
                src={vite}
                alt='vite-logo'
            />

            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    );
}
