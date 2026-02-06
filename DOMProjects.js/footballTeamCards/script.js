const footballTeam = {
    team: "Bangladesh Football Team",
    year: 2026,
    headCoach: "Arjun Roy",
    players: [
        { name: "Arjun Roy", position: "midfielder", isCaptain: true },
        { name: "Sujoy Sharma", position: "midfielder", isCaptain: false },
        { name: "Apu Roy", position: "midfielder", isCaptain: false },
        { name: "Apon Roy", position: "forward", isCaptain: false },
        { name: "Tanmay kumar Roy", position: "forward", isCaptain: false },
        { name: "Joyonto Roy", position: "defender", isCaptain: false },
        { name: "Duranta Chandra", position: "defender", isCaptain: false },
        { name: "Nirot Roy", position: "goalkeeper", isCaptain: false }
    ]
};
const team = document.querySelector("#team");
const year = document.querySelector("#year");
const headCoach = document.querySelector("#head-coach");

const showTeamState = () => {
    team.textContent = footballTeam.team;
    year.textContent = footballTeam.year;
    headCoach.textContent = footballTeam.headCoach;
};
showTeamState();

const filterTeammates = query => {
    return query === "all"
        ? footballTeam.players
        : footballTeam.players.filter(player => {
              return player.position === query;
          });
};

const playersOption = document.querySelector("#players");
const playerCards = document.querySelector("#player-cards");

playersOption.addEventListener("change", () => {
    const players = filterTeammates(playersOption.value);

    playerCards.innerHTML = players
        .map(player => {
            return `
          <div class="player-card">
             <h2>${
                 player.isCaptain ? `(Captain) ${player.name}` : player.name
             }</h2>
             <p>Position: ${player.position}</p>
          </div>
    `;
        })
        .join("");

    // console.log(playersOption.value)
});
