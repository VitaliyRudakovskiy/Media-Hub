import emailjs from '@emailjs/browser'

import { serviceId, templateToUserId, userId } from './config'

const sendEmailToUser = async (email: string, topic: string) => {
  if (serviceId && templateToUserId && userId) {
    await emailjs.send(
      serviceId,
      templateToUserId,
      {
        to_email: email,
        topic,
      },
      userId
    )
  }
}

export default sendEmailToUser
