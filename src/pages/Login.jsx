const Login = () => {
  const handleSubmit = () => {};
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ansh Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />

          <button>Sign in</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
