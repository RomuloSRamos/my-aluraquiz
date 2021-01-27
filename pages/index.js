import styled from 'styled-components'
import Header from 'next/head'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

//const BackgroundImage = styled.div`
 //  background-image: url(${db.bg});
 //  flex: 1;
 //  background-size: cover;
 //  background-position: center;
 //`;

const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
}
`;

export default function Home() {
  return (
      <QuizBackground backgroundImage={db.bg}>
        <Header>
          <title>{db.title}</title>
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content="https://my-aluraquiz.romulosramos.vercel.app/" />
          <meta property="og:site_name" content={db.title} />
          <meta property="og:description" content="Quiz Sobre o canal Manual do Mundo Criado Durante a Imersão React Next  da Alura"/>
          <meta property="og:image" content={db.bg}/>
          <meta property="og:image:type" content="image/jpeg"/>
          <meta property="og:image:width" content="800"/>
          <meta property="og:image:height" content="600"/>
          <meta property="og:type" content="website"/>
        </Header>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>  

          <Widget>
            <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl = "https://github.com/RomuloSRamos/my-aluraquiz"/>
      </QuizBackground>
  )

}
