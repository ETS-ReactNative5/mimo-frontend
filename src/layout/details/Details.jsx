import React, {Component, useEffect, useState} from 'react';
import "./Details.css";
import {Redirect} from "react-router-dom";
import {details} from '../../util/APIUtils';
import Alert from 'react-s-alert';
import {BUY} from '../../constants';

function Details(props) {
    if (props.authenticated) {
        return <Redirect
            to={{
                pathname: "/main",
                state: {
                    from: props.location
                }
            }}/>;
    }
    return (
        <div className="App">
            <div className="logininfotxt">
                <p>
                    {props.currentUser.name}님에 대한 고유한 스타일을 모아주세요</p>
            </div>

            <div className="logininfotxt">
                <p>
                    {props.currentUser.name}님, 오늘도 예쁜 하루 보내세요</p>
            </div>

            <div className="logininfosubtxt">
                <p>
                   아이탬 구매 항목
                </p>
            </div>
            <DetailsForm {...props}/>
        </div>

    );
}

function DetailsForm() {;

    // const [skintype,skintone] = useState(""); useState 1
    const [skintype, setSkintype] = useState("");
    const [skintone, setSkintone] = useState("");

    // handleInputChange = handleInputChange.bind(this); handleSubmit =
    // handleSubmit.bind(this);

    function handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;
        // const [inputName, setInputName] = useState(target.name);
        // const [inputValue, setInputValue] = useState(target.value);

        // setInputName(inputValue);
        // const inputName = target.name; const inputValue = target.value; useState 2
        // setSkintype( skintype );

        if (inputName==skintype){
          setSkintype(inputValue);
        }else{
          setSkintone(inputValue);
        }

        console.log(inputName);
        console.log(inputValue);
        // this.setState({   [inputName] : inputValue });
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        //console.log(this.state.skintype) const detailsRequest
        // = Object.assign({}, this.state);
        const detailReqeust = Object.assign({}, {skintype, skintone})
        //useState 3
        // TODO 아래 2줄을  useState로 제대로 값을 가져와서 details함수에 넘겨주기 const skintype =
        // document.querySelector("input[name=skintype]:checked").value; const skintone
        // = document.querySelector("input[name=skintone]:checked").value; details(
        // {skintype, skintone} )
        details(detailReqeust)
            .then(response => {
                this
                    .props
                    .history
                    .push("/main");
            })
            .catch(error => {
                Alert.error(error && error.message);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="skintypebutton">
           
            <p>롬앤</p>
            <p>롬앤 제로 벨벳 틴트 #오리지널시리즈</p>
            <p>무료배송</p>
            <hr/>
                 
            </div>

            <div class="graytextitem">롬앤 제로 벨벳 틴트 #오리지널시리즈</div> 
             <div class="graytextprice">8400원</div>

            <div className="skintonebutton" >
            <div class="totalprice"> 
            <div class="itemprice">
            <p> 결제금액</p>
        </div>
     <p>최종결제금액</p>
 </div>   <hr/>

 <hr/>
 
 <a  className="buybutton" href={BUY}>  <img   src={process.env.PUBLIC_URL+`assets/image/buybutton.png`}  /></a>

             
             
            </div>
        </form>
    );
}

export default Details;