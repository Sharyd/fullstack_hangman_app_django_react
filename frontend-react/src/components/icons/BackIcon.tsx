type BackIconProps = {
    className?: string
    size?: string
}

export const BackIcon: React.FC<BackIconProps> = ({
    className,
    size = '36px',
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        fill="none"
        viewBox="0 0 41 39"
    >
        <path
            fill="#fff"
            d="M0 19.5 19.02.5v12.244C26.348 12.744 41 17.896 41 38.5c0-11.147-14.653-13.37-21.98-13.089V38.5L0 19.5Z"
        />
    </svg>
)
