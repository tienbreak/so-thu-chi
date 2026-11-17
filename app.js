/* Sổ Thu Chi v2 – toàn bộ dữ liệu lưu trên máy (localStorage) */
(function () {
'use strict';

/* =========================================================
   1. ICON (một bộ nét 24px, đồng bộ)
   ========================================================= */
const P = {
  utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  coffee:'<path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>',
  car:'<path d="M19 17h2v-4l-2.5-5.5A2 2 0 0 0 16.7 6H7.3a2 2 0 0 0-1.8 1.5L3 13v4h2"/><path d="M9 17h6"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M3 13h18"/>',
  fuel:'<path d="M3 22h12M4 9h10M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0V9.83a2 2 0 0 0-.59-1.42L18 5"/>',
  plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  bag:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  shirt:'<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
  receipt:'<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
  zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  droplet:'<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  wifi:'<path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.86a10 10 0 0 1 14 0M8.5 16.43a5 5 0 0 1 7 0"/>',
  phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
  home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
  game:'<path d="M6 12h4M8 10v4"/><path d="M15 13h.01M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="2"/>',
  film:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18M17 3v18M3 7.5h4M3 12h18M3 16.5h4M17 7.5h4M17 16.5h4"/>',
  music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  grad:'<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  paw:'<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.05Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',
  gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12"/>',
  wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  award:'<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
  briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  trend:'<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  coins:'<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
  bank:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l8 5H4z"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  tag:'<path d="M12.59 2.59A2 2 0 0 0 11.17 2H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.42l8.7 8.7a2.43 2.43 0 0 0 3.42 0l6.58-6.58a2.43 2.43 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1" fill="currentColor"/>',
  star:'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  more:'<circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
  send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  checkc:'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  swap:'<path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"/>',
  repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
  search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  left:'<path d="m15 18-6-6 6-6"/>',
  right:'<path d="m9 18 6-6-6-6"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  trash:'<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6M14 11v6"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
  pie:'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
  down:'<path d="M17 7 7 17M17 17H7V7"/>',
  up:'<path d="M7 17 17 7M7 7h10v10"/>',
  cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  arrUp:'<path d="M12 19V5M5 12l7-7 7 7"/>',
  arrDown:'<path d="M12 5v14M19 12l-7 7-7-7"/>',
  db:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  ul:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  eye:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>'
};
const ic = (n, s) => `<svg class="i" viewBox="0 0 24 24"${s ? ` style="width:${s}px;height:${s}px"` : ''} aria-hidden="true">${P[n] || P.more}</svg>`;

/* =========================================================
   2. TIỆN ÍCH
   ========================================================= */
const $ = id => document.getElementById(id);
const NF = new Intl.NumberFormat('vi-VN');
const fmt = n => NF.format(Math.round(n));
const money = n => (n < 0 ? '−' : '') + fmt(Math.abs(n)) + ' ₫';
const signed = n => (n > 0 ? '+' : n < 0 ? '−' : '') + fmt(Math.abs(n)) + ' ₫';
const hexA = (h, a) => { const n = parseInt(h.slice(1), 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; };
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const pad = n => String(n).padStart(2, '0');
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const ymKey = (y, m) => `${y}-${pad(m + 1)}`;
const todayStr = () => ymd(new Date());
const curYm = () => todayStr().slice(0, 7);
const dmy = s => s ? `${s.slice(8)}/${s.slice(5, 7)}/${s.slice(0, 4)}` : '';
const dm = s => `${s.slice(8)}/${s.slice(5, 7)}`;
const daysIn = (y, m) => new Date(y, m + 1, 0).getDate();
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const WD = ['Chủ nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy'];
const nrm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
const ci = (c, size) => `<span class="ci" style="background:${hexA(c.c, .14)};color:${c.c}">${ic(c.i, size || 20)}</span>`;
const RE_D = /^\d{4}-\d{2}-\d{2}$/, RE_YM = /^\d{4}-\d{2}$/, RE_ID = /^[\w-]{1,40}$/, RE_HEX = /^#[0-9A-Fa-f]{6}$/;

/* =========================================================
   3. DỮ LIỆU MẶC ĐỊNH
   ========================================================= */
const DEF_CATS = [
  ['an','out','Ăn uống','#F79009','utensils'], ['dichuyen','out','Di chuyển','#2E90FA','car'], ['muasam','out','Mua sắm','#EE46BC','bag'],
  ['hoadon','out','Hóa đơn','#7A5AF8','receipt'], ['nha','out','Nhà cửa','#15B79E','home'], ['suckhoe','out','Sức khỏe','#F04438','heart'],
  ['giaitri','out','Giải trí','#6172F3','game'], ['giaoduc','out','Giáo dục','#0BA5EC','book'], ['giadinh','out','Gia đình','#E04F16','users'],
  ['khacchi','out','Khác','#667085','more'],
  ['luong','in','Lương','#12B76A','wallet'], ['thuong','in','Thưởng','#F79009','award'], ['kinhdoanh','in','Kinh doanh','#2E90FA','briefcase'],
  ['dautu','in','Đầu tư','#7A5AF8','trend'], ['duoctang','in','Được tặng','#EE46BC','gift'], ['khacthu','in','Khác','#667085','more']
].map(([id, type, name, c, i]) => ({ id, type, name, c, i, hidden: false }));

/* Danh mục hệ thống: dùng cho chuyển tiền và sổ nợ, không tính vào thu/chi */
const SYS = {
  sys_lend:   { id:'sys_lend',   name:'Cho vay',     c:'#0E9384', i:'send' },
  sys_borrow: { id:'sys_borrow', name:'Đi vay',      c:'#DD2590', i:'inbox' },
  sys_collect:{ id:'sys_collect',name:'Thu nợ',      c:'#0E9384', i:'coins' },
  sys_repay:  { id:'sys_repay',  name:'Trả nợ',      c:'#DD2590', i:'checkc' },
  transfer:   { id:'transfer',   name:'Chuyển tiền', c:'#4F46E5', i:'swap' }
};
const CAT_ICONS = ['utensils','coffee','car','fuel','plane','bag','shirt','receipt','zap','droplet','wifi','phone','home','heart','pill','game','film','music',
  'book','grad','users','paw','gift','scissors','wrench','wallet','award','briefcase','trend','coins','bank','card','tag','star','smile','more'];
const WALLET_ICONS = ['wallet','bank','card','phone','coins','briefcase'];
const COLORS = ['#F04438','#F79009','#EAAA08','#12B76A','#15B79E','#0BA5EC','#2E90FA','#4F46E5','#7A5AF8','#EE46BC','#E04F16','#667085'];
const DEBT_C = { lend: '#0E9384', borrow: '#DD2590' };

/* =========================================================
   4. KIỂM TRA & LÀM SẠCH DỮ LIỆU (dùng cho cả tải lên và khôi phục)
   ========================================================= */
const D = { wallets: [], categories: [], tx: [], budgets: {}, recurring: [], debts: [] };
const str = (v, max) => typeof v === 'string' ? v.slice(0, max || 120) : '';
const posNum = v => typeof v === 'number' && isFinite(v) && v > 0;
const vWallet = w => w && RE_ID.test(w.id) && str(w.name, 40).trim() && {
  id: w.id, name: str(w.name, 40).trim(), i: P[w.i] ? w.i : 'wallet', c: RE_HEX.test(w.c) ? w.c : '#12B76A',
  initial: Number.isFinite(w.initial) ? Math.max(0, Math.round(w.initial)) : 0 };
const vCat = c => c && RE_ID.test(c.id) && !SYS[c.id] && (c.type === 'in' || c.type === 'out') && str(c.name, 30).trim() && {
  id: c.id, type: c.type, name: str(c.name, 30).trim(), c: RE_HEX.test(c.c) ? c.c : '#667085', i: P[c.i] ? c.i : 'more', hidden: !!c.hidden };
const vTx = t => t && RE_ID.test(t.id) && ['in','out','transfer'].includes(t.type) && posNum(t.amount) && RE_D.test(t.date) && typeof t.wallet === 'string'
  && (t.type !== 'transfer' || (typeof t.toWallet === 'string' && t.toWallet !== t.wallet)) && {
  id: t.id, type: t.type, amount: Math.round(t.amount), cat: t.type === 'transfer' ? 'transfer' : str(t.cat, 40), wallet: t.wallet,
  toWallet: t.type === 'transfer' ? t.toWallet : undefined, note: str(t.note, 120), date: t.date, createdAt: Number(t.createdAt) || 0,
  debtId: typeof t.debtId === 'string' ? t.debtId : undefined, debtRole: (t.debtRole === 'principal' || t.debtRole === 'pay') ? t.debtRole : undefined };
const vRec = r => r && RE_ID.test(r.id) && (r.type === 'in' || r.type === 'out') && posNum(r.amount) && typeof r.cat === 'string' && typeof r.wallet === 'string'
  && Number.isInteger(r.day) && r.day >= 1 && r.day <= 31 && RE_YM.test(r.startYm) && {
  id: r.id, type: r.type, amount: Math.round(r.amount), cat: r.cat, wallet: r.wallet, note: str(r.note, 120), day: r.day, startYm: r.startYm,
  done: Array.isArray(r.done) ? r.done.filter(x => RE_YM.test(x)) : [] };
const vDebt = d => d && RE_ID.test(d.id) && (d.kind === 'lend' || d.kind === 'borrow') && str(d.person, 60).trim() && posNum(d.amount) && RE_D.test(d.date) && {
  id: d.id, kind: d.kind, person: str(d.person, 60).trim(), amount: Math.round(d.amount), date: d.date,
  due: RE_D.test(d.due || '') ? d.due : '', note: str(d.note, 120), createdAt: Number(d.createdAt) || 0 };
function sanitize(o) {
  o = o || {};
  const arr = (a, f) => Array.isArray(a) ? a.map(f).filter(Boolean) : [];
  const b = {};
  if (o.budgets && typeof o.budgets === 'object') Object.keys(o.budgets).forEach(k => { if (RE_ID.test(k) && posNum(o.budgets[k])) b[k] = Math.round(o.budgets[k]); });
  return { wallets: arr(o.wallets, vWallet), categories: arr(o.categories, vCat), tx: arr(o.tx, vTx), budgets: b, recurring: arr(o.recurring, vRec), debts: arr(o.debts, vDebt) };
}
const DEFAULT_WALLET = () => ({ id: 'w_cash', name: 'Tiền mặt', i: 'wallet', c: '#12B76A', initial: 0 });
function ensureBasics() {
  if (!D.wallets.length) D.wallets = [DEFAULT_WALLET()];
  if (!D.categories.length) D.categories = DEF_CATS.map(c => Object.assign({}, c));
}

/* =========================================================
   5. LƯU TRỮ
   ========================================================= */
const KEY = 'sothuchi.v2', KEY_V1 = 'sothuchi.v1', KEY_BK = 'sothuchi.lastBackup';
const Store = {
  ok: true,
  load() {
    let raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { this.ok = false; }
    if (raw) {
      try { Object.assign(D, sanitize(JSON.parse(raw))); } catch (e) { /* dữ liệu hỏng: bắt đầu lại phần thiếu */ }
      ensureBasics();
    } else {
      ensureBasics();
      // Chuyển dữ liệu từ bản 1 sang (giữ nguyên bản 1 làm dự phòng)
      try {
        const v1 = JSON.parse(localStorage.getItem(KEY_V1) || 'null');
        if (Array.isArray(v1)) D.tx = v1.map(t => vTx(Object.assign({}, t, { wallet: D.wallets[0].id }))).filter(Boolean);
      } catch (e) {}
      if (this.ok) this.save();
    }
    try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
  },
  save() {
    try { localStorage.setItem(KEY, JSON.stringify(D)); this.ok = true; return true; }
    catch (e) { this.ok = false; return false; }
  },
  lastBackup() { try { return Number(localStorage.getItem(KEY_BK)) || 0; } catch (e) { return 0; } },
  markBackup() { try { localStorage.setItem(KEY_BK, String(Date.now())); } catch (e) {} }
};
function restore(snap) { const o = JSON.parse(snap); Object.keys(D).forEach(k => { D[k] = o[k]; }); }
/* Mọi thay đổi dữ liệu đi qua commit: lưu thất bại thì hoàn tác */
function commit(fn) {
  const snap = JSON.stringify(D);
  fn();
  if (!Store.save()) { restore(snap); toast('Không lưu được: bộ nhớ trình duyệt bị chặn hoặc đã đầy'); return false; }
  render();
  return true;
}
function upsert(list, item) { const i = list.findIndex(x => x.id === item.id); if (i >= 0) list[i] = item; else list.push(item); }

/* =========================================================
   6. TRA CỨU & TÍNH TOÁN
   ========================================================= */
const catOf = id => SYS[id] || D.categories.find(c => c.id === id) || { id, name: 'Khác', c: '#667085', i: 'more' };
const walletOf = id => D.wallets.find(w => w.id === id) || { id, name: 'Ví đã xóa', c: '#667085', i: 'wallet', initial: 0 };
const isFlow = t => t.type !== 'transfer' && !SYS[t.cat];
const monthTx = (y, m) => { const k = ymKey(y, m); return D.tx.filter(t => t.date.slice(0, 7) === k); };
const sumFlow = (list, type) => list.reduce((s, t) => s + (t.type === type && isFlow(t) ? t.amount : 0), 0);
function walletBalance(w) {
  let b = w.initial || 0;
  for (const t of D.tx) {
    if (t.type === 'transfer') { if (t.wallet === w.id) b -= t.amount; if (t.toWallet === w.id) b += t.amount; }
    else if (t.wallet === w.id) b += t.type === 'in' ? t.amount : -t.amount;
  }
  return b;
}
const totalBalance = () => D.wallets.reduce((s, w) => s + walletBalance(w), 0);
const debtTx = d => D.tx.filter(t => t.debtId === d.id);
const principalTx = d => D.tx.find(t => t.debtId === d.id && t.debtRole === 'principal');
const debtPaid = d => debtTx(d).reduce((s, t) => s + (t.debtRole === 'pay' ? t.amount : 0), 0);
const debtLeft = d => Math.max(d.amount - debtPaid(d), 0);
const budgetUsed = (catId, y, m) => monthTx(y, m).reduce((s, t) => s + (t.type === 'out' && t.cat === catId ? t.amount : 0), 0);
function occDate(r, ym) { const y = +ym.slice(0, 4), m = +ym.slice(5) - 1; return `${ym}-${pad(Math.min(r.day, daysIn(y, m)))}`; }
function pendingRecurring() {
  const today = new Date(), cur = curYm(), out = [];
  D.recurring.forEach(r => {
    let y = +r.startYm.slice(0, 4), m = +r.startYm.slice(5) - 1;
    for (let g = 0; g < 36; g++) {
      const k = ymKey(y, m);
      if (k > cur) break;
      const day = Math.min(r.day, daysIn(y, m));
      if ((k < cur || today.getDate() >= day) && !r.done.includes(k)) out.push({ r, ym: k, date: `${k}-${pad(day)}` });
      if (++m > 11) { m = 0; y++; }
    }
  });
  return out.sort((a, b) => a.date.localeCompare(b.date));
}
const backupDue = () => { const last = Store.lastBackup(); return D.tx.length >= 5 && (!last || Date.now() - last > 30 * 864e5); };

/* =========================================================
   7. TRẠNG THÁI GIAO DIỆN
   ========================================================= */
const now = new Date();
const S = { view: 'list', page: null, filter: 'all', statType: 'out', y: now.getFullYear(), m: now.getMonth(),
  q: '', qType: 'all', debtKind: 'lend', catType: 'out' };
const PAGE_TITLES = { wallets: 'Ví & tài khoản', debts: 'Sổ nợ', recurring: 'Giao dịch định kỳ', categories: 'Danh mục', backup: 'Sao lưu & khôi phục', search: 'Tìm kiếm' };

/* =========================================================
   8. THÀNH PHẦN DÙNG CHUNG
   ========================================================= */
const monthNav = light => `<div class="month${light ? ' light' : ''}"><button data-act="prev" aria-label="Tháng trước">${ic('left', 18)}</button><span class="num">Tháng ${S.m + 1}/${S.y}</span><button data-act="next" aria-label="Tháng sau">${ic('right', 18)}</button></div>`;
const emptyBox = (title, sub, icon) => `<div class="empty"><div class="ei">${ic(icon, 28)}</div><b>${title}</b>${sub}</div>`;
const addBtn = (act, label) => `<button class="addbtn" data-act="${act}">${ic('plus')}${label}</button>`;
const sec = (title, right) => `<div class="sec"><h2>${title}</h2>${right || ''}</div>`;
const seg = (items, cur, act, cls) => `<div class="seg${items.length === 3 ? ' s3' : ''}${cls ? ' ' + cls : ''}">${items.map(([k, l, i, tone]) =>
  `<button class="${tone || k}${cur === k ? ' on' : ''}" data-act="${act}" data-v="${k}">${i ? ic(i) : ''}${l}</button>`).join('')}</div>`;
const chips = (items, cur, act) => `<div class="chips">${items.map(([v, l]) => `<button class="chip${cur === v ? ' on' : ''}" data-act="${act}" data-v="${v}">${l}</button>`).join('')}</div>`;
const menuRow = (act, v, c, title, sub, extra) => `<button class="item" data-act="${act}"${v ? ` data-v="${v}"` : ''}>${ci(c)}<div class="mid"><div class="nm">${title}</div>${sub ? `<div class="nt">${sub}</div>` : ''}</div>${extra || ''}<span class="chev">${ic('right', 18)}</span></button>`;

function dayLabel(ds, withYear) {
  const [y, m, d] = ds.split('-').map(Number);
  const dt = new Date(y, m - 1, d), today = new Date(); today.setHours(0, 0, 0, 0);
  const diff = Math.round((today - dt) / 864e5);
  let label = `${WD[dt.getDay()]}, ${pad(d)}/${pad(m)}${withYear ? '/' + y : ''}`;
  if (diff === 0) label = 'Hôm nay · ' + label; else if (diff === 1) label = 'Hôm qua · ' + label;
  return label;
}
function txRow(t) {
  if (t.type === 'transfer') {
    return `<button class="item" data-act="tx" data-id="${esc(t.id)}">${ci(SYS.transfer)}<div class="mid"><div class="nm">Chuyển tiền</div>
      <div class="nt">${esc(walletOf(t.wallet).name)} → ${esc(walletOf(t.toWallet).name)}${t.note ? ' · ' + esc(t.note) : ''}</div></div>
      <div class="am num">${money(t.amount)}</div></button>`;
  }
  const c = catOf(t.cat);
  const sub = [t.note, D.wallets.length > 1 ? walletOf(t.wallet).name : ''].filter(Boolean).map(esc).join(' · ');
  return `<button class="item" data-act="tx" data-id="${esc(t.id)}">${ci(c)}<div class="mid"><div class="nm">${esc(c.name)}</div>${sub ? `<div class="nt">${sub}</div>` : ''}</div>
    <div class="am num ${t.type === 'in' ? 'pos' : 'neg'}">${t.type === 'in' ? '+' : '−'}${fmt(t.amount)} ₫</div></button>`;
}
function groupsHtml(rows, withYear) {
  const groups = [];
  rows.forEach(t => { const g = groups[groups.length - 1]; if (g && g.date === t.date) g.items.push(t); else groups.push({ date: t.date, items: [t] }); });
  return groups.map(g => {
    const net = g.items.reduce((s, t) => s + (isFlow(t) ? (t.type === 'in' ? t.amount : -t.amount) : 0), 0);
    return `<div class="day"><div class="dayh"><span>${dayLabel(g.date, withYear)}</span><span class="num">${signed(net)}</span></div><div class="card">${g.items.map(txRow).join('')}</div></div>`;
  }).join('');
}
const sortTx = rows => rows.sort((a, b) => b.date.localeCompare(a.date) || (b.createdAt || 0) - (a.createdAt || 0));

/* =========================================================
   9. MÀN HÌNH CHÍNH (4 tab)
   ========================================================= */
function noticeHtml() {
  if (!Store.ok) return `<div class="notice">${ic('info')}<div>Trình duyệt đang chặn lưu dữ liệu (có thể do chế độ Duyệt web riêng tư). Hãy mở bằng Safari thường để dữ liệu được giữ lại.</div></div>`;
  if (backupDue()) return `<div class="notice">${ic('info')}<div>${Store.lastBackup() ? 'Đã hơn 30 ngày bạn chưa sao lưu dữ liệu.' : 'Bạn chưa sao lưu dữ liệu lần nào.'}<br><button class="nact" data-act="page" data-v="backup">Sao lưu ngay</button></div></div>`;
  return '';
}
function pendingHtml() {
  const list = pendingRecurring();
  if (!list.length) return '';
  return sec('Đến hạn ghi', `<span class="pct">${list.length} khoản định kỳ</span>`) + `<div class="card">${list.map(p => {
    const c = catOf(p.r.cat);
    return `<div class="item">${ci(c)}<div class="mid"><div class="nm">${esc(p.r.note || c.name)}</div>
      <div class="nt">${dm(p.date)} · <span class="${p.r.type === 'in' ? 'pos' : 'neg'}">${p.r.type === 'in' ? '+' : '−'}${fmt(p.r.amount)} ₫</span></div></div>
      <div class="acts2"><button class="mini gh" data-act="rec-skip" data-id="${p.r.id}" data-v="${p.ym}">Bỏ qua</button><button class="mini pri" data-act="rec-log" data-id="${p.r.id}" data-v="${p.ym}">Ghi</button></div></div>`;
  }).join('')}</div>`;
}
function viewList() {
  const list = monthTx(S.y, S.m);
  let h = `<section class="hero">${monthNav(false)}
    <button class="tot" data-act="page" data-v="wallets"><span class="lbl">Tổng số dư · ${D.wallets.length} ví ${ic('right', 14)}</span><span class="bal num">${money(totalBalance())}</span></button>
    <div class="row">
      <div class="pill"><div class="h"><span class="ic">${ic('down')}</span><span class="t">Thu tháng ${S.m + 1}</span></div><div class="v num">${money(sumFlow(list, 'in'))}</div></div>
      <div class="pill"><div class="h"><span class="ic">${ic('up')}</span><span class="t">Chi tháng ${S.m + 1}</span></div><div class="v num">${money(sumFlow(list, 'out'))}</div></div>
    </div></section>`;
  h += noticeHtml() + pendingHtml();
  h += sec('Giao dịch', chips([['all', 'Tất cả'], ['in', 'Thu'], ['out', 'Chi']], S.filter, 'filter'));
  const rows = sortTx(list.filter(t => S.filter === 'all' || t.type === S.filter));
  if (!rows.length) {
    h += list.length ? emptyBox('Không có giao dịch phù hợp', 'Thử chọn bộ lọc khác.', 'list')
      : emptyBox('Chưa có giao dịch nào', 'Nhấn nút + bên dưới để ghi khoản thu hoặc chi.', 'wallet');
  } else h += groupsHtml(rows, false);
  return h;
}

function trendHtml() {
  const months = [];
  for (let k = 5; k >= 0; k--) {
    let y = S.y, m = S.m - k; while (m < 0) { m += 12; y--; }
    const l = monthTx(y, m); months.push({ y, m, i: sumFlow(l, 'in'), o: sumFlow(l, 'out') });
  }
  const max = Math.max(1, ...months.map(x => Math.max(x.i, x.o)));
  const W = 320, H = 150, base = 118, top = 14, gw = W / 6, bw = 13;
  let g = `<line x1="4" x2="${W - 4}" y1="${base}" y2="${base}" style="stroke:var(--line);stroke-width:1"/>`;
  months.forEach((mo, idx) => {
    const x = idx * gw, cx = x + gw / 2, sel = idx === 5;
    const hi = mo.i ? Math.max(3, mo.i / max * (base - top)) : 0, ho = mo.o ? Math.max(3, mo.o / max * (base - top)) : 0;
    g += `<g data-act="pickm" data-v="${mo.y}-${mo.m}" style="cursor:pointer">
      <rect x="${x + 3}" y="4" width="${gw - 6}" height="${H - 8}" rx="10" style="fill:${sel ? 'var(--chip)' : 'transparent'}"/>
      <rect x="${cx - bw - 2}" y="${base - hi}" width="${bw}" height="${hi}" rx="4" style="fill:var(--in)"/>
      <rect x="${cx + 2}" y="${base - ho}" width="${bw}" height="${ho}" rx="4" style="fill:var(--out)"/>
      <text x="${cx}" y="${base + 20}" text-anchor="middle" style="font-size:12px;font-weight:${sel ? 700 : 500};fill:${sel ? 'var(--text)' : 'var(--muted)'}">T${mo.m + 1}</text></g>`;
  });
  const cur = months[5], diff = cur.i - cur.o;
  return sec('Xu hướng 6 tháng') + `<div class="card pad trend"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Biểu đồ thu chi 6 tháng">${g}</svg>
    <div class="legend"><span><i style="background:var(--in)"></i>Thu</span><span><i style="background:var(--out)"></i>Chi</span></div>
    <div class="kv"><span>Chênh lệch tháng ${S.m + 1}</span><b class="num ${diff >= 0 ? 'pos' : 'neg'}">${signed(diff)}</b></div></div>`;
}
function viewStats() {
  const type = S.statType, word = type === 'out' ? 'chi tiêu' : 'thu nhập';
  const list = monthTx(S.y, S.m).filter(t => isFlow(t) && t.type === type);
  let h = `<div class="vtop">${monthNav(true)}</div>` + `<div class="vgap">${seg([['out', 'Chi tiêu', 'up'], ['in', 'Thu nhập', 'down']], type, 'stat')}</div>`;
  const total = list.reduce((s, t) => s + t.amount, 0);
  const by = {};
  list.forEach(t => { by[t.cat] = (by[t.cat] || 0) + t.amount; });
  const items = Object.keys(by).map(k => ({ c: catOf(k), v: by[k] })).sort((a, b) => b.v - a.v);
  if (!items.length) h += emptyBox(`Chưa có ${word} trong tháng`, 'Số liệu sẽ hiển thị khi bạn thêm giao dịch.', 'pie');
  else {
    const R = 80, C = 2 * Math.PI * R;
    let off = 0, arcs = '';
    items.forEach(it => {
      const len = it.v / total * C, gap = items.length > 1 && len > 6 ? 3 : 0;
      arcs += `<circle cx="100" cy="100" r="${R}" fill="none" style="stroke:${it.c.c}" stroke-width="22" stroke-dasharray="${Math.max(len - gap, .01)} ${C}" stroke-dashoffset="${-off}"/>`;
      off += len;
    });
    const pm = S.m === 0 ? 11 : S.m - 1, py = S.m === 0 ? S.y - 1 : S.y;
    const prev = monthTx(py, pm).filter(t => isFlow(t) && t.type === type).reduce((s, t) => s + t.amount, 0);
    let cmp = '';
    if (prev > 0) {
      const pct = Math.round((total - prev) / prev * 100), up = pct > 0, good = type === 'in' ? up : !up;
      cmp = pct === 0 ? '<div class="cmp">Bằng tháng trước</div>'
        : `<div class="cmp" style="color:var(--${good ? 'in' : 'out'})">${ic(up ? 'arrUp' : 'arrDown')}${up ? 'Tăng' : 'Giảm'} ${Math.abs(pct)}% so với tháng trước</div>`;
    }
    h += `<div class="card" style="margin-top:12px"><div class="donutwrap"><div class="donut"><svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="${R}" fill="none" style="stroke:var(--chip)" stroke-width="22"/>${arcs}</svg>
      <div class="ctr"><small>Tổng ${word}</small><strong class="num">${money(total)}</strong></div></div>${cmp}</div></div>`;
  }
  h += trendHtml();
  if (items.length) {
    h += sec('Theo danh mục') + `<div class="card">${items.map(it => {
      const p = it.v / total * 100;
      return `<div class="item">${ci(it.c)}<div class="mid"><div class="top2"><span class="nm">${esc(it.c.name)} <span class="pct">${p < 1 ? '<1' : Math.round(p)}%</span></span><span class="am num">${money(it.v)}</span></div>
        <div class="bar"><i style="width:${p}%;background:${it.c.c}"></i></div></div></div>`;
    }).join('')}</div>`;
  }
  return h;
}

const budgetColor = pct => pct >= 100 ? 'var(--out)' : pct >= 80 ? 'var(--amber)' : 'var(--in)';
function viewBudget() {
  let h = `<div class="vtop">${monthNav(true)}</div>`;
  const ids = Object.keys(D.budgets).filter(id => D.categories.some(c => c.id === id && c.type === 'out'));
  if (!ids.length) return h + emptyBox('Chưa đặt ngân sách', 'Đặt hạn mức chi mỗi tháng cho từng danh mục để kiểm soát chi tiêu.', 'target') + addBtn('budget-new', 'Đặt ngân sách');
  const rows = ids.map(id => ({ c: catOf(id), limit: D.budgets[id], used: budgetUsed(id, S.y, S.m) }))
    .sort((a, b) => b.used / b.limit - a.used / a.limit);
  const limit = rows.reduce((s, r) => s + r.limit, 0), used = rows.reduce((s, r) => s + r.used, 0), left = limit - used, pct = used / limit * 100;
  let tip = '';
  if (ymKey(S.y, S.m) === curYm()) {
    const dl = daysIn(S.y, S.m) - new Date().getDate() + 1;
    tip = left > 0 ? `<div class="tip">${ic('clock')}Còn ${dl} ngày · nên chi tối đa ${money(Math.floor(left / dl))}/ngày</div>`
      : `<div class="tip">${ic('info')}Bạn đã dùng hết ngân sách tháng này.</div>`;
  }
  h += `<div class="card pad vgap"><div class="kv first"><span>${left >= 0 ? 'Còn có thể chi' : 'Đã vượt ngân sách'}</span><span class="badge ${pct >= 100 ? 'red' : pct >= 80 ? '' : 'green'}">${Math.round(pct)}%</span></div>
    <div class="big num ${left < 0 ? 'neg' : ''}">${money(Math.abs(left))}</div>
    <div class="prog"><i style="width:${Math.min(pct, 100)}%;background:${budgetColor(pct)}"></i></div>
    <div class="kv"><span>Đã chi ${money(used)}</span><span>Ngân sách ${money(limit)}</span></div>${tip}</div>`;
  h += sec('Theo danh mục') + `<div class="card">${rows.map(r => {
    const p = r.used / r.limit * 100, l = r.limit - r.used;
    return `<button class="item" data-act="budget" data-v="${r.c.id}">${ci(r.c)}<div class="mid">
      <div class="top2"><span class="nm">${esc(r.c.name)}</span><span class="am num">${money(r.used)}</span></div>
      <div class="bar"><i style="width:${Math.min(p, 100)}%;background:${budgetColor(p)}"></i></div>
      <div class="top2 nt"><span class="${l < 0 ? 'neg' : ''}">${l >= 0 ? 'Còn ' + money(l) : 'Vượt ' + money(-l)}</span><span>/ ${money(r.limit)}</span></div></div></button>`;
  }).join('')}</div>`;
  if (ids.length < D.categories.filter(c => c.type === 'out' && !c.hidden).length) h += addBtn('budget-new', 'Thêm ngân sách');
  return h + `<p class="hint">Ngân sách được áp dụng giống nhau cho mọi tháng.</p>`;
}

function viewMore() {
  const lend = D.debts.filter(d => d.kind === 'lend').reduce((s, d) => s + debtLeft(d), 0);
  const borrow = D.debts.filter(d => d.kind === 'borrow').reduce((s, d) => s + debtLeft(d), 0);
  const last = Store.lastBackup(), due = backupDue();
  return `<div class="grp-t">Quản lý tiền</div><div class="card">
    ${menuRow('page', 'wallets', { c: '#12B76A', i: 'wallet' }, 'Ví & tài khoản', `${D.wallets.length} ví · ${money(totalBalance())}`)}
    ${menuRow('page', 'debts', { c: '#0E9384', i: 'book' }, 'Sổ nợ', D.debts.length ? `Phải thu ${money(lend)} · Phải trả ${money(borrow)}` : 'Theo dõi khoản cho vay, đi vay')}
    ${menuRow('page', 'recurring', { c: '#7A5AF8', i: 'repeat' }, 'Giao dịch định kỳ', D.recurring.length ? `${D.recurring.length} khoản lặp lại hàng tháng` : 'Lương, tiền nhà, điện nước…')}
    ${menuRow('page', 'categories', { c: '#F79009', i: 'tag' }, 'Danh mục', `${D.categories.filter(c => !c.hidden).length} danh mục đang dùng`)}
  </div>
  <div class="grp-t">Dữ liệu</div><div class="card">
    ${menuRow('page', 'backup', { c: '#2E90FA', i: 'db' }, 'Sao lưu & khôi phục', last ? 'Lần gần nhất ' + dmy(ymd(new Date(last))) : 'Chưa sao lưu lần nào', due ? '<span class="badge red">Nên sao lưu</span>' : '')}
  </div>
  <p class="foot">Sổ Thu Chi · phiên bản 2.0<br>Dữ liệu chỉ lưu trên điện thoại này</p>`;
}

/* =========================================================
   10. TRANG PHỤ
   ========================================================= */
function pageWallets() {
  let h = `<div class="card pad"><div class="kv first"><span>Tổng số dư</span><span class="pct">${D.wallets.length} ví</span></div><div class="big num">${money(totalBalance())}</div></div>`;
  h += sec('Danh sách ví', D.wallets.length > 1 ? `<button class="mini gh" data-act="transfer">${'Chuyển tiền'}</button>` : '');
  h += `<div class="card">${D.wallets.map(w => { const b = walletBalance(w);
    return `<button class="item" data-act="wallet" data-v="${w.id}">${ci(w)}<div class="mid"><div class="nm">${esc(w.name)}</div><div class="nt">Số dư ban đầu ${money(w.initial)}</div></div><div class="am num ${b < 0 ? 'neg' : ''}">${money(b)}</div></button>`;
  }).join('')}</div>`;
  return h + addBtn('wallet-new', 'Thêm ví');
}
function debtRow(d) {
  const left = debtLeft(d), pct = (d.amount - left) / d.amount * 100, color = DEBT_C[d.kind];
  const overdue = left > 0 && d.due && d.due < todayStr();
  const sub = left === 0 ? 'Đã tất toán' : d.due ? (overdue ? `<span class="neg">Quá hạn ${dmy(d.due)}</span>` : `Hạn ${dmy(d.due)}`) : `Từ ${dmy(d.date)}`;
  return `<button class="item" data-act="debt" data-id="${d.id}">${ci({ c: color, i: 'user' })}<div class="mid">
    <div class="top2"><span class="nm">${esc(d.person)}</span><span class="am num">${money(left)}</span></div>
    <div class="bar"><i style="width:${pct}%;background:${color}"></i></div>
    <div class="top2 nt"><span>${sub}</span><span>/ ${money(d.amount)}</span></div></div></button>`;
}
function pageDebts() {
  const k = S.debtKind, lend = k === 'lend';
  const list = D.debts.filter(d => d.kind === k).sort((a, b) => b.date.localeCompare(a.date) || b.createdAt - a.createdAt);
  const active = list.filter(d => debtLeft(d) > 0), closed = list.filter(d => debtLeft(d) === 0);
  const left = active.reduce((s, d) => s + debtLeft(d), 0);
  let h = seg([['lend', 'Cho vay', 'send', 'tr'], ['borrow', 'Đi vay', 'inbox', 'tr']], k, 'debtkind');
  h += `<div class="card pad vgap"><div class="kv first"><span>${lend ? 'Còn phải thu' : 'Còn phải trả'}</span><span class="pct">${active.length} khoản đang theo dõi</span></div><div class="big num">${money(left)}</div></div>`;
  if (!list.length) h += emptyBox(lend ? 'Chưa có khoản cho vay' : 'Chưa có khoản đi vay', lend ? 'Ghi lại khi bạn cho ai đó mượn tiền để không quên đòi.' : 'Ghi lại khoản bạn mượn để trả đúng hạn.', 'book');
  if (active.length) h += sec('Đang theo dõi') + `<div class="card">${active.map(debtRow).join('')}</div>`;
  h += addBtn('debt-new', lend ? 'Thêm khoản cho vay' : 'Thêm khoản đi vay');
  if (closed.length) h += sec('Đã tất toán') + `<div class="card">${closed.map(debtRow).join('')}</div>`;
  return h;
}
function pageRecurring() {
  let h = '';
  if (!D.recurring.length) h += emptyBox('Chưa có giao dịch định kỳ', 'Thêm các khoản lặp lại hàng tháng như lương, tiền nhà, điện nước để được nhắc ghi đúng hạn.', 'repeat');
  else h += `<div class="card">${D.recurring.slice().sort((a, b) => a.day - b.day).map(r => { const c = catOf(r.cat);
    return `<button class="item" data-act="rec" data-id="${r.id}">${ci(c)}<div class="mid"><div class="nm">${esc(r.note || c.name)}</div>
      <div class="nt">Ngày ${r.day}${r.note ? ' · ' + esc(c.name) : ''}${D.wallets.length > 1 ? ' · ' + esc(walletOf(r.wallet).name) : ''}</div></div>
      <div class="am num ${r.type === 'in' ? 'pos' : 'neg'}">${r.type === 'in' ? '+' : '−'}${fmt(r.amount)} ₫</div></button>`;
  }).join('')}</div>`;
  h += addBtn('rec-new', 'Thêm giao dịch định kỳ');
  return h + `<p class="hint">Đến ngày đã chọn, khoản này sẽ hiện ở mục "Đến hạn ghi" trên màn hình Giao dịch để bạn bấm Ghi hoặc Bỏ qua.</p>`;
}
function pageCategories() {
  const t = S.catType;
  const list = D.categories.filter(c => c.type === t);
  const count = id => D.tx.reduce((s, x) => s + (x.cat === id ? 1 : 0), 0);
  let h = seg([['out', 'Chi tiêu', 'up'], ['in', 'Thu nhập', 'down']], t, 'cattype');
  h += `<div class="card vgap">${list.map(c => { const n = count(c.id);
    return `<button class="item" data-act="cat" data-v="${c.id}" style="${c.hidden ? 'opacity:.55' : ''}">${ci(c)}<div class="mid"><div class="nm">${esc(c.name)}</div><div class="nt">${n ? n + ' giao dịch' : 'Chưa dùng'}</div></div>${c.hidden ? '<span class="badge">Đã ẩn</span>' : ''}<span class="chev">${ic('right', 18)}</span></button>`;
  }).join('')}</div>`;
  return h + addBtn('cat-new', 'Thêm danh mục');
}
function pageBackup() {
  const last = Store.lastBackup();
  return `<div class="card" style="display:grid;grid-template-columns:1fr 1fr">
      <div style="padding:14px"><div class="pct">Giao dịch đang lưu</div><div class="am num" style="font-size:17px;margin-top:2px">${fmt(D.tx.length)}</div></div>
      <div style="padding:14px;border-left:1px solid var(--line)"><div class="pct">Sao lưu gần nhất</div><div class="am" style="font-size:17px;margin-top:2px">${last ? dmy(ymd(new Date(last))) : 'Chưa có'}</div></div></div>
    <p class="hint">Dữ liệu chỉ nằm trên chiếc điện thoại này. Hãy sao lưu định kỳ và cất tệp vào ứng dụng Tệp (iCloud Drive) hoặc tự gửi cho mình qua Zalo, email để không bị mất khi đổi máy.</p>
    <div class="card">
      ${menuRow('export', '', { c: '#4F46E5', i: 'dl' }, 'Sao lưu ra tệp', 'Tạo tệp .json chứa toàn bộ dữ liệu')}
      ${menuRow('import', '', { c: '#4F46E5', i: 'ul' }, 'Khôi phục từ tệp', 'Gộp dữ liệu từ tệp sao lưu vào máy này')}
    </div>`;
}
function searchFrame() {
  return `<label class="field sfield">${ic('search', 18)}<input id="sq" type="search" placeholder="Ghi chú, danh mục, ví, số tiền…" value="${esc(S.q)}" autocomplete="off" enterkeyhint="search" aria-label="Tìm kiếm"></label>
    <div id="sqt" style="margin-top:12px"></div><div id="sres"></div>`;
}
function updateSearch() {
  const box = $('sres'); if (!box) return;
  $('sqt').innerHTML = chips([['all', 'Tất cả'], ['in', 'Thu'], ['out', 'Chi'], ['transfer', 'Chuyển tiền']], S.qType, 'qtype');
  const q = nrm(S.q.trim()), digits = S.q.replace(/\D/g, '');
  if (!q) { box.innerHTML = emptyBox('Tìm giao dịch', 'Nhập ghi chú, tên danh mục, tên ví hoặc số tiền. Gõ không dấu cũng được.', 'search'); return; }
  const rows = sortTx(D.tx.filter(t => {
    if (S.qType !== 'all' && t.type !== S.qType) return false;
    const hay = nrm([t.note, catOf(t.cat).name, walletOf(t.wallet).name, t.toWallet ? walletOf(t.toWallet).name : ''].join(' '));
    return hay.includes(q) || (digits.length >= 3 && String(t.amount).includes(digits));
  }));
  if (!rows.length) { box.innerHTML = emptyBox('Không tìm thấy', 'Thử từ khóa khác hoặc bỏ bộ lọc.', 'search'); return; }
  const tin = sumFlow(rows, 'in'), tout = sumFlow(rows, 'out');
  box.innerHTML = `<div class="dayh" style="margin-top:16px"><span>${rows.length} giao dịch</span><span class="num">${[tin ? `<span class="pos">+${fmt(tin)} ₫</span>` : '', tout ? `<span class="neg">−${fmt(tout)} ₫</span>` : ''].filter(Boolean).join(' · ')}</span></div>` + groupsHtml(rows.slice(0, 300), true);
}

/* =========================================================
   11. RENDER
   ========================================================= */
const VIEWS = { list: viewList, stats: viewStats, budget: viewBudget, more: viewMore };
const PAGES = { wallets: pageWallets, debts: pageDebts, recurring: pageRecurring, categories: pageCategories, backup: pageBackup };
function render() {
  $('top').innerHTML = S.page
    ? `<div class="pghd"><button class="hicon" data-act="back" aria-label="Quay lại">${ic('left')}</button><h1>${PAGE_TITLES[S.page]}</h1></div>`
    : `<div class="brand"><div class="logo">${ic('wallet', 20)}</div><h1>Sổ Thu Chi</h1></div><button class="hicon" data-act="page" data-v="search" aria-label="Tìm kiếm giao dịch">${ic('search')}</button>`;
  const main = $('main');
  if (S.page === 'search') { if (!$('sq')) main.innerHTML = searchFrame(); updateSearch(); }
  else main.innerHTML = S.page ? PAGES[S.page]() : VIEWS[S.view]();
  ['list', 'stats', 'budget', 'more'].forEach(v => $('t-' + v).classList.toggle('on', S.view === v));
  $('t-more').classList.toggle('warn', backupDue());
}

/* =========================================================
   12. BẢNG NHẬP (bottom sheet) – khung chung cho mọi biểu mẫu
   ========================================================= */
let F = null;
function openForm(form) {
  F = form; drawForm();
  $('overlay').classList.add('show'); $('sheet').classList.add('show');
  document.body.style.overflow = 'hidden';
  $('shBody').scrollTop = 0;
}
function drawForm() {
  $('shTitle').textContent = F.title();
  $('shBody').innerHTML = F.body();
  const ft = F.foot ? F.foot() : '';
  $('shFoot').innerHTML = ft; $('shFoot').style.display = ft ? '' : 'none';
}
function closeSheet() {
  $('overlay').classList.remove('show'); $('sheet').classList.remove('show');
  document.body.style.overflow = ''; F = null;
  try { document.activeElement && document.activeElement.blur(); } catch (e) {}
}
function focusAmount() { setTimeout(() => { const el = document.querySelector('#shBody [data-f=amount]'); try { el && el.focus(); } catch (e) {} }, 0); }
function shake(el) { if (!el) return; el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }
function failForm(err) {
  F.err = err; drawForm();
  const el = document.querySelector('#shBody .err.show');
  if (el) { shake(el.previousElementSibling || el); el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
}

/* --- mảnh ghép biểu mẫu --- */
const errEl = (k, msg, e) => `<div class="err${e ? ' show' : ''}" id="err-${k}">${esc(typeof e === 'string' ? e : msg)}</div>`;
const flabel = t => `<div class="flabel">${t}</div>`;
const amountField = (val, tone, e) => `<label class="amt ${tone}"><input data-f="amount" class="money num" type="text" inputmode="numeric" autocomplete="off" placeholder="0" value="${val > 0 ? fmt(val) : ''}" aria-label="Số tiền"><span class="cur">₫</span></label>${errEl('amount', 'Vui lòng nhập số tiền lớn hơn 0', e)}`;
const quickRow = list => `<div class="quick">${list.map(([v, l]) => `<button data-act="f-quick" data-v="${v}">${l}</button>`).join('')}</div>`;
const QUICK_TX = [[10000, '+10K'], [50000, '+50K'], [100000, '+100K'], [200000, '+200K'], [500000, '+500K']];
const QUICK_BIG = [[100000, '+100K'], [500000, '+500K'], [1000000, '+1 triệu'], [5000000, '+5 triệu']];
const textField = (k, val, ph, icon, max) => `<label class="field">${ic(icon, 18)}<input data-f="${k}" type="text" maxlength="${max || 120}" placeholder="${ph}" value="${esc(val)}" autocomplete="off"></label>`;
const dateField = (k, val, label, icon) => `<label class="field">${ic(icon || 'cal', 18)}${label ? `<span class="fl">${label}</span>` : ''}<input data-f="${k}" type="date" value="${val || ''}" aria-label="${label || 'Ngày'}"></label>`;
const catGrid = (type, sel, exclude) => {
  const cats = D.categories.filter(c => c.type === type && (!c.hidden || c.id === sel) && !(exclude || []).includes(c.id));
  if (!cats.length) return '<p class="hint">Không còn danh mục nào để chọn. Vào Thêm › Danh mục để tạo mới hoặc hiện lại danh mục đã ẩn.</p>';
  return `<div class="cats">${cats.map(c => `<button class="cat${sel === c.id ? ' on' : ''}" data-act="f-cat" data-v="${c.id}">${ci(c, 22)}<span>${esc(c.name)}</span></button>`).join('')}</div>`;
};
const walletChips = (sel, act) => `<div class="wchips">${D.wallets.map(w => `<button class="wchip${sel === w.id ? ' on' : ''}" data-act="${act}" data-v="${w.id}">${ci(w, 15)}<span>${esc(w.name)}</span></button>`).join('')}</div>`;
const saveFoot = (canDel, label) => `${canDel ? `<button class="btn del" data-act="f-del" aria-label="Xóa">${ic('trash')}</button>` : ''}<button class="btn pri" data-act="f-save">${label || 'Lưu'}</button>`;
function defaultDate() {
  if (ymKey(S.y, S.m) === curYm()) return todayStr();
  return `${ymKey(S.y, S.m)}-${pad(Math.min(new Date().getDate(), daysIn(S.y, S.m)))}`;
}

/* --- Biểu mẫu: giao dịch & giao dịch định kỳ --- */
function txForm(o) {
  const mode = o.mode || 'tx', t = o.tx, r = o.recur, occ = o.occ;
  const src = t || r || (occ && occ.r);
  const w0 = D.wallets[0].id;
  const v = {
    type: o.type || (src ? src.type : 'out'), amount: src ? src.amount : 0,
    cat: src && src.type !== 'transfer' ? src.cat : null,
    wallet: src && D.wallets.some(w => w.id === src.wallet) ? src.wallet : w0,
    toWallet: t && t.toWallet ? t.toWallet : null,
    note: src ? src.note || '' : '', date: t ? t.date : occ ? occ.date : defaultDate(),
    day: r ? r.day : new Date().getDate(), repeat: false
  };
  if (v.type === 'transfer' && !v.toWallet) v.toWallet = (D.wallets.find(w => w.id !== v.wallet) || {}).id || null;
  return {
    mode, id: (t || r || {}).id || null, createdAt: t ? t.createdAt : 0, occ: occ || null, v, err: {},
    title: () => mode === 'recur' ? (r ? 'Sửa giao dịch định kỳ' : 'Thêm giao dịch định kỳ') : t ? 'Sửa giao dịch' : occ ? 'Ghi khoản định kỳ' : 'Thêm giao dịch',
    body: txBody, foot: () => saveFoot(!!F.id), save: saveTx, del: delTx
  };
}
function txBody() {
  const v = F.v, e = F.err, recur = F.mode === 'recur', tr = v.type === 'transfer';
  const types = [['out', 'Chi tiêu', 'up'], ['in', 'Thu nhập', 'down']];
  if (!recur && D.wallets.length > 1) types.push(['transfer', 'Chuyển tiền', 'swap', 'tr']);
  let h = seg(types, v.type, 'f-type');
  h += amountField(v.amount, tr ? 'tr' : v.type, e.amount) + quickRow(QUICK_TX);
  if (tr) {
    h += flabel('Từ ví') + walletChips(v.wallet, 'f-wallet') + flabel('Đến ví') + walletChips(v.toWallet, 'f-towallet') + errEl('towallet', 'Vui lòng chọn hai ví khác nhau', e.towallet);
  } else {
    h += flabel('Danh mục') + catGrid(v.type, v.cat) + errEl('cat', 'Vui lòng chọn một danh mục', e.cat);
    if (D.wallets.length > 1) h += flabel('Ví') + walletChips(v.wallet, 'f-wallet');
  }
  h += flabel('Chi tiết') + textField('note', v.note, 'Ghi chú (không bắt buộc)', 'pen');
  if (recur) {
    let opts = '';
    for (let d = 1; d <= 31; d++) opts += `<option value="${d}"${+v.day === d ? ' selected' : ''}>Ngày ${d} hàng tháng${d > 28 ? ' (hoặc cuối tháng)' : ''}</option>`;
    h += `<label class="field">${ic('cal', 18)}<select data-f="day" aria-label="Ngày trong tháng">${opts}</select></label>`;
  } else {
    h += dateField('date', v.date);
    if (!F.id && !F.occ && !tr) h += `<button class="swrow" data-act="f-repeat" role="switch" aria-checked="${v.repeat}"><span>${ic('repeat')}Lặp lại hàng tháng</span><span class="sw${v.repeat ? ' on' : ''}"></span></button>`;
  }
  return h;
}
function budgetMsg(t) {
  if (t.type !== 'out' || !D.budgets[t.cat]) return '';
  const y = +t.date.slice(0, 4), m = +t.date.slice(5, 7) - 1;
  const pct = Math.round(budgetUsed(t.cat, y, m) / D.budgets[t.cat] * 100), name = catOf(t.cat).name;
  if (pct >= 100) return `Đã lưu. ${name} đã vượt ngân sách tháng (${pct}%)`;
  if (pct >= 80) return `Đã lưu. ${name} đã dùng ${pct}% ngân sách tháng`;
  return '';
}
function saveTx() {
  const v = F.v, e = {}, tr = v.type === 'transfer';
  if (!(v.amount > 0)) e.amount = 1;
  if (!D.wallets.some(w => w.id === v.wallet)) v.wallet = D.wallets[0].id;
  if (tr) { if (!v.toWallet || v.toWallet === v.wallet || !D.wallets.some(w => w.id === v.toWallet)) e.towallet = 1; }
  else if (!v.cat || !D.categories.some(c => c.id === v.cat && c.type === v.type)) e.cat = 1;
  if (Object.keys(e).length) return failForm(e);
  const note = v.note.trim().slice(0, 120);

  if (F.mode === 'recur') {
    const day = Math.min(31, Math.max(1, parseInt(v.day, 10) || 1));
    const old = D.recurring.find(x => x.id === F.id);
    const n = new Date(); let sy = n.getFullYear(), sm = n.getMonth();
    if (day < n.getDate()) { if (++sm > 11) { sm = 0; sy++; } }
    const r = { id: F.id || newId(), type: v.type, amount: v.amount, cat: v.cat, wallet: v.wallet, note, day, startYm: old ? old.startYm : ymKey(sy, sm), done: old ? old.done : [] };
    if (commit(() => upsert(D.recurring, r))) { closeSheet(); toast(old ? 'Đã cập nhật giao dịch định kỳ' : 'Đã thêm giao dịch định kỳ'); }
    return;
  }
  const date = RE_D.test(v.date) ? v.date : todayStr();
  const t = { id: F.id || newId(), type: v.type, amount: v.amount, cat: tr ? 'transfer' : v.cat, wallet: v.wallet, toWallet: tr ? v.toWallet : undefined, note, date, createdAt: F.createdAt || Date.now() };
  const occ = F.occ, repeat = v.repeat && !F.id && !tr, isNew = !F.id;
  S.y = +date.slice(0, 4); S.m = +date.slice(5, 7) - 1;
  const ok = commit(() => {
    upsert(D.tx, t);
    if (occ) { const r = D.recurring.find(x => x.id === occ.r.id); if (r && !r.done.includes(occ.ym)) r.done.push(occ.ym); }
    if (repeat) D.recurring.push({ id: newId(), type: t.type, amount: t.amount, cat: t.cat, wallet: t.wallet, note, day: +date.slice(8), startYm: date.slice(0, 7), done: [date.slice(0, 7)] });
  });
  if (!ok) return;
  closeSheet();
  toast(budgetMsg(t) || (isNew ? (repeat ? 'Đã thêm và đặt lặp lại hàng tháng' : 'Đã thêm giao dịch') : 'Đã cập nhật giao dịch'));
}
async function delTx() {
  const recur = F.mode === 'recur', id = F.id;
  const yes = await ask(recur ? { title: 'Xóa giao dịch định kỳ?', text: 'Ứng dụng sẽ không nhắc khoản này nữa. Các giao dịch đã ghi trước đây vẫn được giữ.' }
    : { title: 'Xóa giao dịch này?', text: 'Giao dịch sẽ bị xóa vĩnh viễn và không thể khôi phục.' });
  if (!yes) return;
  if (commit(() => { if (recur) D.recurring = D.recurring.filter(x => x.id !== id); else D.tx = D.tx.filter(x => x.id !== id); })) { closeSheet(); toast('Đã xóa'); }
}

/* --- Biểu mẫu: ví --- */
function walletForm(w) {
  return {
    id: w ? w.id : null, err: {}, namePh: 'Tên ví',
    v: { name: w ? w.name : '', initial: w ? w.initial : 0, i: w ? w.i : 'bank', c: w ? w.c : '#2E90FA' },
    title: () => w ? 'Sửa ví' : 'Thêm ví',
    body: () => {
      const v = F.v, e = F.err;
      return `<div class="preview">${ci(v, 24)}<div class="mid"><div class="nm">${esc(v.name) || F.namePh}</div><div class="nt">Xem trước</div></div></div>`
        + flabel('Tên ví') + textField('name', v.name, 'VD: Vietcombank, MoMo, Tiền mặt', 'pen', 40) + errEl('name', 'Vui lòng nhập tên ví', e.name)
        + flabel('Số dư ban đầu') + `<label class="field">${ic('coins', 18)}<input data-f="initial" class="money num" type="text" inputmode="numeric" placeholder="0" value="${v.initial ? fmt(v.initial) : ''}" autocomplete="off" aria-label="Số dư ban đầu"><span class="suf">₫</span></label>`
        + `<p class="hint">Số tiền đang có trong ví lúc bắt đầu ghi chép.</p>`
        + flabel('Biểu tượng') + `<div class="icgrid">${WALLET_ICONS.map(n => `<button class="icopt${v.i === n ? ' on' : ''}" data-act="f-icon" data-v="${n}" aria-label="${n}">${ic(n, 22)}</button>`).join('')}</div>`
        + flabel('Màu') + colorRow(v.c);
    },
    foot: () => saveFoot(!!F.id),
    save() {
      const v = F.v, name = v.name.trim();
      if (!name) return failForm({ name: 1 });
      const nw = { id: F.id || 'w_' + newId(), name: name.slice(0, 40), i: v.i, c: v.c, initial: v.initial || 0 };
      const isNew = !F.id;
      if (commit(() => upsert(D.wallets, nw))) { closeSheet(); toast(isNew ? 'Đã thêm ví' : 'Đã cập nhật ví'); }
    },
    async del() {
      const id = F.id;
      if (D.wallets.length === 1) return toast('Cần giữ lại ít nhất một ví');
      if (D.tx.some(t => t.wallet === id || t.toWallet === id) || D.recurring.some(r => r.wallet === id)) return toast('Ví đang có giao dịch nên không thể xóa');
      if (!(await ask({ title: 'Xóa ví này?', text: 'Ví chưa có giao dịch nào nên có thể xóa an toàn.' }))) return;
      if (commit(() => { D.wallets = D.wallets.filter(w => w.id !== id); })) { closeSheet(); toast('Đã xóa ví'); }
    }
  };
}
const colorRow = sel => `<div class="sws">${COLORS.map(c => `<button class="swc${sel === c ? ' on' : ''}" style="background:${c}" data-act="f-color" data-v="${c}" aria-label="Màu ${c}">${sel === c ? ic('check') : ''}</button>`).join('')}</div>`;

/* --- Biểu mẫu: danh mục --- */
function catForm(c, type) {
  const used = id => D.tx.some(t => t.cat === id) || D.recurring.some(r => r.cat === id);
  return {
    id: c ? c.id : null, err: {}, namePh: 'Tên danh mục',
    v: { name: c ? c.name : '', i: c ? c.i : 'tag', c: c ? c.c : COLORS[6], hidden: c ? c.hidden : false, type: c ? c.type : type },
    title: () => c ? 'Sửa danh mục' : (type === 'in' ? 'Thêm danh mục thu' : 'Thêm danh mục chi'),
    body: () => {
      const v = F.v, e = F.err;
      let h = `<div class="preview">${ci(v, 24)}<div class="mid"><div class="nm">${esc(v.name) || F.namePh}</div><div class="nt">${v.type === 'in' ? 'Thu nhập' : 'Chi tiêu'}</div></div></div>`
        + flabel('Tên danh mục') + textField('name', v.name, 'VD: Cà phê, Xăng xe, Thú cưng', 'pen', 30) + errEl('name', 'Vui lòng nhập tên danh mục', e.name)
        + flabel('Biểu tượng') + `<div class="icgrid">${CAT_ICONS.map(n => `<button class="icopt${v.i === n ? ' on' : ''}" data-act="f-icon" data-v="${n}" aria-label="${n}">${ic(n, 22)}</button>`).join('')}</div>`
        + flabel('Màu') + colorRow(v.c);
      if (F.id) h += `<div style="margin-top:18px"><button class="swrow" data-act="f-hidden" role="switch" aria-checked="${!v.hidden}"><span>${ic('eye')}Hiện khi chọn danh mục</span><span class="sw${v.hidden ? '' : ' on'}"></span></button></div>`
        + (used(F.id) ? '<p class="hint">Danh mục đã có giao dịch nên không thể xóa. Bạn có thể ẩn để không hiện khi nhập mới; giao dịch cũ vẫn giữ nguyên.</p>' : '');
      return h;
    },
    foot: () => saveFoot(F.id && !used(F.id)),
    save() {
      const v = F.v, name = v.name.trim();
      if (!name) return failForm({ name: 1 });
      if (v.hidden && !D.categories.some(x => x.type === v.type && !x.hidden && x.id !== F.id)) return toast('Cần giữ ít nhất một danh mục đang hiện');
      const nc = { id: F.id || 'c_' + newId(), type: v.type, name: name.slice(0, 30), i: v.i, c: v.c, hidden: !!v.hidden };
      const isNew = !F.id;
      if (commit(() => upsert(D.categories, nc))) { closeSheet(); toast(isNew ? 'Đã thêm danh mục' : 'Đã cập nhật danh mục'); }
    },
    async del() {
      const id = F.id;
      if (!D.categories.some(x => x.type === F.v.type && !x.hidden && x.id !== id)) return toast('Cần giữ ít nhất một danh mục đang hiện');
      if (!(await ask({ title: 'Xóa danh mục này?', text: 'Danh mục chưa có giao dịch nào. Ngân sách của danh mục (nếu có) cũng bị xóa.' }))) return;
      if (commit(() => { D.categories = D.categories.filter(x => x.id !== id); delete D.budgets[id]; })) { closeSheet(); toast('Đã xóa danh mục'); }
    }
  };
}

/* --- Biểu mẫu: ngân sách --- */
function budgetForm(catId) {
  return {
    id: catId || null, err: {}, v: { cat: catId || null, amount: catId ? D.budgets[catId] : 0 },
    title: () => catId ? 'Sửa ngân sách' : 'Đặt ngân sách',
    body: () => {
      const v = F.v, e = F.err;
      const taken = Object.keys(D.budgets).filter(id => id !== F.id);
      return `<p class="hint" style="margin-top:4px">Hạn mức chi tối đa mỗi tháng</p>` + amountField(v.amount, 'tr', e.amount) + quickRow(QUICK_BIG)
        + flabel('Danh mục chi') + catGrid('out', v.cat, taken) + errEl('cat', 'Vui lòng chọn một danh mục', e.cat);
    },
    foot: () => saveFoot(!!F.id),
    save() {
      const v = F.v, e = {};
      if (!(v.amount > 0)) e.amount = 1;
      if (!v.cat || !D.categories.some(c => c.id === v.cat && c.type === 'out')) e.cat = 1;
      if (Object.keys(e).length) return failForm(e);
      const old = F.id;
      if (commit(() => { if (old && old !== v.cat) delete D.budgets[old]; D.budgets[v.cat] = v.amount; })) { closeSheet(); toast('Đã lưu ngân sách'); }
    },
    async del() {
      const id = F.id;
      if (!(await ask({ title: 'Xóa ngân sách?', text: `Bỏ hạn mức của danh mục ${catOf(id).name}. Giao dịch không bị ảnh hưởng.` }))) return;
      if (commit(() => { delete D.budgets[id]; })) { closeSheet(); toast('Đã xóa ngân sách'); }
    }
  };
}

/* --- Biểu mẫu: sổ nợ --- */
function debtForm(d) {
  const p = d ? principalTx(d) : null;
  return {
    id: d ? d.id : null, err: {},
    v: { kind: d ? d.kind : S.debtKind, person: d ? d.person : '', amount: d ? d.amount : 0, wallet: p ? p.wallet : D.wallets[0].id,
      date: d ? d.date : todayStr(), due: d ? d.due : '', note: d ? d.note : '' },
    title: () => d ? 'Sửa khoản nợ' : (F.v.kind === 'lend' ? 'Thêm khoản cho vay' : 'Thêm khoản đi vay'),
    body: () => {
      const v = F.v, e = F.err, lend = v.kind === 'lend';
      let h = F.id ? '' : seg([['lend', 'Cho vay', 'send', 'tr'], ['borrow', 'Đi vay', 'inbox', 'tr']], v.kind, 'f-kind');
      h += amountField(v.amount, 'tr', e.amount) + quickRow(QUICK_BIG);
      h += flabel(lend ? 'Người vay' : 'Người cho vay') + textField('person', v.person, 'Tên người', 'user', 60) + errEl('person', 'Vui lòng nhập tên người', e.person);
      if (D.wallets.length > 1) h += flabel(lend ? 'Lấy tiền từ ví' : 'Nhận tiền vào ví') + walletChips(v.wallet, 'f-wallet');
      h += flabel('Chi tiết') + dateField('date', v.date, lend ? 'Ngày cho vay' : 'Ngày vay') + dateField('due', v.due, 'Hạn trả', 'clock')
        + textField('note', v.note, 'Ghi chú (không bắt buộc)', 'pen');
      return h;
    },
    foot: () => saveFoot(false),
    save() {
      const v = F.v, e = {}, old = D.debts.find(x => x.id === F.id);
      const paid = old ? debtPaid(old) : 0;
      if (!(v.amount > 0)) e.amount = 1; else if (v.amount < paid) e.amount = `Số tiền không được nhỏ hơn số đã ${v.kind === 'lend' ? 'thu' : 'trả'} (${money(paid)})`;
      if (!v.person.trim()) e.person = 1;
      if (Object.keys(e).length) return failForm(e);
      if (!D.wallets.some(w => w.id === v.wallet)) v.wallet = D.wallets[0].id;
      const lend = v.kind === 'lend', date = RE_D.test(v.date) ? v.date : todayStr();
      const nd = { id: F.id || 'd_' + newId(), kind: v.kind, person: v.person.trim().slice(0, 60), amount: v.amount, date, due: RE_D.test(v.due) ? v.due : '', note: v.note.trim().slice(0, 120), createdAt: old ? old.createdAt : Date.now() };
      const pt = old && principalTx(old);
      const ok = commit(() => {
        upsert(D.debts, nd);
        upsert(D.tx, { id: pt ? pt.id : newId(), type: lend ? 'out' : 'in', amount: nd.amount, cat: lend ? 'sys_lend' : 'sys_borrow', wallet: v.wallet,
          note: nd.person, date, createdAt: pt ? pt.createdAt : Date.now(), debtId: nd.id, debtRole: 'principal' });
      });
      if (!ok) return;
      S.debtKind = nd.kind;
      if (old) { openForm(debtDetail(nd.id)); toast('Đã cập nhật khoản nợ'); } else { closeSheet(); toast(lend ? 'Đã thêm khoản cho vay' : 'Đã thêm khoản đi vay'); }
      render();
    }
  };
}
function debtDetail(id) {
  const get = () => D.debts.find(x => x.id === id);
  return {
    id, kind: 'debtview',
    title: () => { const d = get(); return d ? (d.kind === 'lend' ? 'Cho vay · ' : 'Đi vay · ') + d.person : 'Khoản nợ'; },
    body: () => {
      const d = get(); if (!d) return '';
      const lend = d.kind === 'lend', left = debtLeft(d), paid = d.amount - left, color = DEBT_C[d.kind];
      const overdue = left > 0 && d.due && d.due < todayStr(), p = principalTx(d);
      const pays = debtTx(d).filter(t => t.debtRole === 'pay').sort((a, b) => b.date.localeCompare(a.date) || b.createdAt - a.createdAt);
      let h = `<div class="card pad"><div class="kv first"><span>${lend ? 'Còn phải thu' : 'Còn phải trả'}</span>${left === 0 ? '<span class="badge green">Đã tất toán</span>' : overdue ? '<span class="badge red">Quá hạn</span>' : ''}</div>
        <div class="big num">${money(left)}</div><div class="prog"><i style="width:${paid / d.amount * 100}%;background:${color}"></i></div>
        <div class="kv"><span>Đã ${lend ? 'thu' : 'trả'} ${money(paid)}</span><span>Tổng ${money(d.amount)}</span></div></div>`;
      h += `<div class="card" style="margin-top:12px"><div class="kvrow"><span>${lend ? 'Ngày cho vay' : 'Ngày vay'}</span><span>${dmy(d.date)}</span></div>
        <div class="kvrow"><span>Hạn trả</span><span class="${overdue ? 'neg' : ''}">${d.due ? dmy(d.due) : 'Không đặt'}</span></div>
        ${D.wallets.length > 1 && p ? `<div class="kvrow"><span>Ví</span><span>${esc(walletOf(p.wallet).name)}</span></div>` : ''}
        ${d.note ? `<div class="kvrow"><span>Ghi chú</span><span>${esc(d.note)}</span></div>` : ''}</div>`;
      h += flabel(lend ? 'Lịch sử thu nợ' : 'Lịch sử trả nợ');
      h += pays.length ? `<div class="card">${pays.map(t => `<div class="item">${ci(SYS[t.cat])}<div class="mid"><div class="nm num">${money(t.amount)}</div><div class="nt">${dmy(t.date)}${D.wallets.length > 1 ? ' · ' + esc(walletOf(t.wallet).name) : ''}</div></div><button class="xbtn" data-act="pay-del" data-id="${t.id}" aria-label="Xóa lần thanh toán">${ic('x')}</button></div>`).join('')}</div>`
        : `<p class="hint">Chưa có lần ${lend ? 'thu' : 'trả'} nào.</p>`;
      return h;
    },
    foot: () => {
      const d = get(); if (!d) return '';
      return `<button class="btn del" data-act="debt-del" aria-label="Xóa khoản nợ">${ic('trash')}</button><button class="btn sec2" data-act="debt-edit">Sửa</button>`
        + (debtLeft(d) > 0 ? `<button class="btn pri" data-act="debt-pay">${d.kind === 'lend' ? 'Thu nợ' : 'Trả nợ'}</button>` : '');
    }
  };
}
function payForm(id) {
  const d = D.debts.find(x => x.id === id), p = principalTx(d), lend = d.kind === 'lend', left = debtLeft(d);
  return {
    id, err: {}, v: { amount: left, wallet: p && D.wallets.some(w => w.id === p.wallet) ? p.wallet : D.wallets[0].id, date: todayStr() },
    title: () => (lend ? 'Thu nợ · ' : 'Trả nợ · ') + d.person,
    body: () => {
      const v = F.v, e = F.err;
      return `<p class="hint" style="margin-top:4px">Còn ${lend ? 'phải thu' : 'phải trả'} ${money(left)}</p>` + amountField(v.amount, lend ? 'in' : 'out', e.amount)
        + `<div class="quick"><button data-act="f-set" data-v="${left}">Toàn bộ</button><button data-act="f-set" data-v="${Math.round(left / 2)}">Một nửa</button></div>`
        + (D.wallets.length > 1 ? flabel(lend ? 'Nhận vào ví' : 'Trả từ ví') + walletChips(v.wallet, 'f-wallet') : '')
        + flabel('Ngày') + dateField('date', v.date);
    },
    foot: () => saveFoot(false),
    save() {
      const v = F.v;
      if (!(v.amount > 0)) return failForm({ amount: 1 });
      if (v.amount > left) return failForm({ amount: `Tối đa ${money(left)}` });
      const date = RE_D.test(v.date) ? v.date : todayStr();
      const ok = commit(() => D.tx.push({ id: newId(), type: lend ? 'in' : 'out', amount: v.amount, cat: lend ? 'sys_collect' : 'sys_repay', wallet: v.wallet,
        note: d.person, date, createdAt: Date.now(), debtId: d.id, debtRole: 'pay' }));
      if (!ok) return;
      openForm(debtDetail(d.id));
      toast(v.amount === left ? 'Đã tất toán khoản nợ' : 'Đã ghi nhận ' + money(v.amount));
    }
  };
}

/* =========================================================
   13. HỘP XÁC NHẬN & THÔNG BÁO NHANH
   ========================================================= */
let dlgResolve = null;
function ask(o) {
  $('dTitle').textContent = o.title; $('dText').textContent = o.text;
  $('dOk').textContent = o.ok || 'Xóa'; $('dOk').className = 'btn ' + (o.danger === false ? 'pri' : 'danger');
  $('dIcon').className = 'ei' + (o.danger === false ? ' info' : ''); $('dIcon').innerHTML = ic(o.icon || 'trash', 22);
  $('dlg').classList.add('show');
  return new Promise(res => { dlgResolve = res; });
}
function closeDlg(val) { $('dlg').classList.remove('show'); if (dlgResolve) { dlgResolve(val); dlgResolve = null; } }
let toastT;
function toast(text) {
  const t = $('toast'); t.textContent = text; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2600);
}

/* =========================================================
   14. SAO LƯU & KHÔI PHỤC
   ========================================================= */
async function exportData() {
  if (!D.tx.length && !D.debts.length && !D.recurring.length) return toast('Chưa có dữ liệu để sao lưu');
  const payload = JSON.stringify({ app: 'so-thu-chi', version: 2, exportedAt: new Date().toISOString(), data: D });
  const name = `so-thu-chi-${todayStr()}.json`;
  const done = () => { Store.markBackup(); render(); toast('Đã tạo tệp sao lưu'); };
  let file = null;
  try { file = new File([payload], name, { type: 'application/json' }); } catch (e) {}
  if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title: 'Sao lưu Sổ Thu Chi' }); return done(); }
    catch (e) { if (e && e.name === 'AbortError') return; }
  }
  try {
    const url = URL.createObjectURL(file || new Blob([payload], { type: 'application/json' }));
    const a = document.createElement('a'); a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    done();
  } catch (e) { toast('Không tạo được tệp sao lưu'); }
}
function mergeArr(target, src) {
  const idx = new Map(target.map((x, i) => [x.id, i]));
  let added = 0;
  src.forEach(x => { if (idx.has(x.id)) target[idx.get(x.id)] = x; else { idx.set(x.id, target.length); target.push(x); added++; } });
  return added;
}
function importFile(f) {
  const rd = new FileReader();
  rd.onload = () => {
    let inc;
    try {
      const j = JSON.parse(rd.result);
      if (j && j.version === 2 && j.data) inc = sanitize(j.data);
      else {
        const arr = Array.isArray(j) ? j : (j && Array.isArray(j.transactions) ? j.transactions : null);
        if (!arr) throw new Error('format');
        inc = sanitize({ tx: arr.map(t => Object.assign({}, t, { wallet: t && t.wallet ? t.wallet : D.wallets[0].id })) });
      }
    } catch (e) { return toast('Tệp không đúng định dạng sao lưu'); }
    if (!inc.tx.length && !inc.wallets.length && !inc.debts.length && !inc.recurring.length) return toast('Tệp không có dữ liệu hợp lệ');
    let added = 0;
    const ok = commit(() => {
      ['wallets', 'categories', 'recurring', 'debts'].forEach(k => mergeArr(D[k], inc[k]));
      added = mergeArr(D.tx, inc.tx);
      Object.assign(D.budgets, inc.budgets);
    });
    if (ok) toast(added ? `Đã khôi phục ${fmt(added)} giao dịch mới` : 'Dữ liệu trong tệp đã có sẵn trên máy');
  };
  rd.onerror = () => toast('Không đọc được tệp');
  rd.readAsText(f);
}

