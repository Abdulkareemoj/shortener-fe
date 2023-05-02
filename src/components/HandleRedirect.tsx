import axios from 'axios';
import { Box, Spinner } from 'chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

export const SERVER_ENDPOINT =
  process.env.REACT_APP_SERVER_ENDPOINT || 'http://localhost:3000';

function HandleRedirect() {
  const [destination, setDestination] = useState<null | string>(null);
  const [error, setError] = useState();
  const {
    params: { shortId },
  } = useRouteMatch<{
    shortId: string;
  }>();

  useEffect(() => {
    async function getData()) {
      return axios
        .get(`${SERVER_ENDPOINT}/api/createurl/${shortId}`)
        .then((res) => 
          setDestination(res.data.destination));
       
        .catch((err) => {
          setError(err);
        });
    }
    getData();
  }, [shortId]);
}

export default HandleRedirect;
