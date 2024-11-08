import React, { useState } from 'react';
import { MiniWizard } from '../MiniWizard';
import { getComponent } from '../../../../TestUtils';
import { fireEvent, waitFor } from '@testing-library/react';

interface TestProps {
  isOpen?: boolean;
}

const MiniWizardTest = ({ isOpen = true }: TestProps) => {
  const [open, setIsOpen] = useState(isOpen ?? true);
  const [selectedStep, setSelectedStep] = useState(1);

  const handleClick = (stepValue: number) => {
    setSelectedStep(stepValue);
  };

  return (
    <MiniWizard
      onClose={() => 0}
      isOpen={open}
      selectedStep={selectedStep}
      heading="MiniWizard Title"
    >
      <MiniWizard.Step title="Step1" onClick={() => handleClick(1)}>
        <MiniWizard.Content>
          <div data-testid="step1value">A step 1</div>
        </MiniWizard.Content>
        <MiniWizard.Footer>
          <MiniWizard.Button
            className="sds_test_button"
            onClick={() => setIsOpen(false)}
          >
            Close
          </MiniWizard.Button>
        </MiniWizard.Footer>
      </MiniWizard.Step>
      <MiniWizard.Step title="Step2" onClick={() => handleClick(2)}>
        <MiniWizard.Content>
          <div data-testid="step2value">A step 2</div>
        </MiniWizard.Content>
        <MiniWizard.Footer>
          <MiniWizard.Button>Next</MiniWizard.Button>
        </MiniWizard.Footer>
      </MiniWizard.Step>
      <MiniWizard.Step isDisabled title="Step3" onClick={() => handleClick(3)}>
        <MiniWizard.Content>
          <div data-testid="step3value">A invalid step 3</div>
        </MiniWizard.Content>
        <MiniWizard.Footer>
          <MiniWizard.Button>Step2</MiniWizard.Button>
        </MiniWizard.Footer>
      </MiniWizard.Step>
    </MiniWizard>
  );
};

describe('<MiniWizard />', () => {
  const miniWizard = 'sds_miniWizard';
  const miniWizardStep = 'sds_miniWizard_step';

  it('Should render', () => {
    const { getByTestId } = getComponent(<MiniWizardTest />, 'document');
    expect(getByTestId(miniWizard)).toBeInTheDocument();
  });

  it('Should not render if isOpen is false', () => {
    const { queryByTestId } = getComponent(
      <MiniWizardTest isOpen={false} />,
      'document'
    );
    expect(queryByTestId(miniWizard)).toBeFalsy();
  });

  it('Should render all the steps', () => {
    const { getAllByTestId } = getComponent(<MiniWizardTest />, 'document');
    const steps = getAllByTestId(miniWizardStep);
    expect(steps.length).toBe(3);
  });

  it('Should  change content based on clicked step', () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <MiniWizardTest />,
      'document'
    );

    const steps = getAllByTestId(miniWizardStep);
    const step2 = steps[1];

    fireEvent.click(step2);

    expect(getByTestId('step2value')).toBeInTheDocument();
    expect(getByTestId('step2value').textContent).toBe('A step 2');
  });

  it('Should render the title ', () => {
    const { getByTestId } = getComponent(<MiniWizardTest />, 'document');
    const title = getByTestId('sds_modal_header');
    expect(title.textContent).toBe('MiniWizard Title');
  });

  it('Should add the classNames based on the state of the step', () => {
    const { getAllByTestId } = getComponent(<MiniWizardTest />, 'document');
    const steps = getAllByTestId(miniWizardStep);
    const step1 = steps[0];
    const step3 = steps[2];

    expect(step1).toHaveClass(
      'sds_miniWizard_navbar_step sds_miniWizard_navbar_step--selected'
    );
    expect(step3).toHaveClass('sds_miniWizard_navbar_step--disabled');
  });

  it('Expect invalid step onClick not to execute the step change', () => {
    const { getAllByTestId, getByTestId } = getComponent(
      <MiniWizardTest />,
      'document'
    );
    const steps = getAllByTestId(miniWizardStep);
    const step3 = steps[2];
    fireEvent.click(step3);
    expect(getByTestId('step1value')).toBeInTheDocument();
    expect(getByTestId('step1value').textContent).toBe('A step 1');
  });

  it('Should close when controlling it.', async () => {
    const { queryByTestId } = getComponent(<MiniWizardTest />, 'document');

    const button = document.querySelector('.sds_test_button') as HTMLElement;
    fireEvent.click(button);
    await waitFor(() => {
      expect(queryByTestId(miniWizard)).toBeFalsy();
    });
  });
});
