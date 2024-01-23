import vite from '/vite.svg';

export default function Header() {
    const now = new Date();
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
