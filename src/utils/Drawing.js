

class Drawing {
	constructor(url) {
		const img = new Image();
		this.canv = document.createElement('canvas');

		img.onload = () => {
			canv.width = img.width;
			canv.height = img.height;

			this.ctx = canv.getContext('2d');
			ctx.drawImage(img, 0, 0);

			window.open(canv.toDataURL());
		};

		img.src = url;
	}
}

export default Drawing;