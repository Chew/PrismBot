import { COLORS } from '../constants';
import type { Command } from '../index';

export const cmd: Command = {
  name: 'stars',
  desc: 'Shows the number of stars in PolyMC',
  aliases: ['star', 'stargazers'],
  exec: async (e) => {
    const count = await fetch('https://api.github.com/repos/PolyMC/PolyMC')
      .then((r) => r.json() as Promise<{ stargazers_count: number }>)
      .then((j) => j.stargazers_count);
    await e.reply({
      embeds: [
        {
          title: `⭐ ${count} total stars!`,
          color: COLORS.yellow,
        },
      ],
    });
  },
};
