// type Constructor<T = {}> = new (...args: any[]) => T

// function DrawShape<TBase extends Constructor>(Base: TBase) {
// 	return class extends Base {
// 		draw() {
// 			console.log('Drawing shape')
// 		}
// 	}
// }

// function FillShape<TBase extends Constructor>(Base: TBase) {
// 	return class extends Base {
// 		fill() {
// 			console.log('Filling shape')
// 		}
// 	}
// }

// class Shape {}

// const MixedShape = FillShape(DrawShape(Shape))

// class Circle extends MixedShape {}

// const circle = new Circle()

// circle.draw() // Drawing shape
// circle.fill() // Filling shape
