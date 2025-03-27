import Cartao from "./Cartao"
import Pedido from "./Pedido"

const App = () => {
  const textoOK = "Já chegou"
  const textoNOK = "Ainda não chegou"
  const funcaoOK = () => alert("Agradecemos o feedback")
  const funcaoNOK = () => alert("Verificaremos o que houve")
  const componenteFeedback =
    (<Feedback 
      textoOK={textoOK} 
      funcaoOK={funcaoOK} 
      textoNOK={textoNOK} 
      funcaoNOK={funcaoNOK} 
    />)

  return (
    <div className="container border rounded mt-2">
      <div className="row"> 
        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao cabecalho="26/03/2025">
            <Pedido 
              icone="headset"
              titulo="Headset"
              descricao="Headset profissional com fios de ouro e platina"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao cabecalho="27/03/2025">
            <Pedido 
              icone="gamepad"
              titulo="Gamepad"
              descricao="Gamepad com 20 botões programáveis"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao cabecalho="28/03/2025">
            <Pedido
              icone="hippo"
              titulo="Hipopótamo"
              descricao="Hipopótamo de pelúcia"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao cabecalho="29/03/2025">
            <Pedido 
              icone="snowman"
              titulo="Boneco de Neve"
              descricao="Boneco de neve de verdade"
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  )
}
export default App