function Home() {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "60px", // espaço no topo
        textAlign: "center", // centraliza horizontalmente
        paddingLeft: "20px", // pequenas margens laterais (opcional)
        paddingRight: "20px",
      }}
    >
      <h1> Em Construção </h1>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "18px",
          lineHeight: "1.6",
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
