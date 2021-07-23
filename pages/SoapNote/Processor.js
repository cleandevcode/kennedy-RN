import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import QAContent from "./QAContent";

export default function Processor({
  value,
  answer,
  resetStep,
  stepIndex,
  editAnswer,
}) {
  const currentStep = useSelector((state) => state.soapNotes.currentStep);

  useEffect(() => {
    if (currentStep > value.to) {
      resetStep(stepIndex + 1);
    }
  }, [currentStep]);
  return (
    <>
      <View>
        {value.values.map((item, idx) => (
          <QAContent
            key={idx}
            item={item}
            outputAnswer={editAnswer}
            currentStep={currentStep}
            value={value}
            idx={idx}
          />
        ))}
      </View>
      <View></View>
    </>
  );
}
