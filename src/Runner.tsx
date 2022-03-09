import { CenterInfo } from './CenterInfo';
import Runners from './assets/runner.png';

export const Runner = () => {
    return (
        <div>
            <div className='text-3xl mb-8 tracking-tighter'>Ne passez pas à côté</div>
            <img src={Runners} alt='running_man' className='object-cover w-full' />
            <CenterInfo
                boldText='Eliud Kipchoge : finir premier,'
                boldTextSecondPart='puis recommencer.'
                buttonText='Acheter maintenant'
                firstLine="Une légende se construit à coup d'exploits"
            />
        </div>
    );
};
