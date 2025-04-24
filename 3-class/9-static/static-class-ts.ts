namespace MathHelper {
	export function add(x: number, y: number): number {
		return x + y
	}
} // static class

console.log(MathHelper.add(5, 10)) // 15
console.log(MathHelper.add(5, 10)) // 15

const MathHelper2 = {
	add: (x: number, y: number): number => {
		return x + y
	},
} // static class simulation

console.log(MathHelper2.add(5, 10)) // 15
