import { useContext } from "react";
import { ContextSearch } from "../context/contextSearch";
import CardData from "../components/CardData";

const LastSearchs = () => {
  const { lastSearch } = useContext(ContextSearch);

  return (
    <>
      {lastSearch.length === 0 ? (
        <h4 className="text-center text-white mt-4">No hay historial</h4>
      ) : (
        <h4 className="text-center text-white mt-4">Ultimos Subneteos</h4>
      )}
      <div className="container">
        <div className="row">
          <div className="d-md-flex justify-content-md-evenly flex-wrap">
            {lastSearch.map((item) => (
              <div key={item?.id}>
                <CardData datacard={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LastSearchs;
