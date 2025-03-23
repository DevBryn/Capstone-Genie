// Get industries list
export async function getIndustries() {
  try {
    const response = await fetch(
      "https://api.smartrecruiters.com/v1/industries"
    );

    if (!response.ok) {
      throw new Error(`Error fetching industries: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching industries:", error);
    return null;
  }
}
