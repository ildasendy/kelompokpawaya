const quizData = [
  {
    question: "Apa yang dimaksud dengan lagu populer?",
    options: [
      "Lagu yang hanya dinyanyikan di TV",
      "Lagu yang mudah diingat dan banyak disukai",
      "Lagu yang hanya dinyanyikan oleh penyanyi terkenal",
      "Lagu yang memiliki nada sulit",
    ],
    answer: "Lagu yang mudah diingat dan banyak disukai",
  },
  {
    question: "Jenis musik apa yang termasuk dalam kategori lagu populer?",
    options: ["Jazz", "Keroncong", "Seriosa", "Gambus"],
    answer: "Jazz",
  },
  {
    question: "Siapa penyanyi yang dikenal sebagai Raja Dangdut Indonesia?",
    options: ["Ariel Noah", "Iwan Fals", "Rhoma Irama", "Didi Kempot"],
    answer: "Rhoma Irama",
  },
  {
    question: "Apa karakteristik utama dari lagu pop?",
    options: [
      "Melodi sederhana dan mudah diingat",
      "Hanya menggunakan instrumen klasik",
      "Tempo selalu cepat",
      "Lirik harus menggunakan bahasa Inggris",
    ],
    answer: "Melodi sederhana dan mudah diingat",
  },
  {
    question: "Siapa penyanyi lagu ‘Hati-Hati di Jalan’ yang terkenal?",
    options: ["Afgan", "Tulus", "Raisa", "Fiersa Besari"],
    answer: "Tulus",
  },
];

function startQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  const startButton = document.getElementById("start-quiz-btn");
  const checkButton = document.getElementById("check-quiz-btn");
  const resultContainer = document.getElementById("quiz-result");

  if (!quizContainer || !startButton || !checkButton || !resultContainer) {
    console.error("Elemen tidak ditemukan!");
    return;
  }

  quizContainer.classList.remove("hidden");
  checkButton.classList.remove("hidden");
  startButton.classList.add("hidden");
  resultContainer.classList.add("hidden");

  loadQuiz();
}

function loadQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  quizData.forEach((q, index) => {
    let questionHTML = `<div class='mb-4 quiz-question fade-in'>
            <p class='font-bold'>${index + 1}. ${q.question}</p>
            ${q.options
              .map(
                (opt) =>
                  `<label class="quiz-option"><input type='radio' name='q${index}' value='${opt}'> ${opt}</label><br>`
              )
              .join("")}
        </div>`;
    quizContainer.innerHTML += questionHTML;
  });
}

function checkQuiz() {
  let score = 0;

  quizData.forEach((q, index) => {
    const selectedAnswer = document.querySelector(
      `input[name="q${index}"]:checked`
    );
    if (selectedAnswer && selectedAnswer.value === q.answer) {
      score++;
    }
  });

  const resultContainer = document.getElementById("quiz-result");
  resultContainer.classList.remove("hidden");
  resultContainer.innerHTML = `<p class='result-text'>Skor kamu: <span class='score'>${score}/${quizData.length}</span></p>`;

  resultContainer.classList.add("fade-in");
}

document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hidden-content");

  function revealOnScroll() {
    hiddenElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 50) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden");

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});
