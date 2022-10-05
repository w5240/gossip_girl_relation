import sarana from './imgs/serena.webp'
import Portal from './imgs/Portal.webp'
import Dan from './imgs/Dan.webp'
import Nate from './imgs/Nate.webp'
import Jenny from './imgs/Jenny.webp'
import Chuck from './imgs/Chuck.webp'
import Lily from './imgs/Lily.webp'
import Rufus from './imgs/Rufus.webp'
import Vanessa from './imgs/Vanessa.webp'
import Ivy from './imgs/Ivy.webp'
import Georgina from './imgs/Georgina.webp'
import LOUIS from './imgs/LOUIS.png'
import LOLA from './imgs/LOLA.png'
import BART from './imgs/BART.webp'
import CARTER from './imgs/CARTER.png'
import Eric from './imgs/Eric.png'
import Juliet from './imgs/Juliet.png'
import Aaron from './imgs/Aaron.png'


const getDIV = (url, name) => {
  // border:#ff875e solid 3px;
  //   <div class="c-node-name" style="color:#ff875e">
  //   ${name}
  // </div>
  return `<div 
  class="c-my-node" 
  style="background-image: url(${url});
  ">

</div>`
}

const intro = {
  'Serena van der Woodsen': `Serena is considered the "It Girl" of the Upper East Side. Throughout the series, Serena has an on-again, off-again relationship with Dan Humphrey and the two have the longest running relationship on the show; spanning from Pilot to their marriage in the season six finale, New York, I Love You XOXO. She is best friends with Blair Waldorf and shares close friendships with Nate Archibald and Chuck Bass.
  She, Dan and Blair are the only     characters that appear in every episode of the TV series.`,
  'BLAIR WALDORF': `Blair Cornelia Bass a main character in the Gossip Girl series of novels and its television adaption, in which she is portrayed by Leighton Meester.
  Blair has an ongoing up and down relationship with Chuck Bass, and after Serena van der Woodsen and Dan Humphrey, they have the second-longest relationship in the series. Blair is regarded as the "Queen B" of the Upper East Side. She is best friends with Serena and good friends with Dorota Kishlovsky, Jenny Humphrey and Nate Archibald.
  Along with Dan and Serena, Blair appears in every episode of the series.`,
  'DAN HUMPHREY': `Daniel Randolph "Dan" Humphrey is a main character in the Gossip Girl novels and
  it's television adaptation. He is portrayed by Penn Badgley.
  Dan has an on-again-off-again relationship with Serena van der Woodsen and the two have the longest running relationship on the show. Dan and Serena finally get married in the finale. Dan is good friends with Nate Archibald, Blair Waldorf, and Chuck Bass. In the sixth season, Dan reveals himself to be the anonymous blogger known as Gossip Girl.`,
  'NATE ARCHIBALD': `Nathaniel Fitzwilliam "Nate" Vanderbilt Archibald is a main character in the Gossip Girl series of novels and on its television adaption, in which he is portrayed by Chace Crawford. Nate is best friends with Chuck Bass and is good friends with Dan Humphrey, Serena van der Woodsen and Blair Waldorf.`,
  'JENNY HUMPHREY': `Jennifer "Jenny" Tallulah Humphrey is a main character in the Gossip Girl television adaptation and a recurring character in the novels of the same name. She is the younger sister of Dan Humphrey and a social climber who idolizes Blair Waldorf and Serena van der Woodsen.
  Jenny appeared as a member of the main cast through seasons one through three and was downgraded in the fourth season to a recurring character.`,
  'CHUCK BASS': `Charles Bartholomew "Chuck" Bass is a main character in the Gossip Girl television adaptation and a recurring character in the series of novels with the same name. He is portrayed by Ed Westwick.
  Throughout the television series, Chuck has an on-again/off-again relationship with Blair Waldorf. They marry in the series finale.
  He is best friends with Nate Archibald. He is also good friends with Serena van der Woodsen, Jenny Humphrey and Dorota Kishlovsky Chuck appeared in 118 episodes.`,
  'LILY VAN DER WOODSEN': `Lillian Celia "Lily" van der Woodsen (née Rhodes, previously Mueller, Bass, and Bass Humphrey) is the mother to Serena and Eric van der Woodsen, as well as being the birth
  mother of Scott Rosson and the adoptive mother to Chuck Bass, the latter of whom is the son to her ex-husband Bart Bass. She is portrayed by Kelly Rutherford.
 In Valley Girls, a proposed spinoff is introduced which would follow a teenage Lily (played by Brittany Snow) and her life in California.`,
  'RUFUS HUMPHREY': `Rufus Humphrey is the father of Dan and Jenny Humphrey, and the ex-husband of Alison Humphrey and Lily van der Woodsen. He is portrayed by Matthew Settle.`,
  'VANESSA ABRAMS': `Vanessa Abrams is a character in Gossip Girl series of novels as well as the television adaptation. She is portrayed by Jessica Szohr. Along with Jenny Humphrey, Vanessa's character is downgraded in season four before departing the show altogether.`,
  'IVY DICKENS': `Ivy Dickens (former alias: Charlotte "Charlie" Rhodes) is a character introduced in the fourth season of Gossip Girl. Appearing exclusively in the television adaption, she is portrayed by actress Kaylee DeFer.
    Starting in season five and continuing in season six, Kaylee DeFer was upgraded to the main cast. Ivy appeared in 30 episodes.`,
  'Georgina Sparks': `Georgina Sparks is a major recurring character in
    the Gossip Girl novels and in the television series of the same name. She is portrayed by Michelle Trachtenberg. `,
  'LOUIS GRIMALDI': `Louis Frédéric Grimaldi (formally Prince Louis of Monaco) is the ex-husband of Blair Waldorf and, as a member of the Grimaldi family, a Monégasque prince. He is the son of Princess Sophie of Monaco and older brother of Princess Beatrice. Louis is portrayed by Hugo Becker.`,
  'LOLA RHODES': `Charlotte "Lola or Charlie" Rhodes is the daughter of Carol Rhodes and William van der Woodsen. Carol was unaware that Lola was living in New York and attending Juilliard, as she thought that Lola was attending Michigan State University.`,
  'BART BASS': ``,
  'CARTER BAIZEN': `Carter Baizen is a recurring character on the Gossip Girl television adaption, portrayed by Sebastian Stan. Carter is a graduate of St. Jude's School for Boys and is friends-turned- enemies with Nate Archibald and Chuck Bass.`,
  'Eric van der Woodsen': `Eric van der Woodsen (spelled Erik in the novels) is the brother of Serena van der
    Woodsen and son of Lily and William van der Woodsen in the Gossip Girl series, though there are significant differences between the character displayed in the novels and the character adapted for television. In the television series, he is portrayed by Connor Paolo.
    At the conclusion of the fourth season, Eric, along with Vanessa and Jenny, left the show for good. However, all three made cameos in the series finale New York, I Love You XOXO.`,
  'Juliet Cynthia Sharp': `Juliet Cynthia Sharp is a recurring character in the fourth season of Gossip Girl, during which she served as the main antagonist. She appeared exclusively within the television adaption and is portrayed by Katie Cassidy.`,
  'Aaron Rose': `Aaron Rose is a recurring character in the Gossip Girl series of novels and in the second season of the television adaptation. He is the son of Cyrus Rose and is portrayed by John Patrick Amedori.`

}

