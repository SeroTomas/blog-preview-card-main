export interface CardModel {
    image: string
    chip: string
    date: string
    text: string
    title: string
    profile: ProfileModel
}

export interface ProfileModel {
    avatar: string
    name: string
}