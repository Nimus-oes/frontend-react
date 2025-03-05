export default function Form() {
  return (
    <form>
      <label htmlFor="name">
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="email">
        Company Email
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="company-size">
        Company Size
        <select name="company-size" id="company-size">
          <option value="sm">50-100 employees</option>
          <option value="md">100-200 employees</option>
          <option value="lg">Over 200 employees</option>
        </select>
      </label>
      <label htmlFor="subject">
        Subject
        <select name="subject" id="subject">
          <option value="">Building Landing Pages</option>
          <option value="">About Pricing</option>
          <option value="">Other</option>
        </select>
      </label>
      <label htmlFor="message">
        Message
        <textarea name="message" id="message"></textarea>
      </label>
      <label htmlFor="consent">
        <input type="checkbox" name="consent" id="consent" /> I consent to being
        contacted by the team.
      </label>
      <button>Contact Sales</button>
    </form>
  );
}
