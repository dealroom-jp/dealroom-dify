const translation = {
  knowledge: 'Conocimiento',
  documentCount: ' documentos',
  wordCount: ' mil palabras',
  appCount: ' aplicaciones vinculadas',
  createDataset: 'Crear Conocimiento',
  createDatasetIntro: 'Importa tus propios datos de texto o escribe datos en tiempo real a través de Webhook para mejorar el contexto de LLM.',
  deleteDatasetConfirmTitle: '¿Eliminar este Conocimiento?',
  deleteDatasetConfirmContent:
    'Eliminar el Conocimiento es irreversible. Los usuarios ya no podrán acceder a tu Conocimiento y todas las configuraciones y registros de las sugerencias se eliminarán permanentemente.',
  datasetUsedByApp: 'El conocimiento está siendo utilizado por algunas aplicaciones. Las aplicaciones ya no podrán utilizar este Conocimiento y todas las configuraciones y registros de las sugerencias se eliminarán permanentemente.',
  datasetDeleted: 'Conocimiento eliminado',
  datasetDeleteFailed: 'Error al eliminar el Conocimiento',
  didYouKnow: '¿Sabías?',
  intro1: 'El Conocimiento se puede integrar en la aplicación Dify ',
  intro2: 'como contexto',
  intro3: ',',
  intro4: 'o ',
  intro5: 'se puede crear',
  intro6: ' como un complemento independiente de ChatGPT para publicar',
  unavailable: 'No disponible',
  unavailableTip: 'El modelo de incrustación no está disponible, es necesario configurar el modelo de incrustación predeterminado',
  datasets: 'CONOCIMIENTO',
  datasetsApi: 'ACCESO A LA API',
  retrieval: {
    semantic_search: {
      title: 'Búsqueda Vectorial',
      description: 'Genera incrustaciones de consulta y busca el fragmento de texto más similar a su representación vectorial.',
    },
    full_text_search: {
      title: 'Búsqueda de Texto Completo',
      description: 'Indexa todos los términos del documento, lo que permite a los usuarios buscar cualquier término y recuperar el fragmento de texto relevante que contiene esos términos.',
    },
    hybrid_search: {
      title: 'Búsqueda Híbrida',
      description: 'Ejecuta búsquedas de texto completo y búsquedas vectoriales simultáneamente, reordena para seleccionar la mejor coincidencia para la consulta del usuario. Es necesaria la configuración de las API del modelo de reordenamiento.',
      recommend: 'Recomendar',
    },
    invertedIndex: {
      title: 'Índice Invertido',
      description: 'El Índice Invertido es una estructura utilizada para la recuperación eficiente. Organizado por términos, cada término apunta a documentos o páginas web que lo contienen.',
    },
    change: 'Cambiar',
    changeRetrievalMethod: 'Cambiar método de recuperación',
  },
  docsFailedNotice: 'no se pudieron indexar los documentos',
  retry: 'Reintentar',
  indexingTechnique: {
    high_quality: 'AC',
    economy: 'ECO',
  },
  indexingMethod: {
    semantic_search: 'VECTOR',
    full_text_search: 'TEXTO COMPLETO',
    hybrid_search: 'HÍBRIDO',
    invertedIndex: 'INVERTIDO',
  },
  mixtureHighQualityAndEconomicTip: 'Se requiere el modelo de reclasificación para la mezcla de bases de conocimiento de alta calidad y económicas.',
  inconsistentEmbeddingModelTip: 'Se requiere el modelo de reclasificación si los modelos de incrustación de las bases de conocimiento seleccionadas son inconsistentes.',
  retrievalSettings: 'Configuración de recuperación',
  rerankSettings: 'Configuración de reclasificación',
  weightedScore: {
    title: 'Puntuación ponderada',
    description: 'Al ajustar los pesos asignados, esta estrategia de reclasificación determina si se debe priorizar la coincidencia semántica o de palabras clave.',
    semanticFirst: 'Semántica primero',
    keywordFirst: 'Palabra clave primero',
    customized: 'Personalizado',
    semantic: 'Semántico',
    keyword: 'Palabra clave',
  },
  nTo1RetrievalLegacy: 'La recuperación N-a-1 será oficialmente obsoleta a partir de septiembre. Se recomienda utilizar la última recuperación de múltiples rutas para obtener mejores resultados.',
  nTo1RetrievalLegacyLink: 'Más información',
  nTo1RetrievalLegacyLinkText: 'La recuperación N-a-1 será oficialmente obsoleta en septiembre.',
  defaultRetrievalTip: 'De forma predeterminada, se utiliza la recuperación de varias rutas. El conocimiento se recupera de múltiples bases de conocimiento y luego se vuelve a clasificar.',
  editExternalAPIConfirmWarningContent: {
    front: 'Esta API de conocimiento externo está vinculada a',
    end: 'conocimiento externo, y esta modificación se aplicará a todos ellos. ¿Estás seguro de que quieres guardar este cambio?',
  },
  editExternalAPIFormWarning: {
    end: 'Conocimiento externo',
    front: 'Esta API externa está vinculada a',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      end: '?',
      front: 'Borrar',
    },
    content: {
      end: 'conocimiento externo. Al eliminar esta API, se invalidarán todos ellos. ¿Estás seguro de que quieres eliminar esta API?',
      front: 'Esta API de conocimiento externo está vinculada a',
    },
    noConnectionContent: '¿Está seguro de eliminar esta API?',
  },
  selectExternalKnowledgeAPI: {
    placeholder: 'Elegir una API de conocimiento externa',
  },
  connectDatasetIntro: {
    content: {
      link: 'Más información sobre cómo crear una API externa',
      front: 'Para conectarse a una base de conocimientos externa, primero debe crear una API externa. Por favor, lea atentamente y consulte',
      end: '. A continuación, busque el ID de conocimiento correspondiente y rellénelo en el formulario de la izquierda. Si toda la información es correcta, saltará automáticamente a la prueba de recuperación en la base de conocimientos después de hacer clic en el botón conectar.',
    },
    learnMore: 'Aprende más',
    title: 'Cómo conectarse a una base de conocimientos externa',
  },
  connectHelper: {
    helper5: 'con cuidado antes de usar esta función.',
    helper2: 'Solo se admite la funcionalidad de recuperación',
    helper1: 'Conéctese a bases de conocimiento externas a través de la API y el ID de la base de conocimiento. Actualmente,',
    helper3: '. Le recomendamos encarecidamente que',
    helper4: 'Leer la documentación de ayuda',
  },
  externalKnowledgeForm: {
    connect: 'Conectar',
    cancel: 'Cancelar',
  },
  externalAPIForm: {
    encrypted: {
      front: 'Su token de API se cifrará y almacenará mediante',
      end: 'Tecnología.',
    },
    cancel: 'Cancelar',
    apiKey: 'Clave de API',
    save: 'Salvar',
    edit: 'Editar',
    name: 'Nombre',
    endpoint: 'Punto de conexión de API',
  },
  externalTag: 'Externo',
  externalKnowledgeDescriptionPlaceholder: 'Describa lo que hay en esta base de conocimientos (opcional)',
  externalKnowledgeNamePlaceholder: 'Introduzca el nombre de la base de conocimientos',
  noExternalKnowledge: 'Todavía no hay una API de conocimiento externo, haga clic aquí para crear',
  editExternalAPIFormTitle: 'Editar la API de conocimiento externo',
  externalKnowledgeName: 'Nombre del conocimiento externo',
  allExternalTip: 'Al usar solo conocimiento externo, el usuario puede elegir si desea habilitar el modelo Rerank. Si no se habilita, los fragmentos recuperados se ordenarán en función de las puntuaciones. Cuando las estrategias de recuperación de diferentes bases de conocimiento son inconsistentes, serán inexactas.',
  createExternalAPI: 'Adición de una API de conocimiento externa',
  externalKnowledgeId: 'ID de conocimiento externo',
  connectDataset: 'Conéctese a una base de conocimientos externa',
  createNewExternalAPI: 'Creación de una nueva API de conocimiento externo',
  editExternalAPITooltipTitle: 'CONOCIMIENTO VINCULADO',
  externalAPIPanelTitle: 'API de conocimiento externo',
  externalKnowledgeDescription: 'Descripción del conocimiento',
  externalAPIPanelDescription: 'La API de conocimiento externo se utiliza para conectarse a una base de conocimiento fuera de Dify y recuperar conocimiento de esa base de conocimiento.',
  externalAPI: 'API externa',
  externalKnowledgeIdPlaceholder: 'Introduzca el ID de conocimiento',
  learnHowToWriteGoodKnowledgeDescription: 'Aprende a escribir una buena descripción del conocimiento',
  externalAPIPanelDocumentation: 'Más información sobre cómo crear una API de conocimiento externo',
  mixtureInternalAndExternalTip: 'El modelo de Rerank es necesario para la mezcla de conocimiento interno y externo.',
  chunkingMode: {
    parentChild: 'Padre-hijo',
    general: 'General',
  },
  parentMode: {
    fullDoc: 'Documento completo',
    paragraph: 'Párrafo',
  },
  batchAction: {
    selected: 'Seleccionado',
    enable: 'Habilitar',
    disable: 'Inutilizar',
    cancel: 'Cancelar',
    archive: 'Archivo',
    delete: 'Borrar',
  },
  enable: 'Habilitar',
  documentsDisabled: '{{num}} Documentos desactivados - inactivos durante más de 30 días',
  preprocessDocument: '{{num}} Documentos de preprocesamiento',
  localDocs: 'Documentos locales',
}

export default translation