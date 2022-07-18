export default function Contact() {
  return (
    <main>
      <article className="mx-6">
        <form className="gap-6 sm-gap-2 grid grid-col-1 mx-auto sm-max-w-50">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>

          <button className="bg-teal-6 p-button text-teal-1">Send</button>
        </form>
      </article>
    </main>
  );
}
