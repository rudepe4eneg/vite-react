import classes from './Button.module.css';

// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick, isActive }) {
    return (
        <button
            className={
                isActive
                    ? `${classes.button} ${classes.active}`
                    : classes.button
            }
            onClick={onClick}>
            {children}
        </button>
    );
}
