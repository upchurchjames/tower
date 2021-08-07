import Data from '../../../../db/db.json'
import { React, Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Paper, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid'
import Axios from 'axios';

let columns = [
        { title: "id",          field: "id",            hidden: true },
        { title: "id_File",     field: "id_File",       width: 150 },
        { title: "id_DataSet",  field: "id_DataSet",    width: 150 },
        { title: "startTime",   field: "startTime",     width: 150 },
        { title: "duration",    field: "duration",      width: 150 },
        { title: "id_DataType", field: "id_DataType",   width: 170 }
    ];

class DataSet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSet: null,
            gridData: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.getDataSetData(id);
    }

    async getDataSetData(id) {
        var idDataSet = parseInt(id);

        var url = 'http://localhost:8000';
        var endpoint = '/DataSet/' + id;

        let data;

        await Axios.get(url + endpoint)
            .then(res => {
                console.log(res);
                data = res.data;
            });

        let formattedData = data.map((dataSet, index) => { return { dataSet, id: index }; });

        this.setState({ dataSet: formattedData });
        this.bindDataGrid(formattedData);
    }

    bindDataGrid = (data) => {
        console.log('Binding: ');
        console.log(data);

        let rows = data.map((dataSet) => {
            let row = {
                id: dataSet.id,
                //id_File
            };

            return row;
        });

        this.setState({ gridData: { rows }});
    }

    render() {
        const { dataSet, gridData } = this.state;

        let emptyRow = {
            id: 0,
            id_File: "",
            id_DataSet: "",
            startTime: "",
            duration: "",
            id_DataType: ""
        }

        const rows = gridData !== null ? gridData.rows : [emptyRow];

        return (
            <div className="DataSet">
                <p>Displaying Data Set {dataSet !== null ? this.state.dataSet.name : 'null'}...</p>
                <p>This is where a dataset table will go, listing any data points that have been labeled. Also, maybe it will have a list of files included? IDK yet.</p>
                <Paper style={{ height: '500px' }}>
                    <Typography variant="h6">Labeled Data</Typography>
                    <DataGrid 
                        rows={rows}
                        columns={columns}
                        checkBoxSelection
                        disableSelectionOnClick
                    />
                </Paper>

            </div>
        );
    }
}

export default withRouter(DataSet);