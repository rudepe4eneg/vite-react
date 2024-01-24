import './Button.css';

// eslint-disable-next-line react/prop-types
export default function Button({ children, handleClick }) {
    return (
        <button
            className='button'
            onClick={handleClick}>
            {children}
        </button>
    );
}
