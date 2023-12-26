import { CardLayout } from "@/styled-components"
import { Image } from "./Image"
import { CardModel } from "@/models"

const Card = ({ image }: CardModel) => {
    return (
        <CardLayout>
            <Image src={image} />
            <h1>hola munfo</h1>
        </CardLayout>
    )
}
export default Card