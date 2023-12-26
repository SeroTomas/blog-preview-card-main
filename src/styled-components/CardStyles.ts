import styled from "styled-components";
import {Neutral} from "@/utilities"

export const CardLayout = styled.div`
    background-color: ${Neutral.white};
    border-radius: 20px;
    box-shadow: 10px 10px 0 ${Neutral.black};
    border: 1px solid ${Neutral.black};
    height: 450px;
    width: 320px;
    padding: 15px;
    display: flex;
    flex-direction: column;
`