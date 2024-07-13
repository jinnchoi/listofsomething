const quotes = [
    {
        quote: "If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl,\n \
        but whatever you do, you have to keep moving forward.\n \
        날지 못하면 달려라. 달리지 못하면 걸어라. 그리고 걷지 못하면 기어라, 당신이 무엇을 하든 앞으로 가야 한다는 것만 명심해라.",
        author: "Martin Luther King Jr., 마틴 루터 킹 주니어",
    }, {
        quote: "You will face many defeats in life, but never let yourself be defeated.\n \
        인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라.",
        author: "Maya Angelou, 마야 안젤루",
    }, {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.\n \
        인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.",
        author: "Nelson Mandela, 넬슨 만델라",
    }, {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years.\n \
        결국, 여러분의 인생에서 중요한 것은 지나가는 세월이 아닌 생활이다.",
        author: "Abraham Lincoln, 아브라함 링컨",
    }, {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.\n \
        많은 인생의 실패는 사람이 포기할 때 자신이 성공에 얼마나 가까이 있는지 깨닫지 못하는 것이다.",
        author: "Thomas A. Edison, 토마스 에디슨",
    }, {
        quote: "Life is either a great adventure or nothing.\n \
        인생은 위대한 모험이거나 아니면 아무것도 아니다.",
        author: "Helen Keller, 헬렌 켈러",
    }, {
        quote: "If you spend too much time thinking about a thing, you’ll never get it done.\n \
        어떤 일에 너무 많은 시간을 걸리면, 당신은 그것을 완성하지 못할 것이다.",
        author: "Bruce Lee, 브루스 리",
    }, {
        quote: "Despite the forecast, live like it’s spring.\n \
        일기예보에도 불구하고, 봄처럼 살아라.",
        author: "Lilly Pulitzer, 릴리 퓰리쳐",
    }, {
        quote: "The two most important days in your life are the day you are born and the day you find out why.\n \
        당신의 인생에서 가장 중요한 두 날은 당신이 태어난 날과 그 이유를 찾는 날이다.",
        author: "Mark Twain, 마크 트웨인",
    }, {
        quote: "Success is going from failure to failure without a loss of enthusiasm.\n \
        성공이란 실패에 실패를 거듭하면서도 열의를 잃지 않는 것이다.",
        author: "Winston Churchill, 윈스턴 처칠",
    }, {
        quote: "There is no use whatever trying to help people who do not help themselves.\n \
        You cannot push anyone up a ladder unless he be willing to climb himself.\n \
        스스로 자신을 돕지 않는 사람은 아무리 도와봐야 소용이 없다. 스스로 올라가려고 하지 않는 사람을 밀어서 사다리 위로 올려 보낼 수는 없는 법이니까.",
        author: "Andrew Carnegie, 앤드류 카네기",
    }, {
        quote: "Always bear in mind that your own resolution to succeed is more important than any other.\n \
        늘 이걸 명심하라. 그 무엇보다 성공하겠다는 결의가 중요하다.",
        author: "Abraham Lincoln, 에이브러햄 링컨",
    }, {
        quote: "Try not to become a man of success but rather try to become a man of value.\n \
        성공한 사람이 되려고 애쓰지 말고, 가치 있는 사람이 되려 애써라.",
        author: "Albert Einstein, 아인슈타인",
    }, {
        quote: "We must believe in luck. For how else can we explain the success of those we don’t like?\n \
        우린 운이 있다는 걸 믿어야 한다. 그게 아니면 우리가 싫어하는 사람들의 성공을 어찌 설명하겠는가?",
        author: "Jean Cocteau, 장 콕토",
    }, {
        quote: "I find that the harder I work, the more luck I seem to have.\n \
        더 열심히 일하면 할수록 운이 더 좋아진다는 것을 알게 된다.",
        author: "Thomas Jefferson, 토마스 제퍼슨",
    }, {
        quote: "Don’t be afraid to give up the good to go for the great.\n \
        더 나은 것을 위해 좋은 것을 포기하는 걸 두려워 하지 마라.",
        author: "John D. Rockefeller, 존 록펠러",
    }, {
        quote: "Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier, wish you were better.\n \
        성공한 사람들은 성공하지 못한 사람들이 하려고 하지 않는 일을 한다. 더 쉬웠으면 하지 말고, 더 나았으면 하라.",
        author: "Jim Rohn, 짐 론",
    }, {
        quote: "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.\n \
        나의 성공은 최고의 조언을 듣고 떠나 정반대의 일을 한 덕분이다.",
        author: "G. K. Chesterton, G. K. 체스터튼",
    }, {
        quote: "I never dreamed about success, I worked for it.\n \
        나는 결코 성공에 대해 꿈꾸지 않았다, 나는 꿈을 위해 행동했다.",
        author: "Estee Lauder, 에스티 로더",
    }, {
        quote: "Do not try to be original, just try to be good.\n \
        독특한 사람이 되려 하지 말아라. 좋은 사람이 되도록 해라.",
        author: "Paul Rand, 폴 랜드",
    }, {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\n \
        우리의 최대의 약점은 포기다. 성공으로 가는 가장 확실한 방법은 언제든지 한번 더 시도해보는 것이다.",
        author: "Thomas Edison, 토마스 에디슨",
    }, {
        quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be.\n \
        자신을 가장 빨리 변화시키는 방법은 당신이 되고 싶은 모습을 하고 있는 사람들과 어울리는 것이다.",
        author: "Reid Hoffman, 리드 호프만",
    }, {
        quote: "Money is like gasoline during a road trip. You do not want to run out of gas on your trip,\n \
        but you are not doing a tour of gas stations.\n \
        돈은 자동차 여행의 휘발유 같은 것이다. 여행 중에 휘발유가 떨어지는 것을 원치 않지만, 주유소를 위한 여행을 하고 있는 것은 아니다.",
        author: "Tim OReilly, 팀 오라일리",
    }, {
        quote: "Some people dream of success, while other people get up every morning and make it happen.\n \
        성공을 꿈꾸는 사람들도 있지만, 매일 아침에 일어나 꿈을 실현시키는 사람들도 있다.",
        author: "Wayne Huizenga, 웨인 후이젠가",
    }, {
        quote: "The only thing worse than starting something and failing … is not starting something.\n \
        무언가를 시작하고 실패하는 것보다 더 나쁜 것은 … 아무것도 시작하지 않는 것이다.",
        author: "Seth Godin, 세스 고딘",
    }, {
        quote: "If you really want to do something, you will find a way. If you do not, you will find an excuse.\n \
        무언가를 정말 하고 싶다면, 당신은 방법을 찾을 것이다. 그렇지 않다면, 변명을 찾을 것이다.",
        author: "Jim Rohn, 짐 론",
    }, {
        quote: "The people who are crazy enough to think they can change the world are the ones who do.\n \
        세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.",
        author: "Steve Jobs, 스티브 잡스",
    }, {
        quote: "I've always been attracted to the more revolutionary changes. I don't know why.\n \
        Because they're harder. They're much more stressful emotionally.\n \
        And you usually go through a period where everybody tells you that you’ve completely failed.\n \
        나는 항상 혁신적인 변화를 쫓아왔다. 그건 더 어려웠기 때문인지 모른다. 혁신은 감정적으로 굉장히 압박이 심하다.\n \
        그리고 모든사람들이 당신에게 완벽히 실패했다고 이야기하는 시기를 이겨내야 한다.",
        author: "Steve Jobs, 스티브 잡스",
    },  {
        quote: "I'm as proud of many of the things we haven't done as the things we have done. Innovation is saying no to a thousand things.\n \
        나는 우리가 이루지 않은 것들도 우리가 성공한 것들 만큼이나 자랑스럽다. 혁신은 천가지에 대해 'NO'를 외치는 것이기 때문이다.",
        author: "Steve Jobs, 스티브 잡스",
    }, {
        quote: "Let's go invent tomorrow rather than worrying about what happened yesterday.\n \
        어제를 뒤돌아보는 건 그만하자. 그 대신 내일을 발전시켜 나가자.",
        author: "Steve Jobs, 스티브 잡스",
    }, {
        quote: "Most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become.\n \
        가장 중요한 것은, 당신의 마음과 영감을 따를 수 있는 용기를 가지는 것이다. 당신의 마음과 영감은 이미 당신이 진심으로 되고 싶은 바가 무엇인지 알고 있다.",
        author: "Steve Jobs, 스티브 잡스",
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;