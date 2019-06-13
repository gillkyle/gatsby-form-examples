import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <form method="post" action="https://formspree.io/kgill@getnada.com">
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="_replyto" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  </Layout>
)

export default IndexPage
