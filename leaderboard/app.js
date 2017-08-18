//needs to have end of game code that grabs currentName, currentPoints and updates them.

var leaderBoard = [
  {
   userName: 'Troblems',
    points: 5
  },
  {
    userName: 'Daciasil21',
    points: 4
  },
  {
    userName: 'belfer21',
    points: 3
  },
  {
    name: 'John',
    points: 2
  },
  {
    name: 'Trish',
    points: 1
  }
];

var currentName;
//currentName will be player name.
var currentPoints;
//currentPoints will pull number of points from game logic that player has
var message = " ";
var search;

function updateLeaderboard ()
  {
for (var i = 0; i < leaderBoard.length; i += 1)
  {
  if  (currentPoints <= leaderBoard.i[points])
  {
    leaderBoard.splice(i, 0, currentName, currentPoints)
  }
  }
  };
updateLeaderboard();

  function showLeaderboard()
  {

      document.write('<table>',
          '<tr><td>Name</td>',
          '<td>Points</td></tr>');
  };
  showLeaderboard();
