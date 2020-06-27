function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(" ");
  var magazineArr = magazineText.split(" ");
  var magazineObj = {};

  magazineArr.forEach(function (word) {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }

    magazineObj[word]++;
  });

  var noteIsPossible = true;
  noteArr.forEach(function (word) {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        noteIsPossible === false;
      }
    } else {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}

harmlessRansomNote(
  "this is a secret note for you from a secret admirer",
  "this is all the magazine text in the magazine this is a secret note for you from a secret admirer"
);
