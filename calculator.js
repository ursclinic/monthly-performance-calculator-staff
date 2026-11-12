(function (root) {
  'use strict';
  const tiers = [[5000000,.06],[4500000,.05],[4000000,.04],[3500000,.03],[3000000,.02],[2500000,.01],[2000000,.0075],[1500000,.005],[1000000,.0025],[0,0]];
  function calculate(sales, consult, scheduled) {
    if (![sales,consult,scheduled].every(Number.isFinite)) throw new Error('請完整填寫三個欄位，並輸入有效數字。');
    if (sales < 0) throw new Error('本月總業績不能小於 0。');
    if (![consult,scheduled].every(n => Number.isSafeInteger(n) && n > 0)) throw new Error('諮詢點天數與應排班天數須為大於 0 的整數，不接受半天。');
    const equivalent = sales / consult * scheduled;
    if (!Number.isFinite(equivalent) || equivalent > Number.MAX_SAFE_INTEGER || sales > Number.MAX_SAFE_INTEGER) throw new Error('金額過大，請檢查輸入資料。');
    const rate = tiers.find(([threshold]) => sales * scheduled >= threshold * consult)[1];
    return {sales, consult, scheduled, equivalent, commission:sales*rate};
  }
  root.calculatePerformance = calculate;
})(globalThis);
