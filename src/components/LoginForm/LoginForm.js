import React, { Component } from 'react';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Realiza alguna acción con los datos del formulario, por ejemplo, enviarlos al servidor
    console.log('Datos del formulario:', this.state);
  };

  render() {
    return (
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuario
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Usuario"
            value={this.state.username}
            onChange={this.handleInputChange}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={this.state.password}
            onChange={this.handleInputChange}/>
            <p className="text-red-500 text-xs italic">Por favor ingresa una contraseña.</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
              Conectarse
            </button>
            <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Olvidaste tu contraseña?
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
