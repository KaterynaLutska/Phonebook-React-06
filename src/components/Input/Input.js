// const Input = ({ type, handleChange }) => {
//   console.log(type.name, 'type');
//   return (
//     <>
//       <input
//         className="phonebook-input"
//         type="text"
//         name="name"
//         value={type}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//         required
//         onChange={handleChange}
//       />
//       <input
//         className="phonebook-input"
//         type="tel"
//         name="number"
//         value={type}
//         pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
//         title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
//         required
//         onChange={handleChange}
//       />
//     </>
//   );
// };

// export default Input;
