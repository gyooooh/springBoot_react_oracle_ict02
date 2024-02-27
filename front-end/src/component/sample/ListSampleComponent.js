import React, { Component } from 'react';
import ApiService from '../../ApiService';
//npm install -f @mui/material
//npm install -f @emotion/react @emotion/styled

import { Table, TableHead, TableRow, TableCell, TableBody, Button, Typography} from '@mui/material'
import { Create, Delete } from '@mui/icons-material'; //npm install -f @mui/icons-material@^5.11.16

class ListSampleComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            samples: [],    // 5. 리스트 데이터
            message: null
        }
    }

    // 라이프사이클 중 컴포턴트가 생성된 후 사용자에게 보여지기 전까지의 전체 과정을 렌더링(데이트 로딩)
    // db에서 넘어온 데이터를 받아와서 this.reloadSampleList(); 호출한다.
    componentDidMount() {
        this.reloadSampleList();  //1.
    }

    // list 
    reloadSampleList = () => {
        ApiService.fetchSamples() // 2. 스프링부트와 통신기능 호출 >  3. ApiService.js 스프링부트의 데이터를 가지고 온다.
        .then(res => {              // 4.
            this.setState({
                samples: res.data // res 에 결과 데이타를 담아라
            })
        })
        .catch(err => {
            console.log('reloadSampleList() Error!!', err);
        })
    }

    // insert
    addSample = () => {
        window.localStorage.removeItem("sampleID"); // SQL에서 max + 1로 자동증가 처리하므로
        // RoutConponent.js의 <Route path="/add-sample" exact={true} component={AddSampleComponent} /> 호출
        this.props.history.push("/add-sample");
    }

    // update
    editSample = (ID) =>  {
        window.localStorage.setItem("sampleID", ID);    // EditSampleComponent.js 에서 getItem(), update문에서 where절에 사용
        //<Route path="/edit-sample" exact={true} component={EditSampleComponent} />
        this.props.history.push("/edit-sample");
    }

    // delete
    deleteSample = (sampleID) => {
        ApiService.deleteSample(sampleID)
            .then(res => {
                this.setState({
                    samples: this.state.samples.filter(sample => sample.id !== sampleID)
                });
                console.log('delete 성공', res.data); // 컨트롤러에서 전달함(resultCode, resultMsg)
            })
            .catch(err => {
                console.log('delete() Error!! : ', err);
            })
    }

    render() {
        return (
            <div><br/><br/>

                <Typography variant="h4" style={style}> sample list </Typography><br/><br/>
                <Button variant="contained" color="primary" onClick={this.addSample}> Add Sample </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> Sample ID </TableCell>
                            <TableCell> Name </TableCell>
                            <TableCell> Brand </TableCell>
                            <TableCell> MadeIn </TableCell>
                            <TableCell> Price </TableCell>
                            <TableCell> Edit </TableCell>
                            <TableCell> Delete </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.samples.map(sample => 
                            <TableRow key={sample.id}>
                                <TableCell component="th" scope="sample"> {sample.id} </TableCell>
                                <TableCell> {sample.name} </TableCell>
                                <TableCell> {sample.brnad} </TableCell>
                                <TableCell> {sample.madein} </TableCell>
                                <TableCell> {sample.price} </TableCell>
                                <TableCell onClick={() => this.editSample(sample.id)}>
                                    <Create />
                                </TableCell>
                                <TableCell onClick={() => this.deleteSample(sample.id)}>
                                    <Delete />
                                </TableCell>
                            </TableRow>    
                        )}

                    </TableBody>
                </Table>

            </div>
        )
    }
}

const style={
    display: 'flex',
    justifyContent: 'center'
}

export default ListSampleComponent;