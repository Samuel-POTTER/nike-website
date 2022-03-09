import { motion } from 'framer-motion';
import { useState } from 'react';

type NavContentProps = {
    content: string;
};
export const NavContent = ({ content }: NavContentProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <li
            className='relative cursor-pointer px-2 flex justify-center'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <p className='mb-4'>{content}</p>
            {isHover && <motion.div layoutId='underline' className='absolute w-4/5 h-0.5 bottom-0 bg-black' />}
        </li>
    );
};
