(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let grid = document.querySelector('.grid');

    for (i of Array(8).keys()) {
      for (j of Array(8).keys()) {
        let cell = document.createElement('DIV');
        let button = document.createElement('BUTTON');

        button.setAttribute('class', 'button');
        button.setAttribute('data-button-pos', `${i},${j}`);
        cell.setAttribute('class', 'cell');
        cell.setAttribute('data-cell-pos', `${i},${j}`);

        cell.addEventListener('mouseenter', () => {
          event.currentTarget.querySelector('.button').style.display = 'flex';
        });
        cell.addEventListener('mouseleave', () => {
          event.currentTarget.querySelector('.button').style.display = 'none';
        });
        cell.addEventListener('click', () => {
          event.currentTarget.querySelector('.button').style.display = 'flex';
        });

        cell.appendChild(button);
        grid.appendChild(cell);
      }
    }

    
  });
})();
