import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import EditImg from "../../assets/edit.png";
import MicImg from "../../assets/mic_small.png";
import GlobalStyles from "../../style/globalStyle";
import * as Colors from "../../style/color";

export default function QAContent({
  item,
  currentStep,
  value,
  idx,
  outputAnswer,
}) {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [edit, setEdit] = useState(false);
  const [answer, setAnswer] = useState(item?.answer ? item.answer : "");
  const emptyAnswer = "...";

  useEffect(() => {
    if (item) {
      dispatch({
        type: "SET_SOAP_MANDATORY_ITEM",
        payload: item.mandatory,
      });
    }
  }, [item]);

  const handleEditAnswer = () => {
    dispatch({
      type: "SET_SOAP_CURRENT_STEP",
      payload: idx + value.from,
    });

    setEdit(false);
    outputAnswer(answer);
  };

  return (
    <View
      style={{
        marginBottom: 10,
        display:
          currentStep - idx >= value.from || item?.answer ? "block" : "none",
      }}
    >
      <Text
        style={[
          GlobalStyles.font16,
          GlobalStyles.fontBold,
          GlobalStyles.defaultFontFamily,
        ]}
      >
        {item.question}
      </Text>
      <TouchableOpacity
        style={[
          GlobalStyles.rowContainer,
          {
            justifyContent: "space-between",
            paddingHorizontal: 5,
            background: item.answer && (editable || edit) ? "#FFF2CE" : "unset",
            borderRadius: 15,
          },
        ]}
        onLongPress={() => setEditable(true)}
      >
        {!edit ? (
          <Text
            style={[
              GlobalStyles.font14,
              GlobalStyles.fontBold,
              GlobalStyles.defaultFontFamily,
              { color: Colors.answer_blue },
            ]}
          >
            {item.answer ? item.answer : emptyAnswer}
          </Text>
        ) : (
          <TextInput
            value={answer}
            onChangeText={(value) => setAnswer(value)}
            onSubmitEditing={handleEditAnswer}
          />
        )}
        {item.answer && (editable || edit) && (
          <TouchableOpacity onPress={() => setEdit(!edit)}>
            <Image
              source={edit ? MicImg : EditImg}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
}
