const scrapData = () => {
	const container = document.querySelector('.content-section');

	const codes = container?.querySelectorAll('dl dt');
	const descriptions = container?.querySelectorAll('dl dd');

	const data = [];
	const result = {};

	const refTable = document.querySelector('.layout__body.reference-layout__body');

	const status = refTable?.querySelector('.table-container table');

	if (status) {
		const rows = status.querySelectorAll('tbody tr');

		for (const row of rows) {
			const [c1, c2, c3, c4] = row.querySelectorAll('td');

			codes.forEach((code, idx) => {
				const set = {
					name: code?.textContent?.trim(),
					description: descriptions[idx].textContent?.trim(),
					link: code?.querySelector('a')?.href || '',
				};

				const method = c1?.textContent?.trim();
				const safe = c2?.textContent?.trim();
				const idempotent = c3?.textContent?.trim();
				const cacheable = c4?.textContent?.trim();

				if (set.name === method) {
					const details = {
						...set,
						specs: `https://httpwg.org/specs/rfc9110.html#${method}`,
						isSafe: safe === 'Yes',
						isIdempotent: idempotent === 'Yes',
						isCacheable:
							cacheable === 'Yes'
								? true
								: cacheable === 'Conditional*'
									? 'conditional'
									: false,
					};

					data.push(details);

					delete details.name;

					result[method] = details;
				}
			});
		}
	}

	console.info(data);

	console.info(result);
};

scrapData();
