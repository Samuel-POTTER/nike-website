import { Banner } from './Banner';

import Duo from './assets/duologo.png';
import Planche from './assets/planche.png';

export const OurApp = () => {
    return (
        <div>
            <div className='text-3xl mb-8 tracking-tighter'>Découvrez nos applications</div>
            <div className='md:flex space-y-4 md:space-y-0 md:space-x-4'>
                <Banner content='Nike App' img={Duo} />
                <Banner content='Nike App' img={Planche} />
            </div>
        </div>
    );
};
