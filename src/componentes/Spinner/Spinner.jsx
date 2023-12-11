// Importa o estilo CSS para o componente Spinner.
import "./Spinner.css";

// Declara um componente funcional chamado LoadingSpinner.
export default function LoadingSpinner () {
  // Retorna uma estrutura JSX que representa um contêiner de spinner de carregamento.
  return (
    <div className="spinner-container">
       {/* Cria um elemento div com a classe CSS 'loading-spinner', que é estilizado para exibir um spinner de carregamento. */}
      <div className="loading-spinner"></div>
    </div>
  );
}