import { AIChatbotView } from "@/views";

import { SEO } from "@/components";

export default function AIChatbotPage() {
  return (
    <>
      <SEO
        fullTitle="AI Chatbot | On's Tech Blog"
        title="AI Chatbot"
        description="RAG 아키텍처로 만든 온승찬 포트폴리오 질의응답 AI 챗봇입니다. 이력과 프로젝트에 대해 자유롭게 물어볼 수 있습니다."
        url="/ai-chatbot"
        breadcrumb={[{ name: "AI Chatbot", url: "/ai-chatbot" }]}
      />
      <AIChatbotView />
    </>
  );
}
