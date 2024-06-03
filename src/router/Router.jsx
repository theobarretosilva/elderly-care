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
import { PerfilCuidador } from "../pages/PerfilCuidador/PerfilCuidador";

export function Router() {
    const escolhaEdicao = "Idoso" || "Responsavel" || "Cuidador";
    const pathEditarDados = "/editarDados" + escolhaEdicao;
    console.log(pathEditarDados);

    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/escolhaCadastro" element={<TipoCadastro />} />
            <Route path="/cadastroResponsavel" element={<CadastroResponsavel />} />
            <Route path="/cadastroIdoso" element={<CadastroIdoso />} />
            <Route path="/inicioIdoso" element={<InicioIdoso />} />
            <Route path="/descricaoCuidador" element={<DescricaoCuidadorIdoso />} />
            <Route path="/perfilIdosoECuidador" element={<PerfilIdoso />} />
            <Route path="/cadastroCuidador" element={<CadastroCuidador />} />
            <Route path="/inicioCuidador" element={<InicioCuidador />} />
            <Route path="/perfilCuidador" element={<PerfilCuidador />} />
            <Route path={pathEditarDados} element={<EditarDadosIdoso />} />
            <Route path="/cadastroRealizado" element={<CadastroRealizado />} />
        </Routes>
    )
}