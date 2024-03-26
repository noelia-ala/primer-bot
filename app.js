const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flujoDeSaludar = addKeyword(['Hola', 'Buenas', 'por favor', 'porfavor', 'tardes', 'tarde',
    'dia', 'días', 'día', 'dias', 'noche', 'noches', 'info', 'cursos', 'catalogo', 'información', 'informacion', 'convocatorias', 'catálogo',
    'convocatoria', 'precio', 'grupo', 'whatsapp', 'enlace', 'certificado', 'certificados', 'curso'
])
    .addAnswer("👋 Hola 🤓 Gracias por comunicarte con la Consultora Multidisciplinaria Quimeras - Icarus Consultores \n \n✅ Si requieres mas información de los cursos, convocatorias o deseas unirte a nuestros grupos de whatsapp, por favor comunícate con uno de los siguientes números: \n \n👉🏻 69616052 Lic. Carla Vargas  \n \n👉🏻 68413858 Atención al Cliente1")

const main = async () => {
    const name = 'bot-1'
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flujoDeSaludar])
    const adapterProvider = createProvider(BaileysProvider, {
        name
    })

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
        botName: name 
    })
    QRPortalWeb({ name, port: 4050})
}

main()