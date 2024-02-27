# 9. 리액트

# << API 연동의 기본 >> - ApiService.js

axios를 사용해서 GET(SELECT), PUT(EDIT), POST(INSERT), DELETE(DELETE) 등의 메서드로 API 요청을 할 수 있다.

REST API 를 사용 할 때에는 하고 싶은 작업에 따라 다른 메서드로 요청을 할 수 있는데 메서드들은 다음 의미를 가지고 있습니다.

GET: 데이터 조회
POST: 데이터 등록
PUT: 데이터 수정
DELETE: 데이터 제거

select : 리액트 axios.get() => 스프링부트 @GetMapping
insert : 리액트 axios.post() => 스프링부트 @PostMapping
update : 리액트 axios.put() => 스프링부트 @PutMapping
delete : 리액트 axios.delete() => 스프링부트 @DeleteMapping


# --------- [ 플젝 생성 ] --------------------------------
# 9-0. 스프링부트 플젝 open
비주얼 스튜디오 코드 open
open folder > springBoot_react_oracle_ict02 스프링부트 프로젝트 선택

Terminal > new Terminal > Command Prompt 선택

# 9-1. front-end 플젝생성
springBoot_react_oracle_ict02>npx create-react-app front-end

# 9-2. 해당 폴더로 이동
springBoot_react_oracle_ict02>cd front-end

# 9-3. 실행
npm start => 로고가 뜨면 OK (http://localhost:3000/)

# 9-4. 비주얼 스튜디오 코드의 스프링부트 플젝안에 front-end 리액트 폴더가 생기고 
나머지 주석 => 리액트 SUMMARY.md


# 10. 이클립스에 리액트 폴더(front-end)가 생긴다.

# ------------[ Header.js ]---------------------------------
# 11-1. front-end > src > component > route > Header.js

# 구글 > react-bootstrap 검색 > https://react-bootstrap.netlify.app/로 이동
# Components 버튼 클릭 > Navbars 선택 > 8번째 function NavScrollExample() 복사 -> Header.js에 붙여넣기


# 11-2. App.js - <Header />, import 추가
import './App.css';
import Header from './component/route/Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

# 11-3. 실행 
# 11.4 Header.js -----------------------------------
# 부트스트랩 에러 => 부트스트랩 설치 => 터미널에서 ctrl + c > npm install react-bootstrap
# 설치 안될경우

# - npm install react-bootstrap --legacy-peer-deps 또는
# - npm install -f react-bootstrap 
 package-json에 자동추가됨  "react-bootstrap": "^2.10.1"

# npm start
부트스트랩이 적용된 헤더가 뜬다.

# Header.js 메뉴 수정후 확인 
# --------------------------------------------------

# 12-1. front-end > src > component > sample > ListSampleComponent.js -----------------------------------

import React, { Component } from 'react';

class ListSampleComponent extends Component {

    render() {
        return(
            <div>
                <h1>SampleList</h1>
            </div>
        )
    }
}

export default ListSampleComponent;

# 12-2. front-end > src > component > route > RouterComponent.js

# npm install react-router@5 react-router-dom@5
# package.json에 2개 추가
# "react-router": "^5.3.4",
# "react-router-dom": "^5.3.4",

import React from 'react';
// npm install react-router@5 react-router-dom@5 => 6은 지원안되는 메서드가 많다.
import { BrowserRouter, Route } from 'react-router-dom';  
import ListSampleComponent from "../sample/ListSampleComponent";
import AddSampleComponent from "../sample/AddSampleComponent";
import EditSampleComponent from "../sample/EditSampleComponent";


const AppRouter = () => {

    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Route path="/" exact={true} component={ListSampleComponent} />
                    <Route path="/samples" exact={true} component={ListSampleComponent} />
                    <Route path="/add-sample" exact={true} component={AddSampleComponent} />
                    <Route path="/edit-sample" exact={true} component={EditSampleComponent} />
                </div>
            </BrowserRouter>
        </div>
    )
}

const style = {
    margin: '10px'
}

export default AppRouter;

# 12-3. EditSampleComponent

import React, { Component } from 'react';

class EditSampleComponent extends Component {

    render() {
        return(
            <div>
                <h1>Add</h1>
            </div>
        )
    }
}

export default EditSampleComponent;

# 12-4. AddSampleComponent

import React, { Component } from 'react';

class AddSampleComponent extends Component {

    render() {
        return(
            <div>
                <h1>Add</h1>
            </div>
        )
    }
}

export default AddSampleComponent;


# 12-5. App.js - <RouterComponent />, import 추가

import './App.css';
import Header from './component/route/Header';
import RouterComponent from './component/route/RouterComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <RouterComponent />
    </div>
  );
}

export default App;


# -------------------- [ 목록 기능 ] ------------------------

