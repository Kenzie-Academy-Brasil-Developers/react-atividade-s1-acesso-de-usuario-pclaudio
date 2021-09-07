const RestrictedPage = ({ isLoggedIn, user, login, logout }) => {
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Bem-vindo, {user}!</h1>
          <button onClick={logout}>Sair</button>
        </>
      ) : (
        <>
          <h2>Você não pode acessar essa página.</h2>
          <button onClick={login}>Entrar</button>
        </>
      )}
    </>
  );
};

export default RestrictedPage;
