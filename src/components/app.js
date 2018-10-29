import React, { Component } from 'react';

let style = {
   a: { color: "blue",
        backgroundColor: "white",
        textAlign: "center"
      }
};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
          quotes: [
              {
                quote:'Only I can change my life. No one can do it for me.',
                source:'Carol Burnett'                  
              },
              {
                  quote: 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
                  source: 'Helen Keller'
              },
              {
                  quote: 'It always seems impossible until it is done.',
                  source: 'Nelson Mandela'
              },
              {
                  quote:'It does not matter how slowly you go as long as you do not stop.',
                  source: 'Conficius'
              },
              {
                  quote: 'People who are crazy enough to think they can change the world, are the ones who do.',
                  source: 'Rob Siltanen'
              },
              {
                  quote: 'Security is mostly a superstition. Life is either a daring adventure or nothing.',
                  source: 'Helen Keller'
              },
              {
                  quote: 'The man who has confidence in himself gains the confidence of others.',
                  source: 'Hasidic Proverb'
              },
              {
                  quote: 'The only limit to our realization of tomorrow will be our doubts of today.',
                  source: 'Franklin D. Roosevelt'
              },
              {
                  quote: 'Creativity is intelligence having fun.',
                  source: 'Albert Einstein'
              },
              {
                  quote: 'Do what you can with all you have, wherever you are.',
                  source: 'Theodore Roosevelt'
              },
              {
                  quote: 'You are never too old to set another goal or to dream a new dream.',
                  source: 'C. S. Lewis' 
              },
              {
                  quote: 'Begin now to be what you will be hereafter.',
                  source: 'Saint Jerome'
              },
              {
                  quote: 'In a gentle way, you can shake the world.',
                  source: 'Mahatma Gandhi'
              },
              {
                  quote: 'Act enthusiastic and you will be enthusiastic.' ,
                  source: 'Dale Carnegie'
              }

          ],
          randomQuote: {}    
        };
    }
    
    getQuote() {
        const randomQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];    
        this.setState({ randomQuote });
    }
    
    componentDidMount() {
        this.getQuote();
    }
    render() {
        return (
            <div>
                <header className="my-header">
                    <h1>Random Quote Generator</h1>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="card col border border-info">
                            <div className="current-quote text-info">
                              
                                {this.state.randomQuote.quote}
                               
                            </div>
                            <div className="source text-info">
                                &mdash;  { this.state.randomQuote.source }
                            </div>

                            <div className="tweet-button">
                                <a className="tweet" href={`https://twitter.com/intent/tweet?text="${this.state.randomQuote.quote}" — ${this.state.randomQuote.source}`} target="_blank">
                                    <span><i className="fab fa-twitter-square fa-2x"></i></span>Tweet</a>
                            </div>
                        </div>
                    </div>
                    <div className="new-quote-button">
                        <button type="button" className="btn btn-info" onClick = {() => this.getQuote()}>New Quote</button>
                    </div>
                    <div className="footer">
                        Coded by <a href="https://www.linkedin.com/in/joyce-annie-george-49954b15/" target="_blank">Joyce Annie George</a>
                    </div>
                
                </div>
            </div>
        );
    }
} 