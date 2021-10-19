import './Home.css';
import imagen from './imagen.jpg';

function Home() {
  return (
    <div className="Home container">
      <section id="hero">
          <div className="row h-100">
              <div className="col-lg-6 d-flex">
                  <div className="content mx-auto align-self-center">
                      <h1 className="display-5 fw-bold mb-4">Un poco sobre mí<span className="text-primary">.</span></h1>
                      <p className="lead">Mi nombre completo es Daniel Felipe Soto Olarte, tengo 26 años, actualmente vivo con mis padres, mis abuelos y mi hermana. He estudiado 2 técnicas: soy técnico en informatica y técnico en desarrollo de software. Lo que más me apasiona es la tecnología y la música. Soy un hombre paciente y me gustan los retos. Pienso que soy una persona capaz de afrontar responsabilidades y me siento con toda la disposición de aprender y recibir cualquier cosa que sea positiva para mi vida.</p>
                      <p className="lead">Tengo varios sueños y aspiraciones en la vida los cuales me gustaría poder alcanzar, uno de ellos es poder tener dependencia de mi tiempo, poder estar conectado desde cualquier sitio sin que esto interrumpa mis deberes. Me considero alguien emprendedor y planeo que en algún momento pueda darse la oportunidad de tener un negocio que sea rentable para mi familia. Mi espiritu es aventurero y aspiro poder viajar a muchas partes y conocer muchísimas culturas y constumbres diferentes a las nuestras.</p>
                  </div>
              </div>
              <div className="col-lg-6 d-flex">
                  <div className="content mx-auto">
                      <img src={imagen} alt="" className="img-fluid" />
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}

export default Home;
