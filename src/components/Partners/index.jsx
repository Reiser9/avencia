import React from 'react';

import PartnerItem from './PartnerItem';
import PartnerTab from './PartnerTab';

const dataTab = [
    {
        tabId: 0,
        name: 'DeFi'
    },
    {
        tabId: 1,
        name: 'CeFi'
    },
    {
        tabId: 2,
        name: 'Wallet'
    },
    {
        tabId: 3,
        name: 'Lending'
    },
    {
        tabId: 4,
        name: 'Staking'
    },
    {
        tabId: 5,
        name: 'AML'
    },
    {
        tabId: 6,
        name: 'Vendors'
    },
    {
        tabId: 7,
        name: 'Exchanges'
    },
    {
        tabId: 8,
        name: 'LPs'
    },
    {
        tabId: 9,
        name: 'NFT'
    }
]

const dataPartners = [
    {
        tabId: '0',
        img: './assets/img/partners1.svg',
        name: 'Curve'
    },
    {
        tabId: '0',
        img: './assets/img/partners2.svg',
        name: 'Uniswap'
    },
    {
        tabId: '0 7',
        img: './assets/img/partners3.svg',
        name: 'Pancake Swap'
    },
    {
        tabId: '0 7',
        img: './assets/img/partners4.svg',
        name: 'Balancer'
    },
    {
        tabId: '0',
        img: './assets/img/partners7.svg',
        name: 'Sushiswap'
    },
    {
        tabId: '0',
        img: './assets/img/partners8.svg',
        name: 'Astroport'
    },
    {
        tabId: '0',
        img: './assets/img/partners9.svg',
        name: 'Bancor'
    },
    {
        tabId: '0',
        img: './assets/img/partners10.svg',
        name: 'Trader Joe'
    },
    {
        tabId: '0',
        img: './assets/img/partners13.svg',
        name: 'Osmosis'
    },
    {
        tabId: '0',
        img: './assets/img/partners14.svg',
        name: 'DefiChain'
    },
    {
        tabId: '0',
        img: './assets/img/partners15.svg',
        name: 'BiSwap'
    },
    {
        tabId: '0',
        img: './assets/img/partners16.svg',
        name: 'Quickswap'
    },
    {
        tabId: '0',
        img: './assets/img/partners5.svg',
        name: 'Spookyswap'
    },
    {
        tabId: '0',
        img: './assets/img/partners11.svg',
        name: 'Raydium'
    },
    {
        tabId: '0 7',
        img: './assets/img/partners6.svg',
        name: 'Serum'
    },
    {
        tabId: '0',
        img: './assets/img/partners12.svg',
        name: 'Thorchain'
    },
    {
        tabId: '0',
        img: './assets/img/partners17.svg',
        name: 'MDEX'
    },
    {
        tabId: '1',
        img: './assets/img/talk6.svg',
        name: 'Binance'
    },
    {
        tabId: '1',
        img: './assets/img/partners19.svg',
        name: 'Bittrex'
    },
    {
        tabId: '1',
        img: './assets/img/partners20.svg',
        name: 'Poloniex'
    },
    {
        tabId: '1',
        img: './assets/img/partners21.svg',
        name: 'Coinbase'
    },
    {
        tabId: '1',
        img: './assets/img/talk4.svg',
        name: 'Kraken'
    },
    {
        tabId: '1',
        img: './assets/img/partners22.svg',
        name: 'Bitfinex'
    },
    {
        tabId: '1',
        img: './assets/img/partners23.svg',
        name: 'Bitstamp'
    },
    {
        tabId: '1',
        img: './assets/img/partners24.svg',
        name: 'HitBTC'
    },
    {
        tabId: '1',
        img: './assets/img/partners25.svg',
        name: 'Gemini'
    },
    {
        tabId: '1',
        img: './assets/img/partners26.svg',
        name: 'Kucoin'
    },
    {
        tabId: '2',
        img: './assets/img/partners27.svg',
        name: 'WalletConnect'
    },
    {
        tabId: '2',
        img: './assets/img/partners28.svg',
        name: 'Metamask'
    },
    {
        tabId: '2',
        img: './assets/img/partners29.svg',
        name: 'Trust Wallet'
    },
    {
        tabId: '2',
        img: './assets/img/partners30.svg',
        name: 'Phantom Wallet'
    },
    {
        tabId: '2',
        img: './assets/img/partners31.svg',
        name: 'Sollet'
    },
    {
        tabId: '2',
        img: './assets/img/partners32.svg',
        name: 'Yoroi'
    },
    {
        tabId: '2',
        img: './assets/img/partners33.svg',
        name: 'Ledger Nano'
    },
    {
        tabId: '2',
        img: './assets/img/partners34.svg',
        name: 'Trezor'
    },
    {
        tabId: '3',
        img: './assets/img/partners35.svg',
        name: '88mph'
    },
    {
        tabId: '3',
        img: './assets/img/partners36.svg',
        name: 'Alchemix'
    },
    {
        tabId: '3',
        img: './assets/img/partners37.svg',
        name: 'Fulcrum'
    },
    {
        tabId: '3',
        img: './assets/img/partners38.svg',
        name: 'Liquity'
    },
    {
        tabId: '3',
        img: './assets/img/partners39.svg',
        name: 'Notional'
    },
    {
        tabId: '3',
        img: './assets/img/partners40.svg',
        name: 'Oasis Borrow'
    },
    {
        tabId: '3',
        img: './assets/img/partners41.svg',
        name: 'Torque'
    },
    {
        tabId: '3',
        img: './assets/img/partners42.svg',
        name: 'TrueFi'
    },
    {
        tabId: '3',
        img: './assets/img/partners43.svg',
        name: 'Anchor (ANC)'
    },
    {
        tabId: '3',
        img: './assets/img/partners44.svg',
        name: 'AAVE (AAVE)'
    },
    {
        tabId: '3',
        img: './assets/img/partners45.svg',
        name: 'COMPOUND (COMP)'
    },
    {
        tabId: '3',
        img: './assets/img/partners46.svg',
        name: 'JUST LEND (JST)'
    },
    {
        tabId: '3',
        img: './assets/img/partners47.svg',
        name: 'Venus (XVS)'
    },
    {
        tabId: '3',
        img: './assets/img/partners48.svg',
        name: 'SOLEND'
    },
    {
        tabId: '3',
        img: './assets/img/partners49.svg',
        name: 'YOUHODLER'
    },
    {
        tabId: '3',
        img: './assets/img/partners50.svg',
        name: 'NEXO'
    },
    {
        tabId: '3',
        img: './assets/img/partners51.svg',
        name: 'CELSIUS'
    },
    {
        tabId: '3',
        img: './assets/img/partners52.svg',
        name: 'BlockFI'
    },
    {
        tabId: '4',
        img: './assets/img/partners53.svg',
        name: 'LIDO ETH 2.0'
    },
    {
        tabId: '4',
        img: './assets/img/partners54.svg',
        name: 'Certus One'
    },
    {
        tabId: '4',
        img: './assets/img/partners55.svg',
        name: 'Chorus One'
    },
    {
        tabId: '4',
        img: './assets/img/partners56.svg',
        name: 'Dokia Capital'
    },
    {
        tabId: '4',
        img: './assets/img/partners57.svg',
        name: 'Hyperblocks'
    },
    {
        tabId: '4',
        img: './assets/img/partners58.svg',
        name: 'Mythos'
    },
    {
        tabId: '4',
        img: './assets/img/partners59.svg',
        name: 'P2P validator'
    },
    {
        tabId: '4',
        img: './assets/img/partners60.svg',
        name: 'SparkPool'
    },
    {
        tabId: '4',
        img: './assets/img/partners61.svg',
        name: 'Stake Capital'
    },
    {
        tabId: '4',
        img: './assets/img/partners62.svg',
        name: 'StakeWithUS'
    },
    {
        tabId: '4',
        img: './assets/img/partners63.svg',
        name: 'Stakin'
    },
    {
        tabId: '4',
        img: './assets/img/partners64.svg',
        name: 'Stake.Fish'
    },
    {
        tabId: '4',
        img: './assets/img/partners65.svg',
        name: 'Figment Networks'
    },
    {
        tabId: '4',
        img: './assets/img/partners66.svg',
        name: 'Staking Facilities'
    },
    {
        tabId: '4',
        img: './assets/img/partners67.svg',
        name: 'PRISM Protocol (PRISM)'
    },
    {
        tabId: '4',
        img: './assets/img/partners68.svg',
        name: 'ThetaCash (TBILL)'
    },
    {
        tabId: '4',
        img: './assets/img/partners69.svg',
        name: 'Socean (SOCN)'
    },
    {
        tabId: '4',
        img: './assets/img/partners70.svg',
        name: 'Stafi (FIS)'
    },
    {
        tabId: '4',
        img: './assets/img/partners71.svg',
        name: 'MoneyOnChain (MOC)'
    },
    {
        tabId: '5',
        img: './assets/img/partners72.svg',
        name: 'Chainalysis'
    },
    {
        tabId: '5',
        img: './assets/img/partners73.svg',
        name: 'Bakkt'
    },
    {
        tabId: '5',
        img: './assets/img/partners74.svg',
        name: 'Bitfury'
    },
    {
        tabId: '5',
        img: './assets/img/partners75.svg',
        name: 'Elliptic'
    },
    {
        tabId: '5',
        img: './assets/img/partners76.svg',
        name: 'CipherTrace'
    },
    {
        tabId: '5',
        img: './assets/img/partners77.svg',
        name: 'Blockpass'
    },
    {
        tabId: '6',
        img: './assets/img/partners78.svg',
        name: 'Verifone'
    },
    {
        tabId: '6',
        img: './assets/img/partners79.svg',
        name: 'Ingenico'
    },
    {
        tabId: '6',
        img: './assets/img/partners80.svg',
        name: 'General Bytes'
    },
    {
        tabId: '6',
        img: './assets/img/partners81.svg',
        name: 'WhiteEgde Technology'
    },
    {
        tabId: '7',
        img: './assets/img/partners82.svg',
        name: 'DexGuru'
    },
    {
        tabId: '7',
        img: './assets/img/partners83.svg',
        name: 'dYdX'
    },
    {
        tabId: '7',
        img: './assets/img/partners84.svg',
        name: '1inch.exchange'
    },
    {
        tabId: '7',
        img: './assets/img/partners85.svg',
        name: 'AirSwap'
    },
    {
        tabId: '7',
        img: './assets/img/partners86.svg',
        name: 'AnySwap'
    },
    {
        tabId: '7',
        img: './assets/img/partners87.svg',
        name: 'Bisq'
    },
    {
        tabId: '7',
        img: './assets/img/partners88.svg',
        name: 'CowSwap'
    },
    {
        tabId: '7',
        img: './assets/img/talk7.svg',
        name: 'DDEX'
    },
    {
        tabId: '7',
        img: './assets/img/talk9.svg',
        name: 'DeversiFI'
    },
    {
        tabId: '7',
        img: './assets/img/talk11.svg',
        name: 'DODO'
    },
    {
        tabId: '7',
        img: './assets/img/partners91.svg',
        name: 'IDEX'
    },
    {
        tabId: '7',
        img: './assets/img/talk8.svg',
        name: 'Ellipsis'
    },
    {
        tabId: '7',
        img: './assets/img/talk10.svg',
        name: 'JellySwap'
    },
    {
        tabId: '7',
        img: './assets/img/talk12.svg',
        name: 'KyberSwap'
    },
    {
        tabId: '7',
        img: './assets/img/partners94.svg',
        name: 'Matcha'
    },
    {
        tabId: '7',
        img: './assets/img/partners95.svg',
        name: 'ParaSwap'
    },
    {
        tabId: '7',
        img: './assets/img/partners96.svg',
        name: 'Saber'
    },
    {
        tabId: '8',
        img: './assets/img/talk1.svg',
        name: 'CEX'
    },
    {
        tabId: '8',
        img: './assets/img/talk3.svg',
        name: 'Scrypt'
    },
    {
        tabId: '8',
        img: './assets/img/talk5.svg',
        name: 'Woorton'
    },
    {
        tabId: '8',
        img: './assets/img/talk2.svg',
        name: 'Galaxy Digital'
    },
    {
        tabId: '8',
        img: './assets/img/talk4.svg',
        name: 'Kraken'
    },
    {
        tabId: '8',
        img: './assets/img/talk6.svg',
        name: 'Binance'
    },
    {
        tabId: '9',
        img: './assets/img/opensea.svg',
        name: 'Opensea'
    },
    {
        tabId: '9',
        img: './assets/img/nifty.png',
        name: 'Nifty'
    },
    {
        tabId: '9',
        img: './assets/img/rarible.jpg',
        name: 'Rarible'
    },
    {
        tabId: '9',
        img: './assets/img/partners21.svg',
        name: 'Nft Coinbase'
    },
    {
        tabId: '9',
        img: './assets/img/me.png',
        name: 'Magiceden'
    },
    {
        tabId: '9',
        img: './assets/img/sr.png',
        name: 'Superrare'
    },
    {
        tabId: '9',
        img: './assets/img/async.png',
        name: 'Async.art'
    },
    {
        tabId: '9',
        img: './assets/img/talk6.svg',
        name: 'Binance'
    },
]

const Partners = () => {
    const [tab, setTab] = React.useState(0);
    const [partnersInTab, setPartnersInTab] = React.useState([]);

    React.useEffect(() => {
        setPartnersInTab(dataPartners.filter(a => a.tabId.includes(tab)));
    }, [tab]);

    return(
        <section className='our default__pad'>
            <div className='container'>
                <div className='our__inner w100 df fdc aic'>
                    <h2 className='headline1 text__center'>
                        All major crypto companies supported
                    </h2>

                    <div className='our__tabs w100 df aic fw'>
                        {dataTab.map(d => <PartnerTab key={d.tabId} name={d.name} active={tab === d.tabId} callback={() => setTab(d.tabId)} />)}
                    </div>

                    <div className='our__content w100'>
                        {partnersInTab.map((d, id) => <PartnerItem key={id} img={d.img} name={d.name} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners;