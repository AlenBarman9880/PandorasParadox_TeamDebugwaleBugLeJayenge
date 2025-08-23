// Decision flow
const questions = {
  start: {
    text: "What symptom are you experiencing?",
    options: [
      { text: "🤒 Fever", next: "fever" },
      { text: "🤕 Headache", next: "headache" },
      { text: "🤢 Stomach Pain", next: "stomach" },
      { text: "🤧 Cough/Cold", next: "cold" },
      { text: "🦠 Sore Throat", next: "throat" },
      { text: "🤮 Vomiting", next: "vomiting" },
      { text: "🤒 Body Ache", next: "bodyache" },         
      { text: "😵 Dizziness", next: "dizziness" },        
      { text: "😰 Shortness of Breath", next: "breath" }, 
      { text: "😴 Fatigue", next: "fatigue" },            
      { text: "👁️ Eye Irritation", next: "eye" }          
    ]
  },
  throat: {
    text: "Is your sore throat accompanied by difficulty swallowing?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "throat_fever" }
    ]
  },
  throat_fever: {
    text: "Do you have a fever with your sore throat?",
    options: [
      { text: "Yes", next: "throat_spots" },
      { text: "No", result: "✅ Gargle with warm salt water and rest your voice." }
    ]
  },
  throat_spots: {
    text: "Do you see white spots or pus on your tonsils?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Gargle with warm salt water and rest your voice." }
    ]
  },
  vomiting: {
    text: "Are you unable to keep fluids down for more than 12 hours?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "vomiting_blood" }
    ]
  },
  vomiting_blood: {
    text: "Are you vomiting blood?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "vomiting_diarrhea" }
    ]
  },
  vomiting_diarrhea: {
    text: "Do you have diarrhea along with vomiting?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Take small sips of water and rest." }
    ]
  },
  bodyache: { 
    text: "Is your body ache severe and persistent?",
    options: [
      { text: "Yes", next: "bodyache_swelling" },
      { text: "No", next: "bodyache_fever" }
    ]
  },
  bodyache_swelling: {
    text: "Is there swelling or redness in the affected area?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Rest and consider a warm bath." }
    ]
  },
  bodyache_fever: {
    text: "Do you have a fever with your body ache?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Rest and consider a warm bath." }
    ]
  },
  dizziness: { 
    text: "Are you experiencing fainting or loss of consciousness?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "dizziness_duration" }
    ]
  },
  dizziness_duration: {
    text: "Has your dizziness lasted more than 1 hour?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Sit or lie down and drink water." }
    ]
  },
  breath: { 
    text: "Is your shortness of breath sudden or severe?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "breath_chestpain" }
    ]
  },
  breath_chestpain: {
    text: "Do you have chest pain along with shortness of breath?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "breath_duration" }
    ]
  },
  breath_duration: {
    text: "Has your shortness of breath lasted more than 2 days?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Rest and monitor your symptoms." }
    ]
  },
  fatigue: { 
    text: "Is your fatigue interfering with daily activities?",
    options: [
      { text: "Yes", next: "fatigue_duration" },
      { text: "No", result: "✅ Ensure adequate sleep and nutrition." }
    ]
  },
  fatigue_duration: {
    text: "Has your fatigue lasted more than a week?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Ensure adequate sleep and nutrition." }
    ]
  },
  eye: { 
    text: "Is your eye irritation accompanied by vision changes?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "eye_discharge" }
    ]
  },
  eye_discharge: {
    text: "Is there yellow or green discharge from your eye?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Rinse eyes with clean water and avoid rubbing." }
    ]
  },
  fever: {
    text: "Is your fever above 102°F?",
    options: [
      { text: "Yes", next: "fever_duration" },
      { text: "No", next: "fever_other_symptoms" }
    ]
  },
  fever_duration: {
    text: "Has your fever lasted more than 2 days?",
    options: [
      { text: "Yes", next: "fever_rash" },
      { text: "No", result: "🏥 Visit the campus clinic for a checkup." }
    ]
  },
  fever_rash: {
    text: "Do you have a rash along with the fever?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", result: "🏥 Visit the campus clinic for a checkup." }
    ]
  },
  fever_other_symptoms: {
    text: "Do you have body aches or chills?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Take rest and stay hydrated." }
    ]
  },
  headache: {
    text: "Is your headache severe and sudden?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "headache_duration" }
    ]
  },
  headache_duration: {
    text: "Has your headache lasted more than 2 days?",
    options: [
      { text: "Yes", next: "headache_vision" },
      { text: "No", next: "headache_nausea" }
    ]
  },
  headache_vision: {
    text: "Do you have vision changes or sensitivity to light?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "headache_nausea" }
    ]
  },
  headache_nausea: {
    text: "Do you feel nauseous or have you vomited?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Rest and avoid screen time." }
    ]
  },
  stomach: {
    text: "Do you have severe or sharp stomach pain?",
    options: [
      { text: "Yes", next: "stomach_location" },
      { text: "No", next: "stomach_duration" }
    ]
  },
  stomach_location: {
    text: "Is the pain localized to the lower right side?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "stomach_vomit" }
    ]
  },
  stomach_vomit: {
    text: "Are you vomiting blood or have black stools?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "stomach_duration" }
    ]
  },
  stomach_duration: {
    text: "Has the pain lasted more than 24 hours?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Take light food and rest." }
    ]
  },
  cold: {
    text: "Do you have breathing difficulty with your cold?",
    options: [
      { text: "Yes", result: "🚨 Seek urgent medical help immediately." },
      { text: "No", next: "cold_fever" }
    ]
  },
  cold_fever: {
    text: "Do you have a high fever (above 102°F) with your cold?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", next: "cold_duration" }
    ]
  },
  cold_duration: {
    text: "Has your cold lasted more than 7 days?",
    options: [
      { text: "Yes", result: "🏥 Visit the campus clinic for a checkup." },
      { text: "No", result: "✅ Rest, drink warm fluids, and monitor." }
    ]
  }
};

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

// Load question
function loadQuestion(key) {
  const q = questions[key];
  questionEl.textContent = q.text;
  optionsEl.innerHTML = "";
  resultEl.classList.add("hidden");

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => {
      if (opt.next) {
        loadQuestion(opt.next);
      } else if (opt.result) {
        showResult(opt.result);
      }
    };
    optionsEl.appendChild(btn);
  });
}

// Show result
function showResult(text) {
  questionEl.textContent = "Result";
  optionsEl.innerHTML = "";
  resultEl.textContent = text;
  resultEl.classList.remove("hidden");
}

// Start app
loadQuestion("start");
