import { default as axios } from 'axios'

interface DatadogParams {
  // ddsource: 'github-events',
  ddsource: string,
  message: Object // TODO: make more specific

}

export = (postLog: PostLogFn) => (message: Object) => {
  return axios.post('https://http-intake.logs.datadoghq.com/v1/input',
    { ...DatadogParams, message })

}


interface PostLogFn {
  (arg: DatadogParams): Promise<string>;
}
