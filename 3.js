// 1. 核心知识库 (药物详情)
const drugLibrary = [
    { name: "补铁剂", info: "改善贫血", dose: "随餐 100mg", warn: "忌与牛奶同服", icon: "🩸" },
    { name: "鱼油", info: "保护心血管", dose: "每日 2000mg", warn: "凝血异常者慎用", icon: "🐟" },
    { name: "布洛芬", info: "解热镇痛", dose: "饭后 1 片", warn: "肠胃不适者慎用", icon: "🌡️" },
    { name: "褪黑素", info: "助眠", dose: "睡前 1-3mg", warn: "不可长期依赖", icon: "🌙" }
];

// 2. 冲突规则
const conflicts = [
    { pair: ["补铁剂", "牛奶"], msg: "铁与钙同服会降低吸收率，建议间隔 2 小时。" },
    { pair: ["布洛芬", "酒精"], msg: "🚫 严禁！增加胃出血及肝损伤风险。" }
];

document.addEventListener('DOMContentLoaded', () => {
    renderDrugGrid();
    setupTabs();

    // 主功能：生成全景方案
    document.getElementById('generateBtn').onclick = generateComprehensiveReport;

    // 次要功能：快速检测
    document.getElementById('miniCheckBtn').onclick = () => {
        const a = document.getElementById('checkA').value;
        const b = document.getElementById('checkB').value;
        const res = conflicts.find(c => c.pair.includes(a) && c.pair.includes(b));
        document.getElementById('miniResult').innerText = res ? `⚠️ ${res.msg}` : "✨ 暂未发现明确冲突。";
    };
});

function generateComprehensiveReport() {
    const symptom = document.getElementById('symptomText').value;
    const ua = parseFloat(document.getElementById('metricUA').value);
    const drugs = document.getElementById('currentDrugs').value;
    const late = document.getElementById('habitLate').checked;

    let html = `<h3>你的健康综述</h3>`;
    
    // 基于症状的逻辑判断
    if (symptom.includes("疲劳")) {
        html += `<div class="advice-item"><h4>🌙 疲劳管理</h4><p>建议检查铁蛋白指标。既然感到疲劳，除了服药，应确保 23 点前入睡，避免咖啡因过度摄入。</p></div>`;
    }
    
    // 基于体检指标
    if (ua > 420) {
        html += `<div class="advice-item"><h4>🥗 饮食禁忌 (高尿酸)</h4><p>当前尿酸超标，请严格禁食动物内脏、浓肉汤及酒精。建议每日饮水 2500ml 以上。</p></div>`;
    }

    // 基于生活习惯
    if (late) {
        html += `<div class="advice-item"><h4>⏰ 行为修正</h4><p>长期熬夜会显著降低免疫力并加速补剂的代谢。建议睡前温水泡脚，尝试减少屏幕使用。</p></div>`;
    }

    // 默认建议
    if (html === `<h3>你的健康综述</h3>`) {
        html += `<p>请完整填写症状或体检指标，以便获得更精准的建议。</p>`;
    }

    const resultBox = document.getElementById('mainResult');
    document.getElementById('resultContent').innerHTML = html;
    resultBox.classList.remove('hidden');
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

// 标签切换逻辑
function setupTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
            
            e.target.classList.add('active');
            document.getElementById(e.target.dataset.target).classList.remove('hidden');
        };
    });
}

function renderDrugGrid() {
    const grid = document.getElementById('drugGrid');
    drugLibrary.forEach(drug => {
        const div = document.createElement('div');
        div.className = 'mini-drug-card';
        div.innerHTML = `${drug.icon}<br>${drug.name}`;
        div.onclick = () => {
            document.getElementById('modalContent').innerHTML = `
                <h2 class="serif">${drug.icon} ${drug.name}</h2>
                <p><strong>针对：</strong>${drug.info}</p>
                <p><strong>用量：</strong>${drug.dose}</p>
                <p style="color:red"><strong>注意：</strong>${drug.warn}</p>
            `;
            document.getElementById('modalOverlay').classList.remove('hidden');
        };
        grid.appendChild(div);
    });
}

document.getElementById('closeModal').onclick = () => {
    document.getElementById('modalOverlay').classList.add('hidden');
};