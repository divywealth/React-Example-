//import * as SendGrid from '@sendgrid/mail';

class NotificationService {
    async emailNotificationService(mail) {
        try {
            //SendGrid.setApiKey(process.env.REACT_APP_SEND_GRID_KEY);
            //const transport = await SendGrid.send(mail);
           //return transport;
          } catch (error) {
            throw error;
          }
    }
}

export default NotificationService;