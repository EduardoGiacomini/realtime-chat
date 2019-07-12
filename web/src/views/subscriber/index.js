import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setUser} from '../../commons/store/actions'
import {joinChat, receiveClient} from '../../commons/server'
import Input from '../../components/Input'
import Button from '../../components/Button'
import hero from '../../commons/assets/hero.svg'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class Subscriber extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
        
        receiveClient((err, user) => {
            this.props.setUser(user)
            this.redirectUser('/chat')
        })
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.redirectUser = this.redirectUser.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }

    handleChange(event) {
        this.setState({name: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        joinChat(this.state.name)
    }

    redirectUser(path) {
        this.props.history.push(path)
    }

    clearForm() {
        this.setState({name: ''})
    }

    render() {
        return (
            <div>
                <div className='subscriber'>
                    <h1 className='title'>Realtime Chat App</h1>
                    <p className='paragraph'>Seja bem-vindo(a) à aplicação de bate-papo em tempo real. Por favor, para continuar 
                        informe o seu nome para ingressar na sala de bate-papo:</p>
                    <img
                        className='subscriber--img'
                        src={hero}
                        alt='Um homem com um celular em mãos enviando mensagens de texto'
                        title='Um homem com um celular em mãos enviando mensagens de texto'
                    />    
                    <form className='subscriber--form' onSubmit={this.handleSubmit}>
                        <Input
                            id='name'
                            name='name'
                            value={this.state.name}
                            placeholder='Nome de usuário'
                            autoFocus={true}
                            required={true}
                            onChange={this.handleChange}
                        />
                        <Button
                            type='submit'
                            icon={faPlay}
                        />
                    </form>
                </div>
                <div className="wave"></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setUser}, dispatch)
export default connect(null, mapDispatchToProps)(Subscriber)
