// Get the user's locale from the browser, fallback to 'en-US' if not available
const userLocale = typeof navigator !== 'undefined' 
	? navigator.language 
	: 'en-US';

const dateFormat = new Intl.DateTimeFormat(userLocale, {
	month: '2-digit',
	day: '2-digit',
	year: 'numeric',
});

export function getFormattedDate(
	date: string | number | Date,
	options?: Intl.DateTimeFormatOptions
) {
	if (typeof options !== "undefined") {
		return new Date(date).toLocaleDateString(userLocale, {
			month: '2-digit',
			day: '2-digit',
			year: 'numeric',
			...options,
		});
	}

	return dateFormat.format(new Date(date));
}
