// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

decodeMorse = function (morseCode) {
	
	const MORSE_CODE = {
		'-----': '0',
		'.----': '1',
		'..---': '2',
		'...--': '3',
		'....-': '4',
		'.....': '5',
		'-....': '6',
		'--...': '7',
		'---..': '8',
		'----.': '9',
		'.-': 'A',
		'-...': 'B',
		'-.-.': 'C',
		'-..': 'D',
		'.': 'E',
		'..-.': 'F',
		'--.': 'G',
		'....': 'H',
		'..': 'I',
		'.---': 'J',
		'-.-': 'K',
		'.-..': 'L',
		'--': 'M',
		'-.': 'N',
		'---': 'O',
		'.--.': 'P',
		'--.-': 'Q',
		'.-.': 'R',
		'...': 'S',
		'-': 'T',
		'..-': 'U',
		'...-': 'V',
		'.--': 'W',
		'-..-': 'X',
		'-.--': 'Y',
		'--..': 'Z',
		'-.-.--': '!',
		'.-.-.-': '.',
		'--..--': ',',
		'...---...': 'SOS'
	}
	
	function decodeMorseLetter(letter) {
		return MORSE_CODE[letter];
	}
	
	function decodeMorseWord(word) {
		return word.split(' ').map(decodeMorseLetter).join('');
	}
	
	return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}

// --------------------------------------------------------------------------------
// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

function uniqueInOrder(sequence) {
	const result = [];
	
	for (let i = 0; i < sequence.length; i++) {
		if (sequence[i] !== sequence[i + 1]) {
			result.push(sequence[i]);
		}
	}
	return result;
}

// --------------------------------------------------------------------------------
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
	const even = integers.filter(num => num % 2 === 0)
	const odd = integers.filter(num => num % 2 !== 0)
	
	return odd.length === 1 ? odd[0] : even[0]
}

// --------------------------------------------------------------------------------
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
	word = word.toLowerCase();
	const count = {};
	
	return word.replace(/(.)/g, function (match, capture) {
		return word.indexOf(capture) === word.lastIndexOf(capture) ? "1" : "2"
	})
}

// --------------------------------------------------------------------------------
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript +

function past(h, m, s) {
	let milliseconds = 0;
	
	milliseconds += s * 1000; // Преобразуем секунды в миллисекунды и добавляем к общему времени
	milliseconds += m * 60000; // Преобразуем минуты в миллисекунды и добавляем к общему времени
	milliseconds += h * 3600000; // Преобразуем часы в миллисекунды и добавляем к общему времени
	
	return milliseconds;
}

// --------------------------------------------------------------------------------
// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

function partList(arr) {
	const result = [];
	
	for (let i = 1; i < arr.length; i++) {
		result.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
	}
	return result;
}

// --------------------------------------------------------------------------------
// https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript 4*

function sumStrings(a, b) {
	// определяем максимальную длину строк, добавляем ведущие нули до нужной длины
	const maxLength = Math.max(a.length, b.length);
	a = a.padStart(maxLength, '0');
	b = b.padStart(maxLength, '0');
	
	let result = ''
	let carry = 0;
	
	// проходим по всем цифрам строки справа налево
	for (let i = maxLength - 1; i >= 0; i--) {
		const sum = Number(a[i]) + Number(b[i]) + carry;
		carry = sum >= 10 ? 1 : 0;
		result = (sum % 10) + result;
	}
	// если последняя цифра привела к возникновению следующего разряда, добавляем его в начало строки
	if (carry > 0) {
		result = carry + result;
	}
	// удаляем ведущие нули и возвращаем результат
	return result.replace(/ˆ0+/, '')
}

// --------------------------------------------------------------------------------
// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript 8*

const stringToNumber = function (str) {
	
	return Number(str);
}

// --------------------------------------------------------------------------------
// https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript 8*

function formatMoney(amount) {
	// Округляем число до двух десятичных знаков
	const roundedNumber = Number(amount).toFixed(2)
	// Преобразуем число в строку и разбиваем на целую и десятичную части
	const [dollars, cents] = roundedNumber.toString().split('.');
	// Добавляем недостающие нули к десятичной части
	const formattedCents = cents ? cents.padEnd(2, '0') : '00';
	// Возвращаем отформатированную строку
	return `$${dollars}.${formattedCents}`
}

// --------------------------------------------------------------------------------
// https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript 5*

function listSquared(m, n) {
	let result = []
	for (let i = m; i <= n; i++) {
		let sumSquaredDivisors = getSumOfSquaredDivisors(i);
		if (isPerfectSquare(sumSquaredDivisors)) {
			result.push([i, sumSquaredDivisors])
		}
	}
	return result
}

// функция получает на вход число num и возвращает сумму квадратов его делителей
function getSumOfSquaredDivisors(num) {
	// инициализируем переменную sum суммой квадратов делителей, которая пока равна 0
	let sum = 0;
	// проходим циклом for по числам i от 1 до квадратного корня из числа num
	for (let i = 1; i <= Math.sqrt(num); i++) {
		// проверяем, является ли i делителем num
		if (num % i === 0) {
			// вычисляем квадратный корень squareRoot из num/i
			let squareRoot = num / i;
			// добавляем к sum квадрат i
			sum += i * i;
			// если i не равен squareRoot, то это значит, что мы не добавили квадрат squareRoot, и тогда мы его добавляем
			if (i !== squareRoot) {
				sum += squareRoot * squareRoot
			}
		}
	}
	// возвращаем сумму квадратов делителей
	return sum
}

function isPerfectSquare(num) {
	let squareRoot = Math.floor(Math.sqrt(num));
	return squareRoot * squareRoot === num;
}

// --------------------------------------------------------------------------------
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript 5*

function scramble(str1, str2) {
	// создаем пустой объект для хранения количества символов
	let charMap = {}
	// Заполняем объект charMap
	// перебираем все символы строки str1
	for (let char of str1) {
		// если символа пока нет в charMap, добавляем его в объект
		if (!charMap[char]) {
			charMap[char] = 0;
		}
		// увеличиваем количество появлений символа в charMap
		charMap[char]++
	}
	// Проверяем на наличие символов из str2 в charMap
	for (let char of str2) {
		// если символа не найдено в charMap, заканчиваем выполнение функции и возвращаем false
		if (!charMap[char]) {
			return false
		}
		// уменьшаем количество символа в charMap
		charMap[char]--;
	}
	return true;
}

// Более быстрый вариант
function scrambleFast(str1, str2) {
	// В данном случае, мы создаем массив длиной 26 элементов, т.к. в английском языке всего 26 букв
	const charArray = Array(26).fill(0);
	// Заполняем массив charArray
	for (let i = 0; i < str1.length; i++) {
		const charIndex = str1.charCodeAt(i) - 97;
		charArray[charIndex]++;
	}
	// Проверяем на наличие символов из str2 в charArray
	for (let i = 0; i < str2.length; i++) {
		const charIndex = str2.charCodeAt(i) - 97;
		charArray[charIndex]--;
		if (charArray[charIndex] < 0) {
			return false;
		}
	}
	return true;
}

// --------------------------------------------------------------------------------
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript 5*

console.log(isPerfectSquare(4))
console.log(Math.sqrt(2))

	