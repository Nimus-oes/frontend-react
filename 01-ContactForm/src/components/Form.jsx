function Form() {
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
      <label htmlFor="company-size">Company Size</label>
      <select name="company-size" id="company-size">
        <option value="sm" selected>
          50-100 employees
        </option>
        <option value="md">100-200 employees</option>
        <option value="lg">Over 200 employees</option>
      </select>
      <label htmlFor="subject">Subject</label>
      <select name="subject" id="subject">
        <option value="landing-page" selected>
          Building Landing Pages
        </option>
        <option value="pricing">About Pricing</option>
        <option value="others">Others</option>
      </select>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message"></textarea>
      <label htmlFor="consent">
        <input type="checkbox" name="consent" id="consent" /> I consent to being
        contacted by the team.
      </label>
      <button type="submit">Contact Sales</button>
    </form>
  );
}

export default Form;
