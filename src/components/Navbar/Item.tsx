import Link from 'next/link';
import tw, { styled } from 'twin.macro';

type Props = { $isActive: boolean };

export const NavLink = styled(Link)(({ $isActive }: Props) => [
  tw`px-3 py-1 rounded-full dark:text-white dark:hover:bg-zinc-600 hover:bg-zinc-300 hover:text-white`,
  $isActive && tw`text-white dark:bg-zinc-600 bg-zinc-300`,
]);

export default NavLink;
