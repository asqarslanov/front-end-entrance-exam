export const LanguageLevel = Object.freeze({
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
  C2: 6,
});

export const Month = Object.freeze({
  JANUARY: 1,
  FEBRUARY: 2,
  MARCH: 3,
  APRIL: 4,
  MAY: 5,
  JUNE: 6,
  JULY: 7,
  AUGUST: 8,
  SEPTEMBER: 9,
  OCTOBER: 10,
  NOVEMBER: 11,
  DECEMBER: 12,
});

export function monthName(month) {
  switch (month) {
    case Month.JANUARY:
      return "Jan";
    case Month.FEBRUARY:
      return "Feb";
    case Month.MARCH:
      return "Mar";
    case Month.APRIL:
      return "Apr";
    case Month.MAY:
      return "May";
    case Month.JUNE:
      return "Jun";
    case Month.JULY:
      return "Jul";
    case Month.AUGUST:
      return "Aug";
    case Month.SEPTEMBER:
      return "Sep";
    case Month.OCTOBER:
      return "Oct";
    case Month.NOVEMBER:
      return "Nov";
    case Month.DECEMBER:
      return "Dec";
  }
}
