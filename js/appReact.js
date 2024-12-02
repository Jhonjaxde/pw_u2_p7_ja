const { createElement } = React;
const { createRoot } = ReactDOM;

console.log(React);



    // Define un componente React
    const AppReact = () => 
      createElement('div', null, 
        createElement('h1', null, 'Hola mundo'),
        createElement('p', null, 'Con React.JS')
      );
  
      // Monta el componente en el DOM
      const root = createRoot(document.getElementById('myApp'));
      root.render(createElement(AppReact));    