# 13-1. src > ApiService.js
# npm install -f axios@^1.3.5
import axios from 'axios';  // npm install -f axios@^1.3.5

const SAMPLE_API_BASE_URL = "http://localhost:8081/samples";

class ApiService {

    // list
    fetchSamples() {
        console.log('fetchSamples() 호출!!')
        return axios.get(SAMPLE_API_BASE_URL); // 스프링부트와 통신
    }

    // insert

    // 1건 select

    // update

    // delete
}

export default new ApiService();


# 13-2. front-end > src > component > sample >  ListSampleComponent.js 완성

# npm install -f @mui/material
# npm install @emotion/react @emotion/styled
-----------------

import React, { Component } from 'react';
import ApiService from '../../ApiService';
// npm install -f @mui/material 
// npm install @emotion/react @emotion/styled

import { Table, TableHead, TableRow, TableCell, TableBody, Button, Typography} from '@mui/material'

class ListSampleComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            samples: [],   // 5.
            message: null
        }
    }

    // 라이프사이클 중 컴포넌트가 생성된 후 사용자에게 보여지기 전까지의 전체 과정을 렌더링
    componentDidMount() {   
        this.reloadSampleList();   // 1.
    }

    reloadSampleList = () => {
        ApiService.fetchSamples()   // 2.
        .then(res => {              // 4.
            this.setState({
                samples: res.data
            })
        })
        .catch(err => {
            console.log('reloadSampleList() Error!!', err);
        });
    }

    render() {
        return(
            <div><br/><br/>

                <Typography variant="h4" style={style}> Sample List </Typography>
                <Button> Add Sample </Button>
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
                                <TableCell> {sample.brand} </TableCell>
                                <TableCell> {sample.madein} </TableCell>
                                <TableCell> {sample.price} </TableCell>
                                <TableCell onClick={() => this.editSample(sample.id)}> 
                                   
                                </TableCell>
                                <TableCell onClick={() => this.deleteSample(sample.id)}> 
                                    
                                </TableCell>

                            </TableRow>                                
                        )}                      

                    </TableBody>
                </Table>
            </div>
        )
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default ListSampleComponent;


-------------------


# 실행

http://localhost:3000/samples  => 타이틀만 뿌리고 데이터는 못가져옴
F12

fetchSamples() 호출!! => OK

# F12 > error message => CORS policy 위반 에러 => 스프링 부트에서 해결
/////////////////////////////

Access to XMLHttpRequest at 'http://localhost:8081/samples' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
ListSampleComponent.js:32 reloadSampleList() Error!! AxiosError
:8081/samples:1         
        
 Failed to load resource: net::ERR_FAILED
samples:1 Access to XMLHttpRequest at 'http://localhost:8081/samples' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
ListSampleComponent.js:32 reloadSampleList() Error!! AxiosError
:8081/samples:1 
        
        
Failed to load resource: net::ERR_FAILED

# error message => CORS policy 위반 에러 => 
# 스프링 부트에 소스 추가
# CorsFilter.java

package springBoot.react.oracle_ict02.filter;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter {
   
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
        
        // "Access-Control-Allow-Origin"는 반드시 frontend url로 설정       
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods","*");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization");

        if("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        }else {
            chain.doFilter(req, res);
        }
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}


# SampleController.java
# @CrossOrigin(origins="**", maxAge=3600)  추가
@RestController
@RequestMapping(value="/samples")
public class SampleController { }


/////////////////////////////

-------------------

# 스프링 톰캣 종료후 다시 start
# 리액트 다시 npm start

# http://localhost:3000/ => 
# http://localhost:3000/samples => 
#        프론트엔트 App.js -> Header.js + RouterComponent.js
# http://localhost:8081/samples => 백엔드

# => 리스트 목록이 뜬다.


# 13-3. ListSampleComponent.js에 수정 삭제 버튼 추가
import { Create, Delete } from '@mui/icons-material';  

# npm install -f @mui/icons-material@^5.11.16

 <TableCell onClick={() => this.editSample(sample.id)}> 
    <Create />
</TableCell>
<TableCell onClick={() => this.deleteSample(sample.id)}> 
    <Delete />
</TableCell>


# -------------------- [ 등록 기능 ] ------------------------
# 14-1. ListSampleComponent.js에 등록 추가

- <Button variant="contained" color="primary" onClick={this.addSample}> Add Sample </Button>


- // insert
addSample = () => {
    window.localStorage.removeItem("sampleID");
    // RouterComponent.js의 <Route path="/add-sample" exact={true} component={AddSampleComponent} /> 호출
    this.props.history.push("/add-sample");
}


# 14-2. AddSampleComponent.js에 작성
# 14-3. ApiService.js에 등록 추가
// insert
addSample(inputData) {
    console.log('addSample 호출!!', inputData);
    return axios.post(SAMPLE_API_BASE_URL, inputData);
}

