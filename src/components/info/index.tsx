import { colors } from "../../theme/tokens"
import { ContainerInfo, TextInfo } from "./style"

interface InfoProps {
    item: DataProps
}

type DataProps = {
    itemOne: boolean
}



const Info: React.FC<InfoProps> = ({ item }) => {
    console.log(item)
    return <ContainerInfo style={{ marginLeft: item.itemOne ? 30 : 10 }}>
        <TextInfo color="#000">
            Seu {" "}
            <TextInfo color={colors.primary}>
                informe de rendimentos
            </TextInfo>
            {" "} 2021 já está disponível
        </TextInfo>

    </ContainerInfo>
}

export default Info;