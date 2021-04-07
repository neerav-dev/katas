const CaseFunctions = {
  input: '',
  camel: function () {
    let result = '';
    let temp = this.input.split(' ');
    for (let i = 1; i < temp.length; i++) {
      const element = temp[i];
      let camelCase = '';

      for (let j = 0; j < element.length; j++) {
        camelCase =
          j === 0
            ? camelCase + element[j].toUpperCase()
            : (camelCase = camelCase + element[j]);
      }
      temp[i] = camelCase;
    }
    result = temp.join('');
    return result;
  },
  pascal: function () {
    let result = '';

    let temp = this.input.split(' ');

    for (let i = 0; i < temp.length; i++) {
      const element = temp[i];
      let pascalCase = '';

      for (let j = 0; j < element.length; j++) {
        if (j === 0) {
          pascalCase = pascalCase + element[j].toUpperCase();
        } else {
          pascalCase = pascalCase + element[j];
        }
      }
      temp[i] = pascalCase;
    }
    result = temp.join('');
    return result;
  },
  snake: function () {
    return(this.input.split(' ')).join('_').toString();
  },
  kebab: function () {
    return (this.input.split(' ')).join('-').toString();
  },
  title: function () {
    let result = '';
    let temp = this.input.split(' ');
    for (let i = 0; i < temp.length; i++) {
      const element = temp[i];
      let titleCase = '';
      for (let j = 0; j < element.length; j++) {
        if (j === 0) {
          titleCase = titleCase + element[j].toUpperCase();
        } else {
          titleCase = titleCase + element[j];
        }
      }
      temp[i] = titleCase;
    }
    result = temp.join(' ');
    return result;
  },
  vowel: function () {
    let result = '';
    for (let i = 0; i < this.input.length; i++) {
      if (
        this.input[i] === 'a' ||
        this.input[i] === 'e' ||
        this.input[i] === 'i' ||
        this.input[i] === 'o' ||
        this.input[i] === 'u'
      ) {
        result = result + this.input[i].toUpperCase();
      } else {
        result = result + this.input[i].toLowerCase();
      }
    }
    return result;
  },
  consonant: function () {
    let result = '';
    for (let i = 0; i < this.input.length; i++) {
      if (
        this.input[i] === 'a' ||
        this.input[i] === 'e' ||
        this.input[i] === 'i' ||
        this.input[i] === 'o' ||
        this.input[i] === 'u'
      ) {
        result = result + this.input[i].toLowerCase();
      } else {
        result = result + this.input[i].toUpperCase();
      }
    }
    return result;
  },
  upper: function () {
    return this.input.toUpperCase().toString();
  },
  lower: function () {
    return this.input.toLowerCase().toString();
  },
};

const makeCase = function (input, pCase) {
  // Put your solution here
  let result = '';

  CaseFunctions.input = input;

  if (typeof pCase === 'object') {
    let priority = [];
    let index = 0;
    for (const i of pCase) {
      if (
        i === 'camel' ||
        i === 'pascal' ||
        i === 'snake' ||
        i === 'kebab' ||
        i === 'title'
      ) {
        priority[index++] = i;
      }

      if (i === 'vowel' || i === 'consonant') {
        priority[index++] = i;
      }

      if (i === 'upper' || i === 'lower') {
        priority[index++] = i;
      }
    }
    for (const i of priority) {
      result = CaseFunctions[i]();
      CaseFunctions.input = result;
    }
  } else {
    result = CaseFunctions[pCase]();
  }
  return (result);
};

console.log(makeCase('this is a string', 'camel'));
console.log(makeCase('this is a string', 'pascal'));
console.log(makeCase('this is a string', 'snake'));
console.log(makeCase('this is a string', 'kebab'));
console.log(makeCase('this is a string', 'title'));
console.log(makeCase('this is a string', 'vowel'));
console.log(makeCase('this is a string', 'consonant'));
console.log(makeCase('this is a string', ['upper', 'snake']));