# npm start => 컴파일 오류가 없어야 없고, 리스트는 뿌려져야 한다.

# 14-4. SampleController에 등록 추가
# 14-4. Service, DAO, Mapper에 등록 추가


# -------------------- [ 수정 기능 ] ------------------------
# 15-1. ListSampleComponent.js에 추가
# 1)
<TableCell onClick={() => this.editSample(sample.id)}> 
    <Create />
</TableCell>

# 2)
import { Create, Delete } from '@mui/icons-material';  // npm install -f @mui/icons-material@^5.11.16

# 3)
// update
editSample = (ID) => {
    window.localStorage.setItem("sampleID", ID);  // EditSampleComponent.js에서 getItem(), update문에서 where절에 사용
    // RouterComponent.js의 <Route path="/edit-sample" exact={true} component={EditSampleComponent} />호출
    this.props.history.push("/edit-sample");
}

# 15-2. EditSampleComponent.js 작성 - 상세페이지 ------------------

  // 1.수정전에 1건 select해서 state 변경한후 그값을 화면에 뿌린다.
    loadSample = () => {
        ApiService.fetchSampleByID(window.localStorage.getItem("sampleID"))
            .then(res => {
                let sample = res.data;
                this.setState({
                    id: sample.id,
                    name: sample.name,
                    brand: sample.brand,
                    madein: sample.madein,
                    price: sample.price
                })
            })
            .catch(err => {
                console.log('loadSample() Error!!', err);
            });

    }

    // 2.화면에서 수정한 값으로 state 변경
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    화면부분


# 15-3. ApiService.js 추가
 // 1건 select
fetchSampleByID(sampleID) {
    console.log('fetchSampleByID 호출!!', sampleID);
    return axios.get(SAMPLE_API_BASE_URL + "/" + sampleID);  // 주의 :  "/" +
}

# npm start => 컴파일 오류가 없어야 없고, 리스트는 뿌려져야 한다.

# 15-4. SampleController에 수정 추가
# 15-4. Service, DAO, Mapper에 수정 추가

# id 1 수정 버튼 클릭 => 상세페이지가 뜬다.


# 15-5. EditSampleComponent.js 작성 - 수정페이지 ------------------

  // 3.수정처리(화면에서 입력한 값 -> onChange() -> setState() -> inputData)
    editSample = (e) => {
        e.preventDefault();

        let inputData = {
            id: this.state.id,
            name: this.state.name,
            brand: this.state.brand,
            madein: this.state.madein,
            price: this.state.price,
        }

        ApiService.editSample(inputData)
            .then(res => {
                this.setState({

                })
                console.log('update 성공 : ', res.data);  // 컨트롤러에서 전달함(resultCode, resultMsg)
                this.props.history.push('/samples');  // RouterComponent.js - ListSampleComponent 호출           
            })
            .catch(err => {
                console.log('editSample() 에러!! : ', err);
            });

    } 


# 15-6. ApiService.js 추가
// update
editSample(inputData) {
    console.log('editSample 호출!!', inputData);
    return axios.put(SAMPLE_API_BASE_URL + "/" + inputData.id, inputData);
}

# npm start => 컴파일 오류가 없어야 없고, 리스트, 상세페이지는 뿌려져야 한다.

# - ----------------------------------------------

# 15-7. SampleController에 수정 추가
# 15-8. Service, DAO, Mapper에 수정 추가


# id 1 수정 버튼 클릭 => 상세페이지가 뜬다. -> 수정하면 -> 리스트페이지에 수정 내역이 반영


# -------------------- [ 삭제 기능 ] ------------------------
# 16-1. ListSampleComponent.js에 추가
# 1)
 <TableCell onClick={() => this.deleteSample(sample.id)}> 
    <Delete />
</TableCell>

# 2)
import { Create, Delete } from '@mui/icons-material';  // npm install -f @mui/icons-material@^5.11.16

# 3)

// delete
    deleteSample = (sampleID) => {
        ApiService.deleteSample(sampleID)
            .then(res => {
              this.setState({
                samples: this.state.samples.filter(sample => sample.id !== sampleID)
              });
              console.log('delete 성공 : ', res.data);  // 컨트롤러에서 전달함(resultCode, resultMsg)
            })
            .catch(err => {
                console.log('delete() Error!! : ', err); 
            })

    }

# 16-2. ApiService.js 추가
  // delete
    deleteSample(sampleID) {
        console.log('deleteSample 호출!!', sampleID);
        return axios.delete(SAMPLE_API_BASE_URL + "/" + sampleID);
    }

# npm start => 컴파일 오류가 없어야 없고, 리스트는 뿌려져야 한다.

# 16-3. SampleController에 삭제 추가
# 16-4. Service, DAO, Mapper에 수정 추가

# id 1 삭제 버튼 클릭 => 리스트에 한건이 삭제되어 뜬다.