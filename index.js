function dayOfWeek(day) {
	switch (true) {
		case day === 1: return 'sunday';
		case day === 2: return 'monday';
		case day === 3: return 'tuesday';
		case day === 4: return 'wednesday';
		case day === 5: return 'thursday';
		case day === 6: return 'friday';
		case day === 7: return 'saturday';
		default: return '';

	}
}

module.exports = dayOfWeek;