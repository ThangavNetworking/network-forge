const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

console.log("Network Forge website loaded!");

const contactForm = document.getElementById("contactForm");

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
