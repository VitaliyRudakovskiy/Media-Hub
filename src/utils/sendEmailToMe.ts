import emailjs from '@emailjs/browser'

import { serviceId, templateToMeId, userId } from './config'

const sendEmailToMe = async (email: string, topic: string, message: string) => {
  if (serviceId && templateToMeId && userId) {
    await emailjs.send(
      serviceId,
      templateToMeId,
      {
        from_name: email,
        topic,
        message,
      },
      userId
    )
  }
}

export default sendEmailToMe
