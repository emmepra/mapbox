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
  footer:
    'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "Ukraine High",
      alignment: "left",
      hidden: false,
      title: "ciao tamar",
      image: "./path/to/image/source.png",
      description:
        "Dalla Seconda guerra mondiale mai nessun conflitto aveva avuto conseguenze irreversibili come quelle della guerra russo-ucraina. <pr></p>Il nuovo assetto internazionale dovrà trovare nuove rotte commerciali, gestire gli effetti di un’inflazione galoppante e far fronte a una lenta crescita economica.",
      location: {
        center: [31.18128, 48.50787],
        zoom: 4.5,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [
        {
          layer: "ukraine-area",
          opacity: 0.35,
        },
      ],
    },
    {
      id: "Ukraine Zoom",
      alignment: "right",
      hidden: false,
      title: "Padre Pio aiutaci tu",
      image: "./path/to/image/source.png",
      description:
        "L’Ucraina - insieme alla Russia - è uno dei più grandi esportatori di grano al mondo. <br> Il paese sotto assedio, però, deve al più presto mettere in navigazione i 22 milioni di grani duri e teneri bloccati nei silos del Porto di Odessa. <br>Tentare di salvare la propria economia significa anche scongiurare una catastrofe alimentare nei Paesi del Medio Oriente e dell'Africa che dipendono dalle esportazioni di cereali ucraini, talvolta anche in maniera esistenziale.",
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
      title: "Le “dune” sono prigioniere di guerra",
      image: "./path/to/image/source.png",
      description:
        "Il Mar Nero è uno specchio piatto.<pr></p>Dal 24 febbraio questa grande distesa d’acqua è infestata di mine e non permette ai cargo che contengono l’oro d’Ucraina di prendere il largo.",
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
      id: "Odessa Port",
      alignment: "right",
      hidden: false,
      title: "Ciao Tamar",
      image: "./path/to/image/source.png",
      description:
        "L'intera area dello scalo del porto di Odessa è classificata sito strategico-militare. <pr></p>Era da qui, dal  terminal più grande del Paese, che i cereali venivano scaricati e ripartivano a ciclo continuo. Oggi il silenzio di fronte a queste dune di grano è un rumore assordante.<pr></p> Egitto, Tunisia, Sudan, Libano e Yemen fremono per l'arrivo del grano, senza il quale non si può preparare il pane quotidiano.",
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
      title: "Third Titolo non so cosa",
      image: "./path/to/image/source.png",
      description:
        "I Paesi del Medio Oriente, posti di fronte al blocco delle esportazioni di grano ucraino e all’aumento dei prezzi delle materie prime, stanno affrontando gravi problemi in termini di sicurezza alimentare e umanitaria. <p></p>Le difficoltà finanziarie di Stati come l’Egitto e la Tunisia - che dipendono in maniera morbosa dall’importazione di grano ucraino e russo - rischiano di esacerbare il malcontento popolare che si respira nell’aria già da tempo. <p></p> In questo fragile assetto si aggiungono, poi, le disillusioni delle promesse dei governi, impegnati già nel delicato piano di ripresa post-pandemica.",
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
      title: "Third Titleeeeee",
      image: "./path/to/image/source.png",
      description:
        "In Egitto il governo del presidente egiziano al-Sisi dovrà affrontare una sfida complessa, costretto a cercare nuovi fornitori di grano mentre tenta di assorbire il colpo dell'aumento dei prezzi dei generi alimentari.",
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
    {
      id: "fourth-chapterrr",
      alignment: "fully",
      hidden: false,
      title: "Third Titleeeeee",
      image: "./path/to/image/source.png",
      description:
        "In Egitto il governo del presidente egiziano al-Sisi dovrà affrontare una sfida complessa, costretto a cercare nuovi fornitori di grano mentre tenta di assorbire il colpo dell'aumento dei prezzi dei generi alimentari.",
      location: {
        center: [31.26107, 30.04795],
        zoom: 17,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
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
