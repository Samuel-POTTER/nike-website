export const Loader = () => {
    return (
        <div className='flex flex-col space-y-6 items-center justify-center h-screen'>
            <div className='text-6xl font-bold'>Nike</div>
            <svg
                className='animate-spin'
                id='svg-spinner'
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='48'
                viewBox='0 0 48 48'
            >
                <circle cx='24' cy='4' r='4' fill='#000000' />
                <circle cx='12.19' cy='7.86' r='3.7' fill='#171717' />
                <circle cx='5.02' cy='17.68' r='3.4' fill='#2E2E2E' />
                <circle cx='5.02' cy='30.32' r='3.1' fill='#454545' />
                <circle cx='12.19' cy='40.14' r='2.8' fill='#5C5C5C' />
                <circle cx='24' cy='44' r='2.5' fill='#737373' />
                <circle cx='35.81' cy='40.14' r='2.2' fill='#8A8A8A' />
                <circle cx='42.98' cy='30.32' r='1.9' fill='#8A8A8A' />
                <circle cx='42.98' cy='17.68' r='1.6' fill='#8A8A8A' />
                <circle cx='35.81' cy='7.86' r='1.3' fill='#8A8A8A' />
            </svg>
        </div>
    );
};