const nodesData = [
  {
    id: "n1",
    text: "Serena van der Woodsen",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(sarana, 'Serena van der Woodsen'),
    data: {
      introduce: intro['Serena van der Woodsen'],
      relation: {
        Family: [3, 7, 5, 6, 2, 8, 16, 13],
        Romance: [3, 4, 18, 15,],
        Friends: [2, 3, 4, 6],
        Enemies: [9, 11, 17,],
      }
    }
  },
  {
    id: "n2",
    text: "BLAIR WALDORF",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Portal, 'BLAIR WALDORF'),
    data: {
      introduce: intro['BLAIR WALDORF'],
      relation: {
        Family: [6, 14, 7, 1, 16, 13, 12],
        Romance: [6, 4, 12, 3],
        Friends: [1, 6, 4, 3, 5, 11],
        Enemies: [17, 9],
      }
    }
  },
  {
    id: "n3",
    text: "DAN HUMPHREY",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Dan, 'DAN HUMPHREY'),
    data: {
      introduce: intro['DAN HUMPHREY'],
      relation: {
        Family: [1, 8, 5, 16, 15, 13, 2, 7],
        Romance: [1, 2, 9, 10, 11],
        Friends: [1, 16, 4, 11, 2, 6,],
        Enemies: [9],
      }
    }
  },
  {
    id: "n4",
    text: "NATE ARCHIBALD",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Nate, 'NATE ARCHIBALD'),
    data: {
      introduce: intro['NATE ARCHIBALD'],
      relation: {
        Family: [],
        Romance: [2, 5, 1, 9, 17, 10, 13,],
        Friends: [6, 1, 2, 3],
        Enemies: [],
      }
    }
  },
  {
    id: "n5",
    text: "JENNY HUMPHREY",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Jenny, 'JENNY HUMPHREY'),
    data: {
      introduce: intro['JENNY HUMPHREY'],
      relation: {
        Family: [8, 3, 6, 1,],
        Romance: [4, 6,],
        Friends: [16, 1, 11],
        Enemies: [9],
      }
    }
  },
  {
    id: "n6",
    text: "CHUCK BASS",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Chuck, 'CHUCK BASS'),
    data: {
      introduce: intro['CHUCK BASS'],
      relation: {
        Family: [2, 14, 7, 1, 16, 5, 3,],
        Romance: [2, 9, 5, 11],
        Friends: [2, 4, 5, 1],
        Enemies: [12, 15, 14],
      }
    }
  },
  {
    id: "n7",
    text: "LILY VAN DER WOODSEN",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Lily, 'LILY VAN DER WOODSEN'),
    data: {
      introduce: intro['LILY VAN DER WOODSEN'],
      relation: {
        Family: [1, 16, 6, 13, 3, 2, 14,],
        Romance: [14, 8,],
        Friends: [],
        Enemies: [10, 13, 17],
      }
    }
  },
  {
    id: "n8",
    text: "RUFUS HUMPHREY",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Rufus, 'RUFUS HUMPHREY'),
    data: {
      introduce: intro['RUFUS HUMPHREY'],
      relation: {
        Family: [3, 5, 1,],
        Romance: [1, 10,],
        Friends: [10,],
        Enemies: [14],
      }
    }
  },
  {
    id: "n9",
    text: "VANESSA ABRAMS",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Vanessa, 'VANESSA ABRAMS'),
    data: {
      introduce: intro['VANESSA ABRAMS'],
      relation: {
        Family: [],
        Romance: [4, 3, 6],
        Friends: [17, 8, 1],
        Enemies: [3, 2, 1, 11, 5,],
      }
    }
  },
  {
    id: "n10",
    text: "IVY DICKENS",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Ivy, 'IVY DICKENS'),
    data: {
      introduce: intro['IVY DICKENS'],
      relation: {
        Family: [],
        Romance: [3, 4,],
        Friends: [11, 13, 8],
        Enemies: [7, 1],
      }
    }
  },
  {
    id: "n11",
    text: "Georgina Sparks",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Georgina, 'Georgina Sparks'),
    data: {
      introduce: intro['Georgina Sparks'],
      relation: {
        Family: [],
        Romance: [3, 6,],
        Friends: [10, 3, 2, 1, 5, 6],
        Enemies: [16, 9],
      }
    }
  },
  {
    id: "n12",
    text: "LOUIS GRIMALDI",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(LOUIS, 'LOUIS GRIMALDI'),
    data: {
      introduce: intro['LOUIS GRIMALDI'],
      relation: {
        Family: [],
        Romance: [2],
        Friends: [],
        Enemies: [3, 6],
      }
    }
  },
  {
    id: "n13",
    text: "LOLA RHODES",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(LOLA, 'LOLA RHODES'),
    data: {
      introduce: intro['LOLA RHODES'],
      relation: {
        Family: [1, 3, 16, 7,],
        Romance: [4],
        Friends: [10],
        Enemies: [],
      }
    }
  },
  {
    id: "n14",
    text: "BART BASS",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(BART, 'BART BASS'),
    data: {
      introduce: intro['BART BASS'],
      relation: {
        Family: [6,],
        Romance: [7],
        Friends: [],
        Enemies: [6, 8, 2],
      }
    }
  },
  {
    id: "n15",
    text: "CARTER BAIZEN",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(CARTER, 'CARTER BAIZEN'),
    data: {
      introduce: intro['CARTER BAIZEN'],
      relation: {
        Family: [],
        Romance: [1, 2],
        Friends: [2],
        Enemies: [6, 4],
      }
    }
  },
  {
    id: "n16",
    text: "Eric van der Woodsen",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Eric, 'Eric van der Woodsen'),
    data: {
      introduce: intro['Eric van der Woodsen'],
      relation: {
        Family: [7, 1, 6, 2, 5],
        Romance: [],
        Friends: [5, 6, 3],
        Enemies: [11],
      }
    }
  },
  {
    id: "n17",
    text: "Juliet Cynthia Sharp",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Juliet, 'Juliet Cynthia Sharp'),
    data: {
      introduce: intro['Juliet Cynthia Sharp'],
      relation: {
        Family: [],
        Romance: [4,],
        Friends: [9],
        Enemies: [2, 6, 3, 5, 7, 1],
      }
    }
  },
  {
    id: "n18",
    text: "Aaron Rose",
    color: "#ec6941",
    borderColor: "#ff875e",
    innerHTML: getDIV(Aaron, 'Aaron Rose'),
    data: {
      introduce: intro['Aaron Rose'],
      relation: {
        Family: [2],
        Romance: [1],
        Friends: [1, 3],
        Enemies: [],
      }
    }
  },
]

export const nodes = nodesData.map(e => {
  if (e.data.relation)
    Object.keys(e.data.relation).forEach(a => {
      e.data.relation[a].forEach((b, i) => e.data.relation[a][i] = `n${b}`)
    })
  return e
})

const Family = '#f9daa3';
const Romance = '#f13839';
const Friends = '#2affaa';
const Enemies = '#2068fd';
export const colors = { Family, Romance, Friends, Enemies }
const linksData = []
const l = {};
nodesData.forEach(e => {
  Object.keys(e.data.relation).forEach(a => {
    const list = e.data.relation[a];
    list.forEach(c => {
      if (!l[`${e.id}-${c}`] && !l[`${c}-${e.id}`]) {
        linksData.push({
          from: e.id,
          to: c,
          // text: "师生",
          color: colors[a],
          fontColor: "#d2c0a5",
        })
        l[`${e.id}-${c}`] = true;
        l[`${c}-${e.id}`] = true;
      }
    })
  })
})

const links = linksData.map(e => {
  e.data = e.data || {};
  e.data.color = e.color;
  return e;
})


var data = {
  rootId: "n1",
  nodes,
  links,
};

export { data };
