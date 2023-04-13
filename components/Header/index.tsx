import Image from 'next/image';
import styled from 'styled-components';
import {HeaderLogoIcon} from "@/components/SvgIcons/HeaderLogoIcon";
import Button from "@/components/Button";

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MiddleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 1rem;
  gap: 100px;
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #183B56;
  align-items: center;
`;

const RightContainer = styled.div`
    
`;

const Header = () => {
    return (
        <HeaderContainer>
            <LeftContainer>
             <HeaderLogoIcon/>
            </LeftContainer>
            <MiddleContainer>
                <p>How it works</p>
                <p>Why us</p>
                <p>Testimonials</p>
                <p>Membership</p>
                <p>FAQs</p>
            </MiddleContainer>
            <RightContainer>
            <Button label={'Join Now'}/>
            </RightContainer>
        </HeaderContainer>
    );
};

export default Header;
