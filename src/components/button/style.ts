import React from "react";
import styled from "styled-components/native";
import { colors } from "../../theme/tokens";
import Constants from "expo-constants";

export const Container = styled.TouchableOpacity`
    width: 150px;
    height: 50px;
    border-radius: 23px;
    background-color: ${colors.primary};
    padding: 8px;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    color: ${colors.secondary};
    font-family: ${colors.fonts.Roboto_700Bold};
    font-size: 16px;
`;
