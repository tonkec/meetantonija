import { useState } from 'react';
import Section from 'components/Section';
import useImage from 'hooks/useImage';
import Contact from 'images/contact.jpeg';
import { BackgroundImage, ButtonCopy } from 'pages/Homepage/Homepage.styles';
import Text from 'components/Text';

const ContactMe = () => {
  const loadingContact = useImage(Contact);
  const [copyMsg, setCopyMsg] = useState('Copy email');

  return (
    <Section backgroundColor="#43cea2" padding="none">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-lg-4">
          {loadingContact ? (
            <div id="spinner"></div>
          ) : (
            <BackgroundImage
              image={Contact}
              width="100%"
              height={400}
              backgroundPosition="center center"
              backgroundSize="cover"
              style={{ margin: 0 }}
            ></BackgroundImage>
          )}
        </div>

        <div
          className="col-xs-12 col-sm-6 col-lg-8"
          style={{ padding: '50px 40px' }}
        >
          <Text type="h2" color="#292929">
            Do you have a project for me?
          </Text>

          <ButtonCopy
            content={copyMsg}
            onClick={() => {
              setCopyMsg('Copied!');
              setTimeout(() => {
                setCopyMsg('Copy email');
              }, 1000);
              navigator.clipboard.writeText('antonija1023@gmail.com');
            }}
          >
            <span>Email me</span>
          </ButtonCopy>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
