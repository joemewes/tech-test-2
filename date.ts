function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  const ts = Date.parse(userDate);  
  const date = new Date(ts);
  console.log(date);
  const day = ('0' + date.getDate()).slice(-2)
  const month = ('0' + date.getMonth() + 1).slice(-2);
  const year = date.getFullYear();
  return `${year}${month}${day}`;
}

console.log(formatDate("12/7/2014"));

