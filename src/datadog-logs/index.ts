import { default as axios } from 'axios'

const DatadogParams = {
  // ddsource: 'github-events',
  ddsource: 'aaron-test',
}

export = (message: Object) => {
  return axios.post('https://http-intake.logs.datadoghq.com/v1/input',
    { ...DatadogParams, message })

}
