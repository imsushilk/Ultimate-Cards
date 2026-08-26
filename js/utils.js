// Fetch profile JSON data based on profile name from URL
export async function fetchProfileData() {
  const profileName = new URLSearchParams(window.location.search).get("profile");
  if (!profileName) return null;
  const response = await fetch(`profiles/${profileName}.json`);
  if (!response.ok) {
    console.error(`Failed to fetch profile data for "${profileName}": ${response.status}`);
    return null;
  }
  const profileData = await response.json();
  if (typeof profileData.team === "string") {
    profileData.team = await fetchTeamData(profileData.team);
  }
  return profileData;
}

// Fetch team JSON data by team name
export async function fetchTeamData(teamName) {
  const response = await fetch(`teams/${teamName}.json`);
  if (!response.ok) {
    console.error(`Failed to fetch team data for "${teamName}": ${response.status}`);
    return null;
  }
  return response.json();
}
