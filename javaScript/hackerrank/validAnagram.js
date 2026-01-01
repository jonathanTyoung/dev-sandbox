function isAnagram(s, t) {
  // Write your code here
  if (s.length !== t.length) return 0;

  const myBox = new Map();

  for (const letter of s) {
    myBox.set(letter, (myBox.get(letter) || 0) + 1);
  }

  for (const letter2 of t) {
    if (!myBox.has(letter2) || myBox.get(letter2) === 0) {
      return 0;
    }
    myBox.set(letter2, myBox.get(letter2) - 1);
  }

  return 1;
}


// example input 
//s = 'listen'
//t = 'silent' 