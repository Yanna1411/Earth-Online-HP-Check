const interactionData = {
  "阿司匹林|华法林": {
    canTake: false,
    reason: "阿司匹林与华法林联合使用会增加出血风险，尤其是消化道出血。"
  },
  "阿司匹林|布洛芬": {
    canTake: false,
    reason: "阿司匹林与布洛芬同时服用可能降低阿司匹林抗血小板作用，并增加胃肠道刺激。"
  },
  "阿司匹林|对乙酰氨基酚": {
    canTake: true,
    reason: "通常情况下可以一起使用，但仍需按照剂量和医生建议服用。"
  },
  "华法林|甲氨蝶呤": {
    canTake: false,
    reason: "华法林与甲氨蝶呤可增加出血和骨髓抑制风险。"
  },
  "布洛芬|洛伐他汀": {
    canTake: true,
    reason: "这两种药物暂无明确严重相互作用，但请根据医生建议使用。"
  },
  "洛伐他汀|红霉素": {
    canTake: false,
    reason: "红霉素可抑制洛伐他汀代谢，增加肌病风险。"
  },
  "对乙酰氨基酚|酒精": {
    canTake: false,
    reason: "对乙酰氨基酚与酒精合用可增加肝损伤风险。"
  },
  "布洛芬|对乙酰氨基酚": {
    canTake: true,
    reason: "可以一起使用，但长期使用时注意肾脏负担。"
  },
  "苯海拉明|酒精": {
    canTake: false,
    reason: "苯海拉明与酒精一起可能加重嗜睡和头晕。"
  },
  "伪麻黄碱|咖啡因": {
    canTake: false,
    reason: "伪麻黄碱与咖啡因一起可能增加心率和血压。"
  },
  "维生素C|补铁剂": {
    canTake: true,
    reason: "维生素C帮助铁吸收，可以一起服用。"
  },
  "钙补充剂|四环素": {
    canTake: false,
    reason: "钙补充剂可能干扰四环素的吸收，建议间隔服用。"
  },
  "抗酸药|布洛芬": {
    canTake: true,
    reason: "抗酸药可以减少布洛芬对胃的刺激，通常一起使用。"
  },
  "维生素D|钙补充剂": {
    canTake: true,
    reason: "维生素D帮助钙吸收，常见组合补充。"
  },
  "感冒药|抗组胺药": {
    canTake: true,
    reason: "许多感冒药已包含抗组胺成分，可以一起使用但注意剂量。"
  },
  "褪黑素|酒精": {
    canTake: false,
    reason: "褪黑素与酒精一起可能加重嗜睡和影响睡眠质量。"
  },
  "褪黑素|咖啡因": {
    canTake: false,
    reason: "咖啡因可能干扰褪黑素的效果，影响睡眠。"
  },
  "鱼油|阿司匹林": {
    canTake: false,
    reason: "鱼油与阿司匹林一起可能增加出血风险。"
  },
  "鱼油|华法林": {
    canTake: false,
    reason: "鱼油可能增强华法林的抗凝作用，增加出血风险。"
  },
  "补铁剂|钙补充剂": {
    canTake: false,
    reason: "钙可能干扰铁的吸收，建议间隔服用。"
  },
  "补铁剂|维生素C": {
    canTake: true,
    reason: "维生素C帮助铁吸收，可以一起服用。"
  },
  "镁补充剂|钙补充剂": {
    canTake: true,
    reason: "镁和钙一起补充常见，有助于骨骼健康。"
  },
  "维生素D|镁补充剂": {
    canTake: true,
    reason: "维生素D和镁一起补充有助于钙吸收。"
  },
  "阿莫西林|避孕药": {
    canTake: false,
    reason: "阿莫西林可能降低避孕药的效果，建议额外避孕措施。"
  },
  "奥美拉唑|钙补充剂": {
    canTake: false,
    reason: "奥美拉唑可能干扰钙吸收，建议间隔服用。"
  },
  "二甲双胍|酒精": {
    canTake: false,
    reason: "二甲双胍与酒精一起可能增加乳酸酸中毒风险。"
  },
  "硝苯地平|葡萄柚汁": {
    canTake: false,
    reason: "葡萄柚汁可能增加硝苯地平的血药浓度，导致血压过低。"
  },
  "维生素A|维生素D": {
    canTake: false,
    reason: "过量维生素A和D可能导致中毒，建议分开补充。"
  },
  "维生素B|维生素C": {
    canTake: true,
    reason: "维生素B和C一起补充常见，有助于能量代谢。"
  },
  "锌补充剂|钙补充剂": {
    canTake: true,
    reason: "锌和钙一起补充有助于骨骼和免疫健康。"
  }
};

