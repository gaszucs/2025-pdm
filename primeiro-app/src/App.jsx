const App = () => {
  const estilosbotao =
    {paddingTop:8, marginTop:12,paddingBottom:8,backgroundColor:'blueviolet',
      color:'#white', border:'none', width:'100%', borderRadius:8}
      const textoDoRotulo = 'Nome:'
      const obterTextoDoBotao = () => 'Enviar'
      const aoClicar = () => alert('Clicou!')
  return (
    <div style={{ width:768, margin:'auto', backgroundColor:'#EEE', padding:12, borderRadius:8 }}>
      <label className="rotulo" htmlFor="nome" style={{display:'block', marginBottom:4}}>{textoDoRotulo}:</label>
      <input type="text" id="nome" style={{paddingBottom:8, paddingTop:8, borderStyle:'hidden', width:'100%',borderRadius:8,outline:'none'}} />
      <button onClick={() => aoClicar()}
        style={estilosbotao}>
        {obterTextoDoBotao}

      </button> 
    </div>
  )
}
export default App