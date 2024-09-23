const NavItem = ({ href, className, children }) => {
  return (
    <li>
      <a href={href} className={className}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
