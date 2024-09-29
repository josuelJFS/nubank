import ButtonPress from "../button";
import { Button, Container, Titulo, Top, Text } from "./style";

const Portabildiade: React.FC = () => {
    return (
        <Container>
            <Top source={require("../../../assets/img.png")} />
            <Button>
                <Titulo>Portabilidade de salário</Titulo>
                <Text>Sua liberdade financeira comeca com você escolhendo...</Text>
                <ButtonPress>Conhecer</ButtonPress>
            </Button>
        </Container>
    )
}

export default Portabildiade;