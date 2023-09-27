import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Almir!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Minha Foto"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            "Sou um profissional determinado com uma história de vida fascinante. Nascido em Recife, Pernambuco, hoje chamo São Paulo de lar. Estou trilhando um caminho de transformação, migrando do setor alimentício, onde trabalhei como garçom, para o empolgante mundo da tecnologia da informação."
            </p>
            <p className={styles.paragrafo}>
            Minha jornada começou no setor de gastronomia, onde tive a oportunidade de desenvolver habilidades valiosas. Durante 22 anos, trabalhei em diversos estabelecimentos, aprimorando minha comunicação, aperfeiçoando o atendimento ao cliente e fortalecendo minhas capacidades de trabalho em equipe. Essa trajetória me proporcionou experiências enriquecedoras e uma mentalidade de liderança que levo comigo em todas as áreas da vida.
            </p>
            <p className={styles.paragrafo}>
            As habilidades que adquiri como garçom são totalmente transferíveis para minha nova jornada. Minha capacidade de comunicação é um trunfo, permitindo-me interagir de forma eficaz com colegas e clientes. O trabalho em equipe é uma parte intrínseca de quem sou, e estou empolgado para aplicar essa colaboração na construção de soluções inovadoras.
            </p>
            <p className={styles.paragrafo}>
            Minha paixão pela tecnologia sempre foi uma constante. Embora nunca tenha trabalhado profissionalmente na área de TI, sempre estive envolvido com o universo da tecnologia de alguma forma. O fascínio pela resolução de problemas, a criatividade envolvida no desenvolvimento de soluções e a constante evolução desse campo me impulsionaram a tomar a decisão de mergulhar de cabeça na área da Tecnologia da informação.
            </p>
            <p className={styles.paragrafo}>
            Com um amor pelo aprendizado contínuo, estou buscando conhecimento por meio de cursos e treinamentos voltados para a área. Minha fluência em inglês me permite acessar recursos globais e me conectar com profissionais de todo o mundo.
            </p>
            <p className={styles.paragrafo}>
            Expresso minha gratidão por sua visita ao meu site e por compartilhar um fragmento da minha trajetória. Estou ansioso para estabelecer conexões com colegas, colaboradores e mentores durante esta nova etapa da minha vida.
            </p>

        </PostModelo>       
    )
}