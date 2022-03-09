import { FaSearch, FaRegHeart, FaShoppingBag } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { NavContent } from './NavContent';

export const Navbar = () => {
    return (
        <nav className='flex lg:justify-between justify-center px-10 items-center'>
            <svg className='pre-logo-svg' height='60px' width='60px' fill='#111' viewBox='0 0 69 32'>
                <path d='M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z'></path>
            </svg>
            <motion.div className='space-x-8 lg:flex hidden'>
                <NavContent key={1} content='Nouveautés' />
                <NavContent key={2} content='Homme' />
                <NavContent key={3} content='Femme' />
                <NavContent key={4} content='Enfant' />
                <NavContent key={5} content='Promotions' />
                <NavContent key={6} content='Collections' />
            </motion.div>
            <div className='lg:flex hidden items-center space-x-4'>
                <div className='relative'>
                    <input className='bg-[#F5F5F5] focus:outline-none pl-8 rounded-xl py-1' placeholder='Rechercher' />
                    <FaSearch className='absolute inset-x-0 bottom-2 left-2' />
                </div>
                <FaRegHeart size={24} />
                <FaShoppingBag size={24} />
            </div>
        </nav>
    );
};
