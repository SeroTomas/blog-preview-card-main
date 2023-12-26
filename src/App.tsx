import { Card, GeneralLayout } from "./components";
import { CardModel } from "./models";

const cardInfo : CardModel = {
  image: "/public/images/illustration-article.svg"
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
