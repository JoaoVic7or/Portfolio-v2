import styled from "styled-components";
import graduation from '../../assets/graduation.svg'

const Container = styled.div`
    display: flex;
    align-items: center;
    background: #3B3635;
    border-radius: 10px;
    padding: 10px;
    width: 400px;
    height: 50px;
    box-shadow: 0 0 2px #fff;
    
    @media (max-width: 414px){
        width: 100%;
        padding: 20px 10px;
    }
`
const Info = styled.div`
    text-align: center;
    padding-left: 15px;
    border-left: 1px solid #fff;
    color: #fff;
    width: 80%;
`

const GraduationCard = (props) => {
    const { nome, data } = props;
    return(
        <Container>
            <div style={{paddingRight: "10px", width: "20%"}}>
                <img src={graduation} alt='Graduation' />
            </div>
            <Info>
                <p>{nome}</p>
                <p>{data}</p>
            </Info>
        </Container>
    );
}

export default GraduationCard;