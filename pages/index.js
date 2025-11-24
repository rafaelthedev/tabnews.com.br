function Home() {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "60px", // espaço no topo
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // centraliza horizontalmente em qualquer tela
        paddingLeft: "16px",
        paddingRight: "16px",
        boxSizing: "border-box", // evita layout quebrado no mobile
      }}
    >
      <h1 style={{ textAlign: "center" }}>Em Construção</h1>

      <p
        style={{
          maxWidth: "800px",
          marginTop: "20px",
          textAlign: "center",
          fontSize: "18px",
          lineHeight: "1.6",
          wordBreak: "break-word",
        }}
      >
        Eu, o Programador de Rua, a.k.a Rafael, particularmente acredito que a
        verdadeira inovação tecnológica nasce da experiência e da resiliência
        humana no processo de tentativa e erro, da lógica pura e da paixão por
        código. Com isso em mente, levantaremos um pedaço da internet do zero,
        sem depender de inteligência artificial.
      </p>
    </div>
  );
}

export default Home;
