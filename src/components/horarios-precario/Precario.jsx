function Precario({ precario }) {
  return (
    <div className="row">
      {precario.map((cantina) => {
        const firstItem = cantina.precos[0];

        let colgroup;
        if (firstItem.normal) {
          colgroup = (
            <colgroup>
              <col style={{ width: "60%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>
          );
        } else if (firstItem.preco1) {
          colgroup = (
            <colgroup>
              <col style={{ width: "60%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>
          );
        } else if (firstItem.descricao && !firstItem.normal) {
          colgroup = (
            <colgroup>
              <col style={{ width: "40%" }} />
              <col style={{ width: "30%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>
          );
        }

        return (
          <div key={cantina.id}>
            <h3 className="mt-4 mb-2">{cantina.nome}</h3>

            <table className="table table-striped table-bordered mt-4">
              {colgroup}

              <thead>
                <tr>
                  {firstItem.normal && (
                    <>
                      <th>Tipo</th>
                      <th>Normal</th>
                      <th>Opção</th>
                    </>
                  )}

                  {firstItem.preco1 && (
                    <>
                      <th>Produto</th>
                      <th>
                        Preço
                        <strong>
                          <sup>i</sup>
                        </strong>
                      </th>
                      <th>
                        Preço
                        <strong>
                          <sup>ii</sup>
                        </strong>
                      </th>
                    </>
                  )}

                  {firstItem.descricao && !firstItem.normal && (
                    <>
                      <th>Tipo</th>
                      <th>Descrição</th>
                      <th>Preço</th>
                    </>
                  )}
                </tr>
              </thead>

              <tbody>
                {cantina.precos.map((item) => (
                  <tr key={item.id}>
                    <td>{item.tipo}</td>

                    {item.normal && (
                      <>
                        <td>{item.normal}</td>
                        <td>{item.opcao}</td>
                      </>
                    )}

                    {item.preco1 && (
                      <>
                        <td>{item.preco1}</td>
                        <td>{item.preco2}</td>
                      </>
                    )}

                    {item.descricao && !item.normal && (
                      <>
                        <td>{item.descricao}</td>
                        <td>{item.preco}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>

            {cantina.observacoes.length > 0 && (
              <div className="mb-4 mt-4">
                {cantina.observacoes.map((obs) => (
                  <p key={obs.id} className="mb-2">
                    <strong>
                      <sup>{obs.ref}</sup>
                    </strong>{" "}
                    {obs.texto}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Precario;
