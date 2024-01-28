import './Button.css';

// eslint-disable-next-line react/prop-types
export default function Button({ children, handleClick, isActive }) {
    return (
        <button
            className={isActive ? 'button active' : 'button'}
            onClick={handleClick}>
            {children}
        </button>
    );
}