const drugDetails = {
  "阿司匹林": {
    dosage: "成人常用剂量：81-325mg/天",
    howToTake: "口服，饭后服用",
    whenToTake: "根据需要或医生建议，通常每日一次"
  },
  "华法林": {
    dosage: "根据INR调整，通常2.5-10mg/天",
    howToTake: "口服，固定时间服用",
    whenToTake: "通常晚上服用"
  },
  "布洛芬": {
    dosage: "成人200-400mg，每4-6小时",
    howToTake: "口服，饭后服用",
    whenToTake: "疼痛或发热时服用"
  },
  "对乙酰氨基酚": {
    dosage: "成人325-650mg，每4-6小时",
    howToTake: "口服，可空腹或饭后",
    whenToTake: "疼痛或发热时服用"
  },
  "苯海拉明": {
    dosage: "成人25-50mg，每4-6小时",
    howToTake: "口服",
    whenToTake: "过敏或感冒时服用"
  },
  "伪麻黄碱": {
    dosage: "成人30-60mg，每4-6小时",
    howToTake: "口服",
    whenToTake: "鼻塞时服用"
  },
  "维生素C": {
    dosage: "成人500-1000mg/天",
    howToTake: "口服，可饭前或饭后",
    whenToTake: "每日补充"
  },
  "补铁剂": {
    dosage: "成人18-65mg元素铁/天",
    howToTake: "口服，饭后服用",
    whenToTake: "缺铁时补充"
  },
  "钙补充剂": {
    dosage: "成人500-1000mg/天",
    howToTake: "口服，饭后服用",
    whenToTake: "每日补充"
  },
  "维生素D": {
    dosage: "成人800-2000IU/天",
    howToTake: "口服，可饭前或饭后",
    whenToTake: "每日补充"
  },
  "褪黑素": {
    dosage: "成人1-3mg",
    howToTake: "口服",
    whenToTake: "睡前30分钟服用"
  },
  "鱼油": {
    dosage: "成人1-2g EPA+DHA/天",
    howToTake: "口服，饭中服用",
    whenToTake: "每日补充"
  },
  "镁补充剂": {
    dosage: "成人200-400mg/天",
    howToTake: "口服，饭后服用",
    whenToTake: "每日补充"
  },
  "阿莫西林": {
    dosage: "成人500mg，每8小时",
    howToTake: "口服，可空腹或饭后",
    whenToTake: "感染时按疗程服用"
  },
  "奥美拉唑": {
    dosage: "成人20mg/天",
    howToTake: "口服，饭前30分钟",
    whenToTake: "胃酸过多时服用"
  },
  "二甲双胍": {
    dosage: "成人500-1000mg，每日2-3次",
    howToTake: "口服，饭中服用",
    whenToTake: "糖尿病治疗时按医生建议"
  },
  "硝苯地平": {
    dosage: "成人10-20mg，每日2-3次",
    howToTake: "口服",
    whenToTake: "高血压时按医生建议"
  },
  "维生素A": {
    dosage: "成人700-900μg/天",
    howToTake: "口服，饭后服用",
    whenToTake: "每日补充"
  },
  "维生素B": {
    dosage: "成人多种B族维生素，按标签",
    howToTake: "口服",
    whenToTake: "每日补充"
  },
  "维生素E": {
    dosage: "成人15mg/天",
    howToTake: "口服",
    whenToTake: "每日补充"
  },
  "锌补充剂": {
    dosage: "成人11-15mg/天",
    howToTake: "口服，饭后服用",
    whenToTake: "缺锌时补充"
  }
};

