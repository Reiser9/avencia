import React from 'react';

const Chats = () => {
    return(
        <div className='dashboard__padding chats w100 df fdc aifs'>
            <h2 className="dashboard__title text__center">
                Chats
            </h2>

            <div className="chats__content w100 df">
                <div className="chats__content--dialogs w100 df fdc aifs jcsb fs">
                    <div className="chats__content--wrapper w100">
                        <div className="chats__content--tabs w100">
                            <button className="button our__tab profila__tab active">
                                <span className='our__tab--text'>
                                    Chats
                                </span>
                            </button>

                            <button className="button our__tab profila__tab">
                                <span className='our__tab--text'>
                                    Contacts
                                </span>
                            </button>

                            <button className="button our__tab profila__tab">
                                <span className='our__tab--text'>
                                    Channels
                                </span>
                            </button>
                        </div>

                        <div className="chat__search--inner w100 df aic">
                            <div className="chat__search--input--inner pr w100">
                                <input type="text" className="default__input swap__search--input" placeholder='Search' />

                                <img src="/assets/img/search.svg" alt="search icon" className="swap__search--icon pen light" />
                                <img src="/assets/img/search-dark.svg" alt="search icon" className="swap__search--icon pen dark" />
                            </div>

                            <button className="button default__hover chat__setting--button df aic jcc fs">
                                <img src="/assets/img/setting-white.svg" alt="icon" className="chat__icon light" />
                                <img src="/assets/img/setting-white-dark.svg" alt="icon" className="chat__icon dark" />
                            </button>

                            <button className="button button__default chat__add--button fs">
                                <span className='df aic jcc'>
                                    <img src="/assets/img/plus-dark.svg" alt="icon" className="chat__icon" />
                                </span>
                            </button>
                        </div>

                        <div className="chat__box w100 df fdc aifs">
                            <p className="chat__box--title headline9">
                                Favorites
                            </p>

                            <div className="chat__favorites--inner w100 df aic">
                                <button className="button default__hover chat__favorites--add">
                                    <img src="/assets/img/plus.svg" alt="icon" className="chat__icon light" />
                                    <img src="/assets/img/plus-dark.svg" alt="icon" className="chat__icon dark" />
                                </button>

                                <div className="chat__avatar online">
                                    <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                </div>

                                <div className="chat__avatar">
                                    <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                </div>

                                <div className="chat__avatar online pr">
                                    <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                </div>

                                <div className="chat__avatar">
                                    <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                </div>

                                <div className="chat__avatar online">
                                    <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                </div>

                                <div className="chat__avatar">
                                    <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                </div>

                                <div className="chat__avatar online pr">
                                    <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                </div>

                                <div className="chat__avatar">
                                    <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chat__messages w100">
                        <p className="chat__box--title chat__messages--title headline9">
                            Messages
                        </p>

                        <div className="chat__messages--content w100 df fdc aifs">
                            <button className="button chat__messages--item new w100 df aic">
                                <span className="chat__messages--ava fs">
                                    <span className="chat__avatar online">
                                        <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                    </span>
                                </span>

                                <span className="chat__messages--text--inner df fdc aifs w100">
                                    <p className="chat__messages--name headline9">
                                        Helen White
                                    </p>

                                    <p className="chat__messages--text headline9">
                                        I sent the request today
                                    </p>
                                </span>

                                <span className="chat__messages--time--inner df fdc aife fs">
                                    <p className="chat__messages--time headline9">
                                        Now
                                    </p>

                                    <p className="chat__messages--new df aic jcc">
                                        2
                                    </p>
                                </span>
                            </button>

                            <button className="button chat__messages--item w100 df aic">
                                <span className="chat__messages--ava fs">
                                    <span className="chat__avatar online">
                                        <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                    </span>
                                </span>

                                <span className="chat__messages--text--inner df fdc aifs w100">
                                    <p className="chat__messages--name headline9">
                                        Daniil Romashov
                                    </p>

                                    <p className="chat__messages--text headline9">
                                        You: Lets see what I can do about it
                                    </p>
                                </span>

                                <span className="chat__messages--time--inner df fdc aife fs">
                                    <p className="chat__messages--time headline9">
                                        1 min ago
                                    </p>
                                </span>
                            </button>

                            <button className="button chat__messages--item active w100 df aic">
                                <span className="chat__messages--ava fs">
                                    <span className="chat__avatar text">
                                        Vc
                                    </span>
                                </span>

                                <span className="chat__messages--text--inner df fdc aifs w100">
                                    <p className="chat__messages--name headline9">
                                        Vino Costa
                                    </p>

                                    <p className="chat__messages--text headline9">
                                        Have you seen this article?
                                    </p>
                                </span>

                                <span className="chat__messages--time--inner df fdc aife fs">
                                    <p className="chat__messages--time headline9">
                                        7:06 AM
                                    </p>
                                </span>
                            </button>

                            <button className="button chat__messages--item new w100 df aic">
                                <span className="chat__messages--ava fs">
                                    <span className="chat__avatar online">
                                        <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                    </span>
                                </span>

                                <span className="chat__messages--text--inner df fdc aifs w100">
                                    <p className="chat__messages--name headline9">
                                        Helen White
                                    </p>

                                    <p className="chat__messages--text headline9">
                                        I sent the request today
                                    </p>
                                </span>

                                <span className="chat__messages--time--inner df fdc aife fs">
                                    <p className="chat__messages--time headline9">
                                        Now
                                    </p>

                                    <p className="chat__messages--new df aic jcc">
                                        2
                                    </p>
                                </span>
                            </button>

                            <button className="button chat__messages--item w100 df aic">
                                <span className="chat__messages--ava fs">
                                    <span className="chat__avatar online">
                                        <img src="/assets/img/ava2.png" alt="ava" className="chat__avatar--img" />
                                    </span>
                                </span>

                                <span className="chat__messages--text--inner df fdc aifs w100">
                                    <p className="chat__messages--name headline9">
                                        Daniil Romashov
                                    </p>

                                    <p className="chat__messages--text headline9">
                                        You: Lets see what I can do about it
                                    </p>
                                </span>

                                <span className="chat__messages--time--inner df fdc aife fs">
                                    <p className="chat__messages--time headline9">
                                        1 min ago
                                    </p>
                                </span>
                            </button>

                            <button className="button chat__messages--item w100 df aic">
                                <span className="chat__messages--ava fs">
                                    <span className="chat__avatar text">
                                        Vc
                                    </span>
                                </span>

                                <span className="chat__messages--text--inner df fdc aifs w100">
                                    <p className="chat__messages--name headline9">
                                        Vino Costa
                                    </p>

                                    <p className="chat__messages--text headline9">
                                        Have you seen this article?
                                    </p>
                                </span>

                                <span className="chat__messages--time--inner df fdc aife fs">
                                    <p className="chat__messages--time headline9">
                                        7:06 AM
                                    </p>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="chats__content--content w100 df fdc aifs">
                    <div className="chats__content--info w100 df aic jcsb">
                        <div className="chats__content--info--box df aic">
                            <div className="chat__messages--ava fs">
                                <div className="chat__avatar text">
                                    Vc
                                </div>
                            </div>

                            <div className="chats__content--name--inner">
                                <p className="chat__messages--name headline9">
                                    Vino Costa
                                </p>

                                <p className="chat__messages--text headline9">
                                    Active 35m ago
                                </p>
                            </div>
                        </div>

                        <div className="chats__content--info--buttons df aic">
                            <button className="button default__hover chats__content--info--button df aic jcc">
                                <img src="/assets/img/phone.svg" alt="icon" className="img__auto light" />
                                <img src="/assets/img/phone-dark.svg" alt="icon" className="img__auto dark" />
                            </button>

                            <button className="button default__hover chats__content--info--button df aic jcc">
                                <img src="/assets/img/video.svg" alt="icon" className="img__auto light" />
                                <img src="/assets/img/video-dark.svg" alt="icon" className="img__auto dark" />
                            </button>

                            <button className="button default__hover chats__content--info--button df aic jcc">
                                <img src="/assets/img/setting-white.svg" alt="icon" className="img__auto light" />
                                <img src="/assets/img/setting-white-dark.svg" alt="icon" className="img__auto dark" />
                            </button>

                            <button className="button default__hover chats__content--info--button df aic jcc">
                                <img src="/assets/img/person.svg" alt="icon" className="img__auto light" />
                                <img src="/assets/img/person-dark.svg" alt="icon" className="img__auto dark" />
                            </button>
                        </div>
                    </div>

                    <div className="chats__content--inner w100 df fdc aic">
                        <div className="chats__content--message w100 df opponent">
                            <div className="chats__content--message--content df fdc aife">
                                <p className="chats__content--message--text headline8">
                                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)🤑🤑
                                    
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour)
                                </p>

                                <p className="chats__message--time">
                                    7:06 AM
                                </p>
                            </div>
                        </div>

                        <div className="chats__content--message w100 df opponent">
                            <div className="chats__content--message--content df fdc aife">
                                <p className="chats__content--message--text headline8">
                                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from❤️
                                </p>

                                <p className="chats__message--time">
                                    7:58 PM
                                </p>
                            </div>
                        </div>

                        <div className="chats__content--message w100 df me">
                            <div className="chats__content--message--content df fdc aife">
                                <p className="chats__content--message--text headline8">
                                    Im down see you soon bro
                                </p>

                                <p className="chats__message--time">
                                    7:58 PM
                                </p>
                            </div>
                        </div>

                        <div className="chats__content--unread w100 text__center">
                            Unread messages
                        </div>

                        <div className="chats__content--day text__center">
                            Today
                        </div>

                        <div className="chats__content--message w100 df opponent">
                            <div className="chats__content--message--content df fdc aife">
                                <p className="chats__content--message--text headline8">
                                    Have you seen this article?
                                </p>

                                <p className="chats__message--time">
                                    7:06 AM
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="chats__content--send w100 df aic">
                        <button className="button default__hover chats__content--add--button df aic jcc fs">
                            <img src="/assets/img/plus.svg" alt="icon" className="img__auto light" />
                            <img src="/assets/img/plus-dark.svg" alt="icon" className="img__auto dark" />
                        </button>

                        <div className="chats__content--send--input--inner">
                            <input type="text" className="default__input chats__content--send--input" placeholder='Type your message' />
                        </div>

                        <button className="button default__hover chats__content--add--button chats__content--smile--button df aic jcc fs">
                            <img src="/assets/img/smile.svg" alt="icon" className="img__auto light" />
                            <img src="/assets/img/smile-dark.svg" alt="icon" className="img__auto dark" />
                        </button>

                        <button className="button button__default chats__content--send--button fs">
                            <span className="df aic jcc">
                                <img src="/assets/img/send.svg" alt="icon" className="img__auto" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats;