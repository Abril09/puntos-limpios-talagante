import './App.css';
import DefaultLayout from './componets/Layout';
import CardDot from "./componets/Card";
import LayoutCard from "./componets/LayoutCard";
import TottusImg from "./assets/puntos/tottus.jpeg"
import Municipal from "./assets/puntos/municipalidad.jpeg"
import Linea from "./assets/puntos/linea.jpeg"
import Reciclaje from "./assets/puntos/reciclaje.jpeg"

function App() {

    const horario = '\nHorario: Lunes a Viernes 09:00 AM a 19:00 PM\n' +
        'Feriados y festivos 10:00 AM a 14:00 PM '

    const puntoReciclaje = [{
        title: 'Punto de reciclaje.',
        text: 'Dirección:Libertador Bernardo O´Higgins 1528, Talagante.' + horario,
        img: Reciclaje,
        places: 'Aceite y productos electrónicos de pequeño tamaño.',
        center: {lat: -33.665999, lng: -70.933972}

    }]
    const puntosLimpios = [{
        title: 'TriCiclos Tottus Cordillera',
        text: 'Dirección: Caletera 0441, Los Aromos, Talagante.\n' + horario,
        img: TottusImg,
        places: ` Botellas PET, papel, tetra pack, cartón, bolsas PE, plástico, vidrio, aluminio y otros metales.`,
        center: {lat: -33.6565933, lng: -70.912239}
    },
        {
            title: 'TriCiclos Lucas Pacheco',
            text: 'Dirección: Lucas Pacheco con Vía Férrea a Estadio Municipal, Talagante.' + horario,
            img: Linea,
            places: `Botellas PET, papel, tetra pack, cartón, bolsas PE, plástico, vidrio, aluminio y otros metales.`,
            center: {lat: -33.6579038 , lng: -70.9237640}
        },
        {
            title: 'TriCiclos Centro de eventos municipal',
            text: 'Dirección: Avenida Libertador Bernardo O\'higgins 3201, Talagante.\n' + horario,
            img: Municipal,
            places: `Botellas PET, papel, tetra pack, cartón, bolsas PE, plástico, vidrio, aluminio y otros metales.`,
            center: {lat: -33.67413, lng: -70.95184}
        },
    ]
    return (
        <div className="App">


            <DefaultLayout>
                <section itemScope="itemscope"
                         itemType="https://schema.org/CreativeWork"
                         style={{backgroundColor: '#f4f4f4', padding: '4rem', marginButton: '2rem'}}>
                    <div itemProp="text"><h2>¿Quienes somos?</h2><p
                    >Éste centro de administración y operación
                        municipal estará habilitado para la recepción selectiva de residuos
                        destinados al reciclaje como papel, diario, revistas, cartón, plásticos,
                        metales, entre otros; para su posterior envío a empresas de valorización
                        autorizadas, permitiendo ampliar la cobertura de vecinos participantes a
                        15.000 familias, 100 recicladores incluidos en la cadenada de recolección,
                        2.500 toneladas recuperadas anuales y otros beneficios ambientales, sociales
                        y económicos.</p>
                    </div>
                </section>

                <LayoutCard img={"https://www.penalolen.cl/wp-content/uploads/2016/10/puntos-limpios.png"}>
                    {puntosLimpios.map((punto) => {
                        return <CardDot text={punto.text}
                                        title={punto.title}
                                        img={punto.img}
                                        places={punto.places}
                                        center={punto.center}
                        />
                    })}
                </LayoutCard>

                <LayoutCard img={"https://www.penalolen.cl/wp-content/uploads/2016/10/centro-reciclaje.png"}>
                    {puntoReciclaje.map((punto) => {
                        return <CardDot text={punto.text}
                                        title={punto.title}
                                        img={punto.img}
                                        places={punto.places}
                                        center={punto.center}

                        />
                    })}
                </LayoutCard>
                <div>

                </div>
            </DefaultLayout>

        </div>
    );

}

export default App;
