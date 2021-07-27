const monthMap: any = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
}

export function formatDate(date: string | number | Date) {
  //date: YYYY-MM-DDTHH:mm:ss:sssZ

  var dateObj = new Date(date)
  var day = dateObj.getUTCDate()
  var month = monthMap[dateObj.getMonth()]
  var year = dateObj.getFullYear()

  var newdate = day + ' ' + month + ', ' + year
  return newdate
}
