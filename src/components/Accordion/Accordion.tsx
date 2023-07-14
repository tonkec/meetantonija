import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { FaHandPointRight } from 'react-icons/fa';
import Text from 'components/Text';

interface AccordionInterface {
  items: Item[];
}

type Item = {
  title: string;
  description: string;
};

const MyAccordion = ({ items }: AccordionInterface) => {
  return (
    <Accordion>
      {items.map((item) => (
        <AccordionItem style={{ marginBottom: 20 }}>
          <AccordionItemHeading
            style={{ padding: '20px 50px 10px', backgroundColor: '#ffffff' }}
          >
            <AccordionItemButton>
              <Text type="h5" color="#292929">
                <FaHandPointRight /> {item.title}
              </Text>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel
            style={{ padding: '20px 50px 10px', backgroundColor: '#ffffff' }}
          >
            {item.description}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MyAccordion;
