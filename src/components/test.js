const sum = 10 + 20;

switch (sum) {
  case 10:
  case 20:
    console.log('result 10 or 20');
    break;

  case 30:
  case 40:
    console.log('result 30 or 40'); // result 30 or 40
    break;

  default:
    console.log('invalid');
}
