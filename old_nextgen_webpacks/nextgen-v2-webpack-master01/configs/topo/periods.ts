export const periods = {
  '1-day': {
    alias: '1-day',
    label: '{{month}}-{{period}}, {{year}}',
    xLabel: 'Daily',
    timeVariables: [
      {
        type: 'period',
        daysPerPeriod: 1,
        digitCount: 2,
      },
      {
        type: 'month',
        digitCount: 2,
      },
      {
        type: 'year',
      },
    ],
    firstOccurrence: 1,
    shortName: 'D',
    fullName: 'Day',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    style: '<style>',
  },
  '7-day': {
    alias: '1-sevenday',
    label: '{{month}}-{{period}}, {{year}}',
    xLabel: 'Weekly',
    timeVariables: [
      {
        type: 'period',
        daysPerPeriod: 7,
        digitCount: 2,
      },
      {
        type: 'month',
        digitCount: 2,
      },
      {
        type: 'year',
      },
    ],
    firstOccurrence: 1,
    shortName: 'W',
    fullName: 'Week',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    style: '<style>',
  },
  '1-pentad': {
    alias: '1-pentad',
    label: '{{month}} Pen-{{period}} {{year}}',
    xLabel: 'Pentadal',
    timeVariables: [
      {
        type: 'period',
        itemsPerMonth: 6,
        digitCount: 2,
      },
      {
        type: 'month',
        digitCount: 2,
      },
      {
        type: 'year',
      },
    ],
    shortName: 'P',
    fullName: 'Pentad',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    style: '<style>',
  },
  '1-dekad': {
    alias: '1-dekad',
    label: '{{month}}-{{period}}, {{year}}',
    xLabel: 'Dekadal',
    timeVariables: [
      {
        type: 'period',
        itemsPerMonth: 3,
        digitCount: 2,
      },
      {
        type: 'month',
        digitCount: 2,
      },
      {
        type: 'year',
      },
    ],
    shortName: 'D',
    fullName: 'Dekad',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    style: '<style>',
  },
  '1-month': {
    alias: '1-month',
    label: '{{month}} {{year}}',
    xLabel: 'Monthly',
    timeVariables: [
      {
        type: 'month',
        digitCount: 2,
      },
      {
        type: 'year',
      },
    ],
    shortName: '',
    fullName: 'Month',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    style: '<style>',
  },
  '2-month': {
    alias: '2-month',
    label: '{{month}} {{year}}',
    xLabel: '2 Monthly',
    timeVariables: [
      {
        type: 'month',
        digitCount: 2,
      },
      {
        type: 'year',
      },
    ],
    shortName: '',
    fullName: '2 Month',
    months: ['Jan-Feb', 'Feb-Mar', 'Mar-Apr', 'Apr-May', 'May-Jun', 'Jun-Jul', 'Jul-Aug', 'Aug-Sep', 'Sep-Oct', 'Oct-Nov', 'Nov-Dec', 'Dec-Jan'],
    shortMonths: ['JF', 'FM', 'MA', 'AM', 'MJ', 'JJ', 'JA', 'AS', 'SO', 'ON', 'ND', 'DJ'],
    style: '<style>',
  },
  '3-month': {
    alias: '3-month',
    label: '{{month}} {{year}}',
    xLabel: '3 Monthly',
    timeVariables: [
      {
        type: 'month',
        digitCount: 2,
      },
      {
        type: 'year',
      },
    ],
    shortName: '',
    fullName: '3 Month',
    months: [
      'Jan-Feb-Mar',
      'Feb-Mar-Apr',
      'Mar-Apr-May',
      'Apr-May-Jun',
      'May-Jun-Jul',
      'Jun-Jul-Aug',
      'Jul-Aug-Sep',
      'Aug-Sep-Oct',
      'Sep-Oct-Nov',
      'Oct-Nov-Dec',
      'Nov-Dec-Jan',
      'Dec-Jan-Feb',
    ],
    shortMonths: ['JFM', 'FMA', 'MAM', 'AMJ', 'MJJ', 'JJA', 'JAS', 'ASO', 'SON', 'OND', 'NDJ', 'DJF'],
    style: '<mm><nn>',
  },
};
