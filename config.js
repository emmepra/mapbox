var config = {
  style: "mapbox://styles/emmepra/cl55q2z7o00b814ogf7ickudo",
  accessToken:
    "pk.eyJ1IjoiZW1tZXByYSIsImEiOiJjbDU1MjdkcnoxNTBiM2RwcGdjeDdwcTdoIn0.QW7FLX0L7VgWyJVcJw2F5A",
  showMarkers: false,
  //markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  theme: "light",
  use3dTerrain: false, //set true for enabling 3D maps.
  title: "Dune di grano",
  subtitle:
    "Il porto di Odessa è sotto assedio. Il nuovo silenzioso deserto che ricorda l'odore del pane guarda inerme il Mar Nero infestato di mine mentre il Medio Oriente muore di fame",
  byline: "Matteo Prandi e Vivianna Zitani",
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
      title: "Europa Est (Sotto assedio)",
      description:
        "Dalla Seconda guerra mondiale mai nessun conflitto aveva avuto conseguenze irreversibili come quelle della guerra russo-ucraina. <pr></p>Il nuovo assetto internazionale dovrà trovare differenti rotte commerciali, gestire gli effetti di un’inflazione galoppante e far fronte a una lenta crescita economica.",
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
      title: "Ucraina",
      description:
        "Russia e Ucraina sono tra i più grandi esportatori di grano al mondo. <pr></p>Il Paese sotto assedio, però, deve al più presto mettere in navigazione i 22 milioni di grani duri e teneri bloccati nei silos del Porto di Odessa. Rischiano di marcire. <pr></p>Tentare di salvare la propria economia significa anche scongiurare una catastrofe alimentare nei Paesi del Medio Oriente e dell'Africa che dipendono in maniera esistenziale dalle esportazioni di cereali ucraini.",
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
      title: "Odessa 1",
      description:
        "Dune di grano ammirano il Mar Nero, uno specchio piatto. <pr></p>Dal 24 febbraio questa grande distesa d’acqua è infestata di mine e non permette ai cargo che contengono l’oro d’Ucraina di prendere il largo.",
      location: {
        center: [30.7413, 46.49842],
        zoom: 13.28,
        pitch: 45.0,
        bearing: 0.0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
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
      id: "Odessa 2",
      alignment: "right",
      hidden: false,
      title: "Ciao Tamar",
      description:
        "L'intera area dello scalo del porto di Odessa è classificata sito strategico-militare.<pr></p>Era da qui, dal terminal più grande del Paese, che i cereali venivano scaricati e ripartivano a ciclo continuo. <br>Oggi il silenzio di fronte a questo deserto di grano è un rumore assordante.",
      location: {
        center: [30.7413, 46.49842],
        zoom: 13.28,
        pitch: 45.0,
        bearing: 0.0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
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
      id: "Middle East",
      alignment: "left",
      hidden: false,
      title: "MO",
      description:
        "Molti Paesi del Medio Oriente e  dell’Africa, fremono per l'arrivo del grano senza il quale non si può preparare il pane, elemento immancabile nell’alimentazione dei Paesi poveri e in via di sviluppo. <p></p>È proprio in questi stati che le difficoltà finanziarie rischiano di esacerbare un malcontento popolare diffuso già da tempo.",
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
    {
      id: "fourth-chapter",
      alignment: "fully",
      hidden: false,
      title: "Egitto",
      description:
        "Il Paese più popoloso del mondo arabo rischia una crisi alimentare tale che le possibili conseguenze sociali rappresentano una priorità all’interno dell’agenda degli stati di tutta la regione.<p></p>In questo fragile assetto si aggiungono, poi, le disillusioni delle promesse del governo, impegnato già nel delicato piano di ripresa post-pandemica.",
      location: {
        center: [28.5629368155458, 31.126393292107704],
        zoom: 3.8,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "egypt-area",
          opacity: 0.35,
        },
      ],
      onChapterExit: [],
    },
  ],
};