import React from "react";
import styled from "styled-components/native";
import { colors } from "../../theme/tokens";
import Constants from "expo-constants";

export const Container = styled.View`
    width: 236px;
    height: 272px;
    margin-left: 30px;
    border-radius: 8px;
`;

export const Top = styled.Image`
    flex: 1;
    background-color: red;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    object-fit: cover;
`;

export const Button = styled.View`
    flex: 1;
    background-color: ${colors.ternary};
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 12px;
    justify-content: center;
`;

export const Titulo = styled.Text`
    font-size: 16px;
    font-family: ${colors.fonts.Roboto_500Medium};
    margin-bottom: 10px;
`;

export const Text = styled.Text`
    font-size: 14px;
    font-family: ${colors.fonts.Roboto_400Regular};
    color: #78797b;
    margin-bottom: 12px;
`;
