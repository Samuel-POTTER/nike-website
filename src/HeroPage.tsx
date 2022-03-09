import photo from './assets/photo.jpg';
import shoes from './assets/shoes.jpg';
import jump from './assets/jump.jpg';

export const HeroPage = () => {
    return (
        <div className='h-3/4'>
            <div className='flex w-full h-full'>
                <img className='w-1/3 object-cover' src={shoes} alt='shoes_man' />
                <img className='w-1/3 object-cover' src={jump} alt='jump_man' />
                <img className='w-1/3 object-cover' src={photo} alt='photo_man' />
            </div>
        </div>
    );
};
