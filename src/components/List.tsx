import * as React from 'react';
import { createStore } from 'redux';
import reducer from '../reducers';

export default class List extends React.Component<any, any>{
    
    initialState = {
        users: [
            { name: "Felipe", id: 1 },
            { name: "Adalberto", id: 2 },
            { name: "Gustavo", id: 3},
            { name: "Julia", id: 4}
        ]
    };

    store = createStore(reducer, this.initialState as any);
    
    constructor(props: any) {
        super(props);

    }


    render() {
        return (
            <div>
                {this.store.getState().users.map(
                    (user: any) => {
                        return (
                            <h4 key={user.id} >{user.name}</h4>
                        );
                    }
                )}
            </div>
        );
    }


}