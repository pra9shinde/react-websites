import React, { useState } from 'react';
import Video from '../../assets/videos/video.mp4';
import { Button } from '../Button/ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHoverHandler = () => {
        setHover(!hover);
    };

    return (
        <div>
            <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>

                <HeroContent>
                    <HeroH1>Virtual Banking Made Easy</HeroH1>
                    <HeroP>Signup for a new account today and receive ₹10,000 in credit towards your next payment.</HeroP>
                    <HeroBtnWrapper>
                        <Button
                            to='signup'
                            onMouseEnter={onHoverHandler}
                            onMouseLeave={onHoverHandler}
                            primary={true}
                            dark={true}
                            smooth
                            duration={500}
                            spy
                            exact='true'
                            offset={-80}
                        >
                            Get Started{hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;
