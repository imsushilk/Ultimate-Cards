// Fetch profile JSON data based on profile name from URL
export async function fetchProfileData() {
  const profileName = new URLSearchParams(window.location.search).get("profile");
  if (!profileName) return null;
  const response = await fetch(`profiles/${profileName}.json`);
  if (!response.ok) {
    console.error(`Failed to fetch profile data for "${profileName}": ${response.status}`);
    return null;
  }
  return response.json();
}
