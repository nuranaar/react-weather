import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCities } from '../../actions/actions'
import './Input.css'

class Input extends Component {
    enterHitHandler = (e) => {
        if (e.keyCode === 13) {
            var c = e.currentTarget.value
            this.addCity(c)
        }
        else { return false; }
    }

    addCity = (city) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16596fe956171a7376f2ba91213e3499`)
            .then(res => res.json())
            .then(res => {
                if (res.cod === 200 && !this.props.state.find(city => city.id === res.id)) {
                    let arr = [...this.props.state];
                    arr.push(res);
                    this.props.addCities(arr)
                }
            }
            )

    }

    render() {
        return (
            <div>
                <input className='input' type='text' placeholder='type the city' onKeyDown={this.enterHitHandler} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { state: state.cities }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCities: (data) => {
            dispatch(addCities(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)