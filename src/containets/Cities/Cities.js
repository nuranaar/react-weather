import React from 'react';
import { connect } from 'react-redux'
import City from '../../components/City/City';
import { deleteCities } from '../../actions/actions'

class Cities extends React.Component {
    deleteCityHandler = (id) => {
        const newList = this.props.cities.filter(city => city.id !== id);
        this.props.deleteCities(newList)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.cities.map(city =>
                        <City clicked={() => this.deleteCityHandler(city.id)} key={city.id}
                            name={city.name} temp={city.main.temp} degree={this.props.deg}/>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities,
        deg: state.deg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCities: (data) => {
            dispatch(deleteCities(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)