import React from 'react';
import { MiniWizard } from '../MiniWizard';
import { expectError } from '../../../../TestUtils';

const MiniWizardErrorTest = () => {
  return (
    <MiniWizard
      onClose={() => 0}
      heading="MiniWizard"
      selectedStep={1}
      children
    ></MiniWizard>
  );
};

const MiniWizardMissingFooterTest = () => {
  return (
    <MiniWizard onClose={() => 0} heading="MiniWizard" selectedStep={1}>
      <MiniWizard.Step title="Step 1">Hey</MiniWizard.Step>
    </MiniWizard>
  );
};

describe('MiniWizardError tests', () => {
  it('0 steps passed to the MiniWizard should display an error', () => {
    expectError(
      <MiniWizardErrorTest />,
      'Use at least one MiniWizard.Step subcomponent'
    );
  });

  it('If no StepNavigation is passed error should display', () => {
    expectError(
      <MiniWizardMissingFooterTest />,
      'Use the MiniWizard.Footer subcomponent in each MiniWizard.Step'
    );
  });
});
