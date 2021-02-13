import { default as axios } from 'axios'

export = {
  postLog: (url: string) => (data: Object) =>
    axios.post(url, data)
}

