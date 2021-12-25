import { Handler } from '@netlify/functions';
import type { QuoteType } from '../src/types/quote.type';

const quotes: Array<QuoteType> = [
    {
        text: "We chose a whimsical name, which we will regret to our dying day—Kentucky Fried Computers.",
        citation: "The Big Score - Michael S. Malone"
    },
    {
        text: "The way discounting works, if we discount the future by 5 percent, a person’s death today is worth about thirty-nine billion deaths five hundred years from now.",
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
        text: "I want people to read [my book]. I hope they like it. And, at the same time, I don’t want to know what they think about it.",
        citation: "Working in Public: The Making and Maintenance of Open Source Software - Nadia Eghbal"
    },
    {
        text: "Don’t criticize them; they are just what we would be under similar circumstances.",
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
        text: "Many other people are different, but I think that every step was sort of the inevitable, inexorable progress due to the previous steps in the other. It's not like I had no choice, but everything I did was the only choice because it was the only thing that made sense at the time.",
        citation: "Founders at Work: Stories of Startups' Early Days - Jessica Livingston"
    },
    {
        text: 'Normally I can avoid anything but tempation.',
        citation: "Founders at Work: Stories of Startups' Early Days - Jessica Livingston"
    },
    {
        text: "Artists’ careers are reevaluated on a daily basis, but they don’t change that fast",
        citation: "Boom: Mad Money, Mega Dealers, and the Rise of Contemporary Art - Michael Shnayerson",
    },
    {
        text: "I’m optimistic that if you provide something people really like, and you make it easy for them to pay you for it, that you’ll do just fine",
        citation: "The Boy Who Could Change the World: The Writings of Aaron Swartz - Aaron Swartz, Lawrence Lessig",
    },
    {
        text: "Being smart in school is about how well you solve problems that have correct answers and clear time limits",
        citation: "The Defining Decade: Why Your Twenties Matter--And How to Make the Most of Them Now - Meg Jay",
    },
    {
        text: "I have an opinion, but I don’t have a comment.",
        citation: "Leo and His Circle: The Life of Leo Castelli - Annie Cohen-Solal",
    },
    {
        text: "Anything that can make the medicine of complexity go down easier is a form of simplicity, even when it is an act of deceit.",
        citation: "The Laws of Simplicity (Simplicity: Design, Technology, Business, Life) - John Maeda",
    },
    {
        text: "If you want to shoot an endangered species, there’s probably an app for that.",
        citation: "An Audience of One: Reclaiming Creativity for Its Own Sake - Srinivas Rao, Robin Dellabough, et al.",
    },
    {
        text: "Aren’t butterflies just wonderful, so bang a nail through them and stick them in a box",
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
        text: "I feel like immediate assassination but I can probably count on him to destroy his own possibilities",
        citation: "The Man in the Glass House: Philip Johnson, Architect of the Modern Century - Mark Lamster"
    },
    {
        text: "In an era of rapid change, style has a corrosive effect in design",
        citation: "Jony Ive: The Genius Behind Apple's Greatest Products - Leander Kahney"
    },
    {
        text: "I think you impute a little more practical purpose to my thinking than actually exists. My mind wanders around, and I conceive of different things day and night.... it’s usually just that I like to solve a problem, and I work on these all the time",
        citation: "The Idea Factory: Bell Labs and the Great Age of American Innovation - Jon Gertner"
    },
    {
        text: "Yachtsman are consumed with the notion that their ships must be 100 percent sound",
        citation: "Wanderer - Sterling Hayden"
    },
];

const handler: Handler = async (event, context) => {
    
    const quoteIndex: number = Math.floor(Math.random() * quotes.length);

    return {
        statusCode: 200,
        
        body: JSON.stringify({ quote: quotes[quoteIndex], quoteIndex: quoteIndex + 1, numberTotalQuotes: quotes.length })
    }
}

export { handler }