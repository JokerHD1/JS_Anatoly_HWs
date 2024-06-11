//subtask 1
const bytes = 781738123713;
const result = formatBytes(bytes);

function formatBytes(bytes) {
    const kb = 1024;
    const Mb = kb * 1024;
    const Gb = Mb * 1024;
    const Tb = Gb * 1024;

    if (bytes < kb) {
        return (bytes).toFixed(1) + 'bytes';
    } else if (bytes <  Mb) {
        return (bytes / kb).toFixed(1) + ' Kb';
    } else if (bytes < Gb) {
        return (bytes / Mb).toFixed(1) + ' Mb';
    } else if (bytes < Tb) {
        return (bytes / Gb).toFixed(1) + ' Gb';
    } else {
        return (bytes / Tb).toFixed(1) + ' Tb';
    }
}

console.log(`${bytes} bytes = ${result}`);

//subtask 2

function drawTriangle(height) {
    let width = height * 2 - 1;
    let triangle = "";
  
    for (let i = height; i > 0; i--) {
        let spaces = (height - i);
        let stars = width - 2 * spaces;
        triangle += " ".repeat(spaces);
        triangle += "*".repeat(stars);
        triangle += "\n";
    }
    console.log(triangle);
}

function drawDiamond(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = "";
        for (let j = 1; j <= rows - i; j++) {
            str += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += "*";
        }
        console.log(str);
    }

    for (let i = rows - 1; i >= 1; i--) {
        let str = "";
        for (let j = 1; j <= rows - i; j++) {
            str += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += "*";
        }
        console.log(str);
    }
}
drawTriangle(5);
drawDiamond(5);

//subtask 3
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`число ${i} делится без остатка и на 3 и на 5`);
    } else if (i % 3 === 0) {
        console.log(`число ${i} делится без остатка на 3`);
    } else if (i % 5 === 0) {
        console.log(`число ${i} делится без остатка на 5`);
    } else {
        console.log(i);
    }
}

//subtask 4
function convertToCamelCase(sentence) {
    const words = sentence.toLowerCase().split(' ');
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join('');
  }
  const inputSentence = 'No way';
  const camelCaseSentence = convertToCamelCase(inputSentence);
  console.log(camelCaseSentence);