import React from 'react';
import { Wizard } from '../Wizard';
import { expectError } from '../../../../TestUtils';

const MiniWizardErrorTest = () => {
  return <Wizard selectedStep={1} children></Wizard>;
};

const MiniWizardMissingStepNavigationTest = () => {
  return (
    <Wizard selectedStep={1}>
      <Wizard.Step title="Step 1">Hey</Wizard.Step>
    </Wizard>
  );
};

describe('MiniWizardError tests', () => {
  it('0 steps passed to the MiniWizard should display an error', () => {
    expectError(
      <MiniWizardErrorTest />,
      'Use at least one Wizard.Step subcomponent'
    );
  });

  it('If no Footer is passed error should display', () => {
    expectError(
      <MiniWizardMissingStepNavigationTest />,
      'Use the Wizard.Footer subcomponent in each Wizard.Step'
    );
  });
});
