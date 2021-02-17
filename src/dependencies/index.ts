import { default as axios } from 'axios'
import { PostLogFn } from '../datadog-logs'

export = {
  postLog: (url: string) => (data: (Object)) =>
    axios.post(url, data)
      .then(() => 'success')
}
