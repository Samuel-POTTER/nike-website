import banner from './assets/banniere.png';

export const JoinUs = () => {
    return (
        <div className='mt-20'>
            <div className='text-3xl mb-8 tracking-tighter'>Rejoinez-nous</div>
            <div className='relative'>
                <img src={banner} alt='banner' className='object-cover w-full' />
                <div className='absolute inset-0 translate-y-1/2 bottom-1/2 left-12 text-white lg:space-y-6'>
                    <div className='font-extrabold uppercase tracking-tighter lg:text-sm text-base xl:text-5xl'>
                        votre accès membre nike
                    </div>
                    <div className='font-semibold lg:text-lg md:text-xs text-base'>
                        Devenez Membre Nike et affichez votre passion avec Nike By You
                    </div>
                    <button className='text-black bg-white px-4 py-1 rounded-full hidden lg:block'>
                        Rejoignez-nous
                    </button>
                </div>
            </div>
        </div>
    );
};
