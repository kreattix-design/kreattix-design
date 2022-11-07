export interface IHelloWorld {
  text: string
}

const Helloworld = (props: IHelloWorld) => {
  const { text = 'default text' } = props
  return <div className="text">This is test text: {text}</div>
}

export default Helloworld
