import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import GlobalStyles from "../style/globalStyle";
import BackImg from "../assets/back.png";
import * as Colors from "../style/color";
import { useNavigation } from "@react-navigation/native";

export default function ChooseTemplate({
  suggested,
  others,
  handleTemplate,
  title,
  description,
}) {
  const navigation = useNavigation();
  const handleBack = () => {};

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.cardItem}
        onPress={() => handleTemplate(item)}
      >
        <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={[GlobalStyles.rowContainer, { textAlign: "left" }]}
          onPress={handleBack}
        >
          {description && (
            <Image
              source={BackImg}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
          )}
          <Text
            style={[
              GlobalStyles.font16,
              GlobalStyles.defaultFontFamily,
              GlobalStyles.fontBold,
            ]}
          >
            {title}
          </Text>
        </TouchableOpacity>
        {description && (
          <Text
            style={[
              GlobalStyles.font14,
              GlobalStyles.defaultFontFamily,
              { color: Colors.mainBlue, marginTop: 10 },
            ]}
          >
            {description}
          </Text>
        )}
      </View>
      <View>
        <Text
          style={[
            GlobalStyles.font12,
            GlobalStyles.fontBold,
            GlobalStyles.defaultFontFamily,
            { color: Colors.strongGrey, marginRight: 10, marginBottom: 10 },
          ]}
        >
          Suggested
        </Text>
        <View>
          <FlatList
            data={suggested}
            extraData={suggested}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            // style={{ flex: 1 }}
            // contentContainerStyle={{ paddingVertical: 20 }}
          />
        </View>
      </View>
      <View>
        <View style={[GlobalStyles.rowContainer, { marginBottom: 10 }]}>
          <Text
            style={[
              GlobalStyles.font12,
              GlobalStyles.fontBold,
              GlobalStyles.defaultFontFamily,
              { color: Colors.strongGrey, marginRight: 10 },
            ]}
          >
            Others
          </Text>
          <TextInput
            style={[
              styles.searchInput,
              GlobalStyles.font12,
              GlobalStyles.defaultFontFamily,
            ]}
            placeholder="Search"
          />
        </View>
        <View>
          <FlatList
            data={others}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardItem: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    width: "30%",
    marginRight: "2%",
    marginBottom: 10,
  },
  searchInput: {
    width: 150,
    height: 30,
    backgroundColor: Colors.lightGrey,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
});
