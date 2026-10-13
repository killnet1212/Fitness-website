const muscleInfo = {
  chest: { label: "ГРУДНЫЕ МЫШЦЫ", title: "Жимы и отжимания", copy: "Начни с контролируемого движения: жим гантелей или отжимания. Не отбивай вес от груди, держи лопатки стабильно.", machines: "Жимовая машина · гантели · скамья", dose: "2–3 подхода × 8–12 повторений" },
  back: { label: "МЫШЦЫ СПИНЫ", title: "Тяги и подтягивания", copy: "Тяни рукоять к корпусу, не дёргай поясницей. Для начала подойдут верхний блок и тяга с опорой грудью.", machines: "Верхний блок · горизонтальная тяга · гантель", dose: "2–3 подхода × 8–12 повторений" },
  legs: { label: "НОГИ И ЯГОДИЦЫ", title: "Приседания и наклоны", copy: "Тренируй переднюю и заднюю поверхность бедра, а также ягодицы. Двигайся в комфортной амплитуде и держи опору устойчивой.", machines: "Жим ногами · сгибание ног · гантели", dose: "2–3 подхода × 8–12 повторений" },
  shoulders: { label: "ПЛЕЧИ", title: "Жимы и подъёмы", copy: "Лёгкие подъёмы гантелей в стороны и жим сидя помогают освоить контроль. Не раскачивай корпус и не гонись за весом.", machines: "Тренажёр жима · гантели · блок", dose: "2–3 подхода × 10–15 повторений" },
  arms: { label: "БИЦЕПС И ТРИЦЕПС", title: "Сгибания и разгибания", copy: "Бицепс сгибает руку, трицепс разгибает. Держи локти спокойно и используй контролируемую амплитуду.", machines: "Гантели · нижний блок · канатная рукоять", dose: "2–3 подхода × 10–15 повторений" },
  core: { label: "МЫШЦЫ КОРПУСА", title: "Стабильность, а не сотни скручиваний", copy: "Кор помогает стабилизировать корпус. Попробуй планку, dead bug и перенос лёгкого веса, сохраняя ровное дыхание.", machines: "Коврик · блочный тренажёр · лёгкая гантель", dose: "2–3 подхода · остановись до потери техники" }
};

document.querySelectorAll(".muscle-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".muscle-tab").forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    const info = muscleInfo[tab.dataset.muscle];
    document.querySelector("#muscle-label").textContent = info.label;
    document.querySelector("#muscle-title").textContent = info.title;
    document.querySelector("#muscle-copy").textContent = info.copy;
    document.querySelector("#muscle-machines").textContent = info.machines;
    document.querySelector("#muscle-dose").textContent = info.dose;
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Открыть меню" : "Закрыть меню");
  mainNav.classList.toggle("is-open", !isOpen);
});
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Открыть меню");
  mainNav.classList.remove("is-open");
}));

document.querySelector("#calorie-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const age = Number(form.get("age"));
  const height = Number(form.get("height"));
  const weight = Number(form.get("weight"));
  const activity = Number(form.get("activity"));
  if (age < 18 || age > 100 || height < 130 || height > 230 || weight < 35 || weight > 250) {
    document.querySelector("#calc-result").textContent = "Проверь введённые данные. Этот ориентир рассчитан только для взрослых от 18 лет.";
    return;
  }
  const sexAdjustment = form.get("sex") === "male" ? 5 : -161;
  const maintenance = Math.round((10 * weight + 6.25 * height - 5 * age + sexAdjustment) * activity);
  const goal = form.get("goal");
  const target = goal === "lose" ? maintenance - 250 : goal === "gain" ? maintenance + 200 : maintenance;
  const goalText = goal === "lose" ? "плавное снижение" : goal === "gain" ? "плавный набор" : "поддержание веса";
  document.querySelector("#calc-result").textContent = `Ориентир для цели «${goalText}»: около ${target.toLocaleString("ru-RU")} ккал в день (поддержание — примерно ${maintenance.toLocaleString("ru-RU")} ккал). Это грубая оценка, не точный рецепт: отслеживай самочувствие и изменения несколько недель; при заболеваниях или сложностях с питанием обратись к специалисту.`;
});

const chatMessages = document.querySelector("#chat-messages");
function addMessage(text, className) {
  const message = document.createElement("div");
  message.className = `message ${className}`;
  message.textContent = text;
  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
function getReply(question) {
  const text = question.toLowerCase();
  if (/подрост|лет|реб[её]н|несоверш/.test(text)) return "Если тебе меньше 18, не нужно худеть или принимать спортивные добавки самостоятельно. Обсуди цель с родителем/опекуном и педиатром. Тренируй технику под присмотром, хорошо ешь и высыпайся.";
  if (/дом|оборудован|инвентар/.test(text)) return "Попробуй 2–3 спокойных круга: приседания к стулу, отжимания от стены/опоры, ягодичный мост и тяга рюкзака. Начни с 8–12 повторов, оставь запас и прекращай при боли. Отдыхай между кругами.";
  if (/худ|сниз|жир|калор/.test(text)) return "Начни с устойчивых привычек: регулярные приёмы пищи, овощи и источник белка, прогулки и сон. Для взрослого подойдёт небольшой дефицит, без голодания. Подросткам и людям с заболеваниями нужен специалист.";
  if (/набр|мас|худой|худая/.test(text)) return "Для постепенного набора добавь питательный перекус или немного увеличь порции, тренируй всё тело 2–3 раза в неделю и следи за восстановлением. Гейнер не обязателен; подростку обсуди набор веса с врачом.";
  if (/креатин|протеин|гейнер|добавк/.test(text)) return "Добавки необязательны. Взрослым креатин моногидрат обычно принимают по 3–5 г ежедневно; протеин — лишь удобная еда, гейнер — калории. До 18 лет не принимай их без согласования с родителем/опекуном и врачом.";
  if (/план|нович|зал|трениров/.test(text)) return "Начни с двух тренировок всего тела в неделю: присед или жим ногами, тяга блока, жим от груди, ягодичный мост и лёгкое упражнение на корпус. Делай по 2 подхода, отрабатывай технику и не тренируйся через боль.";
  return "Начни с простого и безопасного: цель, регулярность, техника и восстановление важнее «идеальной» программы. Расскажи возраст, опыт и где будешь тренироваться — я подскажу общий ориентир. Это демо-помощник, не медицинский совет.";
}
function submitChat(text) {
  const cleanText = text.trim();
  if (!cleanText) return;
  addMessage(cleanText, "user-message");
  window.setTimeout(() => addMessage(getReply(cleanText), "bot-message"), 280);
}
document.querySelector("#chat-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#chat-input");
  submitChat(input.value);
  input.value = "";
});
document.querySelectorAll(".assistant-pills button").forEach((button) => button.addEventListener("click", () => submitChat(button.dataset.prompt)));
document.querySelector(".chat-reset").addEventListener("click", () => {
  chatMessages.replaceChildren();
  addMessage("Привет! Расскажи, какая у тебя цель — тренировки, питание или старт дома? Подросткам я всегда советую подключить взрослого и не садиться на диеты.", "bot-message");
});
