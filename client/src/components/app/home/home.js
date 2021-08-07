import { React, Component } from 'react'
import DataSetCard from './datasetCard'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSets: null
        };

        console.log('here')
    }

    componentDidUpdate(prevProps) {
        if (this.props.idUser !== prevProps.idUser) {
            console.log(this.props);
            this.GetDataSets(this.props.idUser);
        }
    }

    GetApiData(url) {
        Axios.get(url)
            .then(res => {
                this.setState({ dataSets: res.data });
            });
    }

    GetDataSets(idUser) {
        if (!idUser) return;

        const url = 'http://localhost:8000';
        console.log(idUser);
        const endpoint = '/DataSet/User/' + idUser;

        this.GetApiData(url + endpoint);
    }

    BindDataSets(data) {
        return (
            <div className="DataSets">
                { data.map(item => (
                    <div key={item.ObjectID}>
                        <Link
                            to={'/DataSet/' + item.ObjectID}
                            style={{ textDecoration: 'none' }}
                        >
                            <DataSetCard dataSet={item} />
                        </Link>
                    </div>
                )) }
            </div>
        );
    }

    render() {
        const { dataSets } = this.state;

        return (
            <div className="home">
                <Typography variant="h4">Data Sets</Typography>
                <div className="DataSets">
                    { (dataSets) 
                        ? dataSets.map(item => (
                            <div key={item.ObjectID}>
                                <Link
                                    to={'/DataSet/' + item.ObjectID}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <DataSetCard dataSet={item} />
                                </Link>
                            </div>
                        )) 
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default Home;