import { useEffect } from 'react';
import { message } from 'antd';

interface Props {
  error: string | null;
}

export const ErrorMessage = ({ error }: Props) => {
  useEffect(() => {
    message.error(error);
  }, [error]);

  return null;
};
