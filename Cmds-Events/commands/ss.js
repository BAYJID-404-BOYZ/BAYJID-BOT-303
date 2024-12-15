const axios = require("axios");
const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`,
  );
  return base.data.api;
};

module.exports.config = {
  name: "ss",
  version: "1.6.9",
  credits: "Dipto",
  hasPermssion 0,
  description: "Take a screenshot of a website",
  commandCategory: "utility",
  category: "utility",
  cooldowns: 5,
};
module.exports.run = async function ({ api, event, args }) {
  const url = args.join(" ");
  if (!url) {
    return api.sendMessage("Please provide a URL.", event.threadID);
  }
  try {
    const res = await axios.get(`${await baseApiUrl()}/ss?url=${url}`, {
      responseType: "stream",
    });

    api.sendMessage(
      { body: "Screenshot Saved <😽", attachment: res.data },
      event.threadID,
      event.messageID,
    );
  } catch (error) {
    console.error("Error taking screenshot:", error);
    api.sendMessage("Failed to take a screenshot.", event.threadID);
  }
};
