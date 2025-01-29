import React from 'react';

const TechStackTicker = ({ techStack }) => {
    return (
        <div className="ticker-container overflow-hidden whitespace-nowrap">
            <div className="ticker flex animate-ticker">
                {techStack.map((tech, index) => (
                    <span key={`tech-1-${index}`} className="ticker-item mx-8 uppercase text-5xl font-NoirProMedium text-[#373737]">
                        {tech}
                    </span>
                ))}
                {techStack.map((tech, index) => (
                    <span key={`tech-2-${index}`} className="ticker-item mx-8 uppercase text-5xl font-NoirProMedium text-[#373737]">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechStackTicker;
