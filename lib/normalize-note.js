const validNoteLetters = 'ABCDEFG';
const validSharpNotes = 'ACDFG';
const validFlatNotes = 'ABDEG';
const validModifiers = '#b';

export default function (note) {
  let letter = note.charAt(0).toUpperCase();
  let modifier = note.charAt(1) || '';

  if (modifier === 'b' && validFlatNotes.indexOf(letter) === -1) {
    letter = validNoteLetters.charAt(validNoteLetters.indexOf(letter) - 1);
    modifier = '';
  }

  if (modifier === '#' && validSharpNotes.indexOf(letter) === -1) {
    letter = validNoteLetters.charAt(validNoteLetters.indexOf(letter) + 1);
    modifier = '';
  }

  validateLetter(letter);
  validateModifier(modifier);

  return `${letter}${modifier}`;
}

function validateLetter(letter) {
  if (validNoteLetters.indexOf(letter) === -1) {
    throw new Error('Invalid note letter');
  }
}

function validateModifier(modifier) {
  if (modifier && validModifiers.indexOf(modifier) === -1) {
    throw new Error('Invalid modifier');
  }
}