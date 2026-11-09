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

        <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
        <script src="script.js"></script>
        

    });

}

// Initialise EmailJS
emailjs.init({
    publicKey: "nFtXlH9nt4yRy7wHC"
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const button = document.getElementById("submitBtn");
    const status = document.getElementById("formStatus");

    button.disabled = true;
    button.textContent = "Sending...";

    try {

        await emailjs.sendForm(
            "service_x737bzg",
            "template_0p2bl6f",
            form
        );

        status.textContent =
            "Thank you! Your enquiry has been sent.";

        status.style.color = "green";

        form.reset();

    } catch (error) {

        console.error(error);

        status.textContent =
            "Unable to send your message. Please try again.";

        status.style.color = "red";

    } finally {

        button.disabled = false;
        button.textContent = "Send Message";

    }
});

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
