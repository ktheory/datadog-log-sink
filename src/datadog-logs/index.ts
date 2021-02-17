interface DatadogParams {
  ddsource: 'github-events',
  message: Object // TODO: make more specific
}
interface PostLogFn {
  (arg: DatadogParams): Promise<string>;
}

export = (postLog: PostLogFn) => (message: DatadogParams) => postLog(message)
