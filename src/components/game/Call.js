import React from 'react';
import Scammer from './Scammer';
// import Dialogue from './Dialogue';
import GenerateMessage from './GenerateMessage';
import GameOver from './GameOver';

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
            messages: Array(1)
        };
    }

    choice() {
        console.log(this.state.dialogue.reaction.yes.dialogue.game_over);

        let messages = this.state.messages;
        messages.push(this.state.dialogue.fishnet)
        messages.push(this.state.dialogue.reaction.yes.dialogue.answer);
        console.log(messages)

        this.setState({ dialogue : this.state.dialogue.reaction.yes.dialogue,
                        messages : messages });
        if (this.state.dialogue.reaction.yes.dialogue.game_over) {
            return(
                <GameOver />
            );
        }
    }

    render() {
        console.log(this.props.dialogue)
        return(
            <div className="game-area">
                <em>{this.state.id}</em>
                <hr />
                <Scammer 
                    scammer={ this.state.scammer }
                      
                />
                {/* <Dialogue 
                    dialogue={ this.state.dialogue } 
                    onClick={() => this.choice()}
                /> */}
                <div>
                    <GenerateMessage 
                        dialogue={this.state.dialogue} 
                        onClick={(bool) => this.choice()}
                        messages={this.state.messages}
                    />
                </div>
            </div>
        );
    }
}

export default Call;