import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeDegree } from '../../actions/actions'
import './Degree.css'

class Degree extends Component {
    changeDegreeHandler = (e) => {
        const degVal = e.target.value;
        this.props.changeDegree(degVal)
    }
    render() {
        return (
            <div>
                <input className='radio-buttons' onChange={(e) => this.changeDegreeHandler(e)} type='radio' name='degree' value='kelvin' checked={this.props.selVal === 'kelvin'} /><span>Kevin</span>
                <input className='radio-buttons' onChange={(e) => this.changeDegreeHandler(e)} type='radio' name='degree' value='celcius' checked={this.props.selVal === 'celcius'} /><span>Celcius</span>
                <input className='radio-buttons' onChange={(e) => this.changeDegreeHandler(e)} type='radio' name='degree' value='fahrenheit' checked={this.props.selVal === 'fahrenheit'} /><span>Fahrenheit</span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selVal: state.deg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeDegree: (value) => {
            dispatch(changeDegree(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Degree)