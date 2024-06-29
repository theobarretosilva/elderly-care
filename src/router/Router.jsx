import { Route, Routes } from "react-router";
import { Login } from "../pages/Login/Login";
import { TipoCadastro } from "../pages/TipoCadastro/TipoCadastro";
import { CadastroResponsavel } from "../pages/CadastroResponsavel/CadastroResponsavel";
import { CadastroIdoso } from "../pages/CadastroIdoso/CadastroIdoso";
import { CadastroRealizado } from "../pages/CadastroRealizado/CadastroRealizado";
import { InicioIdoso } from "../pages/InicioIdoso/InicioIdoso";
import { DescricaoCuidadorIdoso } from "../pages/DescricaoCuidadorIdoso/DescricaoCuidadorIdoso";
import { PerfilIdoso } from "../pages/PerfilIdoso/PerfilIdoso";
import { EditarDadosIdoso } from "../pages/EditarDadosIdoso/EditarDadosIdoso";
import { CadastroCuidador } from "../pages/CadastroCuidador/CadastroCuidador";
import { InicioCuidador } from "../pages/InicioCuidador/InicioCuidador";
// import { PerfilCuidador } from "../pages/PerfilCuidador/PerfilCuidador";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { LoggedLayout } from "../layouts/LoggedLayout/LoggedLayout";
import { EditarDadosResponsavel } from '../pages/EditarDadosResponsavel/EditarDadosResponsavel'

export function Router() {
    const { user } = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/escolhaCadastro" element={<TipoCadastro />} />
            <Route path="/cadastroResponsavel" element={<CadastroResponsavel />} />
            <Route path="/cadastroIdoso" element={<CadastroIdoso />} />
            <Route path="/cadastroCuidador" element={<CadastroCuidador />} />
            <Route path="/cadastroRealizado" element={<CadastroRealizado />} />

            {user && (
                <Route path="/login" element={user === "Idoso" ? <InicioIdoso /> : <InicioCuidador />} />
            )}

            <Route path="/logged" element={<LoggedLayout />}>
                <Route path="inicioIdoso" element={<InicioIdoso />} />
                <Route path="perfilIdosoEResponsavel" element={<PerfilIdoso />} />
                <Route path="descricaoCuidador" element={<DescricaoCuidadorIdoso />} />
                <Route path="editarIdoso" element={<EditarDadosIdoso />} />
                <Route path="editarResponsavel" element={<EditarDadosResponsavel />} />

                {/* {user === "Idoso" && (
                    <>
                        <Route path="inicioIdoso" element={<InicioIdoso />} />
                        <Route path="perfilIdosoEResponsavel" element={<PerfilIdoso />} />
                        <Route path="descricaoCuidador" element={<DescricaoCuidadorIdoso />} />
                    </>
                )}

                {user === "Cuidador" && (
                    <>
                        <Route path="inicioCuidador" element={<InicioCuidador />} />
                        <Route path="perfilCuidador" element={<PerfilCuidador />} />
                    </>
                )} */}
            </Route>
        </Routes>
    );
}
