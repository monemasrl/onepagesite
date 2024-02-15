

function submitContactForm(formState: { message: string }, formData: any) {
    const nome = formData.get("nome");
    const cognome = formData.get("cognome");
    const email = formData.get("email");
    const messaggio = formData.get("messaggio");

    if (nome == "" || cognome == "" || email == "" || messaggio == "") {
        return { message: "Compilare tutti i campi" };
    }
    if (!email.includes("@")) {
        return { message: "Email non valida" };
    }
    if (messaggio.length < 10) {
        return { message: "Messaggio troppo corto" };
    }
    return { message: "Messaggio inviato" };

}
export { submitContactForm };