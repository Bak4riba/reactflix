
import React from 'react';
/* import { Link } from 'react-router-dom'; */
import PageDefault from '../../components/PageDefault';
import GitLogo from '../../assets/img/git.png';
import FbLogo from '../../assets/img/fb.png';
function NotFound() {
  return (
    <PageDefault>
      <h1>Humm...Algo não esta certo...</h1>
      <h2><b>Mensagem do Admin</b></h2>
      <p>Devido alguns problemas com a validação dos campos, desabilitei temporariamente as paginas de cadastros de video e categorias.
<br /> Caso queira entrar em contato segue minhas midias sociais:</p>
      <a href="https://github.com/Bak4riba/">
        <img src={GitLogo} width="50" height="50" alt="Logo Github" />
      </a>
      <a href="https://www.facebook.com/bak4us">
        <img src={FbLogo} width="40" height="40" alt="Logo fb" />
      </a>
    </PageDefault>
  );
}
export default NotFound;
