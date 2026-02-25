function Horarios({ horarios }) {
  return (
    <div className="row">
      {horarios.map((cantina) => (
        <div key={cantina.id}>
          <h3 className="mt-4 mb-2">{cantina.nome}</h3>

          <table className="table table-striped table-bordered mt-4">
            <colgroup>
              <col className="mobile-col1" />
              <col className="mobile-col2" />
              <col className="mobile-col3" />
            </colgroup>

            <thead>
              <tr>
                <th>Período</th>
                <th>Refeição</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              {cantina.horarios.map((item) => (
                <tr key={item.id}>
                  <td>{item.periodo}</td>
                  <td>{item.refeicao}</td>
                  <td>{item.horario}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className=" mb-4">
            <strong>Localização:</strong> {cantina.localizacao}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Horarios;
