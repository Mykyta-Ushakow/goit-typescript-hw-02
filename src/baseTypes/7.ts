/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
	monday = "monaday",
	tuesday = "tuesday",
	wednesday = "wednesday",
	thursday = "thursday",
	friday = "friday",
	saturday = "saturday",
	sunday = "sunday",
}

function isWeekend(day: WeekDays): boolean {
	if (day === WeekDays.saturday || WeekDays.sunday) return true;
	return false;
}

isWeekend(WeekDays.monday);
