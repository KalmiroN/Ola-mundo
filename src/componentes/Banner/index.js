import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minhaFoto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, <br />me chamo Almir M.
                </h1>

                <p className={styles.paragrafo}>
                    Sou um desenvolvedor com experiência em
                    construir sites para pequenas e médias empresas.
                    Se você está tentando ganhar trabalho,
                    listar seus serviços ou até mesmo
                    criar uma loja online completa - eu posso ajudar!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Almir M."
                />
            </div>
        </div>
    )
}