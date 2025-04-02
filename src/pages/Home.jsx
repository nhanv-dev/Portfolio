import { useState } from 'react';
import FadeContent from '../components/FadeContent';
import Preloader from '../components/Preloader';
import Slider from '../components/Slider';

export default function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {!isLoaded && <Preloader texts={["Welcome", "Let's Explore"]} onLoaded={() => setIsLoaded(true)} />}
            {isLoaded && (
                <div>
                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <Slider />
                    </FadeContent>
                </div>
            )}
        </>
    )
}

