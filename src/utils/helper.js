import moment from 'moment';

export const getReportsPerMonth = (reports) => {
  const countPerMonth = {};

  reports.forEach((report) => {
    const month = moment(report.dateCreated).format("MMMM");
    if (countPerMonth[month]) {
      countPerMonth[month] += 1;
    } else {
      countPerMonth[month] = 1;
    }
  });

  return Object.keys(countPerMonth).map((month) => ({
    month: month,
    reports: countPerMonth[month],
  }));
};

export const getReportsPerUser = (reports, users) => {
  const countPerUser = {};

  reports.forEach((report) => {
    const user = users.find((u) => u.id === report.userId)?.name;
    if (countPerUser[user]) {
      countPerUser[user] += 1;
    } else {
      countPerUser[user] = 1;
    }
  });

  return Object.keys(countPerUser).map((user) => ({
    name: user,
    value: countPerUser[user],
  }));
};
