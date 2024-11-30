export function loadFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    // Create content for the footer
    const footerText = document.createElement('p');
    footerText.textContent = "© 2024 The Adams' Kitchen. All Rights Reserved.";
    footerText.classList.add('footer-text');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const email = document.createElement('p');
    email.textContent = "Email: fakecontact@theadamskitchen.com";

    contactInfo.append(email);

    // Create social media links
    const socialLinks = document.createElement('div');
    socialLinks.classList.add('social-links');

    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/kiptalam1/";
    githubLink.target = "_blank";
    githubLink.textContent = "Github";

    const linkedinLink = document.createElement('a');
    linkedinLink.target = "_blank";
    linkedinLink.href = "https://www.linkedin.com/in/adams-kiptalam/";
    linkedinLink.textContent = "Linkedin";

    socialLinks.append(githubLink, linkedinLink);

    // Append all elements to the footer
    footer.append(footerText, contactInfo, socialLinks);

    // Add the footer to the page
    document.body.appendChild(footer);
    return footer;
}
