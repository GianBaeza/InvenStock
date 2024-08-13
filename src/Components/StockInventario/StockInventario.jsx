import { useContext, useState } from "react";
import Stock from "../Stock/Stock";
import "./stockInventario.css";
import SearchIcon from "@mui/icons-material/Search";
import AgregarProducto from "../AgregarProducto/AgregarProducto";
import { InventarioContext } from "../Context/StockContext";

export default function StockInventario() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const {
    handleDelete,
    handleChange,
    handleOrdenClick,
    handleOrdenNombreClick,
    valueSearch,
    inventario,
    
  } = useContext(InventarioContext);

  //open modal para agregar producto
  const handleOpenModal = () => {
    setOpenModalAdd(!openModalAdd);
  };
  //close modal
  const handleCloseModal = () => {
    setOpenModalAdd(false);
  };
  return (
    <div className="container-Stock">
      <header className="main-Stock">
        <h1>Inventario: {`${inventario.length} Productos`}</h1>

        <section>
          <button onClick={handleOpenModal}>Nuevo Articulo</button>
          {openModalAdd && <AgregarProducto closeModal={handleCloseModal} />}
          <div>
            <div className="input-container">
              <SearchIcon className="search-icon" />
              <input
                type="search"
                name="search"
                id="buscarItem"
                placeholder="Buscar Articulo.."
                onChange={handleChange}
                value={valueSearch}
                
              />
            </div>
          </div>
        </section>
      </header>
      <section className="container-table ">
        <Stock
          handleDelete={handleDelete}
          inventario={inventario}
          handleOrdenClick={handleOrdenClick}
          handleOrdenNombreClick={handleOrdenNombreClick}
        />
      </section>
    </div>
  );
}
