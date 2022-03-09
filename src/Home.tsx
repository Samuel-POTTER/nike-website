import { Navbar } from './Navbar';
import { getShoes } from './Request';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Loader } from './Loader';
import { CenterInfo } from './CenterInfo';
import { MoreArticle } from './MoreArticle';
import { JoinUs } from './JoinUs';
import { OurApp } from './OurApp';
import { Runner } from './Runner';
import { Spring } from './Spring';
import { HeroPage } from './HeroPage';

export const Home = () => {
    const { data, isSuccess } = useQuery('shoes', getShoes);
    const [carouselMaxWidth, setCarouselMaxWidth] = useState<number>(0);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (ref && ref.current) {
            const tmp = ref.current?.scrollWidth - ref.current?.offsetWidth;
            setCarouselMaxWidth(() => tmp);
        }
    }, [isSuccess]);

    return (
        <>
            {isSuccess ? (
                <div className='h-screen'>
                    <Navbar />
                    <div className='mx-10 h-full mt-8'>
                        <HeroPage />
                        <CenterInfo
                            boldText='nike air max dawn'
                            buttonText='Voir'
                            firstLine='Dernières nouveautés'
                            hasSecondText={true}
                            secondText='Sortez de votre zone de confort et laissez parler votre créativité avec la Air Max Dawn
                                au look vintage avec une touche tendance.'
                        />
                        <div className='text-3xl mb-8 tracking-tight'>Équipez-vous</div>
                        <div ref={ref} className='overflow-x-hidden'>
                            <motion.div
                                className='flex min-w-fit space-x-5 cursor-grab'
                                drag='x'
                                dragConstraints={{ right: 0, left: -carouselMaxWidth }}
                                style={{ width: carouselMaxWidth }}
                            >
                                {data.slice(0, 10).map((i: any, key: number) => {
                                    return (
                                        <motion.div className='h-full w-[28rem] pointer-events-none mb-4' key={key}>
                                            <img src={i.img} alt={i.title} className='object-cover h-full w-full' />
                                            <div className='flex justify-between pr-4 mt-6'>
                                                <div>
                                                    <span>{i.title}</span>
                                                    <div className='text-black/60'>{i.source}</div>
                                                </div>
                                                <span>{i.price.split('$')[1]}€</span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                        <Spring />
                        <Runner />
                        <OurApp />
                        <JoinUs />
                        <MoreArticle />
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};
