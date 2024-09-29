import { FlatList, StatusBar, View } from "react-native"
import IconEmailSVG from "../../../assets/svg/email"
import IconUserSVG from "../../../assets/svg/icon-user"
import IconOcultSVG from "../../../assets/svg/ocult"
import IconQUestionSVG from "../../../assets/svg/question"

import { Container, ContainerIcons, ContainerIconGroup, IconUser, Main, Top, Name, Container2, ContainerMoney, TextAccount, TextMoney, ContainerFletList, ContainerCard, TextCard, ContainerItensCard, ContainerInfo, TextInfo, ContainerFletListInfo, CotainerCreditCard, Div, TextCreditCardTitle, TextCreditCard, Space, TextDescubra, SafaArea } from "./style"
import ButtomMenu from "../../components/button-menu"
import IconPixSVG from "../../../assets/svg/pix"
import IconDepositarSVG from "../../../assets/svg/depositar"
import IconPagarSVG from "../../../assets/svg/pagar"
import IconTranferenciaSVG from "../../../assets/svg/transferencia"
import IconRecargaSVG from "../../../assets/svg/recarga"
import IconCobrarSVG from "../../../assets/svg/cobrar"
import IconTransInternacionalSVG from "../../../assets/svg/tranfInternacional"
import IconCartaoSVG from "../../../assets/svg/cartao"
import { colors } from "../../theme/tokens"
import Info from "../../components/info"
import Button from "../../components/button"
import Portabildiade from "../../components/portabildiade"


type ItemProps = {
    name: string;
    id: number;
    icon: any;
    itemOne: boolean
}


const Home: React.FC = () => {

    const itens: ItemProps[] = [
        {
            name: "Área Pix", id: 1, icon: <IconPixSVG width={31} height={32} />, itemOne: true
        },
        { name: "Pagar", id: 2, icon: <IconPagarSVG width={32} height={31} />, itemOne: false },
        { name: "Transferir", id: 3, icon: <IconTranferenciaSVG width={32} height={31} />, itemOne: false },
        { name: "Depositar", id: 4, icon: <IconDepositarSVG width={32} height={31} />, itemOne: false },
        { name: "Recarga", id: 5, icon: <IconRecargaSVG width={32} height={32} />, itemOne: false },
        { name: "Cobrar", id: 6, icon: <IconCobrarSVG width={32} height={32} />, itemOne: false },
        { name: "Transferir Internac.", id: 7, icon: <IconTransInternacionalSVG width={32} height={32} />, itemOne: false }
    ]
    const dataInfo = [{ itemOne: true, id: 1 }, { itemOne: true, id: 2 }];
    return (

        <Container  >
            <Top>
                <Container2 >
                    <ContainerIcons>
                        <IconUser>
                            <IconUserSVG
                                width={31}
                                height={32}
                            />
                        </IconUser>
                        <ContainerIconGroup>
                            <IconOcultSVG />
                            <IconQUestionSVG />
                            <IconEmailSVG />
                        </ContainerIconGroup>
                    </ContainerIcons>
                    <Name>Olá, Josuel Fernandes</Name>
                </Container2>
            </Top>
            <Main>
                <ContainerMoney>
                    <TextAccount>Conta</TextAccount>
                    <TextMoney>R$ 3.453.087,90</TextMoney>
                </ContainerMoney>
                <ContainerFletList>
                    <FlatList
                        keyExtractor={(item: any) => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={itens}
                        renderItem={(item: any) => <ButtomMenu item={item.item} />} />
                </ContainerFletList>
                <ContainerCard>
                    <ContainerItensCard>
                        <IconCartaoSVG width={32} height={32} />
                        <TextCard> Meus Cartões</TextCard>
                    </ContainerItensCard>
                </ContainerCard>

                <ContainerFletListInfo>
                    <FlatList
                        keyExtractor={(item: any) => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={dataInfo}
                        renderItem={(item: any) => <Info item={item.item} />} />
                </ContainerFletListInfo>
                <Div />
                <CotainerCreditCard>
                    <IconCartaoSVG width={32} height={32} />
                    <TextCreditCardTitle>Cartão de crédito</TextCreditCardTitle>
                    <TextCreditCard>Peca seu cartão de crédito sem anuidade e tenha mais controle da sua vida financeira.</TextCreditCard>
                    <Button>Pedir Cartão</Button>
                </CotainerCreditCard>
                <Div />
                <TextDescubra>Descubra mais</TextDescubra>
                <ContainerFletListInfo>
                    <FlatList
                        keyExtractor={(item: any) => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={dataInfo}
                        renderItem={(item: any) => <Portabildiade />} />
                </ContainerFletListInfo>

            </Main>

        </Container>

    )
}

export default Home