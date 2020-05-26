const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();

	var sessions = ['SOT100', 'SOT301', 'SOT201', 'SOT101', 'SOT102', 'SOT302', 'SOT202', 'SOT203', 'SOT103', 'SOT303', 'SOT104', 'SOT304', 'SOT204', 'SOT105', 'SOT300', 'SOT106', 'SOT205', 'SOT107', 'SOT306', 'SOT307', 'SOT108', 'SOT206', 'SOT308', 'SOT207', 'SOT109', 'SOT309', 'SOT200', 'SOT110', 'SOT310', 'SOT209', 'SOT311', 'SOT111', 'SOT312', 'SOT210', 'SOT313', 'SOT112', 'SOT211', 'SOT314', 'SOT212', 'SOT113', 'SOT213', 'SOT315', 'SOT114', 'SOT115', 'SOT316', 'SOT214', 'SOT215', 'SOT317', 'SOT116', 'SOT216', 'SOT318', 'SOT117', 'SOT319', 'SOT118', 'SOT217', 'SOT320', 'SOT218', 'SOT119', 'SOT321', 'SOT120', 'SOT219', 'SOT322', 'SOT121', 'SOT220', 'SOT323', 'SOT122', 'SOT221',]

	const page = await browser.newPage();
	await page.setViewport({ width: 1920, height: 1080 });
	for (var i in sessions) {
		if (i > 0) {
			await page.goto('file:///Users/<reveal.js index file path>/SAP%20Online%20Track%20-%20Reveal.js%20Template/index.html#/' + i);
			await page.waitForSelector('title');
			await page.screenshot({ path: sessions[i] + '.png' });
		}
		else {
			await page.goto('file:///Users/<reveal.js index file path>/SAP%20Online%20Track%20-%20Reveal.js%20Template/index.html#/');
			await page.waitForSelector('title');
			await page.screenshot({ path: sessions[i] + '.png' });
		}
	}

	await browser.close();
})();
