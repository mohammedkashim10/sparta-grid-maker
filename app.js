document.addEventListener('DOMContentLoaded', function(){
  // Add code here
  const board = document.getElementById('board');

  const numOfRows = Number(prompt('How many rows would you like?'));
  const numOfColumns = Number(prompt('How many columns would you like?'));

  for (i=0; i<numOfRows; i++) {
    const rows = document.createElement('div');
    rows.setAttribute('class','row'); // first argument: what type do you want (e.g. id, class etc.), second argument: the class or id you actually want to assign it to, so in this case we assign it to the row class (see css)
    board.appendChild(rows); // append the argument (rows) to board
    for (a=0; a<numOfColumns; a++) {
      const columns = document.createElement('div');
      columns.setAttribute('class','col');
      board.appendChild(columns);
    }
  }

});
