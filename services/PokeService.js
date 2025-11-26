export class PokeService {
  static baseUrl = "https://pokeapi.co/api/v2/pokemon";

  static async getAll(limit = 20, offset = 0) {
    const res = await fetch(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    const pokemons = [];

    for (let p of data.results) {
      try {
        const details = await fetch(p.url).then(r => r.json());
        pokemons.push({
          name: details.name,
          image: details.sprites.front_default,
          types: details.types.map(t => t.type.name),
          stats: details.stats.map(s => ({ name: s.stat.name, value: s.base_stat }))
        });
      } catch {}
    }

    return pokemons;
  }

  static async getByName(name) {
    if (!name) return null;
    try {
      const res = await fetch(`${this.baseUrl}/${name.toLowerCase()}`);
      if (!res.ok) return null;
      const details = await res.json();
      return {
        name: details.name,
        image: details.sprites.front_default,
        types: details.types.map(t => t.type.name),
        stats: details.stats.map(s => ({ name: s.stat.name, value: s.base_stat }))
      };
    } catch {
      return null;
    }
  }
}
