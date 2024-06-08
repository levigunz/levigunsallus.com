type Quote = {
    text: string
    citation: string
}

const quotes: Array<Quote> = [
    {
        text: "Every car on the road is a used car.",
        citation: "Working Title - Tom Kundig"
    },
    {
        text: "People who live far below their means enjoy a freedom that people busy upgrading their lifestyles can't fathom.",
        citation: "The Almanack of Naval Ravikant - Naval Ravikant, Eric Jorgenson"
    },
    {
        text: "In any situation, the architect should be thinking about the issues that the contractor has, and the contractor should be thinking about the issues that the architect has.",
        citation: "Works - Tom Kundig"
    },
    {
        text: "I've painted enough pictures to bring down let's say the throne of China, and instead of that I've got five thousand francs in my pocket.",
        citation: "Magritte: A Life - Alex Danchev"
    },
    {
        text: "Many memorable songs have been written by people in occupations they didn't like.",
        citation: "The Creative Act: A Way of Being - Rick Rubin"
    },
    {
        text: "'Could you put it in the microwave and heat it up to super-hot?' he asked when he got his coffee. 'If it's not super-hot, I chug it too fast.'",
        citation: "Elon Musk - Walter Isaacson"
    },
    {
        text: "Over the long term, it's hard for a stock to earn a much better return than the business that underlies it earns.",
        citation: "Poor Charlie's Almanack: The Essential Wit and Wisdom of Charles T. Munger - Charles T. Munger, Peter D. Kaufman"
    },
    {
        text: "The new Kirk came with a plan: whether winning or losing, he walked away once he made his intended bets.",
        citation: "The Gambler: How Penniless Dropout Kirk Kerkorian Became the Greatest Deal Maker in Capitalist History - William C. Rempel"
    },
    {
        text: "In the old days, when a student had nerve enough and thought he had enough credits for graduation, he used to get a club in one hand and a gun in the other, and go around and hold up the faculty.",
        citation: "Forged In Gold: Missouri S&T's first 150 Years - Larry Gragg"
    },
    {
        text: "In order to feel cold, you have to feel hot; in order to feel safe, you have to feel at risk. Contrast is the true measure of a complete experience.",
        citation: "Houses 2 - Tom Kundig"
    },
    {
        text: "The details are not the details; the details make the product.",
        citation: "Eames: Beautiful Details - Eames Demetrios"
    },
    {
        text: "If your teams believe you're optimizing for an individual rather than for the team, you'll lose their trust. And if your structure doesn't match your overall strategy, the person you've just put in charge will be set up for failure.",
        citation: "Scaling People - Claire Hughes Johnson"
    },
    {
        text: "The only way to know for sure what human beings will do, in general, is to stand back and watch them live their lives.",
        citation: "A Biography of the Pixel - Alvy Ray Smith"
    },
    {
        text: "There are a thousand and one design decisions within the envelope of a house, and in one as tightly planned as this, there's a knock-on effect whenever you move one element.",
        citation: "Architects' Houses - Michael Webb"
    },
    {
        text: "The wisdom from books can't be put in an askur.",
        citation: "How Iceland Changed the World: The Big History of a Small Island - Egill Bjarnason"
    },
    {
        text: "There is a vast difference between understanding a problem in terms of equations and diagrams and understanding it in terms of copper and iron.",
        citation: "Pieces of the Action - Vannevar Bush"
    },
    {
        text: "The next time I buy a house, by God, it's going to have walls!",
        citation: "A-frame - Chad Randl"
    },
    {
        text: "Do an apparently simple experiment that gives you an important bit of information....Ask the important question at the right time. Ask later and it's obvious.",
        citation: "Apprentice to Genius: The Making of a Scientific Dynasty - Robert Kanigel"
    },
    {
        text: "No system of government, no economic system, no currency, and no empire lasts forever, yet almost everyone is surprised and ruined when they fail.",
        citation: "Principles for Dealing with the Changing World Order: Why Nations Succeed and Fail - Ray Dalio"
    },
    {
        text: "I've decided that I'll never retire from active business, but that I'll not be a slave to my desk.", 
        citation: "Oil Man - Michael Wallis"
    },
    {
        text: "At Digg, I became a Director of Engineering because the company and my team kept shrinking. Far from a recognition of my success, this was a party favor for participating in one of history's great showcases of snatching defeat from the jaws of victory.",
        citation: "An Elegant Puzzle - Will Larson"
    },
    {
        text: "A community is a living organism. It's either declining or improving; there's no steady-state in a community.",
        citation: "Get Together - Bailey Richardson, Kevin Huynh, and Kai Elmer Sotto"
    },
    {
        text: "People always say that the CEO's job is not to run out of money, and what they usually mean by that is fundraising. But the other way you can do that is to make money.",
        citation: "High Growth Handbook - Elad Gil"
    },
    {
        text: "Goals selected by consensus rarely surprise.",
        citation: "Scientific Freedom - Donald W. Braben"
    },
    {
        text: "There is charm in every detail my eye lands on. It's the delicate charm of age, which cannot be manufactured, but has to organically grow and survive over time.",
        citation: "Two Years On A Bike - Martijn Doolaard"
    },
    {
        text: "As the amount of information available to the public increased, the authoritativeness of any one source decreased.",
        citation: "The Revolt of the Public - Martin Gurri"
    },
    {
        text: "Great people can tolerate ambiguity; they can both believe and disbelieve at the same time.",
        citation: "The Art of Doing Science and Engineering - Richard W. Hamming"
    },
    {
        text: "It turns out that, given the way the human mind is constructed, one of the best ways to convince someone you believe something is simply to believe it.",
        citation: "Where Is My Flying Car? - J. Storrs Hall"
    },
    {
        text: "Ours is a life of challenge and frustration, all of which is a fulfilling pastime.",
        citation: "Invention: A Life - James Dyson"
    },
    {
        text: "The comfort of having an organization is largely illusionary. It still comes down to one programmer in the end.",
        citation: "The Making of Prince of Persia - Jordan Mechner"
    },
    {
        text: "Details, when they are successful, are not mere decoration. They do not distract or entertain. They lead to an understanding of the whole of which they are an inherent part.",
        citation: "Thinking Architecture - Peter Zumthor"
    },
    {
        text: "We chose a whimsical name, which we will regret to our dying day—Kentucky Fried Computers.",
        citation: "The Big Score - Michael S. Malone"
    },
    {
        text: "The way discounting works, if we discount the future by 5 percent, a person's death today is worth about thirty-nine billion deaths five hundred years from now.",
        citation: "Stubborn Attachments - Tyler Cowen"
    },
    {
        text: "The mind was brilliant, but even a brilliant mind is only as good as the material——the input——fed into it.",
        citation: "The Power Broker - Robert Caro"
    },
    {
        text: "Every city would have at least one computer, and the very biggest cities might have several.",
        citation: "The Dream Machine - M. Mitchell Waldrop"
    },
    {
        text: "When you have skin in the game, dull things like checking the safety of the aircraft because you may be forced to be a passenger in it cease to be boring.",
        citation: "Skin in the Game - Nassim Nicholas Taleb"
    },
    {
        text: "Do you want a lousy tip or a beautiful picture of my son?",
        citation: "His Way: The Unauthorized Biography of Frank Sinatra - Kitty Kelley"
    },
    {
        text: "If you want to create a car that gets 10 percent better mileage, you just have to tweak the current design, but if you want to get one that gets five hundred miles per gallon, you need to start over.",
        citation: "How Google Works - Eric Schmidt, Jonathan Rosenberg"
    },
    {
        text: "The best minds of my generation are thinking about how to make people click ads.",
        citation: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future - Ashlee Vance"
    },
    {
        text: "The configuration of the dining room is predicated on the size and shape of the dining table.",
        citation: "The Interior Design Reference & Specification Book: Everything Interior Designers Need to Know Every Day - Chris Grimley, Linda O'Shea, and Mimi Love"
    },
    {
        text: "Vexillology is the study of flags, and like most fields where the stakes are quite low, opinions can be very intense.",
        citation: "The 99% Invisible City: A Field Guide to the Hidden World of Everyday Design - Kurt Kohlstedt, Roman Mars"
    },
    {
        text: "Innovation is not an individual phenomenon, but a collective, incremental and messy network phenomenon.",
        citation: "How Innovation Works: And Why It Flourishes in Freedom - Matt Ridley"
    },
    {
        text: "Nothing inspires arrogance like a lifetime spent controlling machines that are incapable of criticism.",
        citation: "Permanent Record - Edward Snowden"
    },
    {
        text: "I want people to read [my book]. I hope they like it. And, at the same time, I don't want to know what they think about it.",
        citation: "Working in Public: The Making and Maintenance of Open Source Software - Nadia Eghbal"
    },
    {
        text: "Don't criticize them; they are just what we would be under similar circumstances.",
        citation: "How to Win Friends and Influence People - Dale Carnegie"
    },
    {
        text: "In purporting to know us better than we know ourselves, user-friendly products trap us in assumptions we can never break. We become rats in a Skinner box with only one lever to push, and so we push and push, because there is nothing else to do.",
        citation: "User Friendly - Cliff Kuang, Robert Fabricant"
    },
    {
        text: "A city built around wheels becomes inappropriate for feet.",
        citation: 'Disabling Professions (Ideas in Progress) - Ivan Illich'
    },
    {
        text: 'Normally I can avoid anything but tempation.',
        citation: "Founders at Work: Stories of Startups' Early Days - Jessica Livingston"
    },
    {
        text: "Artists' careers are reevaluated on a daily basis, but they don't change that fast.",
        citation: "Boom: Mad Money, Mega Dealers, and the Rise of Contemporary Art - Michael Shnayerson",
    },
    {
        text: "I'm optimistic that if you provide something people really like, and you make it easy for them to pay you for it, that you'll do just fine.",
        citation: "The Boy Who Could Change the World: The Writings of Aaron Swartz - Aaron Swartz, Lawrence Lessig",
    },
    {
        text: "Being smart in school is about how well you solve problems that have correct answers and clear time limits.",
        citation: "The Defining Decade: Why Your Twenties Matter--And How to Make the Most of Them Now - Meg Jay",
    },
    {
        text: "I have an opinion, but I don't have a comment.",
        citation: "Leo and His Circle: The Life of Leo Castelli - Annie Cohen-Solal",
    },
    {
        text: "Anything that can make the medicine of complexity go down easier is a form of simplicity, even when it is an act of deceit.",
        citation: "The Laws of Simplicity (Simplicity: Design, Technology, Business, Life) - John Maeda",
    },
    {
        text: "If you want to shoot an endangered species, there's probably an app for that.",
        citation: "An Audience of One: Reclaiming Creativity for Its Own Sake - Srinivas Rao, Robin Dellabough, et al.",
    },
    {
        text: "Aren't butterflies just wonderful, so bang a nail through them and stick them in a box.",
        citation: "The Unknown City: Contesting Architecture and Social Space - Iain Borden , Joe Kerr, et al."
    },
    {
        text: "Sometimes the best thing you can do is call it a loss and start over. Or order some pizza.",
        citation: "Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking - Samin Nosrat and Wendy MacNaughton"
    }, 
    {
        text: "Would you rather be smart and poor or dumb and rich?",
        citation: "Bad Blood: Secrets and Lies in a Silicon Valley Startup - John Carreyrou"
    },
    {
        text: "I feel like immediate assassination but I can probably count on him to destroy his own possibilities.",
        citation: "The Man in the Glass House: Philip Johnson, Architect of the Modern Century - Mark Lamster"
    },
    {
        text: "In an era of rapid change, style has a corrosive effect in design.",
        citation: "Jony Ive: The Genius Behind Apple's Greatest Products - Leander Kahney"
    },
    {
        text: "I think you impute a little more practical purpose to my thinking than actually exists. My mind wanders around, and I conceive of different things day and night.... it's usually just that I like to solve a problem, and I work on these all the time.",
        citation: "The Idea Factory: Bell Labs and the Great Age of American Innovation - Jon Gertner"
    },
    {
        text: "Yachtsman are consumed with the notion that their ships must be 100 percent sound.",
        citation: "Wanderer - Sterling Hayden"
    },
];

export default quotes;