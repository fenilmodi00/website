import React from 'react';

interface AvailabilityBarProps {
    available: number;
    total: number;
}

const AvailabilityBar: React.FC<AvailabilityBarProps> = ({ available, total }) => {
    const filledDots = Math.round((available / total) * 15);
    const emptyDots = 15 - filledDots;

    return (
        <div className='flex flex-col my-5 gap-2'>
            <div className='flex justify-between items-center'>
                <span className='font-bold text-foreground'>{available} Available</span>
                <span>(out of {total})</span>
            </div>
            <div className='flex justify-between'>
                {Array.from({ length: filledDots }).map((_, i) => (
                    <div
                        key={i}
                        className='w-[8px] h-[8px] bg-foreground rounded-full mx-[2px]'
                    />
                ))}
                {Array.from({ length: emptyDots }).map((_, i) => (
                    <div
                        key={i + filledDots}
                        className='w-[8px] h-[8px] bg-paraDark rounded-full mx-[2px]'
                    />
                ))}
            </div>
        </div>
    );
};

export default AvailabilityBar;
