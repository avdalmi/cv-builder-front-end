import { Form, Formik } from "formik";
import React, { useState } from "react";
import FormNavigation from "../NavigationButton/NavigationButton";
import { Stepper, Step, StepLabel } from "@mui/material";
import {
  AccountBox,
  HistoryEdu,
  IntegrationInstructions,
  Language,
  ManageAccounts,
  MenuBook,
  School,
  SportsSoccer,
  Work,
} from "@mui/icons-material";
import styled from "@emotion/styled";

function MultiStepForm({ children, initialValues, onSubmit }) {
  const [stepNum, setStepNum] = useState(0);
  const steps = React.Children.toArray(children);

  const [snapshot, setSnapShot] = useState(initialValues);

  const step = steps[stepNum];

  const totalSteps = steps.length;

  const isLastStep = stepNum === totalSteps - 1;

  const next = (values) => {
    setSnapShot(values);
    setStepNum(Math.min(stepNum + 1, totalSteps - 1));
  };

  const previous = (values) => {
    setSnapShot(values);
    setStepNum(Math.max(stepNum - 1, 0));
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

  const StepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: "#1c1c1c",
    ...(ownerState.active && {
      color: "#cc5500",
    }),
    ...(ownerState.completed && {
      color: "#888a89",
    }),
  }));

  const StepIcon = (props) => {
    const { active, completed, className } = props;
    const icons = {
      1: <AccountBox />,
      2: <ManageAccounts />,
      3: <Work />,
      4: <School />,
      5: <HistoryEdu />,
      6: <MenuBook />,
      7: <Language />,
      8: <SportsSoccer />,
      9: <IntegrationInstructions />,
    };

    return (
      <StepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </StepIconRoot>
    );
  };

  return (
    <div>
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {(formik) => (
          <Form>
            <Stepper alternativeLabel activeStep={stepNum}>
              {steps.map((currentStep) => {
                const label = currentStep.props.stepName;
                return (
                  <Step key={currentStep.key}>
                    <StepLabel StepIconComponent={StepIcon}></StepLabel>
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
