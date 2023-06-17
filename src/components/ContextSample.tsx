import { title } from 'process'
import React from 'react'

const TitleContext = React.createContext('')

const Card = (props: { title: string }) => {
  return <h1>{props.title}</h1>
}

const Title = () => {
  return (
    <TitleContext.Consumer>
      {/* {(title) => <h1>{title}</h1>} */}
      {(title) => <Card title={title} />}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

const Page = () => {
  const title = 'React Book'

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page
