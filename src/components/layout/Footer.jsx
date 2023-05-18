import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { FooterContainer, Social, TextFotter } from '../../styles/Footer';

export const Footer = () => {
  return(
    <>
      <FooterContainer>
        <Social>
          <li>
            <FaFacebook/>
          </li>
          <li>
            <FaInstagram/>
          </li>
          <li>
            <FaLinkedin/>
          </li>
        </Social>
        <TextFotter>
          <span>Costs</span> &copy; 2021
        </TextFotter>
      </FooterContainer>
    </>
  )
}