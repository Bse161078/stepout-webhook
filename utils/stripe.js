const moment=require('moment');
const getSubscriptionTrialPeriod=moment(new Date()).add(2,"minutes");
const getDefaultPriceId="price_1L6QrwJngle5KEdgqL1CE6a9";
const getCurrentDate=moment().toDate();
const getSubscriptionExpireDate=moment(new Date()).add(2,"minutes").toDate();
module.exports={
  getSubscriptionTrialPeriod,
  getDefaultPriceId,
  getCurrentDate,
  getSubscriptionExpireDate
}

