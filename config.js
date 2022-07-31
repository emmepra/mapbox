var config = {
  style: "mapbox://styles/emmepra/cl55q2z7o00b814ogf7ickudo",
  accessToken:
    "pk.eyJ1IjoiZW1tZXByYSIsImEiOiJjbDU1MjdkcnoxNTBiM2RwcGdjeDdwcTdoIn0.QW7FLX0L7VgWyJVcJw2F5A",
  showMarkers: false,
  inset: false,
  theme: "light",
  use3dTerrain: false, //set true for enabling 3D maps.
  title: "Un deserto di grano",
  subtitle:
    "Il porto di Odessa è sotto assedio.</br></br>Il nuovo silenzioso deserto che ricorda l'odore del pane guarda inerme il Mar Nero infestato di mine.</br></br>È subito emergenza in Egitto,</br>presto sarà fame.",
  byline: "<i>Matteo Prandi & Vivianna Zitani</i>",
  chapters: [
    {
      id: "Ukraine ultra High",
      alignment: "center",
      hidden: true,

      location: {
        center: [31.18128, 48.50787],
        zoom: 1.5,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "Ukraine High",
      alignment: "left",
      hidden: false,
      title: "Sotto assedio",
      description:
        "Dalla Seconda guerra mondiale mai nessun conflitto aveva avuto <b>conseguenze irreversibili</b> come quelle della guerra russo-ucraina. <pr></p>Il nuovo assetto internazionale dovrà trovare differenti <b>rotte commerciali</b>, gestire gli effetti di un’<b>inflazione</b> galoppante e far fronte a una lenta crescita economica.",
      location: {
        center: [31.18128, 48.50787],
        zoom: 4.5,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "ukraine-area",
          opacity: 0.35,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "Ukraine Zoom",
      alignment: "right",
      hidden: false,
      title: "Senza vie d'uscita",
      description:
        "Russia e Ucraina sono tra i più grandi <b>esportatori di grano</b> al mondo. Il Paese sotto <b>assedio</b>, però, deve al più presto mettere in navigazione i 22 milioni di grani duri e teneri bloccati nei <b>silos</b> del Porto di Odessa. Rischiano di marcire.<pr></p>Tentare di salvare la propria economia significa anche scongiurare una <b>catastrofe</b> alimentare nei Paesi del <b>Medio Oriente</b> e dell'<b>Africa</b> che dipendono in maniera esistenziale dalle esportazioni di cereali ucraini.",
      location: {
        center: [31.18128, 48.50787],
        zoom: 5.5,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "Odessa Port",
      alignment: "right",
      hidden: false,
      title: "Il blocco di Odessa",
      description:
        "I chicchi dorati traboccano dai silos incontinenti nel porto di Odessa. <b>Dune di grano</b> guardano il Mar Nero, uno specchio piatto.<pr></p>Dal 24 Febbraio questa grande distesa d'acqua è infestata di <b>mine</b> e non permette ai cargo che contengono l'<b>oro di Ucraina</b> di prendere il largo.",
      location: {
        center: [30.7413, 46.49842],
        zoom: 13.28,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "ukraine-area",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "Odessa Port",
      alignment: "right",
      hidden: false,
      title: "Ancorata",
      description:
        "L'intera area dello scalo del <b>porto di Odessa</b> è classificata sito strategico-militare.<pr></p>Era da qui, dal terminal più grande del Paese, che i <b>cereali</b> venivano scaricati e ripartivano a ciclo continuo.<br>Oggi il silenzio di fronte a questo deserto di grano è un rumore assordante.",
      location: {},
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "Middle East",
      alignment: "left",
      hidden: false,
      title: "Le conseguenze sociali in Medio Oriente",
      description:
        "Molti Paesi del <b>Medio Oriente</b> e dell’<b>Africa</b>, fremono per l'arrivo del grano senza il quale non si può preparare il <b>pane</b>, elemento basilare nell’alimentazione dei paesi del <b>Terzo mondo</b>. <p></p>È proprio in queste parti del mondo, già assediate dalla poverà e dalle difficoltà economiche, che una <b>crisi alimentare</b> potrebbe far detonare il <b>malcontento popolare</b> già largamente diffuso.",
      location: {
        center: [39.79726, 27.81408],
        zoom: 4.0,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "ukraine-area",
          opacity: 0,
        },
        {
          layer: "me-area",
          opacity: 0.35,
        },
      ],
      onChapterExit: [
        {
          layer: "me-area",
          opacity: 0,
        },
      ],
    },
    // {
    //   id: "fourth-chapter",
    //   alignment: "fully",
    //   hidden: false,
    //   title: "Egitto",
    //   description:
    //     "Il Paese più popoloso del mondo arabo rischia una crisi alimentare tale che le possibili conseguenze sociali rappresentano una priorità all’interno dell’agenda degli stati di tutta la regione.<p></p>In questo fragile assetto si aggiungono, poi, le disillusioni delle promesse del governo, impegnato già nel delicato piano di ripresa post-pandemica.",
    //   location: {
    //     center: [28.5629368155458, 31.126393292107704],
    //     zoom: 3.8,
    //     pitch: 45.0,
    //     bearing: 0.0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     {
    //       layer: "egypt-area",
    //       opacity: 0.35,
    //     },
    //   ],
    //   onChapterExit: [],
    // },
    {
      id: "fourth-chapterr",
      alignment: "fully",
      hidden: false,
      title: "Il Cairo ha i giorni contati ",
      description:
        "«Le riserve di grano egiziane possono coprire <b>quattro mesi e mezzo</b>».<pr></p>Queste le dichiarazioni del <b>Segretario Generale</b> delle Camere di Commercio Egiziane – Alaa El-Ezz – rilasciate in un’intervista telefonica a Egypt Independent.<pr></p>Con l’<b>aumento dei prezzi</b> e la prospettiva di un rapido <b>esaurimento delle scorte</b>, una possibile <b>carestia</b> rappresenta per il paese più popoloso del mondo arabo un problema di massima <b>prorità</b>.",
      location: {
        center: [31.2544, 30.06598],
        zoom: 15,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "egypt-area",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
  ],
};