import * as React from 'react';

export default class Jumbotron extends React.Component<any, any>{
    
    constructor(props: any) {
        super(props);
        this.state = {
            name: "Felipe",
            count: 0
        };
        
    }

    public handleChange(event: any) : void {
        if (this.state.name === "Felipe") {
            this.setState({ name: "Charles" });
        } else {
            this.setState({name: "Felipe"});
        }
        
    }

    public incrementaContador(): void{
        this.setState({ count: this.state.count + 1 })    
    }

    public reset(): void{
        this.setState({ count: 0 });
    }

    public render() {
        return (
            <div>
                <h2>Jumbotron</h2>
                <h3>{this.state.name}</h3>
                <button name="EscreveNome" onClick = { e => this.handleChange(e) }>
                    Muda o nome
                </button>

                <div>
                    <h3>{this.state.count}</h3>
                    <div>
                        <button onClick = { e => this.incrementaContador() } >
                            Incrementa
                        </button>
                        <button onClick={ e => this.reset()} >
                            Reset
                        </button>
                    </div>
                    
                </div>
            </div>
        );
    }

}