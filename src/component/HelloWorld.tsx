export interface IHelloWorld {
  text: string
}

const Helloworld = (props: IHelloWorld) => {
  const { text = 'default text' } = props
  return (
    <div className="text">
      This is test text: {text} {import.meta.env.KREATTIX_PREFIX}
    </div>
  )
}

export default Helloworld
