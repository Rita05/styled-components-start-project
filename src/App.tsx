import cardImage from './assets/images/card.png'
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { AppContainer, Card, CardContainer, Img, Title, Content, Button } from './components/Card.styled';

function App() {
    return (
        <AppContainer>
            <GlobalStyles />
            <Card>
                <CardContainer>
                    <Img src={cardImage} />
                    <Title>Headline</Title>
                    <Content>Faucibus. Faucibus. Sit sit sapien sit <br /> tempusrisu ut. Sit molestie ornare in venen.</Content>
                    <Button styleBtn={'primary'}>See more</Button>
                    <Button styleBtn={'outlined'}>Save</Button>
                </CardContainer>
            </Card>
        </AppContainer>
    );
}

export default App;


