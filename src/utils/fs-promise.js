import fs from 'fs';

const promisify = (utilName) => {
	return function() {
		return new Promise((resolve, reject) => {
			fs[utilName].call(this, ...arguments, (err, data) => {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			});
		});
	}
};

const fsPromise = Object.keys(fs).reduce((prev, utilName) => {
	let val = fs[utilName];

	if (typeof val === 'function') {
		val = promisify(utilName);
	}

	return {
		[utilName]: val,
		...prev,
	};
}, {});

export default fsPromise;