import { Form, Formik } from "formik";
import React, { useState } from "react";
import FormNavigation from "./FormNavigation";
import { Stepper, Step, StepLabel } from "@mui/material";

function MultiStepForm({ children, initialValues, onSubmit }) {
  const [stepNum, setStepNum] = useState(0);
  const steps = React.Children.toArray(children);

  const [snapshot, setSnapShot] = useState(initialValues);

  const step = steps[stepNum];

  const totalSteps = steps.length;

  const isLastStep = stepNum === totalSteps - 1;

  const next = (values) => {
    setStepNum(stepNum + 1);
    setSnapShot(values);
  };

  const previous = (values) => {
    setStepNum(stepNum - 1);
    setSnapShot(values);
  };

  const handleSubmit = async (values, actions) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <div>
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {({
          formik,
          // values,
          // errors,
          // touched,
          // handleChange,
          // handleBlur,
          // handleSubmit,
        }) => (
          <Form>
            <Stepper activeStep={stepNum}>
              {steps.map((currentStep) => {
                const label = currentStep.props.stepName;

                return (
                  <Step key={currentStep.key}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {step}
            <FormNavigation
              isLastStep={isLastStep}
              hasPrevious={stepNum > 0}
              onBackClick={() => previous(formik.values)}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MultiStepForm;
export const FormStep = ({ stepName = "", children }) => children;
