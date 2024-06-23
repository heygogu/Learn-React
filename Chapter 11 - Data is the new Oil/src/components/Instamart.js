import React, { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="text-3xl font-bold">{title}</h3>
            {isVisible ? (
                <button
                    onClick={() => setIsVisible(false)}
                    className="cursor-pointer underline">
                    Hide
                </button>
            ) : (
                <button
                    onClick={() => setIsVisible(true)}
                    className="cursor-pointer underline">
                    Show
                </button>
            )}

            {isVisible && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState(null);

    const toggleVisibility = (section) => {
        setVisibleSection((prevSection) => (prevSection === section ? null : section));
    };

    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

            <Section
                title={'About'}
                description={'This is the about section of Instamart'}
                isVisible={visibleSection === 'about'}
                setIsVisible={() => toggleVisibility('about')}
            />

            <Section
                title={'Team'}
                description={'This is a description about the Instamart'}
                isVisible={visibleSection === 'team'}
                setIsVisible={() => toggleVisibility('team')}
            />

            <Section
                title={'Career'}
                description={'This is a career section of the Instamart'}
                isVisible={visibleSection === 'career'}
                setIsVisible={() => toggleVisibility('career')}
            />
        </div>
    );
};

export default Instamart;
