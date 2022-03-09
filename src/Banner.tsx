type BannerProps = {
    img: string;
    content?: string;
    buttonText?: string;
};

export const Banner = ({ img, content, buttonText = 'Voir' }: BannerProps) => {
    return (
        <div className='relative w-full'>
            <img src={img} alt='yoga' className='object-cover w-full' />
            <div className='absolute bottom-16 space-y-4 left-12 inset-x-0'>
                <div className='text-white'>{content}</div>
                <button className='px-4 m-auto bg-white rounded-full py-1'>{buttonText}</button>
            </div>
        </div>
    );
};
