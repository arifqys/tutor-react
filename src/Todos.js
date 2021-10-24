import PropTypes from 'prop-types';

function Todos({todos}) {
  return (
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  )
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
}

export default Todos;