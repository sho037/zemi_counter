import { useEffect, useState } from 'react';

import ActionCable from 'actioncable';

type Websocket = {
  laboratory_id: number;
};

export const useWebsocket = (props: Websocket) => {
  const { laboratory_id } = props;
  const channelName = `CheckCountChannel`;
  const [cable, setCable] = useState<any>(null);
  const [channel, setChannel] = useState<any>(null);
  const [checkCount, setCheckCount] = useState<string>("0");

  useEffect(() => {
    setCable(ActionCable.createConsumer(process.env.REACT_APP_WEBSOCKET_URL || ''));

    return () => {
      if (channel) {
        channel.unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    if (cable) {
      setChannel(cable.subscriptions.create({ channel: channelName, laboratory_id }, {
        connected: () => {
          console.log('connected');
        },
        disconnected: () => {
          console.log('disconnected');
        },
        received: (data: any) => {
          setCheckCount(data.registrants_str);
        },
      }));
    }

    return () => {
      if (channel) {
        channel.unsubscribe();
      }
    };
  }, [cable, laboratory_id]);

  return { checkCount };
};
