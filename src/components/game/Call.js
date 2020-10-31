import React from 'react';
import Scammer from './Scammer';
// import Dialogue from './Dialogue';
import GenerateMessage from './GenerateMessage';

class Call extends React.Component {
    constructor(props) {
        super(props);
        
        // imitate data from mongodb
        this.state = {
            id: 0,
            scammer: '+79841045637',
            dialogue: {
                answer:"алло?",
                score:0,
                fishnet: "Я сотрудник сб итд итп крч го кредмт",
                game_over:false,
                reaction: {
                  yes:{
                    dialogue:{
        
                        answer:"Можете поподробнее?",
                        score:1,
                        fishnet: "12% кредит на 10 лет",
                        game_over:false,
                        reaction: {
                            yes:{
                                dialogue:{
        
                                    answer:"Я готов взять в кредит",
                                    score:-5,
                                    fishnet:"Вас обманули, вы потеряли 500руб",
                                    game_over:true
                                }
                            },
                            no:{
                                dialogue:{
        
                                    answer:"Извините, мне это не интересно. До свидания",
                                    score:3,
                                    fishnet:"Вы избежали мошенничества",
                                    game_over:true
                                }
                            }
                        }
                    }
                },
                no:{
                    dialogue:{
                        
                        answer:"Извините, но меня не интересует кредит",
                        score:3,
                        fishnet: "Мы предлагаем выгодную сделку! 7% месяц",
                        game_over:false,
                        reaction:{
                            yes:{
                                dialogue:{
        
                                    answer:"Можно подробнее?",
                                    score:1,
                                    fishnet:"вы заплатите жизнью",
                                    game_over:false,
                                    reaction:{
                                        yes:{
                                            dialogue:{
        
                                                answer:"Ок, давайте",
                                                score:-5,
                                                fishnet:"Вас обманули, лохи",
                                                game_over:true
                                            }
                                        },
                                        no:{
                                            dialogue:{
        
                                                answer:"Отстаньте уже!",
                                                score:3,
                                                fishnet:"Вы избежали мошенничества, молодец",
                                                game_over:true
                                            }
                                        }
                                    }
                                }
                            },
                            no:{
                                dialogue:{
        
                                    answer:"Отстаньте уже!",
                                    score:3,
                                    fishnet:"Вы избежали мошенничества, молодец",
                                    game_over:true
                                }
                            }
                        }
                    }
                  }
                }
            },
            messages: ["алло?"],
            game_over: false,
            score: 0
        };
    }

    choice(data) {
        let messages = this.state.messages;
        let dialogue;
        messages.push(this.state.dialogue.fishnet)
        if (data[0]) {
            messages.push(this.state.dialogue.reaction.yes.dialogue.answer);

            dialogue = this.state.dialogue.reaction.yes.dialogue;

            if (dialogue.game_over) {
                console.log('game over a')
                this.setState({game_over:true})
            }

        } else {
            messages.push(this.state.dialogue.reaction.no.dialogue.answer);
            
            dialogue = this.state.dialogue.reaction.no.dialogue

            if (dialogue.game_over) {
                this.setState({game_over:true})
            }
        }
        
        let score = this.state.score + data[1]

        this.setState({ 
            dialogue : dialogue,
            messages : messages,
            score : score
        });
         
    }

    render() {
        return(
            <div className="game-area">
                <em>{this.state.id}</em>
                <hr />
                <Scammer 
                    scammer={ this.state.scammer }
                      
                />
                <div>
                    <GenerateMessage 
                        dialogue={this.state.dialogue} 
                        onClick={(data) => this.choice(data)}
                        messages={this.state.messages}
                        game_over={this.state.game_over}
                        score={this.state.score}
                        id={this.state.id}
                    />
                </div>
            </div>
        );
    }
}

export default Call;