document.addEventListener('DOMContentLoaded', function(){

  const board = document.getElementById('board');

  const numOfRows = Number(prompt('How many rows would you like?')); // 'Number' saves the prompt as a number
  const numOfColumns = Number(prompt('How many columns would you like?'));

  function randomColor() { // this function generates a random colour
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (i=0; i<6; i++) {
      color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }

  for (i=0; i<numOfRows; i++) {
    const rows = document.createElement('div');
    rows.setAttribute('class','row'); // first argument: what type do you want to set it (e.g. id, class etc.), second argument: the class or id you actually want to assign it to, so in this case we assign it to the row class (see css)
    board.appendChild(rows); // append the argument (rows) to board
    for (a=0; a<numOfColumns; a++) {
      const columns = document.createElement('div');
      columns.setAttribute('class','col');
      board.appendChild(columns);
      columns.addEventListener('click', () => { // assigning a click event to the column components
        columns.style.backgroundColor = randomColor(); // what happens when clicked i.e. in this case, the background colour changes to a random colour (due to invoking the randomColor() function)
      })
    }
  }


});
