import styled from "styled-components/native";
import { colors } from "../../theme/tokens";

export const ContainerInfo = styled.View`
    background-color: ${colors.ternary};
    width: 330px;
    height: 80px;
    border-radius: 12px;
    padding: 16px;
    flex-direction: row;
`;

export const TextInfo = styled.Text<{ color: string }>`
    font-family: ${colors.fonts.Roboto_400Regular};
    font-size: 16px;
    color: ${(props) => props.color};
`;

export const ContainerFletListInfo = styled.View`
    margin-top: 30px;
`;
