import React from 'react';


const Form = ({ inputText, setInputText, todos, setTodos }) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault(); 

    if (inputText !== "") {
      setTodos([
        ...todos, {
          text: inputText,
          completed : false,
          id: Math.random() * 1000
        }
      ]);

    }  else {
      alert("Le champ ne peut être vide !")
    }

    
    setInputText("");
  };



    return (


    <div className="card">
      <form>
        <input value={inputText} 
               type="text" 
               className="todo-input" 
               onChange={inputTextHandler} 
               required />
        <button onClick={submitTodoHandler} 
                className="todo-button" 
                type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>


    )
}

export default Form; 