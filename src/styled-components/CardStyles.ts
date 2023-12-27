import styled from "styled-components";
import {Neutral} from "@/utilities"

export const CardLayout = styled.div`
    background-color: ${Neutral.white};
    border-radius: 18px;
    box-shadow: 8px 8px 0 ${Neutral.black};
    border: 1px solid ${Neutral.black};
    height: 450px;
    width: 320px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`