function showStar() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(' ');
    }
    for (let k = 1; j <= 2 * i - 1; k++) {
      console.log('*');
    }
  }
}

showStar();
