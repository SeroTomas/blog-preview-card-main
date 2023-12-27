import { CardLayout } from "@/styled-components"
import { Image } from "./Image"
import { CardModel } from "@/models"
import { ChipType } from "."

const Card = ({ image }: CardModel) => {
    return (
        <CardLayout>
            <Image src={image} />
            <ChipType>Learning</ChipType>
        </CardLayout>
    )
}
export default Card