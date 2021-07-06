import { notification } from "antd";

export const openErrorNotificationWithIcon = (message: string, description: string) => {
    notification['error']({
        message: `${message}`,
        description: `${description}`
      });
}