const sampleDrugs = [
  "阿司匹林",
  "苯海拉明",
  "补铁剂",
  "布洛芬",
  "钙补充剂",
  "二甲双胍",
  "感冒药",
  "褪黑素",
  "红霉素",
  "华法林",
  "甲氨蝶呤",
  "咖啡因",
  "抗酸药",
  "抗组胺药",
  "镁补充剂",
  "洛伐他汀",
  "奥美拉唑",
  "四环素",
  "维生素A",
  "维生素B",
  "维生素C",
  "维生素D",
  "维生素E",
  "伪麻黄碱",
  "硝苯地平",
  "锌补充剂",
  "鱼油",
  "对乙酰氨基酚",
  "酒精"
];

const adviceForm = document.getElementById("adviceForm");
const healthInput = document.getElementById("healthInput");
const adviceResult = document.getElementById("adviceResult");

const drug1Input = document.getElementById("drug1");
const drug2Input = document.getElementById("drug2");
const checkButton = document.getElementById("checkButton");
const resultBox = document.getElementById("result");
const sampleTags = document.getElementById("sampleTags");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchSuggestions = document.getElementById("searchSuggestions");

const allDrugNames = Array.from(new Set([...Object.keys(drugDetails), ...sampleDrugs]));

function normalizeDrugName(name) {
  return name.trim().replace(/\s+/g, "").toLowerCase();
}

function generateAdvice(text) {
  const advice = [];

  if (/高血压|血压高|三高|高盐|咸/.test(text)) {
    advice.push('🥗 建议低盐饮食，多吃蔬菜水果，少吃腌制食品。');
  }
  if (/高血糖|糖尿病|血糖/.test(text)) {
    advice.push('🍠 主食粗细搭配，少糖少油，适量运动。');
  }
  if (/高血脂|胆固醇|血脂/.test(text)) {
    advice.push('🥑 多吃鱼、坚果、燕麦，少油炸，避免动物内脏。');
  }
  if (/肝|转氨酶|脂肪肝/.test(text)) {
    advice.push('🍵 清淡饮食，戒酒，适量运动，控制体重。');
  }
  if (/肾|尿蛋白|肾功能/.test(text)) {
    advice.push('💧 控制蛋白摄入，低盐饮食，避免滥用药物。');
  }
  if (/贫血|铁/.test(text)) {
    advice.push('🥩 多吃瘦肉、动物肝脏、菠菜，搭配维生素C促进吸收。');
  }
  if (/便秘|肠/.test(text)) {
    advice.push('🍠 多吃膳食纤维，喝足够的水，适量运动。');
  }
  if (/失眠|睡眠/.test(text)) {
    advice.push('🌙 保持规律作息，睡前避免咖啡因，适当放松。');
  }
  if (/感冒|咳嗽|发烧/.test(text)) {
    advice.push('😷 多休息，多喝温水，饮食清淡。');
  }
  if (/油腻|重口味|烧烤|甜食|饮料/.test(text)) {
    advice.push('🍬 少吃油腻、烧烤、甜食和含糖饮料，多喝水。');
  }
  if (/水果|蔬菜/.test(text)) {
    advice.push('🍎 每天保证新鲜水果和蔬菜摄入。');
  }
  if (/熬夜|晚睡|失眠/.test(text)) {
    advice.push('🛌 建议早睡早起，保证充足睡眠。');
  }
  if (/运动|锻炼/.test(text)) {
    advice.push('🏃‍♂️ 坚持每周3-5次有氧运动，增强体质。');
  }
  if (/肥胖|超重|体重/.test(text)) {
    advice.push('⚖️ 控制总热量摄入，增加运动，保持健康体重。');
  }
  if (/阿司匹林|布洛芬|对乙酰氨基酚/.test(text)) {
    advice.push('💊 用药请遵医嘱，注意药物相互作用。');
  }

  if (advice.length === 0) {
    advice.push('🌸 生活规律，饮食均衡，保持好心情，有问题请及时就医哦！');
  }

  return advice.map(item => `<li>${item}</li>`).join('');
}

function displayAdvice(text) {
  if (!text.trim()) {
    adviceResult.innerHTML = '<p class="hint">请填写您的健康信息~</p>';
    return;
  }
  adviceResult.innerHTML = `<ul class="advice-list">${generateAdvice(text)}</ul>`;
}

