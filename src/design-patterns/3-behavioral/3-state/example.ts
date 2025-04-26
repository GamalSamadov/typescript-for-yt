// State Pattern Example
// The State pattern allows an object to alter its behavior when its internal state changes.

// interface State {
// 	play(): void
// 	pause(): void
// }

// class MediaPlayer {
// 	private state: State

// 	setState(state: State) {
// 		this.state = state
// 	}

// 	getState(): State {
// 		return this.state
// 	}

// 	play() {
// 		this.state.play()
// 	}

// 	pause() {
// 		this.state.pause()
// 	}
// }

// class PlayingState implements State {
// 	constructor(private player: MediaPlayer) {}

// 	play() {
// 		console.log('Already playing')
// 	}

// 	pause() {
// 		console.log('Pausing the media player')
// 		this.player.setState(new PausedState(this.player))
// 	}
// }

// class PausedState implements State {
// 	constructor(private player: MediaPlayer) {}

// 	play() {
// 		console.log('Resuming playback')
// 		this.player.setState(new PlayingState(this.player))
// 	}

// 	pause() {
// 		console.log('Already paused')
// 	}
// }

// const player = new MediaPlayer()
// player.setState(new PausedState(player))

// player.play() // Resuming playback
// player.play() // Already playing

// player.pause() // Pausing the media player
// player.pause() // Already paused
