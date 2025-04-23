// enums is used to store a constants in one place

enum DirectionTest {
	Up,
	Down,
	Left,
	Right,
}

console.log(DirectionTest.Up) // 0
console.log(DirectionTest.Down) // 1
console.log(DirectionTest.Left) // 2
console.log(DirectionTest.Right) // 3

enum Direction2 {
	Up = 10,
	Down,
	Left,
	Right,
}

console.log(Direction2.Up) // 10
console.log(Direction2.Down) // 11
console.log(Direction2.Left) // 12
console.log(Direction2.Right) // 13

enum Direction {
	UP = 'UP',
	DOWN = 'DOWN',
	LEFT = 'LEFT',
	RIGHT = 'RIGHT',
}

const move: string = Direction.UP // ok
const move2: Direction = Direction.DOWN // batter practice

console.log(move) // UP

function getDirection(direction: Direction) {
	if (direction === Direction.UP) {
		return 'Moving up'
	}
	if (direction === Direction.DOWN) {
		return 'Moving down'
	}
	if (direction === Direction.LEFT) {
		return 'Moving left'
	}
	if (direction === Direction.RIGHT) {
		return 'Moving right'
	}
}

enum StatusCode {
	OK = 200,
	NOT_FOUND = 404,
	FORBIDDEN = 403,
	INTERNAL_SERVER_ERROR = 500,
}

function handleRequest(url: string): StatusCode {
	if (url === '/') return StatusCode.OK
	if (url === '/server-error') return StatusCode.INTERNAL_SERVER_ERROR
	if (url === '/forbidden') return StatusCode.FORBIDDEN
	return StatusCode.NOT_FOUND
}
