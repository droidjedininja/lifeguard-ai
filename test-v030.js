const assert=require('node:assert/strict');
const {inspect}=require('./protection');
const cases=[
  {
    "message": "investment: guaranteed returns",
    "category": "Investment fraud",
    "expected": true
  },
  {
    "message": "Urgent: investment. guaranteed returns.",
    "category": "Investment fraud",
    "expected": true
  },
  {
    "message": "Regarding investment, guaranteed returns.",
    "category": "Investment fraud",
    "expected": true
  },
  {
    "message": "Aviso: inversión. rendimiento garantizado.",
    "category": "Investment fraud",
    "expected": true
  },
  {
    "message": "inversión: rendimiento garantizado",
    "category": "Investment fraud",
    "expected": true
  },
  {
    "message": "We discussed investment yesterday.",
    "category": "Investment fraud",
    "expected": false
  },
  {
    "message": "The investment meeting is tomorrow.",
    "category": "Investment fraud",
    "expected": false
  },
  {
    "message": "Información sobre inversión.",
    "category": "Investment fraud",
    "expected": false
  },
  {
    "message": "Please review the investment policy.",
    "category": "Investment fraud",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre inversión.",
    "category": "Investment fraud",
    "expected": false
  },
  {
    "message": "bitcoin: double your money",
    "category": "Cryptocurrency fraud",
    "expected": true
  },
  {
    "message": "Urgent: bitcoin. double your money.",
    "category": "Cryptocurrency fraud",
    "expected": true
  },
  {
    "message": "Regarding bitcoin, double your money.",
    "category": "Cryptocurrency fraud",
    "expected": true
  },
  {
    "message": "Aviso: criptomoneda. duplica tu dinero.",
    "category": "Cryptocurrency fraud",
    "expected": true
  },
  {
    "message": "criptomoneda: duplica tu dinero",
    "category": "Cryptocurrency fraud",
    "expected": true
  },
  {
    "message": "We discussed bitcoin yesterday.",
    "category": "Cryptocurrency fraud",
    "expected": false
  },
  {
    "message": "The bitcoin meeting is tomorrow.",
    "category": "Cryptocurrency fraud",
    "expected": false
  },
  {
    "message": "Información sobre criptomoneda.",
    "category": "Cryptocurrency fraud",
    "expected": false
  },
  {
    "message": "Please review the bitcoin policy.",
    "category": "Cryptocurrency fraud",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre criptomoneda.",
    "category": "Cryptocurrency fraud",
    "expected": false
  },
  {
    "message": "IRS: arrest",
    "category": "Government impersonation",
    "expected": true
  },
  {
    "message": "Urgent: IRS. arrest.",
    "category": "Government impersonation",
    "expected": true
  },
  {
    "message": "Regarding IRS, arrest.",
    "category": "Government impersonation",
    "expected": true
  },
  {
    "message": "Aviso: policía. arresto.",
    "category": "Government impersonation",
    "expected": true
  },
  {
    "message": "policía: arresto",
    "category": "Government impersonation",
    "expected": true
  },
  {
    "message": "We discussed IRS yesterday.",
    "category": "Government impersonation",
    "expected": false
  },
  {
    "message": "The IRS meeting is tomorrow.",
    "category": "Government impersonation",
    "expected": false
  },
  {
    "message": "Información sobre policía.",
    "category": "Government impersonation",
    "expected": false
  },
  {
    "message": "Please review the IRS policy.",
    "category": "Government impersonation",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre policía.",
    "category": "Government impersonation",
    "expected": false
  },
  {
    "message": "invoice: new bank account",
    "category": "Fake invoices",
    "expected": true
  },
  {
    "message": "Urgent: invoice. new bank account.",
    "category": "Fake invoices",
    "expected": true
  },
  {
    "message": "Regarding invoice, new bank account.",
    "category": "Fake invoices",
    "expected": true
  },
  {
    "message": "Aviso: factura. nueva cuenta bancaria.",
    "category": "Fake invoices",
    "expected": true
  },
  {
    "message": "factura: nueva cuenta bancaria",
    "category": "Fake invoices",
    "expected": true
  },
  {
    "message": "We discussed invoice yesterday.",
    "category": "Fake invoices",
    "expected": false
  },
  {
    "message": "The invoice meeting is tomorrow.",
    "category": "Fake invoices",
    "expected": false
  },
  {
    "message": "Información sobre factura.",
    "category": "Fake invoices",
    "expected": false
  },
  {
    "message": "Please review the invoice policy.",
    "category": "Fake invoices",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre factura.",
    "category": "Fake invoices",
    "expected": false
  },
  {
    "message": "lottery: claim fee",
    "category": "Lottery fraud",
    "expected": true
  },
  {
    "message": "Urgent: lottery. claim fee.",
    "category": "Lottery fraud",
    "expected": true
  },
  {
    "message": "Regarding lottery, claim fee.",
    "category": "Lottery fraud",
    "expected": true
  },
  {
    "message": "Aviso: lotería. cuota de trámite.",
    "category": "Lottery fraud",
    "expected": true
  },
  {
    "message": "lotería: cuota de trámite",
    "category": "Lottery fraud",
    "expected": true
  },
  {
    "message": "We discussed lottery yesterday.",
    "category": "Lottery fraud",
    "expected": false
  },
  {
    "message": "The lottery meeting is tomorrow.",
    "category": "Lottery fraud",
    "expected": false
  },
  {
    "message": "Información sobre lotería.",
    "category": "Lottery fraud",
    "expected": false
  },
  {
    "message": "Please review the lottery policy.",
    "category": "Lottery fraud",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre lotería.",
    "category": "Lottery fraud",
    "expected": false
  },
  {
    "message": "private photos: pay",
    "category": "Sextortion",
    "expected": true
  },
  {
    "message": "Urgent: private photos. pay.",
    "category": "Sextortion",
    "expected": true
  },
  {
    "message": "Regarding private photos, pay.",
    "category": "Sextortion",
    "expected": true
  },
  {
    "message": "Aviso: fotos íntimas. paga.",
    "category": "Sextortion",
    "expected": true
  },
  {
    "message": "fotos íntimas: paga",
    "category": "Sextortion",
    "expected": true
  },
  {
    "message": "We discussed private photos yesterday.",
    "category": "Sextortion",
    "expected": false
  },
  {
    "message": "The private photos meeting is tomorrow.",
    "category": "Sextortion",
    "expected": false
  },
  {
    "message": "Información sobre fotos íntimas.",
    "category": "Sextortion",
    "expected": false
  },
  {
    "message": "Please review the private photos policy.",
    "category": "Sextortion",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre fotos íntimas.",
    "category": "Sextortion",
    "expected": false
  },
  {
    "message": "apartment: deposit before viewing",
    "category": "Rental fraud",
    "expected": true
  },
  {
    "message": "Urgent: apartment. deposit before viewing.",
    "category": "Rental fraud",
    "expected": true
  },
  {
    "message": "Regarding apartment, deposit before viewing.",
    "category": "Rental fraud",
    "expected": true
  },
  {
    "message": "Aviso: alquiler. depósito antes de visitar.",
    "category": "Rental fraud",
    "expected": true
  },
  {
    "message": "alquiler: depósito antes de visitar",
    "category": "Rental fraud",
    "expected": true
  },
  {
    "message": "We discussed apartment yesterday.",
    "category": "Rental fraud",
    "expected": false
  },
  {
    "message": "The apartment meeting is tomorrow.",
    "category": "Rental fraud",
    "expected": false
  },
  {
    "message": "Información sobre alquiler.",
    "category": "Rental fraud",
    "expected": false
  },
  {
    "message": "Please review the apartment policy.",
    "category": "Rental fraud",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre alquiler.",
    "category": "Rental fraud",
    "expected": false
  },
  {
    "message": "charity: gift card",
    "category": "Fake charities",
    "expected": true
  },
  {
    "message": "Urgent: charity. gift card.",
    "category": "Fake charities",
    "expected": true
  },
  {
    "message": "Regarding charity, gift card.",
    "category": "Fake charities",
    "expected": true
  },
  {
    "message": "Aviso: donación. tarjeta de regalo.",
    "category": "Fake charities",
    "expected": true
  },
  {
    "message": "donación: tarjeta de regalo",
    "category": "Fake charities",
    "expected": true
  },
  {
    "message": "We discussed charity yesterday.",
    "category": "Fake charities",
    "expected": false
  },
  {
    "message": "The charity meeting is tomorrow.",
    "category": "Fake charities",
    "expected": false
  },
  {
    "message": "Información sobre donación.",
    "category": "Fake charities",
    "expected": false
  },
  {
    "message": "Please review the charity policy.",
    "category": "Fake charities",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre donación.",
    "category": "Fake charities",
    "expected": false
  },
  {
    "message": "grandson: bail money",
    "category": "Family emergency scams",
    "expected": true
  },
  {
    "message": "Urgent: grandson. bail money.",
    "category": "Family emergency scams",
    "expected": true
  },
  {
    "message": "Regarding grandson, bail money.",
    "category": "Family emergency scams",
    "expected": true
  },
  {
    "message": "Aviso: nieto. dinero para fianza.",
    "category": "Family emergency scams",
    "expected": true
  },
  {
    "message": "nieto: dinero para fianza",
    "category": "Family emergency scams",
    "expected": true
  },
  {
    "message": "We discussed grandson yesterday.",
    "category": "Family emergency scams",
    "expected": false
  },
  {
    "message": "The grandson meeting is tomorrow.",
    "category": "Family emergency scams",
    "expected": false
  },
  {
    "message": "Información sobre nieto.",
    "category": "Family emergency scams",
    "expected": false
  },
  {
    "message": "Please review the grandson policy.",
    "category": "Family emergency scams",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre nieto.",
    "category": "Family emergency scams",
    "expected": false
  },
  {
    "message": "subscription: call to cancel",
    "category": "Subscription fraud",
    "expected": true
  },
  {
    "message": "Urgent: subscription. call to cancel.",
    "category": "Subscription fraud",
    "expected": true
  },
  {
    "message": "Regarding subscription, call to cancel.",
    "category": "Subscription fraud",
    "expected": true
  },
  {
    "message": "Aviso: suscripción. llama para cancelar.",
    "category": "Subscription fraud",
    "expected": true
  },
  {
    "message": "suscripción: llama para cancelar",
    "category": "Subscription fraud",
    "expected": true
  },
  {
    "message": "We discussed subscription yesterday.",
    "category": "Subscription fraud",
    "expected": false
  },
  {
    "message": "The subscription meeting is tomorrow.",
    "category": "Subscription fraud",
    "expected": false
  },
  {
    "message": "Información sobre suscripción.",
    "category": "Subscription fraud",
    "expected": false
  },
  {
    "message": "Please review the subscription policy.",
    "category": "Subscription fraud",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre suscripción.",
    "category": "Subscription fraud",
    "expected": false
  },
  {
    "message": "marketplace: verification code",
    "category": "Marketplace fraud",
    "expected": true
  },
  {
    "message": "Urgent: marketplace. verification code.",
    "category": "Marketplace fraud",
    "expected": true
  },
  {
    "message": "Regarding marketplace, verification code.",
    "category": "Marketplace fraud",
    "expected": true
  },
  {
    "message": "Aviso: comprador. código de verificación.",
    "category": "Marketplace fraud",
    "expected": true
  },
  {
    "message": "comprador: código de verificación",
    "category": "Marketplace fraud",
    "expected": true
  },
  {
    "message": "We discussed marketplace yesterday.",
    "category": "Marketplace fraud",
    "expected": false
  },
  {
    "message": "The marketplace meeting is tomorrow.",
    "category": "Marketplace fraud",
    "expected": false
  },
  {
    "message": "Información sobre comprador.",
    "category": "Marketplace fraud",
    "expected": false
  },
  {
    "message": "Please review the marketplace policy.",
    "category": "Marketplace fraud",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre comprador.",
    "category": "Marketplace fraud",
    "expected": false
  },
  {
    "message": "refund: remote access",
    "category": "Refund scams",
    "expected": true
  },
  {
    "message": "Urgent: refund. remote access.",
    "category": "Refund scams",
    "expected": true
  },
  {
    "message": "Regarding refund, remote access.",
    "category": "Refund scams",
    "expected": true
  },
  {
    "message": "Aviso: reembolso. acceso remoto.",
    "category": "Refund scams",
    "expected": true
  },
  {
    "message": "reembolso: acceso remoto",
    "category": "Refund scams",
    "expected": true
  },
  {
    "message": "We discussed refund yesterday.",
    "category": "Refund scams",
    "expected": false
  },
  {
    "message": "The refund meeting is tomorrow.",
    "category": "Refund scams",
    "expected": false
  },
  {
    "message": "Información sobre reembolso.",
    "category": "Refund scams",
    "expected": false
  },
  {
    "message": "Please review the refund policy.",
    "category": "Refund scams",
    "expected": false
  },
  {
    "message": "Tenemos una reunión sobre reembolso.",
    "category": "Refund scams",
    "expected": false
  },
  {
    "message": "Lunch at noon",
    "category": null,
    "expected": false
  },
  {
    "message": "Dinner at seven",
    "category": null,
    "expected": false
  },
  {
    "message": "Happy birthday",
    "category": null,
    "expected": false
  },
  {
    "message": "See you tomorrow",
    "category": null,
    "expected": false
  },
  {
    "message": "The train arrives at six",
    "category": null,
    "expected": false
  },
  {
    "message": "Please bring milk",
    "category": null,
    "expected": false
  },
  {
    "message": "The weather is nice",
    "category": null,
    "expected": false
  },
  {
    "message": "Meeting moved to Monday",
    "category": null,
    "expected": false
  },
  {
    "message": "Your library book is ready",
    "category": null,
    "expected": false
  },
  {
    "message": "Thanks for your help",
    "category": null,
    "expected": false
  },
  {
    "message": "Hola, buenos días",
    "category": null,
    "expected": false
  },
  {
    "message": "Nos vemos mañana",
    "category": null,
    "expected": false
  },
  {
    "message": "Feliz cumpleaños",
    "category": null,
    "expected": false
  },
  {
    "message": "La reunión es el lunes",
    "category": null,
    "expected": false
  },
  {
    "message": "Gracias por tu ayuda",
    "category": null,
    "expected": false
  },
  {
    "message": "Vamos a cenar",
    "category": null,
    "expected": false
  },
  {
    "message": "El tren llega a las seis",
    "category": null,
    "expected": false
  },
  {
    "message": "Compra leche por favor",
    "category": null,
    "expected": false
  },
  {
    "message": "Hace buen tiempo",
    "category": null,
    "expected": false
  },
  {
    "message": "Hasta pronto",
    "category": null,
    "expected": false
  },
  {
    "message": "Never share your password",
    "category": null,
    "expected": false
  },
  {
    "message": "Do not share your password",
    "category": null,
    "expected": false
  },
  {
    "message": "Never send your verification code",
    "category": null,
    "expected": false
  },
  {
    "message": "Do not give your security code",
    "category": null,
    "expected": false
  },
  {
    "message": "Never provide your OTP",
    "category": null,
    "expected": false
  },
  {
    "message": "The garden looks lovely",
    "category": null,
    "expected": false
  },
  {
    "message": "I finished the book",
    "category": null,
    "expected": false
  },
  {
    "message": "Your appointment is tomorrow",
    "category": null,
    "expected": false
  },
  {
    "message": "The package arrived",
    "category": null,
    "expected": false
  },
  {
    "message": "Your invoice is attached",
    "category": null,
    "expected": false
  }
];
let failures=0;for(const [i,c] of cases.entries()){try{const r=inspect(c.message);assert.equal(c.category?r.categories.some(x=>x.name===c.category):r.categories.length>0,c.expected);assert.equal(r.level,r.risk); }catch(e){failures++;console.error('FAIL',i+1,c.message,e.message)}}console.log(`${cases.length-failures}/${cases.length} labeled classification cases passed`);if(failures)process.exitCode=1;
