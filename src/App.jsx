import { useState } from "react";
import "./App.css";

const supplements = [
  {
    id: "vitc", name: "비타민 C", type: "essential", emoji: "🍋",
    oneLiner: "항산화 및 컨디션 관리 루틴",
    timing: ["아침", "점심", "저녁"],
    purpose: "항산화 루틴 보조, 컨디션 관리",
    memo: "가루 형태 선호. 식중·식후 섭취 권장 (위가 약한 경우 특히)",
    purchaseUrl: "https://smartstore.naver.com/bitaroutine/products/9603444836?nl-query=%EB%B9%84%ED%83%80%EB%A3%A8%ED%8B%B4&nl-ts-pid=jmk%2FysqVJLRssBPQHF8-262355&NaPm=ct%3Dmpo5uzvs%7Cci%3De6129cb534ec8826029127a66456d7d771984afd%7Ctr%3Dsls%7Csn%3D9149506%7Chk%3Da03cfb6416cfe66e2112cfc83ba531dcae61ae0f",
    caution: null,
  },
  {
    id: "propolis", name: "프로폴리스", type: "essential", emoji: "🍯",
    oneLiner: "면역 루틴 보조", timing: ["아침"],
    purpose: "면역 루틴 보조", memo: "식중·식후 섭취 권장",
    purchaseUrl: "https://kr.iherb.com/pr/california-gold-nutrition-bee-propolis-2x-concentrated-extract-500-mg-90-veggie-caps/61839?rcode=MDL247",
    caution: null,
  },
  {
    id: "probiotics", name: "유산균", type: "essential", emoji: "🦠",
    oneLiner: "장 건강 루틴 보조", timing: ["아침"],
    purpose: "장 건강 루틴 보조", memo: "아침 공복 또는 식전 섭취 권장 (제품에 따라 다름)",
    purchaseUrl: "https://kr.iherb.com/pr/california-gold-nutrition-lactobif-30-probiotics-30-billion-cfu-60-veggie-capsules/64009?rcode=MDL247",
    caution: null,
  },
  {
    id: "vitdk", name: "비타민 D + K2", type: "essential", emoji: "☀️",
    oneLiner: "뼈, 칼슘, 전반적 건강 루틴 보조", timing: ["아침"],
    purpose: "뼈 건강 및 칼슘 흡수 루틴 보조",
    memo: "지용성 비타민 — 지방이 포함된 식사 후라면 아침이 아니어도 됩니다.",
    purchaseUrl: "https://kr.iherb.com/pr/california-gold-nutrition-vitamin-d3-k2-as-mk-7-180-veggie-capsules/124745?rcode=MDL247",
    caution: null,
  },
  {
    id: "magnesium", name: "마그네슘", type: "essential", emoji: "🌙",
    oneLiner: "근육 이완 및 저녁 회복 루틴 보조", timing: ["저녁"],
    purpose: "저녁 회복 루틴, 근육 이완", memo: "저녁 식후 또는 자기 전 루틴으로 활용",
    purchaseUrl: "https://kr.iherb.com/pr/now-foods-magnesium-glycinate-180-tablets-100-mg-per-tablet/88819?rcode=MDL247",
    caution: null,
  },
  {
    id: "vitb", name: "비타민 B군", type: "essential", emoji: "⚡",
    oneLiner: "에너지 대사 루틴 보조", timing: ["아침"],
    purpose: "에너지 대사 루틴 보조",
    memo: "식중·식후 섭취. 소변 색이 노랗게 변할 수 있으나 일반적인 현상입니다.",
    purchaseUrl: "https://kr.iherb.com/pr/thorne-basic-b-complex-60-capsules/18791?rcode=MDL247",
    caution: null,
  },
  {
    id: "omega3", name: "오메가3", type: "essential", emoji: "🐟",
    oneLiner: "건강한 지방 섭취 및 혈관 건강 루틴 보조", timing: ["아침"],
    purpose: "건강한 지방 섭취 루틴 보조",
    memo: "지용성 — 지방이 포함된 식사 후라면 아침이 아니어도 됩니다. 액상 형태 선호.",
    purchaseUrl: "https://kr.iherb.com/pr/nordic-naturals-omega-3-lemon-1-560-mg-8-fl-oz-237-ml/4191?rcode=MDL247",
    caution: null,
  },
  {
    id: "acv", name: "애사비", type: "essential", emoji: "🍎",
    oneLiner: "식사 전후 소화 루틴 보조", timing: ["점심", "저녁"],
    purpose: "소화 루틴 보조", memo: "찬물 한 컵에 밥숟가락 한 숟갈 기준. 반드시 물에 희석하세요.",
    purchaseUrl: "https://www.coupang.com/vp/products/7992079901?itemId=21231478569&vendorItemId=3034901717&q=%EC%95%A0%EC%82%AC%EB%B9%84&searchId=86e17e268512512&sourceType=search&itemsCount=60&searchRank=18&rank=18&traceId=mpo6s0bd",
    caution: "반드시 물에 충분히 희석해서 섭취하세요. 위가 약한 경우 공복 섭취를 피하고, 식후 1번만 권장합니다. 원액을 그대로 마시지 마세요.",
  },
  {
    id: "epicor", name: "에피코르", type: "optional", emoji: "🛡️",
    oneLiner: "면역 루틴 보조", timing: ["점심"],
    purpose: "면역 루틴 보조", memo: "하루 1알. 시간대 관계없이 편한 때 섭취 가능",
    purchaseUrl: "https://kr.iherb.com/pr/california-gold-nutrition-epicor-dried-yeast-fermentate-500-mg-120-veggie-capsules/95778?rcode=MDL247",
    caution: null,
  },
  {
    id: "glutamine", name: "글루타민", type: "optional", emoji: "💪",
    oneLiner: "장 건강 및 회복 루틴 보조", timing: ["아침"],
    purpose: "장 건강 및 회복 루틴 보조", memo: "아침 공복 섭취 권장",
    purchaseUrl: "https://kr.iherb.com/pr/doctor-s-best-pure-l-glutamine-powder-10-6-oz-300-g/85597?rcode=MDL247",
    caution: "⚠️ 반드시 찬물에 타서 드세요. 뜨거운 물에 타면 맛이 매우 불쾌할 수 있습니다.",
  },
  {
    id: "glutathione", name: "글루타치온", type: "optional", emoji: "✨",
    oneLiner: "항산화 루틴 보조", timing: ["아침"],
    purpose: "항산화 루틴 보조", memo: "지방이 포함된 식사 후라면 아침이 아니어도 됩니다.",
    purchaseUrl: "https://shop.wisely.store/products/353",
    caution: null,
  },
  {
    id: "msm", name: "MSM", type: "optional", emoji: "🦴",
    oneLiner: "관절, 피부, 회복 루틴 보조", timing: ["아침", "점심", "저녁"],
    purpose: "관절·피부·회복 루틴 보조", memo: "비타민 C와 함께 섭취하는 것을 개인적으로 선호합니다.",
    purchaseUrl: "https://kr.iherb.com/pr/doctor-s-best-msm-with-optimsm-1-500-mg-120-tablets/3?rcode=MDL247",
    caution: null,
  },
  {
    id: "berberine", name: "베르베린", type: "optional", emoji: "🌿",
    oneLiner: "식후 혈당 관리 루틴 보조", timing: ["점심", "저녁"],
    purpose: "식후 혈당 관리 루틴 보조", memo: "식사량이 많거나 혈당이 튈 것 같은 식사 후 1알. 하루 1번 기준.",
    purchaseUrl: "https://kr.iherb.com/pr/natural-factors-wellbetx-berberine-120-vegetarian-capsules-500-mg-per-capsule/85657?rcode=MDL247",
    caution: "약물을 복용 중인 경우 베르베린은 약물 상호작용 가능성이 있습니다. 반드시 전문가와 상담 후 섭취하세요.",
  },
  {
    id: "digestive", name: "소화효소", type: "optional", emoji: "🔬",
    oneLiner: "소화 기능 보조 루틴", timing: ["아침", "점심", "저녁"],
    purpose: "소화 효소 보충 루틴 보조", memo: "식중 또는 식사 직후 섭취 권장",
    purchaseUrl: "https://kr.iherb.com/pr/now-foods-super-enzymes-90-capsules/51072?rcode=MDL247",
    caution: null,
  },
];

