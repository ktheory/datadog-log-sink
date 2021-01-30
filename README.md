# datadog-log-sink

> A GitHub App built with [Probot](https://github.com/probot/probot) that App to send GitHub check events to Datadog Logs

## Setup

```sh
# Install dependencies
npm install

# Compile
npm build

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t datadog-log-sink .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> datadog-log-sink
```

## Contributing

If you have suggestions for how datadog-log-sink could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 Aaron Suggs <aaron@ktheory.com>
