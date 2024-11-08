import React, { useState } from 'react';
import { forEachElement, getComponent } from '../../../../TestUtils';
import {
  CreditCardMockup,
  CreditCardCVC,
  CreditCardDate,
  CreditCardName,
  CreditCardNumberDisplay,
  CreditCardNumber,
} from '../index';
import { fireEvent } from '@testing-library/react';

const CreditCardTest = () => {
  const [cardData, setCardData] = useState({
    name: 'Eduardo',
    number: '',
    expiry: '2132',
    cvc: '232',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prevCardData) => ({
      ...prevCardData,
      [name]: value,
    }));
  };

  const [focusedElement, setFocusedElement] = useState<
    'number' | 'name' | 'expiry' | 'cvc'
  >('name');

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const {
      target: { name },
    } = e;
    setFocusedElement(name as 'number' | 'name' | 'expiry' | 'cvc');
  };

  return (
    <>
      <CreditCardMockup
        name={cardData.name}
        cvc={cardData.cvc}
        expiry={cardData.expiry}
        number={cardData.number}
        focused={focusedElement}
      />
      <CreditCardCVC onFocus={handleFocus}>
        <CreditCardCVC.Label info="cvc">I am a label</CreditCardCVC.Label>
        <CreditCardCVC.HelpText>I am a helpText</CreditCardCVC.HelpText>
        <CreditCardCVC.Control
          onChange={handleChange}
          value={cardData.cvc}
          name="cvc"
        />
      </CreditCardCVC>
      <CreditCardDate onFocus={handleFocus}>
        <CreditCardDate.Label info="date">I am a label</CreditCardDate.Label>
        <CreditCardDate.HelpText>I am a helpText</CreditCardDate.HelpText>
        <CreditCardDate.Control
          onChange={handleChange}
          value={cardData.expiry}
          name="expiry"
        />
      </CreditCardDate>
      <CreditCardName onFocus={handleFocus}>
        <CreditCardName.Label info="name">I am a label</CreditCardName.Label>
        <CreditCardName.HelpText>I am a helpText</CreditCardName.HelpText>
        <CreditCardName.Control
          onChange={handleChange}
          value={cardData.name}
          name="name"
        />
      </CreditCardName>
      <CreditCardNumber onFocus={handleFocus}>
        <CreditCardNumber.Label info="number">
          I am a label
        </CreditCardNumber.Label>
        <CreditCardNumber.HelpText>I am a helpText</CreditCardNumber.HelpText>
        <CreditCardNumber.Control
          onChange={handleChange}
          value={cardData.number}
          name="number"
        />
      </CreditCardNumber>
      <CreditCardNumberDisplay
        cardBrand="mastercard"
        isEditable
      ></CreditCardNumberDisplay>
    </>
  );
};

describe('Credit Card component', () => {
  const CreditCardCVCTestID = 'sds_creditCard_cvc';
  const CreditCardDateTestID = 'sds_creditCardDate';
  const CreditCardDisplayTestID = 'sds_creditCardDisplay';
  const CreditCardMockupTestID = 'sds_creditCard_mockup';
  const CreditCardNumberTestID = 'sds_creditCard_number';
  const CreditCardNameTestID = 'sds_creditCard_name';

  it('Renders all the components', () => {
    const { getByTestId } = getComponent(<CreditCardTest />);
    const cvc = getByTestId(CreditCardCVCTestID);
    const date = getByTestId(CreditCardDateTestID);
    const display = getByTestId(CreditCardDisplayTestID);
    const mockup = getByTestId(CreditCardMockupTestID);
    const number = getByTestId(CreditCardNumberTestID);
    const name = getByTestId(CreditCardNameTestID);

    forEachElement([cvc, display, date, mockup, number, name], (element) =>
      expect(element).toBeInTheDocument()
    );
  });

  it('Check if values are changing and if custom filters are being applied', () => {
    const { getAllByTestId } = getComponent(<CreditCardTest />);

    const numberInputs = getAllByTestId('sds_numberInput_input');
    const textInputs = getAllByTestId('sds_textInput_input');

    const cvcInput = numberInputs[0];
    const numberInput = numberInputs[1];
    const dateInput = textInputs[0];
    const nameInput = textInputs[1];

    const values = ['234', '2344 0231 3213 3123', '23/30', 'Eduardo Olmedo'];

    forEachElement(
      [cvcInput, numberInput, dateInput, nameInput],
      (el, index) => {
        const currentValue = values[index];
        fireEvent.change(el, { target: { value: currentValue } });
        expect(el).toHaveValue(currentValue);
      }
    );
  });

  it('Credit card icon type is correctly rendered', () => {
    const { getAllByTestId } = getComponent(<CreditCardTest />);
    const numberInputs = getAllByTestId('sds_numberInput_input');
    const numberInput = numberInputs[1];
    fireEvent.change(numberInput, { target: { value: 48992312231021 } });
    const creditCardIcons = getAllByTestId('sds_creditCard_icon');
    const numberInputIcon = creditCardIcons[0];
    expect(numberInputIcon).toHaveAttribute('data-type', 'visa');
  });
});
