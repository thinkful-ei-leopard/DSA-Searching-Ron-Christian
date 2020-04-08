import React, { Component } from 'react'

export default class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // handleSearch = (event) => {
    //     this.setState({
    //         search: event.target.value
    //     })
    // }
    render() {
        return (
            <div> 
                <input onChange = {e => this.props.handleSearch(e)} 
                type='text' 
                placeholder='Input number to search'
                id='number'
                name='number'>
                </input>
            </div>

        )
    }
}


{/* <form className='CreateSpellPage__form' onSubmit={e => this.handleSubmit(e)}>
            <h2>Create a New Spell</h2>
            <div className='form-group'>
              <label htmlFor='add-spell-name'>Spell Name </label>
              <input
                type='text'
                className='CreateSpellPage__control'
                // on submit, the name will what the server will get data keys name after
                name='add-spell-name'
                id='add-spell-name'
                 // Each time the user types anything into input, we update the state. This allows real-time error messages (ie before submit)
                onChange={e => this.updateSpell(e.target.value, 'name')}
                required
                />
              {/* Conditional rendering depending on whether the user has changed the input or not */}
            //   {this.state.name.touched && (<ValidationError message={nameError} />)}
            // </div>

            
//   updateSpell(value, keyName) { */}
//     // Whenever the user types anything into the input, we update the state! each letter at a time!
//     // When the user types ANYTHING we set the value of touched to "true" from "false" this way we know
//     // when to correctly render our ValidationError
//     let newState = { [keyName]: {value, touched: true}};
//     this.setState(newState);
//   }