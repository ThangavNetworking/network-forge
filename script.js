const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

console.log("Network Forge website loaded!");

const contactForm = document.getElementById("contactForm");

const mailtoLink = `mailto:contactus@network-forge.com?subject=${subject}&body=${body}`;

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();

        const recipient = "contactus@network-forge.com";

        const subject =
            encodeURIComponent("Website Enquiry - " + service);

        const body = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Service: " + service + "\n\n" +
            "Message:\n" + message
        );

        const mailtoLink =
            "mailto:" + recipient +
            "?subject=" + subject +
            "&body=" + body;

        document.getElementById("formStatus").textContent =
            "Opening your email application...";

        window.location.href = mailtoLink;

    });

}
/* NETWORKING FUNDAMENTALS QUIZ */

const networkQuiz = document.getElementById("networkQuiz");

if (networkQuiz) {

    networkQuiz.addEventListener("submit", function (event) {

        event.preventDefault();

        const answers = {
            q1: "b",
            q2: "a",
            q3: "b"
        };

        let score = 0;

        const totalQuestions =
            Object.keys(answers).length;

        for (const question in answers) {

            const selectedAnswer =
                networkQuiz.querySelector(
                    `input[name="${question}"]:checked`
                );

            if (
                selectedAnswer &&
                selectedAnswer.value === answers[question]
            ) {
                score++;
            }

        }

        const result =
            document.getElementById("quizResult");

        if (score === totalQuestions) {

            result.textContent =
                `Excellent! You scored ${score}/${totalQuestions}. All answers are correct!`;

        } else {

            result.textContent =
                `You scored ${score}/${totalQuestions}. Review the lesson and try again!`;

        }

    });

}
