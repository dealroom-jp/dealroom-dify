const translation = {
  list: {
    title: 'दस्तावेज़',
    desc: 'यहाँ ज्ञान की सभी फाइलें दिखाई गई हैं, और पूरे ज्ञान को डिफी संदर्भों से जोड़ा जा सकता है या चैट प्लगइन के माध्यम से अनुक्रमित किया जा सकता है।',
    addFile: 'फाइल जोड़ें',
    addPages: 'पृष्ठ जोड़ें',
    addUrl: 'URL जोड़ें',
    table: {
      header: {
        fileName: 'फाइल का नाम',
        words: 'शब्द',
        hitCount: 'पुनर्प्राप्ति गणना',
        uploadTime: 'अपलोड का समय',
        status: 'स्थिति',
        action: 'क्रिया',
        chunkingMode: 'चंकिंग मोड',
      },
      rename: 'नाम बदलें',
      name: 'नाम',
    },
    action: {
      uploadFile: 'नई फाइल अपलोड करें',
      settings: 'खंड सेटिंग्स',
      addButton: 'खंड जोड़ें',
      add: 'खंड जोड़ें',
      batchAdd: 'बैच में जोड़ें',
      archive: 'संग्रहीत करें',
      unarchive: 'संग्रह से बाहर करें',
      delete: 'हटाएँ',
      enableWarning: 'संग्रहित फाइल को सक्रिय नहीं किया जा सकता',
      sync: 'सिंक्रोनाइज़ करें',
    },
    index: {
      enable: 'सक्रिय करें',
      disable: 'निष्क्रिय करें',
      all: 'सभी',
      enableTip: 'फाइल को अनुक्रमित किया जा सकता है',
      disableTip: 'फाइल को अनुक्रमित नहीं किया जा सकता',
    },
    status: {
      queuing: 'पंक्तिबद्ध',
      indexing: 'अनुक्रमण',
      paused: 'रुका हुआ',
      error: 'त्रुटि',
      available: 'उपलब्ध',
      enabled: 'सक्रिय',
      disabled: 'निष्क्रिय',
      archived: 'संग्रहित',
    },
    empty: {
      title: 'अभी तक कोई दस्तावेज़ नहीं है',
      upload: {
        tip: 'आप फाइलें अपलोड कर सकते हैं, वेबसाइट से, या वेब ऐप्स जैसे की नोशन, गिटहब आदि से सिंक्रोनाइज़ कर सकते हैं।',
      },
      sync: {
        tip: 'डिफी आपके नोशन से नियमित रूप से फाइलें डाउनलोड करेगा और प्रसंस्करण पूरा करेगा।',
      },
    },
    delete: {
      title: 'क्या आप सुनिश्चित हैं मिटाना?',
      content:
        'यदि आप बाद में प्रसंस्करण फिर से शुरू करना चाहते हैं, तो आप वहीं से शुरू करेंगे जहाँ आपने छोड़ा था',
    },
    batchModal: {
      title: 'खंड जोड़ने के लिए बैच',
      csvUploadTitle: 'अपनी CSV फाइल यहाँ खींचें और छोड़ें, या ',
      browse: 'ब्राउज़ करें',
      tip: 'CSV फाइल निम्नलिखित संरचना का अनुसरण करनी चाहिए:',
      question: 'प्रश्न',
      answer: 'उत्तर',
      contentTitle: 'खंड सामग्री',
      content: 'सामग्री',
      template: 'टेम्पलेट यहाँ डाउनलोड करें',
      cancel: 'रद्द करें',
      run: 'बैच चलाएं',
      runError: 'बैच चलाने में विफल',
      processing: 'बैच प्रसंस्करण में',
      completed: 'आयात पूरा हुआ',
      error: 'आयात त्रुटि',
      ok: 'ठीक है',
    },
    learnMore: 'और जानो',
  },
  metadata: {
    title: 'मेटाडेटा',
    desc: 'दस्तावेजों के लिए मेटाडेटा लेबलिंग से AI को समय पर उन तक पहुँचने में मदद मिलती है और उपयोगकर्ताओं के लिए संदर्भों का स्रोत प्रदर्शित होता है।',
    dateTimeFormat: 'MMMM D, YYYY hh:mm A',
    docTypeSelectTitle: 'कृपया दस्तावेज़ प्रकार चुनें',
    docTypeChangeTitle: 'दस्तावेज़ प्रकार बदलें',
    docTypeSelectWarning:
      'यदि दस्तावेज़ प्रकार बदला जाता है, तो अब भरी गई मेटाडेटा संरक्षित नहीं रहेगी',
    firstMetaAction: 'चलिए शुरू करते हैं',
    placeholder: {
      add: 'जोड़ें ',
      select: 'चुनें ',
    },
    source: {
      upload_file: 'फाइल अपलोड करें',
      notion: 'नोशन से सिंक करें',
      github: 'गिटहब से सिंक करें',
    },
    type: {
      book: 'पुस्तक',
      webPage: 'वेब पृष्ठ',
      paper: 'पेपर',
      socialMediaPost: 'सोशल मीडिया पोस्ट',
      personalDocument: 'व्यक्तिगत दस्तावेज़',
      businessDocument: 'व्यापारिक दस्तावेज़',
      IMChat: 'आईएम चैट',
      wikipediaEntry: 'विकिपीडिया प्रविष्टि',
      notion: 'नोशन से सिंक करें',
      github: 'गिटहब से सिंक करें',
      technicalParameters: 'तकनीकी पैरामीटर',
    },
    field: {
      processRule: {
        processDoc: 'दस्तावेज़ प्रक्रिया',
        segmentRule: 'खंड नियम',
        segmentLength: 'खंडों की लंबाई',
        processClean: 'पाठ प्रक्रिया सफाई',
      },
      book: {
        title: 'शीर्षक',
        language: 'भाषा',
        author: 'लेखक',
        publisher: 'प्रकाशक',
        publicationDate: 'प्रकाशन तिथि',
        ISBN: 'ISBN',
        category: 'श्रेणी',
      },
      webPage: {
        title: 'शीर्षक',
        url: 'URL',
        language: 'भाषा',
        authorPublisher: 'लेखक/प्रकाशक',
        publishDate: 'प्रकाशन तिथि',
        topicsKeywords: 'विषय/कीवर्ड्स',
        description: 'विवरण',
      },
      paper: {
        title: 'शीर्षक',
        language: 'भाषा',
        author: 'लेखक',
        publishDate: 'प्रकाशन तिथि',
        journalConferenceName: 'जर्नल/सम्मेलन का नाम',
        volumeIssuePage: 'खंड/अंक/पृष्ठ',
        DOI: 'DOI',
        topicsKeywords: 'विषय/कीवर्ड्स',
        abstract: 'सार',
      },
      socialMediaPost: {
        platform: 'प्लेटफार्म',
        authorUsername: 'लेखक/यूज़रनेम',
        publishDate: 'प्रकाशन तिथि',
        postURL: 'पोस्ट URL',
        topicsTags: 'विषय/टैग',
      },
      personalDocument: {
        title: 'शीर्षक',
        author: 'लेखक',
        creationDate: 'निर्माण तिथि',
        lastModifiedDate: 'अंतिम संशोधित तिथि',
        documentType: 'दस्तावेज़ प्रकार',
        tagsCategory: 'टैग/श्रेणी',
      },
      businessDocument: {
        title: 'शीर्षक',
        author: 'लेखक',
        creationDate: 'निर्माण तिथि',
        lastModifiedDate: 'अंतिम संशोधित तिथि',
        documentType: 'दस्तावेज़ प्रकार',
        departmentTeam: 'विभाग/टीम',
      },
      IMChat: {
        chatPlatform: 'चैट प्लेटफॉर्म',
        chatPartiesGroupName: 'चैट पार्टियाँ/समूह का नाम',
        participants: 'प्रतिभागी',
        startDate: 'प्रारंभ तिथि',
        endDate: 'समाप्ति तिथि',
        topicsKeywords: 'विषय/कीवर्ड्स',
        fileType: 'फाइल प्रकार',
      },
      wikipediaEntry: {
        title: 'शीर्षक',
        language: 'भाषा',
        webpageURL: 'वेबपेज URL',
        editorContributor: 'संपादक/योगदानकर्ता',
        lastEditDate: 'अंतिम संपादन तिथि',
        summaryIntroduction: 'सार/परिचय',
      },
      notion: {
        title: 'शीर्षक',
        language: 'भाषा',
        author: 'लेखक',
        createdTime: 'निर्मित समय',
        lastModifiedTime: 'अंतिम संशोधित समय',
        url: 'URL',
        tag: 'टैग',
        description: 'विवरण',
      },
      github: {
        repoName: 'रिपो नाम',
        repoDesc: 'रिपो विवरण',
        repoOwner: 'रिपो मालिक',
        fileName: 'फाइल का नाम',
        filePath: 'फाइल पथ',
        programmingLang: 'प्रोग्रामिंग भाषा',
        url: 'URL',
        license: 'लाइसेंस',
        lastCommitTime: 'अंतिम कमिट समय',
        lastCommitAuthor: 'अंतिम कमिट लेखक',
      },
      originInfo: {
        originalFilename: 'मूल फाइल का नाम',
        originalFileSize: 'मूल फाइल का आकार',
        uploadDate: 'अपलोड तिथि',
        lastUpdateDate: 'अंतिम अद्यतन तिथि',
        source: 'स्रोत',
      },
      technicalParameters: {
        segmentSpecification: 'खंड विनिर्देश',
        segmentLength: 'खंडों की लंबाई',
        avgParagraphLength: 'औसत पैराग्राफ लंबाई',
        paragraphs: 'पैराग्राफ',
        hitCount: 'पुनर्प्राप्ति गणना',
        embeddingTime: 'एम्बेडिंग समय',
        embeddedSpend: 'एम्बेडेड खर्च',
      },
    },
    languageMap: {
      zh: 'चीनी',
      en: 'अंग्रेज़ी',
      es: 'स्पेनिश',
      fr: 'फ्रेंच',
      de: 'जर्मन',
      ja: 'जापानी',
      ko: 'कोरियाई',
      ru: 'रूसी',
      ar: 'अरबी',
      pt: 'पुर्तगाली',
      it: 'इतालवी',
      nl: 'डच',
      pl: 'पोलिश',
      sv: 'स्वीडिश',
      tr: 'तुर्की',
      he: 'हिब्रू',
      hi: 'हिंदी',
      da: 'डेनिश',
      fi: 'फिनिश',
      no: 'नॉर्वेजियन',
      hu: 'हंगेरियन',
      el: 'ग्रीक',
      cs: 'चेक',
      th: 'थाई',
      id: 'इंडोनेशियाई',
    },
    categoryMap: {
      book: {
        fiction: 'काल्पनिक',
        biography: 'जीवनी',
        history: 'इतिहास',
        science: 'विज्ञान',
        technology: 'प्रौद्योगिकी',
        education: 'शिक्षा',
        philosophy: 'दर्शन',
        religion: 'धर्म',
        socialSciences: 'सामाजिक विज्ञान',
        art: 'कला',
        travel: 'यात्रा',
        health: 'स्वास्थ्य',
        selfHelp: 'आत्म-सहायता',
        businessEconomics: 'व्यापार अर्थशास्त्र',
        cooking: 'खाना पकाना',
        childrenYoungAdults: 'बच्चे और युवा वयस्क',
        comicsGraphicNovels: 'कॉमिक्स और ग्राफिक उपन्यास',
        poetry: 'कविता',
        drama: 'नाटक',
        other: 'अन्य',
      },
      personalDoc: {
        notes: 'नोट्स',
        blogDraft: 'ब्लॉग ड्राफ्ट',
        diary: 'डायरी',
        researchReport: 'अनुसंधान रिपोर्ट',
        bookExcerpt: 'पुस्तक अंश',
        schedule: 'अनुसूची',
        list: 'सूची',
        projectOverview: 'परियोजना अवलोकन',
        photoCollection: 'फोटो संग्रह',
        creativeWriting: 'रचनात्मक लेखन',
        codeSnippet: 'कोड स्निपेट',
        designDraft: 'डिज़ाइन ड्राफ्ट',
        personalResume: 'व्यक्तिगत रिज्यूमे',
        other: 'अन्य',
      },
      businessDoc: {
        meetingMinutes: 'बैठक के मिनट',
        researchReport: 'अनुसंधान रिपोर्ट',
        proposal: 'प्रस्ताव',
        employeeHandbook: 'कर्मचारी हैंडबुक',
        trainingMaterials: 'प्रशिक्षण सामग्री',
        requirementsDocument: 'आवश्यकता दस्तावेज़',
        designDocument: 'डिज़ाइन दस्तावेज़',
        productSpecification: 'उत्पाद विनिर्देश',
        financialReport: 'वित्तीय रिपोर्ट',
        marketAnalysis: 'बाजार विश्लेषण',
        projectPlan: 'परियोजना योजना',
        teamStructure: 'टीम संरचना',
        policiesProcedures: 'नीतियाँ और प्रक्रियाएँ',
        contractsAgreements: 'अनुबंध और समझौते',
        emailCorrespondence: 'ईमेल पत्राचार',
        other: 'अन्य',
      },
    },
  },
  embedding: {
    processing: 'एम्बेडिंग प्रक्रिया...',
    paused: 'एम्बेडिंग रुकी हुई',
    completed: 'एम्बेडिंग पूरी हो गई',
    error: 'एम्बेडिंग त्रुटि',
    docName: 'प्रसंस्करण दस्तावेज़',
    mode: 'खंडीकरण नियम',
    segmentLength: 'खंडों की लंबाई',
    textCleaning: 'पाठ पूर्व-परिभाषा और सफाई',
    segments: 'पैराग्राफ',
    highQuality: 'उच्च गुणवत्ता मोड',
    economy: 'अर्थव्यवस्था मोड',
    estimate: 'अनुमानित उपभोग',
    stop: 'प्रक्रिया रोकें',
    resume: 'प्रक्रिया फिर से शुरू करें',
    automatic: 'स्वचालित',
    custom: 'अनुकूलित',
    previewTip: 'पैराग्राफ पूर्वावलोकन एम्बेडिंग पूरी होने के बाद उपलब्ध होगा',
    parentMaxTokens: 'जनक',
    pause: 'रुकना',
    hierarchical: 'माता-पिता का बच्चा',
    childMaxTokens: 'बच्चा',
  },
  segment: {
    paragraphs: 'पैराग्राफ',
    keywords: 'कीवर्ड',
    addKeyWord: 'कीवर्ड जोड़ें',
    keywordError: 'कीवर्ड की अधिकतम लंबाई 20 अक्षर हो सकती है',
    characters: 'अक्षर',
    hitCount: 'पुनर्प्राप्ति गणना',
    vectorHash: 'वेक्टर हैश: ',
    questionPlaceholder: 'यहाँ प्रश्न जोड़ें',
    questionEmpty: 'प्रश्न खाली नहीं हो सकता',
    answerPlaceholder: 'यहाँ उत्तर जोड़ें',
    answerEmpty: 'उत्तर खाली नहीं हो सकता',
    contentPlaceholder: 'यहाँ सामग्री जोड़ें',
    contentEmpty: 'सामग्री खाली नहीं हो सकती',
    newTextSegment: 'नया पाठ खंड',
    newQaSegment: 'नया Q&A खंड',
    delete: 'इस खंड को हटाएँ ?',
    parentChunks_other: 'जनक चंक्स',
    childChunks_one: 'चाइल्ड चंक',
    searchResults_other: 'परिणाम',
    parentChunks_one: 'जनक चंक',
    searchResults_one: 'परिणाम',
    addChildChunk: 'Child chunk जोड़ें',
    childChunks_other: 'बच्चे के टुकड़े',
    collapseChunks: 'चंक्स संक्षिप्त करें',
    characters_one: 'अक्षर',
    childChunkAdded: '1 चाइल्ड चंक जोड़ा गया',
    chunks_other: 'हिस्सा',
    addAnother: 'एक और जोड़ें',
    newChunk: 'नया हिस्सा',
    searchResults_zero: 'परिणाम',
    chunk: 'हिस्सा',
    addChunk: 'चंक जोड़ें',
    editChildChunk: 'संपादित करें बाल चंक',
    editedAt: 'पर संपादित',
    childChunk: 'चाइल्ड-चंक',
    parentChunk: 'माता-पिता-चंक',
    empty: 'कोई हिस्सा नहीं मिला',
    editChunk: 'चंक संपादित करें',
    characters_other: 'वर्ण',
    regeneratingMessage: 'इसमें कुछ समय लग सकता है, कृपया प्रतीक्षा करें...',
    regenerationConfirmTitle: 'क्या आप बच्चे के टुकड़ों को पुन: उत्पन्न करना चाहते हैं?',
    regeneratingTitle: 'बच्चे के टुकड़ों को पुनर्जीवित करना',
    chunks_one: 'हिस्सा',
    edited: 'संपादित',
    editParentChunk: 'पेरेंट चंक संपादित करें',
    newChildChunk: 'न्यू चाइल्ड चंक',
    clearFilter: 'फ़िल्टर साफ़ करें',
    regenerationSuccessMessage: 'आप इस विंडो को बंद कर सकते हैं।',
    expandChunks: 'विखंडू का विस्तार करें',
    regenerationSuccessTitle: 'पुनर्जनन पूरा हुआ',
    chunkAdded: '1 हिस्सा जोड़ा गया',
    chunkDetail: 'चंक विवरण',
    regenerationConfirmMessage: 'चाइल्ड चंक्स को रीजनरेट करने से वर्तमान चाइल्ड चंक्स ओवरराइट हो जाएंगे, जिसमें संपादित चंक्स और नए जोड़े गए चंक्स शामिल हैं। पुनरुत्थान को पूर्ववत नहीं किया जा सकता है।',
  },
}

export default translation