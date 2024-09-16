export const fetchJobs = async () => {
  try {
    const response = await fetch('https://my.api.mockaroo.com/job_board.json?key=b878da30');
    console.log(response)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};