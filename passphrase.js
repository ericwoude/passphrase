// Constants for consonants and vowels
const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
const vowels = 'aeiou'.split('');

// Utility function to capitalize a given string
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Utility function to select a random element from an array
const randomChoice = (choices) => choices[Math.floor(Math.random() * choices.length)];

// Generate a syllable in consonant-vowel-consonant-(consonant)-vowel-consonant fashion
const generateSyllable = () => {
    const syllable = [
        randomChoice(consonants),
        randomChoice(vowels),
        randomChoice(consonants),
    ];

    // 50% chance to add an extra consonant
    if (Math.random() < 0.5) {
        syllable.push(randomChoice(consonants));
    }


    // Add vowel - consonant to end the syllable
    return [...syllable, randomChoice(vowels), randomChoice(consonants)].join('');
};

// Generates a password with 3 syllables, a capitalized syllable, and a random digit insertion
const generatePassword = () => {
    const syllables = [
        generateSyllable(),
        generateSyllable(),
        generateSyllable(),
    ];

    // Capitalize a random syllable
    const randomIndex = Math.floor(Math.random() * syllables.length);
    syllables[randomIndex] = capitalize(syllables[randomIndex]);

    // Add a single digit before or after a random picked syllable
    const digit = Math.floor(Math.random() * 10).toString();
    const position = Math.floor(Math.random() * syllables.length);
    if (Math.random() < 0.5) {
        syllables[position] = digit + syllables[position];
    } else {
        syllables[position] = syllables[position] + digit;
    }

    return syllables.join('-');
};

export { generatePassword };

