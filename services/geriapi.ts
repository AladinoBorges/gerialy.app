const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const geriapi = {
  async mutate(route: string, data: {}, token?: string) {
    if (!Object?.keys(data)?.length) {
      return null;
    }

    const targetURL = `${API_URL}/${route?.toLowerCase()}`;

    const result = await fetch(targetURL, {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        ...(!!token?.trim() ? { Authorization: `Bearer ${token?.trim()}` } : {}),
      },
    })
      ?.then((response) => {
        if (!response?.ok) {
          throw new Error(`Response status: ${response?.status}`);
        }

        return response?.json();
      })
      ?.catch((error) => ({ error }));

    return result?.data || result;
  },

  async get(route: string, token?: string) {
    const targetURL = `${API_URL}/${route?.toLowerCase()}`;

    const result = await fetch(targetURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        ...(!!token?.trim() ? { Authorization: `Bearer ${token?.trim()}` } : {}),
      },
    })
      ?.then((response) => {
        if (!response?.ok) {
          throw new Error(`Response status: ${response?.status}`);
        }

        return response?.json();
      })
      ?.catch((error) => ({ error }));

    return result?.data || result;
  },
};

export default geriapi;
