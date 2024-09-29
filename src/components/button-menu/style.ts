import React from "react";
import styled from "styled-components/native";
import { colors } from "../../theme/tokens";
import Constants from "expo-constants";

export const Container = styled.View`
    align-items: center;
    width: 70px;
`;
export const ContainerIcon = styled.View`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background-color: ${colors.ternary};
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    margin-top: 14px;
    font-family: ${colors.fonts.Roboto_500Medium};
    font-size: 14px;
`;
