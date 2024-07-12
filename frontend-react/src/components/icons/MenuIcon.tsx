type MenuIconProps = {
    className?: string
    size?: string
}

export const MenuIcon: React.FC<MenuIconProps> = ({
    className,
    size = '36px',
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        fill="none"
        viewBox="0 0 38 32"
    >
        <path fill="#fff" d="M0 0h38v7H0zM0 13h38v6H0zM0 25h38v7H0z" />
    </svg>
)
