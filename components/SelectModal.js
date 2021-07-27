import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import ModalSelector from "react-native-modal-selector-searchable";
import GlobalStyles from "../style/globalStyle";
import MedicineImg from "../assets/medicine_blue.png";
import DropDownImg from "../assets/dropDown.png";
import * as Colors from "../style/color";

export default function SelectModal({ lists, drugName, handleChangeDrug }) {
  const [selectedItem, setSelectedItem] = useState("");

  const changeDrug = (option) => {
    setSelectedItem(option.label);
    handleChangeDrug(option);
  };

  return (
    <ModalSelector
      data={lists}
      initValue="Select something yummy!"
      supportedOrientations={["landscape"]}
      accessible={true}
      scrollViewAccessibilityLabel={"Scrollable options"}
      cancelButtonAccessibilityLabel={"Cancel Button"}
      cancelText="Cancel"
      cancelTextStyle={GlobalStyles.font14}
      onChange={(option) => {
        changeDrug(option);
      }}
      optionTextStyle={GlobalStyles.font14}
      searchTextStyle={GlobalStyles.font14}
      searchStyle={{ paddingVertical: 10, borderWidth: 0 }}
    >
      <TouchableOpacity
        style={[
          GlobalStyles.defaultFontFamily,
          {
            marginTop: 15,
            paddingHorizontal: 15,
            height: 60,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
          },
        ]}
        placeholder="Search Drug..."
        value={selectedItem}
      >
        <View style={GlobalStyles.rowContainer}>
          <Image source={MedicineImg} style={{ width: 20, height: 15 }} />
          <Text
            style={[
              GlobalStyles.font14,
              GlobalStyles.fontBold,
              GlobalStyles.defaultFontFamily,
              { marginLeft: 10, color: Colors.primatyBlue },
            ]}
          >
            {drugName}
          </Text>
        </View>
        <Image source={DropDownImg} width={25} height={20} />
      </TouchableOpacity>
    </ModalSelector>
  );
}
