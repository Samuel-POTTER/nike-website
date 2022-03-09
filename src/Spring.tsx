import { Banner } from './Banner';

import Yoga from './assets/yoga.png';
import Yog from './assets/yog.png';

export const Spring = () => {
    return (
        <div className='mt-24 pb-24'>
            <div className='text-3xl mb-8 tracking-tighter'>En avant pour le printemps</div>
            <div className='md:flex space-y-4 md:space-y-0 md:space-x-4'>
                <Banner content='Nouvelle saison, nouveaux équipements' img={Yoga} />
                <Banner content='Libérez votre potentiel' img={Yog} />
            </div>
        </div>
    );
};
