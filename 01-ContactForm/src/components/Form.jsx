export default function Form() {
  return (
    <form className="form">
      <label htmlFor="name" className="input-item name" required>
        Name
        <input type="text" name="name" id="name" className="input-field" />
      </label>
      <label htmlFor="email" className="input-item email" required>
        Company Email
        <input type="email" name="email" id="email" className="input-field" />
      </label>
      <label htmlFor="company-size" className="input-item size">
        Company Size
        <select
          name="company-size"
          id="company-size"
          className="input-field dropdown"
        >
          <option value="sm">50-100 employees</option>
          <option value="md">100-200 employees</option>
          <option value="lg">Over 200 employees</option>
        </select>
      </label>
      <label htmlFor="subject" className="input-item subject">
        Subject
        <select name="subject" id="subject" className="input-field dropdown">
          <option value="">Building Landing Pages</option>
          <option value="">About Pricing</option>
          <option value="">Other</option>
        </select>
      </label>
      <label htmlFor="message" className="input-item message">
        Message
        <textarea
          name="message"
          id="message"
          className="input-field message-field"
        ></textarea>
      </label>
      <label htmlFor="consent" className="input-item consent">
        <input
          type="checkbox"
          name="consent"
          id="consent"
          className="checkbox"
          required
        />
        I consent to being contacted by the team.
      </label>
      <button className="button">Contact Sales</button>
    </form>
  );
}