const scheduleData = {
  morning: {
    label: "아침", emoji: "🌅", color: "morning",
    empty: {
      label: "공복 권장",
      items: [
        { name: "글루타민", note: "선택", warning: "⚠️ 반드시 찬물에 타서 드세요! 뜨거운 물에 타면 맛이 매우 불쾌할 수 있습니다.", isWarning: true },
        { name: "유산균", note: "필수", warning: null, isWarning: false },
      ],
    },
    withFood: {
      label: "식중 또는 식후",
      items: [
        { name: "비타민 C", note: "필수", warning: null },
        { name: "MSM", note: "선택", warning: null },
        { name: "비타민 D + K2", note: "필수", warning: null },
        { name: "비타민 B군", note: "필수", warning: null },
        { name: "오메가3", note: "필수", warning: null },
        { name: "글루타치온", note: "선택", warning: null },
      ],
    },
    footNote: "💡 글루타치온, 비타민 D+K2, 오메가3는 꼭 아침이 아니어도 됩니다. 지방이 포함된 식사 후라면 언제든 섭취하기 좋습니다.",
  },
  noon: {
    label: "점심", emoji: "☀️", color: "noon",
    items: [
      { name: "비타민 C", note: "필수" },
      { name: "애사비", note: "필수" },
      { name: "에피코르", note: "선택" },
      { name: "베르베린", note: "선택" },
      { name: "MSM", note: "선택" },
    ],
  },
  evening: {
    label: "저녁", emoji: "🌙", color: "evening",
    items: [
      { name: "비타민 C", note: "필수" },
      { name: "애사비", note: "필수" },
      { name: "베르베린", note: "선택" },
      { name: "MSM", note: "선택" },
      { name: "마그네슘", note: "필수" },
    ],
  },
};

