type PlayerState = 'playing' | 'paused'

// it seems that there is no need to use the state pattern here
// because the state is simple and only has two states
// but what if we have more states?
// for example, if we have a media player that can be in the following states:
// - playing
// - paused
// - stopped
// - buffering
// - error
// - finished
// - loading
// - idle
// - seeking

class MediaPlayer {
	private state: PlayerState = 'paused'

	play() {
		if (this.state === 'paused') {
			console.log('Resuming playback...')
			this.state = 'playing'
		} else if (this.state === 'playing') {
			console.log('Already playing')
		}
	}

	pause() {
		if (this.state === 'playing') {
			console.log('Pausing playback...')
			this.state = 'paused'
		} else if (this.state === 'paused') {
			console.log('Already paused')
		}
	}
}

const player = new MediaPlayer()
player.play() // Resuming playback...
player.play() // Already playing
player.pause() // Pausing playback...
player.pause() // Already paused
