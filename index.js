let reverseNumber = function(x) {
						let str = x.toString();
						let length = str.length-1;
						for (let i = 0; i < Math.floor(str.length/2); i++) {
							let front = str.charAt(i);
							let back = str.charAt(length);
							console.log("front: " + front + " " + back);
							// console.log("string " + str.substring(i,i+1));
							str.replace(str.substring(i,i+1), "**");
							// console.log(str);
							str.replace(length--, front);
						}
						return parseInt(str);
					}


let x = 32243;
console.log(reverseNumber(x));