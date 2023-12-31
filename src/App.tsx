import { Card, GeneralLayout } from "./components";
import { CardModel } from "./models";

const cardInfo: CardModel = {
  image: "images/illustration-article.svg",
  chip: "Learning",
  date: "Published 21 Dec 2023",
  title: "HTML & CSS fundations",
  text: "These languajes are the backcone of every website, defining structure, contents, and presentation.",
  profile: {
    avatar: "images/image-avatar.webp",
    name: "Greg Hooper"
  }
}

function App() {

  return (
    <>
      <GeneralLayout>
        <Card {...cardInfo} />
      </GeneralLayout>
    </>
  )
}

export default App
