import styled from "styled-components";
import { Neutral } from "@/utilities"
import { CardModel } from "@/models"
import { ChipType, Date, Title, Text, Image, Profile } from "@/components"

const CardLayout = styled.div`
    background-color: ${Neutral.white};
    border-radius: 18px;
    box-shadow: 8px 8px 0 ${Neutral.black};
    border: 1px solid ${Neutral.black};
    height: 450px;
    width: 320px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;
`

const Card = ({ image, chip, date, title, text, profile }: CardModel) => {
    return (
        <CardLayout>
            <Image src={image} />
            <ChipType>{chip}</ChipType>
            <Date>{date}</Date>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Profile {...profile}/>
        </CardLayout>
    )
}
export default Card