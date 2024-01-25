function FormContatti() {
  return (
    <div className="formContatti">
      <h1>Form Contatti</h1>

      <form>
        <label htmlFor="nome">
          Nome:
          <input type="text" name="nome" id="nome" />
        </label>
        <label htmlFor="cognome">
          Cognome:
          <input type="text" name="cognome" id="cognome" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" name="email" id="email" />
        </label>
        <label htmlFor="messaggio">
          Messaggio:
          <textarea name="messaggio" id="messaggio" />
        </label>
        <input type="submit" value="Invia" />
      </form>
    </div>
  );
}
export default FormContatti;
