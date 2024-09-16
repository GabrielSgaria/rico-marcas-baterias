export const sendWhatsAppMessage = (message: string) => {
    const phoneNumber = '5504192099393';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
};


export const sendMensage = () => {
    const linkWhatsApp =
        "https://wa.me/" +
        5504192099393 +
        "?text=" +
        encodeURIComponent("Olá, vim através do site da Rico Marcas Baterias!");

    window.open(linkWhatsApp, "_blank");
}

export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};