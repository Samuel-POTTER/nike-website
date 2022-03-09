type CenterInfoProps = {
    firstLine: string;
    boldText: string;
    boldTextSecondPart?: string;
    hasSecondText?: boolean;
    secondText?: string;
    buttonText: string;
};

export const CenterInfo = ({
    firstLine,
    boldText,
    boldTextSecondPart = '',
    hasSecondText = true,
    buttonText,
    secondText
}: CenterInfoProps) => {
    return (
        <div className='text-center space-y-6 mt-10 mb-6'>
            <span>{firstLine}</span>
            <div className='uppercase font-extrabold text-4xl'>
                {boldText}
                <br /> {boldTextSecondPart}
            </div>
            {hasSecondText && <div>{secondText}</div>}
            <button className='px-6 py-2 bg-black text-white rounded-full'>{buttonText}</button>
        </div>
    );
};
