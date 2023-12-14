import { Header, Header2, Image } from './App.styled';

export const App = () => {
  return (
    <div
      style={{
        width: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        alignItems: 'normal',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Header>
        Pobliżu szkoły 340
        <br />
        zaginęła hulajnoga
      </Header>
      <Header2>Proszę zwrócić go właścicielowi</Header2>
      <Header2>723-377-289</Header2>

      <Image src={require('../img/pic1.jpg')} alt="pic1" />
      <Image src={require('../img/pic2.jpg')} alt="pic2" />
      <Image src={require('../img/pic3.jpg')} alt="pic3" />
      <Image src={require('../img/sz340-1-min.jpg')} alt="pic4" />
      <Image src={require('../img/sz340-2-min.jpg')} alt="pic5" />
    </div>
  );
};
