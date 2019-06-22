import * as React from 'react';


export default class List extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            List: [
                { name: "Felipe", id: 1 },
                { name: "Adalberto", id: 2 },
                { name: "Gustavo", id: 3}
            ]
        };
    }


    render() {

        return (
            <div>
                {this.state.List.map(
                    (user: any) => {
                        return (
                            <h4 key={user.id} >{user.name}</h4>
                        );
                    }
                ) }
            </div>
        );
    }


}