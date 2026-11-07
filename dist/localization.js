// Chinese display layer. Scientific coordinates, scene names and selection rules stay in the original bundle.
const dictionary = await fetch(new URL('./zh-CN.json', import.meta.url)).then(response => {
  if (!response.ok) throw new Error('中文词典加载失败');
  return response.json();
});
const number = (value, digits = value >= 100 ? 0 : value >= 10 ? 1 : 2) =>
  value.toLocaleString('zh-CN', { maximumFractionDigits: digits });
export function zh(text) {
  if (dictionary[text]) return dictionary[text];
  let match;
  if ((match = text.match(/^Andromeda (.+)$/))) return `仙女座 ${match[1]} 矮星系`;
  if ((match = text.match(/^([\d.,]+) million km from Earth$/))) return `距地球 ${number(Number(match[1].replaceAll(',', '')) * 100)} 万千米`;
  if ((match = text.match(/^([\d.,]+) million light-years$/))) return `${number(Number(match[1].replaceAll(',', '')) * 100)} 万光年`;
  if ((match = text.match(/^([\d.,]+) billion light-years$/))) return `${number(Number(match[1].replaceAll(',', '')) * 10)} 亿光年`;
  if ((match = text.match(/^([\d.,]+) light-years$/))) return `${match[1]} 光年`;
  if ((match = text.match(/^Farthest galaxy known at ([\d.,]+) billion light-years$/))) return `原作收录的最遥远已知星系，距今 ${number(Number(match[1]) * 10)} 亿光年`;
  if ((match = text.match(/^([\d.,]+) known icy bodies beyond Neptune$/))) return `海王星外侧 ${match[1]} 个已知冰质天体`;
  if ((match = text.match(/^([\d.,]+) light-years out since the 1920s$/))) return `自 20 世纪 20 年代起，已传播 ${match[1]} 光年`;
  if ((match = text.match(/^(.+) from the Sun, back in (\d+)$/))) return `距太阳 ${match[1]}，将于 ${match[2]} 年回归`;
  if ((match = text.match(/^(.+) from the Sun$/))) return `距太阳 ${match[1]}`;
  if ((match = text.match(/^([\d.]+) billion years ago$/))) return `${number(Number(match[1]) * 10)} 亿年前`;
  return text; // Catalogue identifiers such as NGC 1300 and TRAPPIST-1 are retained.
}
export function distance(metres) {
  const ly = metres / 9460730472580800;
  if (ly > 46504650000) return null;
  if (metres < 1000) return `${number(metres)} 米`;
  if (metres < 1e9) return `${number(Math.round(metres / 1000), 0)} 千米`;
  const minutes = metres / 17987547480;
  if (minutes < 60) return `${number(minutes)} 光分`;
  if (minutes < 2880) return `${number(minutes / 60)} 光时`;
  if (ly < .1) return `${number(minutes / 1440)} 光日`;
  if (ly < 10000) return `${number(ly)} 光年`;
  if (ly < 1e8) return `${number(ly / 10000)} 万光年`;
  return `${number(ly / 1e8)} 亿光年`;
}
export function lightTime(metres) {
  const seconds = metres / 299792458;
  if (seconds < .1 || metres > 0xa155863bd7ba0) return '';
  // Round first, then carry units to avoid “1 分 60 秒”.
  if (seconds < 60) return `${number(seconds, seconds < 10 ? 1 : 0)} 秒`;
  if (seconds < 3600) { const total = Math.round(seconds); return `${Math.floor(total / 60)} 分 ${total % 60} 秒`; }
  if (seconds < 172800) { const total = Math.round(seconds / 60); return `${Math.floor(total / 60)} 小时 ${total % 60} 分`; }
  return `${Math.round(seconds / 86400)} 天`;
}
function quantity(value) {
  const step = 10 ** Math.max(0, Math.floor(Math.log10(value)) - 1);
  const rounded = Math.round(value / step) * step;
  if (rounded >= 1e12) return `${number(rounded / 1e12, 1)} 万亿`;
  if (rounded >= 1e8) return `${number(rounded / 1e8, 1)} 亿`;
  if (rounded >= 1e4) return `${number(rounded / 1e4, 1)} 万`;
  return number(rounded, 0);
}
export function facts(elapsed, rates) {
  const short = Math.round(elapsed) < 30;
  const seconds = short ? 60 : Math.round(elapsed);
  const time = [Math.floor(seconds / 60) ? `${Math.floor(seconds / 60)} 分` : '', seconds % 60 ? `${seconds % 60} 秒` : ''].filter(Boolean).join(' ');
  const q = key => quantity(seconds * rates[key]);
  return [short ? '在短短一分钟里' : `在你滚动探索的 ${time}里`,
    `地球的自转，带着吉萨移动了 ${q('giza')} 千米`,
    `地球绕太阳运行了 ${q('earth')} 千米`,
    `太阳绕银河系运行了 ${q('sun')} 千米`,
    `银河系与仙女座星系，又靠近了 ${q('andromeda')} 千米`,
    `太阳将 ${q('hydrogen')} 吨氢聚变成了氦`,
    `阳光给予地球的能量，足够全人类使用 ${q('sunlightDays')} 天`,
    `${q('neutrinos')} 个来自太阳的中微子穿过了你的指甲`,
    `地球上发生了 ${q('lightning')} 次闪电`,
    `${q('births')} 个婴儿来到世界`,
    `一个成年人的身体生成了 ${q('cells')} 个新细胞`,
    `静息的心脏跳动 ${q('heart')} 次，泵送了 ${q('blood')} 升血液`,
    `一个静息的成年人呼吸了 ${q('breaths')} 次`,
    `全世界人们的心脏，一共跳动了 ${q('allHearts')} 次`,
    `全世界人们，一共呼吸了 ${q('allBreaths')} 次`];
}
