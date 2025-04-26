// Murakkab tizimni soddalashtirish uchun foydalaniladigan dizayn patterni

class AudioProcessor {
	extractAudio() {
		console.log('Audio extracted from video.')
	}
}

class VideoProcessor {
	extractVideo() {
		console.log('Video extracted from video.')
	}
}

class Encoder {
	encode(format: string) {
		console.log(`Video encoding to format: ${format}.`)
	}
}

// Facade class
class VideoConverter {
	private audio = new AudioProcessor()
	private video = new VideoProcessor()
	private encoder = new Encoder()

	convert(fileName: string, format: string) {
		console.log(`Converting ${fileName} to ${format}...`)
		this.audio.extractAudio()
		this.video.extractVideo()
		this.encoder.encode(format)
		console.log('Conversion completed.')
	}
}

const converter = new VideoConverter()
converter.convert('example.mp4', 'mp3')

// res.send() => writehead, end, headers podkopotom shu ishlarni qiladi
// axios.get() => HTTPRequest, fetch, XMLHttpRequest
