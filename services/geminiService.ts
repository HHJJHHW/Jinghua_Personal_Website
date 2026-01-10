import { PERSONAL_INFO } from "../constants";

/**
 * 将用户消息发送到后端 /api/chat 接口。
 * 这样做可以保护 API Key 并在服务器端统一管理 AI 逻辑。
 */
export const sendMessageToAI = async (message: string): Promise<string> => {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "API connection failed");
    }

    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error("Client Service Error:", error);
    // 回退错误提示，引导用户通过传统方式联系
    return `I'm sorry, my digital brain is currently recharging. Please feel free to reach out to me directly at ${PERSONAL_INFO.email}!`;
  }
};