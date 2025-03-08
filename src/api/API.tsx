const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    const users = await response.json();
    console.log('GitHub API Response:', users); // Debugging line
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }

    // Fetch full details for each user
    const userDetailsPromises = users.map((user: { login: string }) =>
      fetch(`https://api.github.com/users/${user.login}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }).then((res) => res.json())
    );

    const userDetails = await Promise.all(userDetailsPromises);
    return userDetails;
  } catch (err) {
    console.error('API Error:', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    console.error('API Error:', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
