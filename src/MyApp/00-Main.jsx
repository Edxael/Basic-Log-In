import React from 'react'

export default class extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                fname: '',
                lname: '',
                email: '',
                phone: '',
                password1: '',
                password2: '',
                secQuestion: 'Select One',
                secAnswer: '',
                address1: '',
                address2: '',
                address3: '',
                city: '',
                zip: '',
                state: ''
            }
    }
    render(){

        const createAccount = () => {
            console.log("Creating Account")
            let pk1 = {
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                phone: this.state.phone,
                password1: this.state.password1,
                password2: this.state.password2,
                secQuestion: this.state.secQuestion,
                secAnswer: this.state.secAnswer,
                company: 'cryst',
                address1: this.state.address1,
                address2: this.state.address2,
                address3: this.state.address3,
                city: this.state.city,
                zip: this.state.zip,
                state: this.state.state
            }

            if(this.state.password1 !== this.state.password2){
                alert("Passwords Do not match.")
            }else if(pk1.fname === '' || pk1.lname === '' || pk1.email === '' || pk1.password1 === '' || pk1.secQuestion === 'Select One' || pk1.secAnswer === ''){
                alert('Missing Information plese provide all the requested information')
            }else{
                console.log("Body: ", pk1)
            }

            
        }

        return(
            <div>
                <h2>Create User - 2</h2>

                <div>
                    <div className="input-wrap">
                        <div>First Name: </div>
                        <input type="text" value={this.state.fname} onChange={ (e) => { this.setState({ fname: e.target.value }) } } />
                    </div>
                    <div className="input-wrap">
                        <div>Last Name: </div>
                        <input type="text" value={this.state.lname} onChange={ (e) => { this.setState({ lname: e.target.value }) } } />
                    </div>
                    <div className="input-wrap">
                        <div>Email</div>
                        <input type="text" value={this.state.email} onChange={ (e) => { this.setState({ email: e.target.value }) } } />
                    </div>
                    <div className="input-wrap">
                        <div>Phone:</div>
                        <input type="text" value={this.state.phone} onChange={ (e) => { this.setState({ phone: e.target.value }) } } />
                    </div>
                    <br/><br/>

                    <div>
                        <h4>Adress</h4>
                        
                        <div>Addres-1</div>
                        <input type="text" value={this.state.address1} onChange={ (e) => { this.setState({ address1: e.target.value }) } } />

                        <div>Addres-2</div>
                        <input type="text" value={this.state.address2} onChange={ (e) => { this.setState({ address2: e.target.value }) } } />

                        <div>Addres-3</div>
                        <input type="text" value={this.state.address3} onChange={ (e) => { this.setState({ address3: e.target.value }) } } />

                        <div>City:</div>
                        <input type="text" value={this.state.city} onChange={ (e) => { this.setState({ city: e.target.value }) } } />

                        <div>Zip:</div>
                        <input type="text" value={this.state.zip} onChange={ (e) => { this.setState({ zip: e.target.value }) } } />

                        <div>State:</div>
                        <input type="text" value={this.state.state} onChange={ (e) => { this.setState({ state: e.target.value }) } } />
                    </div>
                    <br/><br/>



                    <div className="input-wrap">
                        <div>Password</div>
                        <input type="text" value={this.state.password1} onChange={ (e) => { this.setState({ password1: e.target.value }) } } />
                    </div>
                    <div className="input-wrap">
                        <div>Password again</div>
                        <input type="text" value={this.state.password2} onChange={ (e) => { this.setState({ password2: e.target.value }) } } />
                    </div>
                    <br/><br/>

                    <div className="input-wrap">
                        <div>Security Question:</div>
                        <div>{this.state.secQuestion}</div>
                        <select onChange={ (e) => { this.setState({ secQuestion: e.target.value }) } }>
                            <option value="Select One">Select One</option>
                            <option value="What is your favorite vacation spot?">What is your favorite vacation spot?</option>
                            <option value="What was your first pet's name?">What was your first pet's name?</option>
                            <option value="What is your grandfathers occupation?">What is your grandfathers occupation?</option>
                            <option value="What is the name of the place where you were born?">What is the name of the place where you were born?</option>
                            <option value="What was the model of your first car?">What was the model of your first car?</option>
                        </select>
                    </div>


                    <div className="input-wrap">
                        <div>Security Answer</div>
                        <input type="text" value={this.state.secAnswer} onChange={ (e) => { this.setState({ secAnswer: e.target.value }) } } />
                    </div>
                    <br/><br/>

                    <button onClick={createAccount} >Create Account</button>
                </div>

            </div>
        )
    }
}