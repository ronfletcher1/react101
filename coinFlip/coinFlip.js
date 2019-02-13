class CoinFlip extends React.Component {
    // the first thing we do in ANY class...
    constructor(props){
        // this is a child class. It's a child of React.Component
        // in order to get the cool stuff that is React.Component, ...
        super(props)
        // React doesn't care about heads or tails.
        // like, at all
        this.heads = "buffalo-nickel-heads.jpg"
        this.tails = "buffalo-nickel-tails.png"
        this.coin = [
            this.heads,
            this.tails
        ]
        // State is special. React cares about state. A LOT!!
        this.state = {
            image: this.coin[0]
        }
        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin(){
        console.log("Flip Coin Ran")
        // Listen.
        // Really...please listen
        // stop never ever ever change/mutate state directly.
        // that is react's job. don't do it. you will kill your app
        // or another developer will kill you
        // react gave us a better
        let coinSide = Math.round(Math.random()); //0,1
        this.setState({
            image: this.coin[coinSide]
        })
    }
    // local class method
    // EVERY... REPEAT... EVERY clas component, must have a render.
    render(){



        // it is my job to return a single DOM element
        // wherher you like it or not render will run after the constructor
        return(
            <div className="coin-Flip">
                <button onClick={this.flipCoin}>FLIP!!</button>
                <img src={this.state.image} />
            </div>
        )
    }

}