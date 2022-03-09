import { Banner } from './Banner';
import Boy from './assets/boy.png';
import Girl from './assets/girl.png';
import DuoBG from './assets/duo.png';

export const MoreArticle = () => {
    return (
        <div className='mt-20 pb-10'>
            <div className='text-3xl mb-8 tracking-tighter'>Plus d'articles Nike</div>
            <div className='md:flex space-y-4 md:space-y-0 md:space-x-4'>
                <Banner buttonText='Homme' img={Boy} />
                <Banner buttonText='Femme' img={Girl} />
                <Banner buttonText='Enfant' img={DuoBG} />
            </div>
        </div>
    );
};
