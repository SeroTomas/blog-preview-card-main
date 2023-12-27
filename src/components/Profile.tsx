import styled from "styled-components"
import { Avatar, Name } from "@/components"
import { ProfileModel } from "@/models"

const ProfileLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`


const Profile = ({avatar, name}: ProfileModel) => {
    return (
        <ProfileLayout>
            <Avatar src={avatar}/>
            <Name>{name}</Name>
            
        </ProfileLayout>
    )
}
export default Profile