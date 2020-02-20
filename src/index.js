
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let mass=[];
  if (!matrix || matrix.length<1 ) return mass;
  for (let i=0; i<matrix.length; i++)
  {
      if(i%2!=0) matrix[i].reverse();
    for (let j=0; j<matrix[i].length;j++)
    {
      mass.push(matrix[i][j]);
    }
  }
  return mass;
}
