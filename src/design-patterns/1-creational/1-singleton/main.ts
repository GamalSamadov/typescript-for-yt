// // Singleton pattern
// // Class dan object yaratayotganimizda har doim yangi ob'ekt hosil qilmay, mavjud ob'ektni qaytarish usuli.

// class Singleton {
// 	private static instance: Singleton

// 	private constructor() {
// 		console.log('Singleton instance created')
// 	} // private constructor dan new operatori bilan ob'ekt hosil qilish mumkin emas

// 	static getInstance(): Singleton {
// 		if (!Singleton.instance) {
// 			Singleton.instance = new Singleton()
// 		}
// 		return Singleton.instance
// 	}

// 	public someMethod(): void {
// 		console.log('Some method called')
// 	}
// }

// const s1 = Singleton.getInstance()
// const s2 = Singleton.getInstance()
// // s1 va s2 bir xil ob'ekt

// console.log(s1 === s2) // true
