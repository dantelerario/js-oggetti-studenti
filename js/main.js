// js-oggetti-studenti
//
// Creare un oggetto che descriva uno studente
// lo studente avrà  le seguenti proprietà: nome, cognome e età.
// Stampare attraverso il for..in tutte le proprietà (chiavi e valori).


$(document).ready( function() {

  var student = {
    name: 'Dante',
    surname: 'LErario',
    age: 36,
    class: 'Boolean',
    classNumber: 12,
  }

  for (var key in student) {
    console.log(key + ':', student[key]);
  }

}); /* END DOCUMENT */


//  FUNCTIONS
