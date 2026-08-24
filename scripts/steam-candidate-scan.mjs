const candidates = [
  [3196440, "Vacation Cafe Simulator"],
  [4000770, "Swarmdustry"],
  [4001890, "How to Fish"],
  [2584270, "Mortal Shell II"],
  [2163330, "Yet Another Zombie Survivors"],
  [4132330, "Pizza House Simulator"],
  [4315040, "Hearth and Hamlet"],
  [1575990, "Twisted Tower"],
  [3503710, "Medieval Horse Dealer Simulator"],
  [4579940, "Crownhold"],
  [2764460, "Sandustry"],
  [292000, "No More Room in Hell 2"]
];

async function fetchJson(url) {
  const response = await fetch(url, { headers: { "user-agent": "GameHintLab candidate research" } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

async function scan([id, fallbackName]) {
  const [players, reviews, details] = await Promise.all([
    fetchJson(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${id}`),
    fetchJson(`https://store.steampowered.com/appreviews/${id}?json=1&language=all&purchase_type=all&num_per_page=0`),
    fetchJson(`https://store.steampowered.com/api/appdetails?appids=${id}&cc=us&l=english`)
  ]);
  const summary = reviews.query_summary || {};
  const total = Number(summary.total_reviews || 0);
  const positive = Number(summary.total_positive || 0);
  const data = details[String(id)]?.data || {};
  return {
    id,
    name: data.name || fallbackName,
    releaseDate: data.release_date?.date || "",
    comingSoon: Boolean(data.release_date?.coming_soon),
    currentPlayers: Number(players.response?.player_count || 0),
    reviews: total,
    positivePct: total ? Number((100 * positive / total).toFixed(1)) : 0,
    genres: (data.genres || []).map((item) => item.description),
    developers: data.developers || [],
    url: `https://store.steampowered.com/app/${id}/`
  };
}

const results = await Promise.all(candidates.map(async (candidate) => {
  try {
    return await scan(candidate);
  } catch (error) {
    return { id: candidate[0], name: candidate[1], error: error.message };
  }
}));

results.sort((a, b) => (b.currentPlayers || 0) - (a.currentPlayers || 0));
console.log(JSON.stringify({ checkedAt: new Date().toISOString(), results }, null, 2));