function findInteraction(drugA, drugB) {
  const lowerA = normalizeDrugName(drugA);
  if (!lowerA) {
    return null;
  }

  if (!drugB.trim()) {
    const details = Object.entries(drugDetails).find(([key]) => normalizeDrugName(key) === lowerA);
    return { type: 'details', data: details ? details[1] : null };
  }

  const lowerB = normalizeDrugName(drugB);
  const result = Object.entries(interactionData).find(([key]) => {
    const [x, y] = key.split('|');
    return normalizeDrugName(x) === lowerA && normalizeDrugName(y) === lowerB || normalizeDrugName(x) === lowerB && normalizeDrugName(y) === lowerA;
  });
  return { type: 'interaction', data: result ? result[1] : { canTake: true, reason: '未收录该组合的严重相互作用，建议仍向医生或药师咨询后用药。' } };
}

function renderInteractionResult(drugA, drugB) {
  const result = findInteraction(drugA, drugB);
  if (!normalizeDrugName(drugA)) {
    resultBox.innerHTML = `<p class="hint">请输入药物名称。</p>`;
    return;
  }

  if (!drugB.trim()) {
    if (result.data) {
      resultBox.innerHTML = `
        <p class="good">${drugA} 的使用建议</p>
        <p><strong>常见剂量：</strong>${result.data.dosage}</p>
        <p><strong>服用方式：</strong>${result.data.howToTake}</p>
        <p><strong>服用时机：</strong>${result.data.whenToTake}</p>
      `;
    } else {
      resultBox.innerHTML = `<p class="hint">未找到该药物的详细信息，请检查名称或咨询专业人员。</p>`;
    }
    return;
  }

  const interaction = result.data;
  const statusText = interaction.canTake ? '通常可以一起服用' : '不建议同时服用';
  const statusClass = interaction.canTake ? 'good' : 'bad';

  resultBox.innerHTML = `
    <p class="${statusClass}">${statusText}</p>
    <p><strong>药物组合：</strong>${drugA} + ${drugB}</p>
    <p><strong>说明：</strong>${interaction.reason}</p>
  `;
}

function updateSearchSuggestions(query) {
  const keyword = query.trim().toLowerCase();
  if (!keyword) {
    searchSuggestions.style.display = 'none';
    searchSuggestions.innerHTML = '';
    return;
  }

  const matches = allDrugNames.filter(name => normalizeDrugName(name).includes(keyword) || name.toLowerCase().includes(keyword)).slice(0, 8);
  if (!matches.length) {
    searchSuggestions.innerHTML = `<div class="suggestion-item no-result">未找到匹配药品</div>`;
    searchSuggestions.style.display = 'grid';
    return;
  }

  searchSuggestions.innerHTML = matches.map(name => `<button type="button" class="suggestion-item">${name}</button>`).join('');
  Array.from(searchSuggestions.children).forEach(item => {
    item.addEventListener('click', () => {
      const name = item.textContent || '';
      searchInput.value = name;
      renderInteractionResult(name, '');
      searchSuggestions.style.display = 'none';
    });
  });
  searchSuggestions.style.display = 'grid';
}

function createSampleTags() {
  sampleTags.innerHTML = '';
  sampleDrugs.forEach(drug => {
    const tag = document.createElement('button');
    tag.type = 'button';
    tag.className = 'tag';
    tag.textContent = drug;
    tag.addEventListener('click', () => {
      renderInteractionResult(drug, '');
    });
    sampleTags.appendChild(tag);
  });
}

adviceForm.addEventListener('submit', event => {
  event.preventDefault();
  displayAdvice(healthInput.value);
});

checkButton.addEventListener('click', () => {
  renderInteractionResult(drug1Input.value.trim(), drug2Input.value.trim());
});

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (!query) {
    resultBox.innerHTML = `<p class="hint">请输入药物名称进行搜索。</p>`;
    return;
  }
  renderInteractionResult(query, '');
  searchSuggestions.style.display = 'none';
});

searchInput.addEventListener('input', event => {
  updateSearchSuggestions(event.target.value);
});

document.addEventListener('click', event => {
  if (!searchSuggestions.contains(event.target) && event.target !== searchInput) {
    searchSuggestions.style.display = 'none';
  }
});

createSampleTags();
