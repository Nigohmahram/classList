const News = (props) => {
      return React.createElement('div', {}, [
            React.createElement('h1', {}, props.name),
            React.createElement('div', {className: 'box'},[
                  React.createElement('pre', {}, props.extra),
                  React.createElement('p', {}, props.text),
            ],
            React.createElement('div', {className: 'square'},[
                  React.createElement('h1', {}, props.header)
            ])
      ])
}
const App = () => {
      return React.createElement('div', {}, [
            React.createElement(News, {name: 'BBS News', extra: 2020, text: 'Usmonov Hojiakbar', header: 'BigJob'}),
      ])
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))