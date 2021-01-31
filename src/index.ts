import { Probot } from "probot";

export = (app: Probot) => {
  app.log.warn("HALP")
  app.webhooks.onAny(async (context) => {
    console.log(JSON.stringify(context))
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