const rulesData = [
  {
    id: "rule-vitc", title: "비타민 C 섭취 루틴", emoji: "🍋", color: "essential",
    items: [
      "개인 루틴 기준 메가도스 스타일입니다 (모두에게 권장하는 방식이 아닙니다).",
      "처음에는 3,000mg 제품 하루 한 포로 시작합니다.",
      "이후 두 포, 세 포로 점진적으로 늘릴 수 있습니다.",
      "피곤한 날에는 네 포, 다섯 포까지 늘리는 개인 루틴입니다.",
      "가루 형태를 선호하지만, 어렵다면 알약 형태도 가능합니다.",
    ],
    cautions: [
      "⚠️ 고용량 섭취 시 속 불편함, 설사 등 소화기 반응이 생길 수 있습니다. 개인 허용량은 소화 반응을 기준으로 판단하세요.",
      "위가 약한 경우 반드시 식중 또는 식후에 섭취하세요. 위가 약한 분께 식전 섭취는 권장하지 않습니다.",
    ],
  },
  {
    id: "rule-msm", title: "MSM 섭취 루틴", emoji: "🦴", color: "optional",
    items: [
      "선택 영양제입니다. 개인 필요에 따라 결정하세요.",
      "섭취한다면 비타민 C와 함께 먹는 것을 개인적으로 선호합니다.",
      "개인 루틴 기준 메가도스 스타일을 선호합니다 (모두에게 권장하는 방식이 아닙니다).",
    ],
    cautions: [],
  },
  {
    id: "rule-acv", title: "애사비 섭취 루틴", emoji: "🍎", color: "essential",
    items: [
      "개인 루틴 기준 식전·식후 모두 가능합니다.",
      "위가 약한 경우 식후 1번만 권장합니다.",
      "개인 기준량: 찬물 한 컵에 밥숟가락 한 숟갈 정도.",
    ],
    cautions: [
      "⚠️ 반드시 물에 충분히 희석해서 섭취하세요. 원액 그대로 마시지 마세요.",
      "위가 약한 경우 공복 섭취를 피하세요.",
    ],
  },
  {
    id: "rule-berberine", title: "베르베린 섭취 루틴", emoji: "🌿", color: "optional",
    items: [
      "하루 1번 기준.",
      "식사량이 많거나 혈당이 튈 것 같은 식사 후 1알 섭취하는 루틴입니다.",
    ],
    cautions: ["⚠️ 약물을 복용 중인 경우 베르베린은 약물 상호작용 가능성이 있습니다. 반드시 전문가와 상담 후 섭취하세요."],
  },
  {
    id: "rule-epicor", title: "에피코르 섭취 루틴", emoji: "🛡️", color: "optional",
    items: ["하루 1알.", "시간대 관계없이 편한 때 섭취 가능합니다."],
    cautions: [],
  },
  {
    id: "rule-omega3", title: "오메가3 섭취 루틴", emoji: "🐟", color: "essential",
    items: [
      "액상 형태를 선호합니다. 어렵다면 알약 형태도 가능합니다.",
      "개인 기준 하루 최소 1,500mg 이상 섭취를 목표로 합니다.",
    ],
    cautions: ["💡 제품마다 EPA/DHA 함량이 다릅니다. 반드시 제품 라벨의 EPA+DHA 총 함량을 확인하세요."],
  },
  {
    id: "rule-magnesium", title: "마그네슘 섭취 루틴", emoji: "🌙", color: "essential",
    items: ["저녁 섭취를 선호합니다.", "저녁 식후 또는 자기 전 루틴으로 활용합니다."],
    cautions: [],
  },
];

