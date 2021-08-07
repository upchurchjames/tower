import { React, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        display: 'flex',
        margin: '0 0 8px 0',
        height: '60px',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    button: {
        textTransform: 'none'
    }
});

class DataSetCard extends Component {
    render() {
        const { classes, dataSet } = this.props;

        return (
            <Card className={classes.root}>
                <Button className={classes.button} onClick={this.openDataSet}>
                    <CardContent>
                            <Typography variant="body1">
                                {dataSet.name}
                            </Typography>
                    </CardContent>
                </Button>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(DataSetCard);