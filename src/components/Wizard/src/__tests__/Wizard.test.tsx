import React, { useState } from 'react';
import { Wizard } from '../Wizard';
import { getComponent } from '../../../../TestUtils';
import { fireEvent } from '@testing-library/react';

const WizardTest = () => {
  const [selectedStep, setSelectedStep] = useState(2);

  return (
    <Wizard selectedStep={selectedStep} heading="Wizard Title">
      <Wizard.Step onClick={() => setSelectedStep(1)} title="Step 1">
        <Wizard.Content>
          <div data-testid="step1value">A step 1</div>
        </Wizard.Content>
        <Wizard.Footer>
          <Wizard.Button>Next</Wizard.Button>
          <Wizard.Button>Cancel</Wizard.Button>
        </Wizard.Footer>
      </Wizard.Step>
      <Wizard.Step onClick={() => setSelectedStep(2)} title="Step 2">
        <Wizard.Content>
          <div data-testid="step2value">A step 2</div>
        </Wizard.Content>
        <Wizard.Footer>
          <Wizard.Button>Next</Wizard.Button>
          <Wizard.Button>Cancel</Wizard.Button>
        </Wizard.Footer>
      </Wizard.Step>
      <Wizard.Step isDisabled onClick={() => setSelectedStep(3)} title="Step 3">
        <div>
          <div>A step 3</div>
        </div>
        <Wizard.Footer>
          <Wizard.Button>Next</Wizard.Button>
          <Wizard.Button>Cancel</Wizard.Button>
        </Wizard.Footer>
      </Wizard.Step>
    </Wizard>
  );
};

describe('<Wizard />', () => {
  const wizardTestID = 'sds_wizard';
  const wizardStepTestID = 'sds_wizard_step';
  const wizardDesktopNavTestID = 'sds_wizard_desktopNavBar';

  it('Should be rendering ', () => {
    const { getByTestId } = getComponent(<WizardTest />);
    const wizard = getByTestId(wizardTestID);
    expect(wizard).toBeInTheDocument();
  });

  it('Desktop nav layout should render when width >= 767px', () => {
    const { getByTestId } = getComponent(<WizardTest />);
    const navbar = getByTestId(wizardDesktopNavTestID);
    expect(navbar).toBeInTheDocument();
  });

  it('Should render all the steps when header button is clicked', () => {
    const { getAllByTestId } = getComponent(<WizardTest />);

    const steps = getAllByTestId(wizardStepTestID);

    expect(steps.length).toBe(3);
  });

  it('Should  change content based on clicked step', () => {
    const { getByTestId, getAllByTestId } = getComponent(<WizardTest />);

    const steps = getAllByTestId(wizardStepTestID);
    const step2 = steps[1];

    fireEvent.click(step2);

    expect(getByTestId('step2value')).toBeInTheDocument();
    expect(getByTestId('step2value').textContent).toBe('A step 2');
  });

  it('Should add the classNames based on the state of the step', () => {
    const { getAllByTestId } = getComponent(<WizardTest />);
    const steps = getAllByTestId(wizardStepTestID);
    const step2 = steps[1];
    const step3 = steps[2];

    expect(step2).toHaveClass(
      'sds_wizard_navbar_step sds_wizard_navbar_step--selected'
    );
    expect(step3).toHaveClass(
      'sds_wizard_navbar_step sds_wizard_navbar_step--disabled'
    );
  });

  it('Expect invalid step onClick not to execute the step change', () => {
    const { getAllByTestId, getByTestId } = getComponent(<WizardTest />);

    const steps = getAllByTestId(wizardStepTestID);
    const step3 = steps[2];
    fireEvent.click(step3);
    expect(getByTestId('step2value')).toBeInTheDocument();
    expect(getByTestId('step2value').textContent).toBe('A step 2');
  });
});
