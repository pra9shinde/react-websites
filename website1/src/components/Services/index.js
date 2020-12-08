import React from 'react';
import Icon1 from '../../assets/images/svg-3.svg';
import Icon2 from '../../assets/images/svg-5.svg';
import Icon3 from '../../assets/images/svg-6.svg';

import { ServicesContainer, ServicesH1, ServiceWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './servicesElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Services</ServicesH1>
            <ServiceWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your revenue.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform from anywhere int the world.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that return 5% cash back.</ServicesP>
                </ServicesCard>
            </ServiceWrapper>
        </ServicesContainer>
    );
};

export default Services;
