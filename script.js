const students = [
  {
    name: "Junior",
    notes: [5, 7]
  },
  {
    name: "Paula",
    notes: [7, 7]
  }, 
  {
    name: "Maria",
    notes: [9, 3]
  }, 
  {
    name: "Roberto",
    notes: [4, 7]
  }, 
  {
    name: "Ana",
    notes: [10, 7]
  }, 

]

function printMedia(student) {
  const media = Number((student.notes[0] + student.notes[1]) / 2);

  if (media >= 7) {
    return `
    A média do(a) aluno(a) ${student.name} é: ${media} 
    Parabéns ${student.name}! Você foi aprovado(a) no concurso!`
  } else {
    return `
      A média do(a) aluno(a) ${student.name} é: ${media} 
      Não foi dessa vez, ${student.name}! Tente novamente!`
  }
  
}

for (let student of students) {
  let mediaMessage = printMedia(student);
  alert(mediaMessage);
}


