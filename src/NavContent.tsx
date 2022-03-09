import { motion } from 'framer-motion';
import { useState } from 'react';

type NavContentProps = {
    content: string;
};
export const NavContent = ({ content }: NavContentProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <motion.div
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            className='cursor-pointer relative'
        >
            {content}
            {isHover ? (
                <motion.div layoutId='underline' className='absolute inset-x-0 top-8 h-0.5 bg-black' />
            ) : (
                <motion.div className='mt-4 h-0.5 ' />
            )}
        </motion.div>
    );
};
