"use client";

import { useState } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "", // Alterado para armazenar apenas uma opção selecionada
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Cadastre-se</h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="name">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <span className="text-gray-600">Selecione:</span>
          <div className="flex flex-col mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="option"
                value="Bartenders"
                checked={formData.option === "Bartenders"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-2 focus:ring-blue-400"
              />
              <span className="ml-2">Bartenders</span>
            </label>

            <label className="inline-flex items-center mt-2">
              <input
                type="radio"
                name="option"
                value="Contratante"
                checked={formData.option === "Contratante"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-2 focus:ring-blue-400"
              />
              <span className="ml-2">Contratante</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-3xl hover:bg-blue-600 transition"
        >
          Enviar
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Formulário enviado!</h3>
            <p className="text-gray-600">Obrigado pelo seu cadastro.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
