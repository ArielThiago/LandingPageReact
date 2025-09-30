import React from 'react';
import './App.css';
import Weather from './components/Weather';
import Countdown from './components/Countdown';
import SpeakerCard from './components/SpeakerCard';

function App() {

  const formFields = [
    { id: "nome", label: "Nome Completo", type: "text", placeholder: "Seu nome completo", minLength: 3, required: true },
    { id: "email", label: "Endereço de Email", type: "email", placeholder: "seuemail@exemplo.com", required: true },
    { id: "telefone", label: "Telefone", type: "tel", placeholder: "(XX) XXXXX-XXXX", minLength: 11, maxLength: 11, required: true },
  ];
  
  const speakersData = [
    {
      id: 1,
      name: "Ada Lovelace",
      title: "Pioneira da Computação",
      url: "https://www.estudarfora.org.br/wp-content/uploads/2023/02/Ada_lovelace-e1676571161515.jpg",
      detail: "Ada Lovelace é reconhecida como a primeira programadora de computadores do mundo. Ela trabalhou com Charles Babbage na concepção da Máquina Analítica, um dos primeiros conceitos de computador mecânico.",
    },
    {
      id: 2,
      name: "Alan Turing",
      title: "Pai da Ciência da Computação",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YozsF_CmgaHObFdTSmyAnDRarG62HF-RSA&s",
      detail: "Alan Turing é considerado um dos pais da ciência da computação e da inteligência artificial. Ele desenvolveu o conceito de máquina de Turing, que é fundamental para a teoria da computação.",
    },
    {
      id: 3,
      name: "Grace Hopper",
      title: "Criadora do Compilador",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHTKwx_VPxTBfv-BEaq71AO39HBFzSfk2mw&s",
      detail: "Grace Hopper foi pioneira na programação de computadores e desenvolveu o primeiro compilador para uma linguagem de programação. Ela também popularizou o termo 'bug' para descrever falhas em sistemas de computador.",
    },
  ];

  return (
    <>
      <header>
        <div className="titulos">
          <p className="titulo">TechForward 2025</p>
          <p className="titulo1">O Futuro é Agora!</p>
        </div>

        <div className="botoes">
          <a href="#agenda" className="ancora">Agenda</a>
          <a href="#palestra" className="ancora">Palestrantes</a>
          <a href="#inscricao" className="ancora">Inscrever-se</a>
        </div>
      </header>

      <div>
        <section className="hero">
          <div className="hero-content">
            <p className="titulo">
              Conecte-se com os maiores inovadores da tecnologia e transforme o futuro.
            </p>
            <p className="titulo1">
              TechForward 2025: O Futuro é Agora é o principal ponto de encontro para visionários,
              empreendedores, desenvolvedores e líderes da indústria tecnológica.
            </p>
            <a className="ancora" href="#inscricao">Garanta sua vaga!</a>
          </div>
        </section>

        <div className="section-destaque">
          <p className="titulo1">
            Ao longo de palestras inspiradoras, painéis interativos e experiências imersivas, 
            os participantes terão acesso direto às ideias, ferramentas e conexões que vão definir 
            o futuro dos negócios, da sociedade e da tecnologia.
          </p>
          <Countdown />

        </div>

        <h2 id="agenda">Agenda do Evento - 26/08/2025</h2>

<div class="agenda-container">
  <div>09:00</div>
  <div>Abertura com o CEO da TechForward</div>

  <div>10:30</div>
  <div>Painel: O Futuro da Inteligência Artificial</div>

  <div>12:00</div>
  <div>Almoço e Networking</div>

  <div>14:00</div>
  <div>Workshop: Desenvolvimento Ágil de Software</div>

  <div>16:00</div>
  <div>Palestra: Sustentabilidade na Tecnologia</div>
</div>


<p id="palestra">Palestrantes</p>

        <div className="cards">

          {speakersData.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              title={speaker.title}
              imageUrl={speaker.url}
              detail={speaker.detail}
            />
          ))}
        </div>

        <section id="inscricao">
      <p className="form-title">Inscreva-se</p>

      <form className="form-container">
        {formFields.map((field) => (
          <div key={field.id} className="form-group">
            <label htmlFor={field.id} className="form-label">{field.label}</label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              className="form-input"
              placeholder={field.placeholder}
              minLength={field.minLength}
              maxLength={field.maxLength}
              required={field.required}
            />
          </div>
        ))}

        <div className="form-group form-checkbox">
          <input type="checkbox" id="termos" name="termos" className="form-checkbox-input" required />
          <label htmlFor="termos" className="form-checkbox-label">Concordo com os termos</label>
        </div>

        <button type="submit" className="form-button">Enviar</button>
      </form>
    </section>

      </div>

      <Weather />

      <footer>
        <p>© 2025 TechForward. Todos os direitos reservados.</p>
      </footer>
      
    </>
  );
}

export default App;