function SafetyBanner() {
  return (
    <div className="safety-banner">
      <span className="safety-icon">⚕️</span>
      <p><strong>이 매뉴얼은 개인 루틴 참고용이며 의료 조언이 아닙니다.</strong>{" "}임신·수유 중이거나 약을 복용 중이거나 질환이 있는 경우 전문가와 상담하세요.</p>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-badge">개인 루틴 · 의료 조언 아님</div>
      <h1 className="hero-title">영양제 섭취<br className="mobile-br" /> 매뉴얼</h1>
      <p className="hero-subtitle">필수 영양제와 선택 영양제를<br className="mobile-br" /> 시간대별로 정리한 개인 루틴 가이드</p>
      <div className="hero-stats">
        <div className="stat-chip stat-essential"><span>필수</span><strong>8종</strong></div>
        <div className="stat-chip stat-optional"><span>선택</span><strong>6종</strong></div>
        <div className="stat-chip stat-neutral"><span>총</span><strong>14종</strong></div>
      </div>
    </section>
  );
}

function FilterTabs({ activeFilter, setActiveFilter }) {
  return (
    <div className="filter-tabs no-print">
      {[{ value: "all", label: "전체 보기" }, { value: "essential", label: "✅ 필수" }, { value: "optional", label: "🔵 선택" }].map((tab) => (
        <button key={tab.value} className={`filter-tab ${activeFilter === tab.value ? "filter-tab--active" : ""}`} onClick={() => setActiveFilter(tab.value)}>{tab.label}</button>
      ))}
    </div>
  );
}

