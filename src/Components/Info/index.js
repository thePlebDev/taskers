import React from 'react';
import styled from 'styled-components'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import TaskPic from '../../Assets/Images/taskPic.png'
import MobilePic from '../../Assets/Images/mobilePic.png'


const Container = styled.div`

    width:100%;
    margin:0 auto;
    background-color:white;
    padding-bottom:50px;
`

const SubContainer = styled.div`
    width:90%;
    margin:0 auto;
    padding-top:100px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const IconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
 
`

const InfoContainer = styled.div`
    display:flex;
    justify-content:center;

`

const Text = styled.div`
    text-align:center;
    font-size:30px;
    padding:40px 0;
    font-weight:bold;
    text-transform:uppercase;

`

const ImageOne = styled.img`
    width:200px;
`
const ImageContainer = styled.div`
    margin:20px 0px;
    display:flex;
    align-items:center;
    flex-direction:column;
    position:relative;
    @media only screen and (min-width: 600px) {
        margin:20px 50px;
    }
`

const SubText = styled.div`
    position:absolute;
    font-weight:600;
    bottom:20px;

`

const Imagetwo = styled.img`
    width:110px;
`









const Info = ()=>{

    return(
        <Container>
            <SubContainer>
                <IconContainer>
                    <AccessAlarmIcon style={{fontSize:'80px',color:'#73C2FB'}}/>
                </IconContainer>
                <Text>On the go? We can help!</Text>
                <InfoContainer>
                    <ImageContainer>
                         <ImageOne src={TaskPic}/>
                         <SubText>
                             Organize your work flow
                         </SubText> 
                    </ImageContainer>
                    <ImageContainer>
                         <Imagetwo src={MobilePic}/>
                         <SubText>
                             Use our app
                         </SubText> 
                    </ImageContainer>
                </InfoContainer>   
            </SubContainer>
        </Container>
    )
}


export default Info