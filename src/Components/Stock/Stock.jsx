import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./stock.css";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Loading from "./loaders/Loading";
import { useContext } from "react";
import { InventarioContext } from "../Context/StockContext";


//Estilos del  inventario
const estiloHead = { fontSize: 20 };
const esiloinfo = { fontSize: 15 };

export default function Stock({ handleOpenEdit }) {

    const { ordenarXNombre, ordenarXStock, deleteItem, inventario, loading } = useContext(InventarioContext)


    return (
        <section className="container-table">
            <TableContainer
                component={Paper}
                sx={{
                    width: "70%",
                    margin: "auto",
                    height: "auto",
                    borderRadius: "20px",

                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={estiloHead}>
                                Nombre{" "}
                                <ImportExportIcon
                                    className="ButtonOrden"
                                    sx={{
                                        width: 20,
                                        height: 20,
                                        margin: "auto",
                                    }}
                                    onClick={() => ordenarXNombre()}
                                />
                            </TableCell>
                            <TableCell align="right" sx={estiloHead}>
                                Stock{" "}
                                <ImportExportIcon
                                    className="ButtonOrden"
                                    sx={{ width: 20, height: 20, margin: "auto" }}
                                    onClick={() => ordenarXStock()}
                                />
                            </TableCell>
                            <TableCell align="right" sx={estiloHead}>
                                Codigo
                            </TableCell>
                            <TableCell align="right" sx={estiloHead}>
                                $ Lista
                            </TableCell>
                            <TableCell align="right" sx={estiloHead}>
                                $ Venta
                            </TableCell>
                            <TableCell align="right" sx={estiloHead}>
                                Accion
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {inventario.length > 0 ? (
                            inventario.map((inv) => (
                                <TableRow key={inv.id} sx={{
                                    maxHeight: "500px",
                                    borderRadius: "20px",
                                    overflowY: "auto",
                                    backgroundColor: 'red'
                                }}>
                                    <TableCell component="th" scope="row" sx={esiloinfo}>
                                        {inv.nombre}
                                    </TableCell>
                                    <TableCell align="right" sx={esiloinfo}>
                                        {inv.stock}

                                    </TableCell>
                                    <TableCell align="right" sx={esiloinfo}>
                                        {inv.codigo}
                                    </TableCell>
                                    <TableCell align="right" sx={esiloinfo}>
                                        $ {new Intl.NumberFormat("es-AR").format(inv.lista)}
                                    </TableCell>
                                    <TableCell align="right" sx={esiloinfo}>
                                        {" "}
                                        $ {new Intl.NumberFormat("es-AR").format(inv.venta)}
                                    </TableCell>
                                    <TableCell align="right">
                                        <div className="button-container">
                                            <button className="acciones" onClick={() => handleOpenEdit(inv.id)}>
                                                <BorderColorIcon />
                                            </button>
                                            <button
                                                className="acciones"
                                                onClick={() => deleteItem(inv.id)}
                                            >
                                                <DeleteForeverIcon />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} align="center">
                                    {loading ? <span><Loading /></span> : <span>Inventario Vacio </span>}

                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
}