/* =========================================================
   15. SỰ KIỆN
   ========================================================= */
const findRec = id => D.recurring.find(x => x.id === id);
const go = fn => { fn(); window.scrollTo(0, 0); };
const ACT = {
  prev() { if (S.m === 0) { S.m = 11; S.y--; } else S.m--; render(); },
  next() { if (S.m === 11) { S.m = 0; S.y++; } else S.m++; render(); },
  pickm(b) { const [y, m] = b.dataset.v.split('-').map(Number); S.y = y; S.m = m; render(); },
  tab(b) { go(() => { S.view = b.dataset.v; S.page = null; render(); }); },
  page(b) { go(() => { S.page = b.dataset.v; render(); }); if (S.page === 'search') setTimeout(() => { try { $('sq').focus(); } catch (e) {} }, 60); },
  back() { go(() => { S.page = null; render(); }); },
  filter(b) { S.filter = b.dataset.v; render(); },
  stat(b) { S.statType = b.dataset.v; render(); },
  qtype(b) { S.qType = b.dataset.v; updateSearch(); },
  debtkind(b) { S.debtKind = b.dataset.v; render(); },
  cattype(b) { S.catType = b.dataset.v; render(); },
  add() { openForm(txForm({})); focusAmount(); },
  transfer() { openForm(txForm({ type: 'transfer' })); focusAmount(); },
  tx(b) {
    const t = D.tx.find(x => x.id === b.dataset.id); if (!t) return;
    if (t.debtId && D.debts.some(d => d.id === t.debtId)) return openForm(debtDetail(t.debtId));
    openForm(txForm({ tx: t }));
  },
  'rec-log'(b) { const r = findRec(b.dataset.id); if (r) { openForm(txForm({ occ: { r, ym: b.dataset.v, date: occDate(r, b.dataset.v) } })); focusAmount(); } },
  'rec-skip'(b) { const r = findRec(b.dataset.id), ym = b.dataset.v; if (r && commit(() => { if (!r.done.includes(ym)) r.done.push(ym); })) toast('Đã bỏ qua kỳ này'); },
  'rec-new'() { openForm(txForm({ mode: 'recur' })); focusAmount(); },
  rec(b) { const r = findRec(b.dataset.id); if (r) openForm(txForm({ mode: 'recur', recur: r })); },
  'wallet-new'() { openForm(walletForm()); },
  wallet(b) { const w = D.wallets.find(x => x.id === b.dataset.v); if (w) openForm(walletForm(w)); },
  'budget-new'() { openForm(budgetForm()); focusAmount(); },
  budget(b) { openForm(budgetForm(b.dataset.v)); },
  'cat-new'() { openForm(catForm(null, S.catType)); },
  cat(b) { const c = D.categories.find(x => x.id === b.dataset.v); if (c) openForm(catForm(c)); },
  'debt-new'() { openForm(debtForm()); focusAmount(); },
  debt(b) { openForm(debtDetail(b.dataset.id)); },
  'debt-edit'() { const d = D.debts.find(x => x.id === F.id); if (d) openForm(debtForm(d)); },
  'debt-pay'() { openForm(payForm(F.id)); },
  async 'debt-del'() {
    const id = F.id, d = D.debts.find(x => x.id === id); if (!d) return;
    const n = debtTx(d).length;
    if (!(await ask({ title: 'Xóa khoản nợ này?', text: `Khoản nợ và ${n} giao dịch liên quan sẽ bị xóa, số dư ví được tính lại.` }))) return;
    if (commit(() => { D.debts = D.debts.filter(x => x.id !== id); D.tx = D.tx.filter(t => t.debtId !== id); })) { closeSheet(); toast('Đã xóa khoản nợ'); }
  },
  async 'pay-del'(b) {
    const id = b.dataset.id;
    if (!(await ask({ title: 'Xóa lần thanh toán này?', text: 'Số còn nợ và số dư ví sẽ được tính lại.' }))) return;
    if (commit(() => { D.tx = D.tx.filter(t => t.id !== id); }) && F) drawForm();
  },
  export() { exportData(); },
  import() { $('fileIn').click(); },
  close() { closeSheet(); },
  dno() { closeDlg(false); },
  dyes() { closeDlg(true); },
  /* thao tác trong biểu mẫu */
  'f-type'(b) {
    const v = F.v; v.type = b.dataset.v; F.err = {};
    if (v.type === 'transfer') { if (!v.toWallet || v.toWallet === v.wallet) v.toWallet = (D.wallets.find(w => w.id !== v.wallet) || {}).id || null; }
    else if (v.cat && !D.categories.some(c => c.id === v.cat && c.type === v.type)) v.cat = null;
    drawForm();
  },
  'f-kind'(b) { F.v.kind = b.dataset.v; drawForm(); },
  'f-cat'(b) { F.v.cat = b.dataset.v; delete F.err.cat; drawForm(); },
  'f-wallet'(b) { F.v.wallet = b.dataset.v; delete F.err.towallet; drawForm(); },
  'f-towallet'(b) { F.v.toWallet = b.dataset.v; delete F.err.towallet; drawForm(); },
  'f-icon'(b) { F.v.i = b.dataset.v; drawForm(); },
  'f-color'(b) { F.v.c = b.dataset.v; drawForm(); },
  'f-hidden'() { F.v.hidden = !F.v.hidden; drawForm(); },
  'f-repeat'() { F.v.repeat = !F.v.repeat; drawForm(); },
  'f-quick'(b) { setAmount(Math.min((F.v.amount || 0) + Number(b.dataset.v), 9999999999999)); },
  'f-set'(b) { setAmount(Number(b.dataset.v)); },
  'f-save'() { F.save(); },
  'f-del'() { F.del(); }
};
function setAmount(n) {
  F.v.amount = n; const el = document.querySelector('#shBody [data-f=amount]');
  if (el) el.value = n > 0 ? fmt(n) : '';
  const er = $('err-amount'); if (er) er.classList.remove('show');
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]');
  if (!b) return;
  const fn = ACT[b.dataset.act];
  if (!fn) return;
  if (b.dataset.act.startsWith('f-') || ['debt-edit', 'debt-pay', 'debt-del'].includes(b.dataset.act)) { if (!F) return; }
  fn(b);
});
function onField(e) {
  const el = e.target;
  if (el.id === 'sq') { S.q = el.value; updateSearch(); return; }
  if (!F || !el.dataset || !el.dataset.f) return;
  const k = el.dataset.f;
  if (el.classList.contains('money')) {
    const dg = el.value.replace(/\D/g, '').replace(/^0+/, '').slice(0, 13);
    el.value = dg ? fmt(Number(dg)) : '';
    F.v[k] = dg ? Number(dg) : 0;
  } else F.v[k] = el.value;
  if (F.err && F.err[k]) { delete F.err[k]; const er = $('err-' + k); if (er) er.classList.remove('show'); }
  if (k === 'name' && F.namePh) { const pv = document.querySelector('#shBody .preview .nm'); if (pv) pv.textContent = el.value || F.namePh; }
}
document.addEventListener('input', onField);
document.addEventListener('change', onField);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if ($('dlg').classList.contains('show')) closeDlg(false); else closeSheet(); return; }
  if (e.key === 'Enter' && F && e.target.dataset && e.target.dataset.f && e.target.type === 'text' && !e.target.classList.contains('money')) { e.preventDefault(); F.save(); }
});
$('fileIn').addEventListener('change', e => { const f = e.target.files && e.target.files[0]; if (f) importFile(f); e.target.value = ''; });

/* =========================================================
   16. KHỞI ĐỘNG
   ========================================================= */
document.querySelectorAll('[data-ic]').forEach(el => { el.outerHTML = ic(el.dataset.ic); });
Store.load();
render();
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
})();
