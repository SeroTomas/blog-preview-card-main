import { CardLayout } from "@/styled-components"
import { Image } from "./Image"
import { CardModel } from "@/models"
import { ChipType, Date, Title} from "@/components"

const Card = ({ image }: CardModel) => {
    return (
        <CardLayout>
            <Image src={image} />
            <ChipType>Learning</ChipType>
            <Date>Published 21 Dec 2023</Date>
            <Title>HTML & CSS fundations</Title>
        </CardLayout>
    )
}
export default Card