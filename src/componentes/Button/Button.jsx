// Importa o estilo CSS específico para o componente Button
import './Button.css'

// Declara um componente funcional chamado Button que recebe as propriedades (props) open, text e name.
export default function Button ({ open, text, name }) {
  // Retorna um elemento de botão (<button>) com os seguintes atributos e eventos:
  // - type: 'button'
  // - aria-label: um atributo de acessibilidade que fornece uma descrição textual para auxiliar usuários com deficiência.
  // - onClick: um evento de clique que chama a função passada como propriedade open.
  // - className: uma classe CSS dinâmica que é definida pela propriedade name.
  return <button type="button" aria-label={text} onClick={open} className={name}>{text}</button>
}
