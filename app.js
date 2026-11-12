'use strict';
const form = document.getElementById('calculator');
const result = document.getElementById('result');
const error = document.getElementById('error');
const empty = result.innerHTML;
const money = value => 'NT$ ' + Math.round(value).toLocaleString('zh-TW');
form.addEventListener('submit', event => {
  event.preventDefault();
  error.textContent = '';
  try {
    const values = ['sales','consult','scheduled'].map(id => {
      const field = document.getElementById(id);
      return field.value.trim() === '' ? NaN : Number(field.value);
    });
    const data = calculatePerformance(...values);
    result.innerHTML = `<dl class="details"><div><dt>本月總業績</dt><dd>${money(data.sales)}</dd></div><div><dt>本月諮詢點天數</dt><dd>${data.consult} 天</dd></div><div><dt>本月法定應排班天數</dt><dd>${data.scheduled} 天</dd></div></dl><div class="equivalent"><span>月等效業績</span><strong>${money(data.equivalent)}</strong></div><div class="commission"><span>本月總抽成</span><strong>${money(data.commission)}</strong></div>`;
  } catch (problem) { error.textContent = problem.message; result.innerHTML = empty; }
});
form.addEventListener('input', () => { error.textContent = ''; result.innerHTML = empty; });
form.addEventListener('reset', () => { error.textContent = ''; result.innerHTML = empty; });