function SummaryGrid({ activeFilter }) {
  const filtered = activeFilter === "all" ? supplements : supplements.filter((s) => s.type === activeFilter);
  return (
    <section className="section">
      <h2 className="section-title">간단 효능 요약</h2>
      <div className="summary-grid">
        {filtered.map((s) => (
          <div key={s.id} className={`summary-card summary-card--${s.type}`}>
            <div className="summary-emoji">{s.emoji}</div>
            <div className="summary-name">{s.name}</div>
            <div className="summary-liner">{s.oneLiner}</div>
            <div className={`type-badge type-badge--${s.type}`}>{s.type === "essential" ? "필수" : "선택"}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SupplementCard({ supplement }) {
  const { name, type, emoji, timing, purpose, memo, purchaseUrl, caution } = supplement;
  return (
    <div className={`supp-card supp-card--${type}`}>
      <div className="supp-card-header">
        <span className="supp-emoji">{emoji}</span>
        <div className="supp-header-text">
          <h3 className="supp-name">{name}</h3>
          <div className={`type-badge type-badge--${type}`}>{type === "essential" ? "필수" : "선택"}</div>
        </div>
      </div>
      <div className="supp-timing">
        {timing.map((t) => (
          <span key={t} className={`timing-tag timing-tag--${t === "아침" ? "morning" : t === "점심" ? "noon" : "evening"}`}>
            {t === "아침" ? "🌅" : t === "점심" ? "☀️" : "🌙"} {t}
          </span>
        ))}
      </div>
      <p className="supp-purpose"><strong>목적:</strong> {purpose}</p>
      <p className="supp-memo"><strong>메모:</strong> {memo}</p>
      {caution && <div className="supp-caution">{caution}</div>}
      <a href={purchaseUrl} className={`purchase-btn purchase-btn--${type}`} target="_blank" rel="noopener noreferrer">
        🛒 구매 링크 {purchaseUrl === "#" ? "(추가 예정)" : "바로가기"}
      </a>
    </div>
  );
}

function SupplementsSection({ activeFilter }) {
  const filtered = activeFilter === "all" ? supplements : supplements.filter((s) => s.type === activeFilter);
  const essentials = filtered.filter((s) => s.type === "essential");
  const optionals = filtered.filter((s) => s.type === "optional");
  return (
    <section className="section">
      <h2 className="section-title">영양제 상세 정보</h2>
      {essentials.length > 0 && (<><h3 className="subsection-title subsection-title--essential">✅ 필수 영양제</h3><div className="supp-grid">{essentials.map((s) => <SupplementCard key={s.id} supplement={s} />)}</div></>)}
      {optionals.length > 0 && (<><h3 className="subsection-title subsection-title--optional">🔵 선택 영양제</h3><div className="supp-grid">{optionals.map((s) => <SupplementCard key={s.id} supplement={s} />)}</div></>)}
    </section>
  );
}

function ScheduleSection({ checkedItems, toggleCheck }) {
  return (
    <section className="section">
      <h2 className="section-title">하루 섭취 스케줄</h2>
      <div className="schedule-block schedule-block--morning">
        <div className="schedule-header"><span className="schedule-emoji">🌅</span><h3 className="schedule-title">아침</h3></div>
        <div className="schedule-sub">
          <div className="schedule-sub-label schedule-sub-label--empty">공복 권장</div>
          {scheduleData.morning.empty.items.map((item) => {
            const checkId = `morning-empty-${item.name}`;
            return (
              <div key={item.name} className={`schedule-item ${item.isWarning ? "schedule-item--warning" : ""}`}>
                <label className="check-label">
                  <input type="checkbox" checked={!!checkedItems[checkId]} onChange={() => toggleCheck(checkId)} className="check-input" />
                  <span className="check-custom" />
                  <span className="check-text">{item.name}<span className={`note-badge note-badge--${item.note === "필수" ? "essential" : "optional"}`}>{item.note}</span></span>
                </label>
                {item.warning && <div className="item-warning">{item.warning}</div>}
              </div>
            );
          })}
        </div>
        <div className="schedule-sub">
          <div className="schedule-sub-label schedule-sub-label--withfood">식중 또는 식후</div>
          {scheduleData.morning.withFood.items.map((item) => {
            const checkId = `morning-food-${item.name}`;
            return (
              <div key={item.name} className="schedule-item">
                <label className="check-label">
                  <input type="checkbox" checked={!!checkedItems[checkId]} onChange={() => toggleCheck(checkId)} className="check-input" />
                  <span className="check-custom" />
                  <span className="check-text">{item.name}<span className={`note-badge note-badge--${item.note === "필수" ? "essential" : "optional"}`}>{item.note}</span></span>
                </label>
              </div>
            );
          })}
        </div>
        <div className="schedule-footnote">{scheduleData.morning.footNote}</div>
      </div>
      <div className="schedule-block schedule-block--noon">
        <div className="schedule-header"><span className="schedule-emoji">☀️</span><h3 className="schedule-title">점심</h3></div>
        {scheduleData.noon.items.map((item) => {
          const checkId = `noon-${item.name}`;
          return (
            <div key={item.name} className="schedule-item">
              <label className="check-label">
                <input type="checkbox" checked={!!checkedItems[checkId]} onChange={() => toggleCheck(checkId)} className="check-input" />
                <span className="check-custom" />
                <span className="check-text">{item.name}<span className={`note-badge note-badge--${item.note === "필수" ? "essential" : "optional"}`}>{item.note}</span></span>
              </label>
            </div>
          );
        })}
      </div>
      <div className="schedule-block schedule-block--evening">
        <div className="schedule-header"><span className="schedule-emoji">🌙</span><h3 className="schedule-title">저녁</h3></div>
        {scheduleData.evening.items.map((item) => {
          const checkId = `evening-${item.name}`;
          return (
            <div key={item.name} className="schedule-item">
              <label className="check-label">
                <input type="checkbox" checked={!!checkedItems[checkId]} onChange={() => toggleCheck(checkId)} className="check-input" />
                <span className="check-custom" />
                <span className="check-text">{item.name}<span className={`note-badge note-badge--${item.note === "필수" ? "essential" : "optional"}`}>{item.note}</span></span>
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TodayChecklist({ checkedItems, toggleCheck, resetAll }) {
  const allItems = [
    ...scheduleData.morning.empty.items.map((i) => `morning-empty-${i.name}`),
    ...scheduleData.morning.withFood.items.map((i) => `morning-food-${i.name}`),
    ...scheduleData.noon.items.map((i) => `noon-${i.name}`),
    ...scheduleData.evening.items.map((i) => `evening-${i.name}`),
  ];
  const checkedCount = allItems.filter((id) => checkedItems[id]).length;
  const progress = Math.round((checkedCount / allItems.length) * 100);
  return (
    <section className="section">
      <h2 className="section-title">오늘의 체크리스트</h2>
      <div className="progress-wrap">
        <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: `${progress}%` }} /></div>
        <div className="progress-text">{checkedCount} / {allItems.length} 완료 ({progress}%)</div>
      </div>
      {[
        { label: "🌅 아침 (공복)", color: "morning", items: scheduleData.morning.empty.items.map((i) => ({ id: `morning-empty-${i.name}`, name: i.name, note: i.note })) },
        { label: "🌅 아침 (식중/식후)", color: "morning", items: scheduleData.morning.withFood.items.map((i) => ({ id: `morning-food-${i.name}`, name: i.name, note: i.note })) },
        { label: "☀️ 점심", color: "noon", items: scheduleData.noon.items.map((i) => ({ id: `noon-${i.name}`, name: i.name, note: i.note })) },
        { label: "🌙 저녁", color: "evening", items: scheduleData.evening.items.map((i) => ({ id: `evening-${i.name}`, name: i.name, note: i.note })) },
      ].map((group) => (
        <div key={group.label} className={`checklist-group checklist-group--${group.color}`}>
          <div className="checklist-group-label">{group.label}</div>
          <div className="checklist-items">
            {group.items.map((item) => (
              <label key={item.id} className="checklist-item">
                <input type="checkbox" checked={!!checkedItems[item.id]} onChange={() => toggleCheck(item.id)} className="check-input" />
                <span className="check-custom" />
                <span className={`check-text ${checkedItems[item.id] ? "check-text--done" : ""}`}>{item.name}</span>
                <span className={`note-badge note-badge--${item.note === "필수" ? "essential" : "optional"}`}>{item.note}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button className="reset-btn no-print" onClick={resetAll}>🔄 오늘 체크 초기화</button>
    </section>
  );
}

function RulesSection() {
  return (
    <section className="section">
      <h2 className="section-title">섭취 루틴 상세 규칙</h2>
      <div className="rules-grid">
        {rulesData.map((rule) => (
          <div key={rule.id} className={`rule-card rule-card--${rule.color}`}>
            <div className="rule-header"><span className="rule-emoji">{rule.emoji}</span><h3 className="rule-title">{rule.title}</h3></div>
            <ul className="rule-list">{rule.items.map((item, i) => (<li key={i} className="rule-item"><span className="rule-dot" />{item}</li>))}</ul>
            {rule.cautions.length > 0 && (<div className="rule-cautions">{rule.cautions.map((c, i) => <div key={i} className="rule-caution-item">{c}</div>)}</div>)}
          </div>
        ))}
      </div>
    </section>
  );
}

function FooterActions() {
  return (
    <footer className="footer no-print">
      <SafetyBanner />
      <div className="footer-actions">
        <button className="footer-btn footer-btn--print" onClick={() => window.print()}>🖨️ 인쇄하기</button>
        <button className="footer-btn footer-btn--share" onClick={() => { if (navigator.share) { navigator.share({ title: "영양제 섭취 매뉴얼", url: window.location.href }); } else { navigator.clipboard.writeText(window.location.href); alert("링크가 복사되었습니다!"); } }}>🔗 링크 공유</button>
      </div>
      <p className="footer-note">이 매뉴얼은 개인 루틴 기록 목적으로만 작성되었습니다.</p>
    </footer>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [checkedItems, setCheckedItems] = useState({});
  const toggleCheck = (id) => setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  const resetAll = () => setCheckedItems({});
  return (
    <div className="app-wrapper">
      <SafetyBanner />
      <nav className="top-nav no-print">
        <span className="nav-logo">💊 영양제 매뉴얼</span>
        <div className="nav-links">
          <a href="#schedule">스케줄</a>
          <a href="#checklist">체크리스트</a>
          <a href="#rules">규칙</a>
        </div>
      </nav>
      <main className="main-content">
        <HeroSection />
        <div className="section"><FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} /></div>
        <SummaryGrid activeFilter={activeFilter} />
        <SupplementsSection activeFilter={activeFilter} />
        <div id="schedule"><ScheduleSection checkedItems={checkedItems} toggleCheck={toggleCheck} /></div>
        <div id="checklist"><TodayChecklist checkedItems={checkedItems} toggleCheck={toggleCheck} resetAll={resetAll} /></div>
        <div id="rules"><RulesSection /></div>
      </main>
      <FooterActions />
    </div>
  );
}