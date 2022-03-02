import axios from 'axios'


async function linkAccount(sub, accessToken, targetUserIdToken) {
    const resp = await axios.post(
        `https://platzimaster.us.auth0.com/api/v2/users/${sub}/identities`,
        {
            link_with: targetUserIdToken
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
      );

      return resp.data;
  };

  export default linkAccount;

  