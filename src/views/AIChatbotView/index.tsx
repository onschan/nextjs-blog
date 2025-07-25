import * as styles from "./styles";

import Layout from "./layout";

export default function AIChatbotView() {
  return (
    <Layout>
      <iframe css={styles.iframe} src="https://ai.onschan.me" title="AI Chatbot" />
    </Layout>
  );
}
