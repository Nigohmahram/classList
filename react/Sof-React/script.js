const Book = () => {
      return React.createElement('div', {}, [
            React.createElement('h2', {}, 'JS for beginners'),
            React.createElement('p', {}, 2020),
            React.createElement('p', {}, 50),
      ])
}
const App = () => {
      return React.createElement('div', {}, [
             React.createElement('h1', {id: 'title', className: 'paragraph'}, 'Hello World')
      ])
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))