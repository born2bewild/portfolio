import DarkModeSwitch from '@/components/DarkModeSwitch';
import useDarkMode from '@/hooks/useDarkMode';
import tw from 'twin.macro';
import NavLink from './Item';

const NavItems = [
  {
    section: 'home',
    name: 'Home',
    link: '/',
  },
  {
    section: 'about',
    name: 'About',
    link: '/#about',
  },
  {
    section: 'skills',
    name: 'Skills',
    link: '/#skills',
  },
  {
    section: 'projects',
    name: 'Projects',
    link: '/#projects',
  },
  {
    section: 'hire_me',
    name: '#HIRE_ME',
    link: '/#hire_me',
  },
  {
    section: 'contact',
    name: 'Contact',
    link: '/#contact',
  },
];

type Props = {
  isOpen: boolean;
  activeSection?: string;
};

export const Navbar = ({ isOpen, activeSection }: Props) => {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <nav
      css={[
        tw`flex-1 pb-3 mt-8 justify-self-center md:mt-0 md:block md:pb-0`,
        isOpen ? tw`block` : tw`hidden`,
      ]}
    >
      <ul tw="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        {NavItems.map(item => (
          <li key={item.section}>
            <NavLink
              href={item.link}
              $isActive={activeSection === item.section}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        <li key="dark-mode-switch">
          <DarkModeSwitch checked={isDarkMode} onChange={toggle} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
