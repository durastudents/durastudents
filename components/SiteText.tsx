"use client";

import { useSiteLanguage } from "@/components/SiteLanguageProvider";

const nepali: Record<string, string> = {
  "Skip to main content": "मुख्य सामग्रीमा जानुहोस्",
  About: "परिचय",
  Programs: "कार्यक्रमहरू",
  Heritage: "सम्पदा",
  Gallery: "तस्बिर सङ्ग्रह",
  Language: "भाषा",
  Resources: "स्रोत सामग्री",
  News: "समाचार",
  Contact: "सम्पर्क",
  Donate: "सहयोग गर्नुहोस्",
  Menu: "मेनु",
  Explore: "अन्वेषण",
  Connect: "सम्पर्क",
  "Digital Heritage": "डिजिटल सम्पदा",
  "Dura Language": "दुरा भाषा",
  "Support our work": "हाम्रो कामलाई सहयोग गर्नुहोस्",
  "Help run classes, document stories and publish resources.": "कक्षा सञ्चालन, कथा अभिलेख र स्रोत सामग्री प्रकाशनमा सहयोग गर्नुहोस्।",
  "Dura Students Society · Gallery": "दुरा विद्यार्थी समाज · तस्बिर सङ्ग्रह",
  Impact: "प्रभाव",
  "What the Society has achieved.": "समाजले हासिल गरेका उपलब्धि।",
  "News & stories": "समाचार तथा कथाहरू",
  "Updates from the community.": "समुदायका अद्यावधिकहरू।",
  "Announcements, event reports, and stories about Dura people, language, and heritage.":
    "दुरा व्यक्ति, भाषा र सम्पदासम्बन्धी सूचना, कार्यक्रम प्रतिवेदन तथा कथाहरू।",
  "Resources & publications": "स्रोत सामग्री तथा प्रकाशन",
  "Documents and learning materials.": "दस्तावेज तथा सिकाइ सामग्री।",
  "Find approved Society documents, reports and publications. Dura language books and learning materials are available in the Dura Lopa collection.":
    "स्वीकृत समाजका दस्तावेज, प्रतिवेदन र प्रकाशन खोज्नुहोस्। दुरा भाषाका पुस्तक तथा सिकाइ सामग्री दुरा लोपा सङ्ग्रहमा उपलब्ध छन्।",
  "Heritage · People": "सम्पदा · व्यक्तिहरू",
  "Voices of Dura.": "दुराका आवाजहरू।",
  "Honoring those who shaped our path, including ordinary people who preserved extraordinary knowledge.":
    "हाम्रो मार्ग निर्माण गर्ने व्यक्तिहरूको सम्मान गर्दै, असाधारण ज्ञान जोगाउने साधारण मानिसहरू समेत।",
  "Heritage · Places": "सम्पदा · स्थानहरू",
  "Mapping Dura residences across the globe.": "विश्वभरका दुरा बसोबास क्षेत्रको नक्साङ्कन।",
  "Where Dura communities live in Nepal and abroad. Each place will grow to carry its Dura name, meaning, stories, photographs and sources.":
    "नेपाल तथा विदेशमा दुरा समुदाय बसोबास गर्ने स्थानहरू। प्रत्येक स्थानसँग दुरा नाम, अर्थ, कथा, तस्बिर र स्रोत थपिँदै जानेछन्।",
  "Heritage · Organizations": "सम्पदा · संस्थाहरू",
  "Key organizations of the Dura community.": "दुरा समुदायका प्रमुख संस्थाहरू।",
  "Heritage · Statistics": "सम्पदा · तथ्याङ्क",
  "The Dura community in numbers.": "तथ्याङ्कमा दुरा समुदाय।",
  "Population, sub-castes, native speakers, residences, organizations and districts.":
    "जनसङ्ख्या, उपजाति, मातृभाषी वक्ता, बसोबास, संस्था र जिल्ला।",
  "Heritage · Archive": "सम्पदा · अभिलेख",
  "Digital archive.": "डिजिटल अभिलेख।",
  "Photographs, audio, video and documents, each with a unique identifier and full metadata.":
    "प्रत्येकमा अद्वितीय पहिचान सङ्केत र पूर्ण मेटाडाटासहितका तस्बिर, श्रव्य सामग्री, भिडियो र दस्तावेज।",
  "Heritage · Policy": "सम्पदा · नीति",
  "Rights, consent and access.": "अधिकार, सहमति र पहुँच।",
  "The archive belongs to the Dura community. These are the principles we follow when we collect, label and share heritage material.":
    "यो अभिलेख दुरा समुदायको हो। सम्पदा सामग्री सङ्कलन, वर्गीकरण र साझेदारी गर्दा हामी यी सिद्धान्त पालना गर्छौँ।",
  "Dura Lopa · Dictionary": "दुरा लोपा · शब्दकोश",
  "Dura Lopa · Sentences": "दुरा लोपा · वाक्यहरू",
  "Dura Lopa · Resources": "दुरा लोपा · स्रोत सामग्री",
  "Dura Lopa · Timelines": "दुरा लोपा · समयरेखा",
  "Dura language resources": "दुरा भाषा स्रोत सामग्री",
  "Dura Lopa": "दुरा लोपा",
  "Care, consent & context": "हेरचाह, सहमति तथा सन्दर्भ",
  "Discover the heritage we carry together.": "हामीले सँगै बोकेको सम्पदा अन्वेषण गर्नुहोस्।",
  "Explore Dura people, places, organizations and community records—documented with care for the knowledge, context and rights of the Dura community.":
    "दुरा व्यक्ति, स्थान, संस्था र सामुदायिक अभिलेख अन्वेषण गर्नुहोस्—दुरा समुदायको ज्ञान, सन्दर्भ र अधिकारको ख्याल गर्दै अभिलेख गरिएका।",
  "Explore collections": "सङ्ग्रहहरू अन्वेषण गर्नुहोस्",
  "The digital archive is in its foundation phase; no items are published yet.":
    "डिजिटल अभिलेख आधार निर्माणको चरणमा छ; हाल कुनै सामग्री प्रकाशित गरिएको छैन।",
  "Explore the project": "परियोजना अन्वेषण गर्नुहोस्",
  "Heritage is connected to people and place.": "सम्पदा मानिस र स्थानसँग जोडिएको हुन्छ।",
  "Choose a collection to learn what is documented and how each part of Dura heritage is being brought together.":
    "के अभिलेख गरिएको छ र दुरा सम्पदाका विभिन्न पक्ष कसरी एकत्रित हुँदैछन् भन्ने जान्न सङ्ग्रह छान्नुहोस्।",
  Organizations: "संस्थाहरू",
  "Discover notable figures and community members who carry Dura stories and knowledge.":
    "दुराका कथा र ज्ञान बोकेका उल्लेखनीय व्यक्ति तथा समुदायका सदस्यहरूलाई चिन्नुहोस्।",
  "Explore Dura places, residences and the connections that shape them.":
    "दुरा स्थान, बसोबास र तिनलाई आकार दिने सम्बन्धहरू अन्वेषण गर्नुहोस्।",
  "Meet Dura Sewa Samaj, Dura Mahila Samaj and Dura Students Society.":
    "दुरा सेवा समाज, दुरा महिला समाज र दुरा विद्यार्थी समाजलाई चिन्नुहोस्।",
  "See information about population, sub-castes, speakers and districts.":
    "जनसङ्ख्या, उपजाति, वक्ता र जिल्लासम्बन्धी जानकारी हेर्नुहोस्।",
  "Learn about the collection of photographs, audio, video and documents.":
    "तस्बिर, श्रव्य सामग्री, भिडियो र दस्तावेजको सङ्ग्रहबारे जान्नुहोस्।",
  "Related learning": "सम्बन्धित सिकाइ",
  "Browse the dictionary, example sentences and language learning resources.":
    "शब्दकोश, उदाहरण वाक्य र भाषा सिकाइ स्रोत सामग्री हेर्नुहोस्।",
  "Explore the language": "भाषा अन्वेषण गर्नुहोस्",
  "Sharing heritage responsibly.": "जिम्मेवारीपूर्वक सम्पदा साझा गर्दै।",
  "Not everything should be public, and not every account is an independently verified fact. These proposed labels help explain access and context.":
    "सबै कुरा सार्वजनिक हुनुपर्छ भन्ने छैन र सबै विवरण स्वतन्त्र रूपमा प्रमाणित तथ्य पनि हुँदैनन्। यी प्रस्तावित वर्गले पहुँच र सन्दर्भ बुझाउन सहयोग गर्छन्।",
  "Who can view heritage material.": "कसले सम्पदा सामग्री हेर्न सक्छ।",
  Proposed: "प्रस्तावित",
  Public: "सार्वजनिक",
  "Anyone can access.": "जो कोहीले पहुँच पाउन सक्छ।",
  Community: "समुदाय",
  "Registered community members.": "दर्ता भएका समुदायका सदस्यहरू।",
  Restricted: "सीमित",
  "Requires permission.": "अनुमति आवश्यक छ।",
  Archival: "अभिलेखीय",
  "Preserved but not publicly displayed.": "संरक्षण गरिन्छ तर सार्वजनिक रूपमा देखाइँदैन।",
  Verified: "प्रमाणित",
  "Supported by reliable sources or multiple independent records.":
    "विश्वसनीय स्रोत वा धेरै स्वतन्त्र अभिलेखबाट समर्थित।",
  "Community Account": "सामुदायिक विवरण",
  "A documented oral or community narrative, not independently verified.":
    "अभिलेख गरिएको मौखिक वा सामुदायिक कथन, स्वतन्त्र रूपमा प्रमाणित नभएको।",
  "Research Interpretation": "अनुसन्धान व्याख्या",
  "An interpretation made by researchers.": "अनुसन्धानकर्ताले गरेको व्याख्या।",
  Unknown: "अज्ञात",
  "Needs further investigation.": "थप अनुसन्धान आवश्यक छ।",
  "Policy status:": "नीतिको अवस्था:",
  "the Rights, Consent and Access policy is a draft pending committee and cultural reviewer approval.":
    "अधिकार, सहमति र पहुँचसम्बन्धी नीति समिति तथा सांस्कृतिक समीक्षकको स्वीकृतिको प्रतीक्षामा रहेको मस्यौदा हो।",
  "Read the draft policy": "नीतिको मस्यौदा पढ्नुहोस्",
  "Every item gets an ID such as DHP-PHO-00001.": "प्रत्येक सामग्रीलाई DHP-PHO-00001 जस्तो पहिचान सङ्केत दिइन्छ।",
  "Identifier scheme": "पहिचान सङ्केत प्रणाली",
  Photograph: "तस्बिर",
  Audio: "श्रव्य सामग्री",
  Video: "भिडियो",
  Document: "दस्तावेज",
  Person: "व्यक्ति",
  Artifact: "कलाकृति",
  "Intangible Heritage": "अमूर्त सम्पदा",
  "Open": "खोल्नुहोस्",
  Credit: "श्रेय",
  "Learn Dura Lopa with the alphabet, dictionary, vocabulary, verbs, sentences and audio.":
    "वर्णमाला, शब्दकोश, शब्दभण्डार, क्रियापद, वाक्य र श्रव्य सामग्रीबाट दुरा लोपा सिक्नुहोस्।",
  "Get it on Google Play": "Google Play बाट प्राप्त गर्नुहोस्",
  "Download on the App Store": "App Store बाट डाउनलोड गर्नुहोस्",
  "Language code (ISO 639-3):": "भाषा कोड (ISO 639-3):",
  "Language carries memory, identity and relationships. Dura Lopa connects learning the Dura language with the wider story of Dura heritage.":
    "भाषाले स्मृति, पहिचान र सम्बन्ध बोकेको हुन्छ। दुरा लोपा दुरा भाषा सिकाइलाई दुरा सम्पदाको बृहत् कथासँग जोड्छ।",
  "View PDF": "PDF हेर्नुहोस्",
  "Materials and descriptions are reproduced from Dura Lopa project sources. Publication credits are included in the original documents.":
    "सामग्री र विवरण दुरा लोपा परियोजनाका स्रोतबाट पुनःप्रकाशित गरिएका हुन्। प्रकाशन श्रेय मूल दस्तावेजमा समावेश छ।",
  "Source: Dura Lopa project timeline records, reproduced in Nepali from the source data.":
    "स्रोत: दुरा लोपा परियोजनाका समयरेखा अभिलेख, स्रोत तथ्याङ्कबाट नेपालीमा पुनःप्रस्तुत।",
  "Dura and Nepali sentences.": "दुरा र नेपाली वाक्यहरू।",
  "Dura language dictionary.": "दुरा भाषाको शब्दकोश।",
  "Dura Language Learning Resources": "दुरा भाषा सिकाइ स्रोत सामग्री",
  "Search a word or meaning": "शब्द वा अर्थ खोज्नुहोस्",
  "Search in Dura or Nepali": "दुरा वा नेपालीमा खोज्नुहोस्",
  "Type a word or phrase": "शब्द वा वाक्यांश लेख्नुहोस्",
  sentences: "वाक्यहरू",
  "No sentences match your search.": "तपाईंको खोजीसँग मिल्ने वाक्य भेटिएन।",
  "Language classes": "भाषा कक्षा",
  "Language campaigns": "भाषा अभियान",
  "Books and research": "पुस्तक तथा अनुसन्धान",
  "The Dura Students Society site is being updated.": "दुरा विद्यार्थी समाजको वेबसाइट अद्यावधिक हुँदैछ।",
  "Dura language and heritage, carried forward together.": "दुरा भाषा र सम्पदालाई सँगै अगाडि बढाउँदै।",
  "Language classes, campaigns, publications and research.": "भाषा कक्षा, अभियान, प्रकाशन र अनुसन्धान।",
  "Read or download Dura language publications and learning materials.":
    "दुरा भाषा प्रकाशन र सिकाइ सामग्री पढ्नुहोस् वा डाउनलोड गर्नुहोस्।",
  "A language is more than words.": "भाषा शब्दभन्दा बढी हो।",
  "Search the site": "वेबसाइटमा खोज्नुहोस्",
  "All": "सबै",
  places: "स्थानहरू",
  "Lamjung Dura Danda": "लमजुङ दुरा डाँडा",
  "The ancestral homeland of the Dura people, in Lamjung district.":
    "लमजुङ जिल्लामा रहेको दुरा समुदायको पुर्ख्यौली थलो।",
  "Kathmandu Residence": "काठमाडौं बसोबास",
  "Many Dura families have settled in the capital for education and employment.":
    "धेरै दुरा परिवार शिक्षा र रोजगारीका लागि राजधानीमा बसोबास गरेका छन्।",
  "Pokhara Community": "पोखरा समुदाय",
  "A community of Dura people living in Pokhara.": "पोखरामा बसोबास गर्ने दुरा समुदाय।",
  "Chitwan Settlement": "चितवन बसोबास",
  "Dura settlements in Chitwan district.": "चितवन जिल्लाका दुरा बस्तीहरू।",
  "UK Diaspora": "बेलायतमा रहेका दुरा समुदाय",
  "Dura people living and working in the United Kingdom.":
    "संयुक्त अधिराज्यमा बसोबास र काम गर्ने दुरा समुदायका मानिसहरू।",
  "USA Community": "अमेरिकाको समुदाय",
  "Dura families living in the United States.": "संयुक्त राज्य अमेरिकामा बसोबास गर्ने दुरा परिवारहरू।",
  "The list next to the map has the same places and works with the keyboard: choose a place to centre the map on it and open its details.":
    "नक्सासँगैको सूचीमा उही स्थानहरू छन् र किबोर्डबाट प्रयोग गर्न सकिन्छ: नक्सालाई केन्द्रित गरी विवरण खोल्न स्थान छान्नुहोस्।",
  "Map of Dura places": "दुरा स्थानहरूको नक्सा",
  "Places list": "स्थानहरूको सूची",
  "Filter places": "स्थानहरू छान्नुहोस्",
  "Place names (गाउँको नाम), Dura names and meanings will be added as they are documented.":
    "स्थानका नाम (गाउँको नाम), दुरा नाम र अर्थ अभिलेख तयार हुँदै जाँदा थपिनेछन्।",
  "Total people": "कुल जनसङ्ख्या",
  "Sub-castes": "उपजाति",
  "Native speakers": "मातृभाषी वक्ता",
  "Residences (place names)": "बसोबास (स्थानका नाम)",
  "Districts": "जिल्लाहरू",
  "These figures come from the Dura Peto project data. Their source and year have not been recorded yet, so please treat them as provisional until each is cited. Note also that “5 organizations” is counted here, while three organizations are listed on the":
    "यी तथ्याङ्क दुरा पेटो परियोजनाको तथ्याङ्कबाट लिइएका हुन्। स्रोत र वर्ष अभिलेख नभएकाले उद्धृत नभएसम्म अस्थायी मान्नुहोस्। यहाँ “५ संस्था” गणना गरिएको छ, तर संस्था पृष्ठमा तीन संस्था सूचीबद्ध छन्:",
  "Dura Lopa learning resources are available online": "दुरा लोपा सिकाइ सामग्री अनलाइन उपलब्ध",
  "The Dura Lopa learning page brings together alphabet lessons, a Dura–Nepali–English dictionary, vocabulary, verbs, sentences with native audio, and an audio book. Learners can explore these resources online and connect language learning with Dura heritage.":
    "दुरा लोपा सिकाइ पृष्ठमा वर्णमाला पाठ, दुरा–नेपाली–अंग्रेजी शब्दकोश, शब्दभण्डार, क्रियापद, मातृभाषीको आवाजसहितका वाक्य र श्रव्य पुस्तक समेटिएका छन्। सिक्नेहरूले यी सामग्री अनलाइन अन्वेषण गरी भाषा सिकाइलाई दुरा सम्पदासँग जोड्न सक्छन्।",
  "Dura Digital Heritage Project": "दुरा डिजिटल सम्पदा परियोजना",
  Nepal: "नेपाल",
  "Our focus": "हाम्रो प्राथमिकता",
  Main: "मुख्य",
  "Footer: explore": "तलको भाग: अन्वेषण",
  "Footer: connect": "तलको भाग: सम्पर्क",
  "Dura Sewa Samaj Building, Kathmandu, Nepal": "दुरा सेवा समाज भवन, काठमाडौं, नेपाल",
  "Based in": "अवस्थित",
  "Programs and general questions": "कार्यक्रम तथा सामान्य जिज्ञासा",
  "Ask about the Society, upcoming activities, events or community initiatives.":
    "समाज, आगामी गतिविधि, कार्यक्रम वा सामुदायिक पहलका बारेमा सोध्नुहोस्।",
  "Volunteering and collaboration": "स्वयंसेवा तथा सहकार्य",
  "Tell us about your skills, interest in volunteering or a possible collaboration.":
    "आफ्नो सीप, स्वयंसेवामा रुचि वा सम्भावित सहकार्यबारे जानकारी दिनुहोस्।",
  "Share feedback, corrections or suggestions about Dura Lopa learning materials.":
    "दुरा लोपा सिकाइ सामग्रीबारे प्रतिक्रिया, सुधार वा सुझाव दिनुहोस्।",
  "Suggest a story, place or person to document, or request a correction or removal.":
    "अभिलेखका लागि कथा, स्थान वा व्यक्ति सुझाउनुहोस्, वा सुधार अथवा हटाउन अनुरोध गर्नुहोस्।",
  "Programs and general inquiry": "कार्यक्रम तथा सामान्य सोधपुछ",
  "Heritage contribution or correction": "सम्पदा योगदान वा सुधार",
  "Heritage item: removal or correction request": "सम्पदा सामग्री: हटाउन वा सच्याउन अनुरोध",
  "Informal founding led by Mahendra Dura, bringing together Dura students studying there.":
    "महेन्द्र दुराको नेतृत्वमा अनौपचारिक स्थापना भयो र त्यहाँ अध्ययनरत दुरा विद्यार्थीहरू एकत्रित भए।",
  "An initiative led by Ganesh Dura united Dura students living in Kathmandu. Top Raj Dura led the society's informal establishment at that time.":
    "गणेश दुराको पहलले काठमाडौंमा बसोबास गर्ने दुरा विद्यार्थीहरूलाई एकताबद्ध गर्‍यो। त्यस समयमा टप राज दुराले समाजको अनौपचारिक स्थापना नेतृत्व गर्नुभयो।",
  "Kosh Bahadur Dura led the Society's formal, legal establishment, following earlier efforts to organize Dura students nationwide under one organization.":
    "कोष बहादुर दुराले देशभरका दुरा विद्यार्थीलाई एउटै संस्थामा संगठित गर्ने पहिलेका प्रयासपछि समाजको औपचारिक कानुनी स्थापना नेतृत्व गर्नुभयो।",
  "Tenure 2083/84 BS (Bikram Sambat).": "कार्यकाल २०८३/८४ वि.सं.",
  "Tenure 2083/84 (Bikram Sambat).": "कार्यकाल २०८३/८४ (विक्रम संवत्)।",
  "Dura Students Society is a non-profit that supports the unity, education and development of Dura students and youth, a platform where students connect, grow and contribute to the Dura community.":
    "दुरा विद्यार्थी समाज दुरा विद्यार्थी तथा युवाको एकता, शिक्षा र विकासमा सहयोग गर्ने गैरनाफामूलक संस्था हो। यो विद्यार्थीहरू जोडिने, अघि बढ्ने र दुरा समुदायमा योगदान गर्ने साझा मञ्च हो।",
  "Dura Students Society is a non-profit supporting the unity, education and development of Dura students and youth in Nepal.":
    "दुरा विद्यार्थी समाज नेपालका दुरा विद्यार्थी तथा युवाको एकता, शिक्षा र विकासमा सहयोग गर्ने गैरनाफामूलक संस्था हो।",
  "Dura Students Society Central Office": "दुरा विद्यार्थी समाजको केन्द्रीय कार्यालय",
  "Located at the Dura Sewa Samaj Building, Kathmandu.": "काठमाडौंस्थित दुरा सेवा समाज भवनमा रहेको।",
  "Open in Google Maps →": "Google नक्सामा खोल्नुहोस् →",
  "Contact the Society": "समाजलाई सम्पर्क गर्नुहोस्",
  "Contact the Society to report an inaccessible file or request a correction.":
    "नखुल्ने फाइलबारे जानकारी दिन वा सच्याउन अनुरोध गर्न समाजलाई सम्पर्क गर्नुहोस्।",
  "The Society thanks the Dura community, its elders, and organizations including Dura Sewa Samaj and Dura Mahila Samaj for their support.":
    "दुरा सेवा समाज र दुरा महिला समाजलगायत दुरा समुदाय, अग्रजहरू तथा सहयोगी संस्थाप्रति समाज आभार व्यक्त गर्दछ।",
  "Member portraits are from the Society's archived website. Personal phone numbers shown on the original graphics are not included.":
    "सदस्यका तस्बिर समाजको पुरानो वेबसाइटबाट लिइएका हुन्। मूल ग्राफिक्समा देखिएका व्यक्तिगत फोन नम्बर यहाँ समावेश गरिएको छैन।",
  "The committee and governance of Dura Students Society.": "दुरा विद्यार्थी समाजको समिति तथा व्यवस्थापन।",
  "years of competition history": "वर्षको प्रतियोगिता इतिहास",
  "participating districts": "सहभागी जिल्ला",
  "participants over the years": "वर्षौँका सहभागी",
  "Held annually by Dura Students Society to promote knowledge, unity and healthy academic competition among Dura communities.":
    "दुरा समुदायमा ज्ञान, एकता र स्वस्थ शैक्षिक प्रतिस्पर्धा प्रवर्द्धन गर्न दुरा विद्यार्थी समाजले वार्षिक रूपमा आयोजना गर्छ।",
  "Shree Khaje Dura Smriti Inter-District Quiz Contest": "श्री खजे दुरा स्मृति अन्तर जिल्ला हाजिरीजवाफ प्रतियोगिता",
  "The archive is in the foundation phase. No items are published yet.":
    "अभिलेख आधार निर्माणको चरणमा छ। हाल कुनै सामग्री प्रकाशित गरिएको छैन।",
  "Rights, Consent and Access": "अधिकार, सहमति र पहुँच",
  "rights, consent and access": "अधिकार, सहमति र पहुँच",
  "About the heritage project": "सम्पदा परियोजनाबारे",
  "Dura Students Society · Programs": "दुरा विद्यार्थी समाज · कार्यक्रमहरू",
  "Ways we bring people together": "हामी मानिसहरूलाई जोड्ने तरिका",
  "Learning, culture and community": "सिकाइ, संस्कृति र समुदाय",
  "Have an idea or want to take part?": "कुनै विचार छ वा सहभागी हुन चाहनुहुन्छ?",
  "Get in touch with the Society to ask about programs and ways to contribute.":
    "कार्यक्रम र योगदान गर्ने तरिकाबारे सोध्न समाजलाई सम्पर्क गर्नुहोस्।",
  "Resources and publications": "स्रोत सामग्री तथा प्रकाशन",
  "Society and governance": "समाज तथा व्यवस्थापन",
  "Reports and publications": "प्रतिवेदन तथा प्रकाशन",
  "Programs and learning": "कार्यक्रम तथा सिकाइ",
  "Demo: Society constitution": "नमुना: समाजको विधान",
  "Example listing for an approved Society governance document.": "स्वीकृत समाज व्यवस्थापनसम्बन्धी दस्तावेजको नमुना सूची।",
  "Demo: Annual report": "नमुना: वार्षिक प्रतिवेदन",
  "Example listing for a Society report with publication details.": "प्रकाशन विवरणसहित समाजको प्रतिवेदनको नमुना सूची।",
  "Demo: Program guide": "नमुना: कार्यक्रम निर्देशिका",
  "Example listing for an approved guide or event resource.": "स्वीकृत निर्देशिका वा कार्यक्रम स्रोत सामग्रीको नमुना सूची।",
  "English (example)": "अंग्रेजी (उदाहरण)",
  "PDF (example)": "PDF (उदाहरण)",
  "Example only": "उदाहरण मात्र",
  "View ": "हेर्नुहोस् ",
  "Society documents and publications": "समाजका दस्तावेज तथा प्रकाशन",
  "Background sources": "पृष्ठभूमि स्रोतहरू",
  "Explore the heritage project": "सम्पदा परियोजना अन्वेषण गर्नुहोस्",
  "Explore Dura Lopa": "दुरा लोपा अन्वेषण गर्नुहोस्",
  "The Dura Digital Heritage Project describes a community-owned approach to documenting, preserving, organizing, and sharing Dura heritage. Its work is undertaken with the Dura community, centering community knowledge and participation.":
    "दुरा डिजिटल सम्पदा परियोजनाले दुरा सम्पदाको अभिलेखीकरण, संरक्षण, व्यवस्थापन र साझेदारीका लागि समुदायको स्वामित्वमा आधारित दृष्टिकोण अपनाउँछ। यसको काम दुरा समुदायसँगै गरिन्छ र सामुदायिक ज्ञान तथा सहभागितालाई केन्द्रमा राखिन्छ।",
  "Language learning connects with Dura heritage": "भाषा सिकाइ दुरा सम्पदासँग जोडिन्छ",
  "Dura Lopa connects language learning with the wider story of Dura heritage. Its online learning tools include vocabulary, example sentences with native audio, and a dictionary—resources learners can explore at their own pace.":
    "दुरा लोपा भाषा सिकाइलाई दुरा सम्पदाको बृहत् कथासँग जोड्छ। यसका अनलाइन सिकाइ सामग्रीमा शब्दभण्डार, मातृभाषीको आवाजसहितका उदाहरण वाक्य र शब्दकोश समावेश छन्—सिक्नेहरूले आफ्नो गतिमा यी स्रोत अन्वेषण गर्न सक्छन्।",
  "Visit the Dura Lopa page": "दुरा लोपा पृष्ठ हेर्नुहोस्",
  "Dura Students Society homepage and photo caption": "दुरा विद्यार्थी समाजको गृहपृष्ठ तथा तस्बिर क्याप्सन",
  "Published": "प्रकाशित",
  "Format": "ढाँचा",
  "File size": "फाइलको आकार",
  "Attribution": "श्रेय",
  "Demo only": "नमुना मात्र",
  "Sample listing only; no document is available.": "नमुना सूची मात्र; कुनै दस्तावेज उपलब्ध छैन।",
  "Need help with a resource?": "स्रोत सामग्रीमा सहयोग चाहिन्छ?",
  "Looking for Dura language books and learning materials?": "दुरा भाषाका पुस्तक तथा सिकाइ सामग्री खोज्दै हुनुहुन्छ?",
  "Browse the Dura Lopa collection": "दुरा लोपा सङ्ग्रह हेर्नुहोस्",
  "Search the site.": "वेबसाइटमा खोज्नुहोस्।",
  "Dura language, shared stories and community learning.": "दुरा भाषा, साझा कथा र सामुदायिक सिकाइ।",
  "Rights & Consent": "अधिकार तथा सहमति",
  Roots: "जरा",
  "Our identity. Our language. Our heritage.": "हाम्रो पहिचान। हाम्रो भाषा। हाम्रो सम्पदा।",
  "Back to top ↑": "माथि जानुहोस् ↑",
  "Switch to light mode": "उज्यालो मोडमा बदल्नुहोस्",
  "Switch to dark mode": "अँध्यारो मोडमा बदल्नुहोस्",
  "Dark mode": "अँध्यारो मोड",
  "Under construction / maintenance": "निर्माण तथा मर्मत हुँदै",
  "This page is being kept to show the proposed structure of the website. Its current content is sample or preliminary material, not a finished collection. Further research, review, and development are needed.":
    "यो पृष्ठ वेबसाइटको प्रस्तावित संरचना देखाउन राखिएको हो। हालको सामग्री नमुना वा प्रारम्भिक सामग्री हो, पूर्ण सङ्ग्रह होइन। थप अनुसन्धान, समीक्षा र विकास आवश्यक छ।",
  "Search is only available on the published site. Run npm run build and npm start to try it locally.":
    "खोज सुविधा प्रकाशित वेबसाइटमा मात्र उपलब्ध छ। स्थानीय रूपमा चलाउन npm run build र npm start चलाउनुहोस्।",
  "Explore the community archive": "समुदायको अभिलेख अन्वेषण गर्नुहोस्",
  "View in digital archive": "डिजिटल अभिलेखमा हेर्नुहोस्",
  Download: "डाउनलोड गर्नुहोस्",
  "Get in touch": "सम्पर्क गर्नुहोस्",
  "Learn Dura Lopa": "दुरा लोपा सिक्नुहोस्",
  "Visit the gallery": "तस्बिर सङ्ग्रह हेर्नुहोस्",
  Search: "खोज्नुहोस्",
  "No posts yet. Announcements and event reports will appear here. In the meantime, follow us on":
    "अहिले कुनै पोस्ट छैन। सूचना तथा कार्यक्रमका प्रतिवेदन यहाँ प्रकाशित हुनेछन्। त्यतिन्जेल हामीलाई यहाँ पछ्याउनुहोस्",
  "Rights, consent and access": "अधिकार, सहमति र पहुँच",
  "Dura Indigenous Community · Nepal": "दुरा आदिवासी समुदाय · नेपाल",
  "Explore Dura heritage": "दुरा सम्पदा अन्वेषण गर्नुहोस्",
  "Start here": "यहाँबाट सुरु गर्नुहोस्",
  "What brings you to Dura Students Society?": "तपाईंलाई दुरा विद्यार्थी समाजमा के कुराले ल्याएको हो?",
  "Explore the dictionary, example sentences, language resources and the Dura Lopa app.":
    "शब्दकोश, उदाहरण वाक्य, भाषा स्रोत सामग्री र दुरा लोपा एप अन्वेषण गर्नुहोस्।",
  "Start learning": "सिक्न सुरु गर्नुहोस्",
  "Explore community heritage": "समुदायको सम्पदा अन्वेषण गर्नुहोस्",
  "Find stories, people, places and community records in the Dura Digital Heritage Project.":
    "दुरा डिजिटल सम्पदा परियोजनामा कथा, व्यक्ति, स्थान र सामुदायिक अभिलेख खोज्नुहोस्।",
  "Browse heritage": "सम्पदा हेर्नुहोस्",
  Society: "समाज",
  "Meet Dura Students Society": "दुरा विद्यार्थी समाजलाई चिन्नुहोस्",
  "Learn about the Society, its history, programs and current central committee.":
    "समाज, यसको इतिहास, कार्यक्रम र हालको केन्द्रीय समितिबारे जान्नुहोस्।",
  "About the Society": "समाजबारे",
  "Knowledge is connected to people and place.": "ज्ञान मानिस र स्थानसँग जोडिएको हुन्छ।",
  "Explore community heritage through records of people, places and shared histories—cared for with attention to context, access and consent.":
    "व्यक्ति, स्थान र साझा इतिहासका अभिलेखमार्फत समुदायको सम्पदा अन्वेषण गर्नुहोस्—सन्दर्भ, पहुँच र सहमतिलाई ध्यानमा राख्दै।",
  People: "व्यक्तिहरू",
  "Community lives and stories": "समुदायका जीवन र कथाहरू",
  Places: "स्थानहरू",
  "Dura locations and connections": "दुरा स्थान र सम्बन्धहरू",
  Archive: "अभिलेख",
  "Photographs, audio and documents": "तस्बिर, श्रव्य सामग्री र दस्तावेज",
  "Photos & videos": "तस्बिर तथा भिडियो",
  "Community moments.": "समुदायका क्षणहरू।",
  "Meet the people and moments that bring Dura Students Society together.":
    "दुरा विद्यार्थी समाजलाई एकताबद्ध गर्ने व्यक्ति र क्षणहरूलाई चिन्नुहोस्।",
  "Approved community photos and videos will appear here as they are reviewed and added.":
    "समीक्षा गरी स्वीकृत सामुदायिक तस्बिर तथा भिडियो यहाँ थपिनेछन्।",
  "Take part": "सहभागी हुनुहोस्",
  "Help keep community knowledge connected.": "समुदायको ज्ञानलाई जोडिराख्न सहयोग गर्नुहोस्।",
  "Have a question, correction or material to share? Get in touch with the Society. Heritage contributions are handled with care for community context and consent.":
    "प्रश्न, सच्याउनुपर्ने कुरा वा साझा गर्ने सामग्री छ? समाजलाई सम्पर्क गर्नुहोस्। सम्पदा योगदानलाई सामुदायिक सन्दर्भ र सहमतिको ख्याल गर्दै हेरिन्छ।",
  "Rights & consent": "अधिकार तथा सहमति",
  "Connecting Dura youth with their heritage and future.": "दुरा युवालाई आफ्नो सम्पदा र भविष्यसँग जोड्दै।",
  "Unity & Support": "एकता तथा सहयोग",
  "We connect Dura students to foster teamwork, friendship and mutual support.":
    "टोलीकार्य, मित्रता र आपसी सहयोग बढाउन हामी दुरा विद्यार्थीहरूलाई जोड्छौँ।",
  "Youth Participation": "युवा सहभागिता",
  "We motivate Dura youth to take part in social, cultural and educational activities.":
    "दुरा युवालाई सामाजिक, सांस्कृतिक र शैक्षिक गतिविधिमा सहभागी हुन प्रोत्साहित गर्छौँ।",
  "Growth & Learning": "विकास तथा सिकाइ",
  "We promote education, awareness, leadership and personal growth.":
    "हामी शिक्षा, सचेतना, नेतृत्व र व्यक्तिगत विकासलाई प्रोत्साहन गर्छौँ।",
  "Our history": "हाम्रो इतिहास",
  "Dates are in Bikram Sambat (BS).": "मितिहरू विक्रम संवत् (वि.सं.) मा छन्।",
  "Community organizations": "सामुदायिक संस्था",
  "Organization logo not available": "संस्थाको लोगो उपलब्ध छैन",
  "Central Committee": "केन्द्रीय समिति",
  "The elected committee brings together Society leadership and members to support its work across the Dura community.":
    "निर्वाचित समितिले दुरा समुदायमा समाजको कामलाई सहयोग गर्न नेतृत्व तथा सदस्यहरूलाई एकत्रित गर्छ।",
  "Committee details →": "समिति विवरण →",
  "Executive committee": "कार्यसमिति",
  "Committee members": "समिति सदस्यहरू",
  "Let’s connect.": "सम्पर्क गरौँ।",
  "Have a question, want to get involved, or have knowledge to share? Dura students, elders, researchers, storytellers, language learners and volunteers are welcome.":
    "प्रश्न छ, सहभागी हुन चाहनुहुन्छ वा ज्ञान साझा गर्न चाहनुहुन्छ? दुरा विद्यार्थी, अग्रज, अनुसन्धानकर्ता, कथावाचक, भाषा सिक्ने व्यक्ति र स्वयंसेवकलाई स्वागत छ।",
  "Email the Society": "समाजलाई इमेल गर्नुहोस्",
  "Email is the best way to reach us. Choose a topic below to start a message with a helpful subject line.":
    "हामीलाई सम्पर्क गर्ने सबैभन्दा राम्रो माध्यम इमेल हो। उपयुक्त विषयसहित सन्देश सुरु गर्न तलको विषय छान्नुहोस्।",
  "Official email address to be added.": "आधिकारिक इमेल ठेगाना थप्न बाँकी छ।",
  "Follow Society updates on": "समाजका अद्यावधिकहरू यहाँ पछ्याउनुहोस्",
  "What would you like to discuss?": "तपाईं के विषयमा छलफल गर्न चाहनुहुन्छ?",
  "Email about this topic →": "यस विषयमा इमेल गर्नुहोस् →",
  "Email contact details to be added.": "सम्पर्क इमेल विवरण थप्न बाँकी छ।",
  "Looking for the current committee?": "हालको समिति खोज्दै हुनुहुन्छ?",
  "Meet the Central Committee on our Team & Governance page.": "हाम्रो टोली तथा व्यवस्थापन पृष्ठमा केन्द्रीय समितिलाई चिन्नुहोस्।",
  "Meet the committee →": "समितिलाई चिन्नुहोस् →",
  "Sharing heritage material": "सम्पदा सामग्री साझा गर्दै",
  "Before sharing photographs, recordings or stories, make sure you have permission to share them. Some cultural knowledge may be sensitive; please ask before sending it. Read our draft rights, consent and access guidance.":
    "तस्बिर, रेकर्डिङ वा कथा साझा गर्नुअघि अनुमति सुनिश्चित गर्नुहोस्। केही सांस्कृतिक ज्ञान संवेदनशील हुन सक्छ; पठाउनुअघि कृपया सोध्नुहोस्। अधिकार, सहमति र पहुँचसम्बन्धी हाम्रो मस्यौदा मार्गदर्शन पढ्नुहोस्।",
  "Stories in photographs and video, shared with care for the people, places, and knowledge they hold.":
    "मानिस, स्थान र ज्ञानप्रति संवेदनशीलता राख्दै साझा गरिएका तस्बिर तथा भिडियोका कथा।",
  "We are preparing the community gallery. Approved photographs and videos will appear here as they are reviewed and added.":
    "हामी सामुदायिक तस्बिर सङ्ग्रह तयार गर्दैछौँ। समीक्षा गरी स्वीकृत तस्बिर तथा भिडियो यहाँ थपिनेछन्।",
  "to ask about sharing a story.": "कथा साझा गर्नेबारे सोध्न।",
  "Each item includes its archive record and access information. See": "प्रत्येक सामग्रीसँग यसको अभिलेख र पहुँचसम्बन्धी जानकारी समावेश छ। हेर्नुहोस्",
  "Contact Dura Students Society to request a correction, restriction, or removal.":
    "सच्याउन, पहुँच सीमित गर्न वा हटाउन अनुरोध गर्न दुरा विद्यार्थी समाजलाई सम्पर्क गर्नुहोस्।",
  "Photographs and videos that share moments, people, and connections from Dura Students Society.":
    "दुरा विद्यार्थी समाजका क्षण, व्यक्ति र सम्बन्ध साझा गर्ने तस्बिर तथा भिडियो।",
  "Search every page of the Dura Students Society and Dura Digital Heritage site.":
    "दुरा विद्यार्थी समाज तथा दुरा डिजिटल सम्पदा वेबसाइटका सबै पृष्ठ खोज्नुहोस्।",
  "This collection is being prepared.": "यो सङ्ग्रह तयार हुँदैछ।",
  "Every person appears here only with their real name and role, the consent of the person or their family, and a verification status. We would rather open with a few well-documented people than many unverified ones.":
    "प्रत्येक व्यक्तिको वास्तविक नाम र भूमिका, व्यक्ति वा परिवारको सहमति तथा प्रमाणीकरण अवस्थासहित मात्र यहाँ समावेश गरिन्छ। अप्रमाणित धेरै व्यक्तिभन्दा राम्ररी अभिलेख गरिएका केही व्यक्तिबाट सुरु गर्नु उपयुक्त ठान्छौँ।",
  "Nominate a person": "व्यक्ति मनोनयन गर्नुहोस्",
  "How we handle consent and access:": "सहमति र पहुँचलाई हामी कसरी व्यवस्थापन गर्छौँ:",
  "Draft pending committee review.": "समिति समीक्षाको प्रतीक्षामा रहेको मस्यौदा।",
  Draft: "मस्यौदा",
  "This policy has not yet been reviewed or adopted by the committee and cultural reviewers. Until it is, treat it as the working proposal, and nothing is published without the consent steps below.":
    "यो नीतिको समितिले र सांस्कृतिक समीक्षकहरूले समीक्षा वा स्वीकृति गरेका छैनन्। स्वीकृति नभएसम्म यसलाई कार्य प्रस्तावका रूपमा लिनुहोस्; तलका सहमति प्रक्रिया पूरा नगरी कुनै सामग्री प्रकाशित गरिँदैन।",
  "Ownership and consent": "स्वामित्व र सहमति",
  "The project is built with the Dura community, not only about it.": "यो परियोजना दुरा समुदायसँग मिलेर बनाइएको हो, समुदायबारे मात्र होइन।",
  "People who give us photographs, recordings, documents or stories remain credited as the source. We record who gave each item and under what terms.":
    "तस्बिर, रेकर्डिङ, दस्तावेज वा कथा उपलब्ध गराउने व्यक्तिलाई स्रोतका रूपमा श्रेय दिइन्छ। प्रत्येक सामग्री कसले र कुन सर्तमा दिएको हो भन्ने अभिलेख राखिन्छ।",
  "Nothing is published without the contributor's consent. For a person featured in the archive, we need their consent, or their family's if they have passed away.":
    "योगदानकर्ताको सहमतिबिना केही पनि प्रकाशित गरिँदैन। अभिलेखमा समावेश व्यक्तिको सहमति आवश्यक हुन्छ; उहाँ बितिसक्नुभएको भए परिवारको सहमति चाहिन्छ।",
  "Consent records are kept by the project team and are not published on this site.":
    "सहमति अभिलेख परियोजना टोलीले राख्छ र यस वेबसाइटमा प्रकाशित गर्दैन।",
  "Sacred and sensitive knowledge": "पवित्र तथा संवेदनशील ज्ञान",
  "Not everything recorded should be public.": "अभिलेख गरिएका सबै कुरा सार्वजनिक हुनुपर्छ भन्ने छैन।",
  "Cultural reviewers and elders decide whether ritual, ceremonial or otherwise community-sensitive material is shown openly, limited, or kept in the archive only.":
    "अनुष्ठान, समारोह वा समुदायका लागि संवेदनशील सामग्री खुला रूपमा देखाउने, सीमित गर्ने वा अभिलेखमा मात्र राख्ने निर्णय सांस्कृतिक समीक्षक र अग्रजहरूले गर्छन्।",
  "Where a community member asks us to restrict or withdraw something, we restrict it first and then discuss.":
    "समुदायका कुनै सदस्यले सामग्री सीमित वा हटाउन अनुरोध गरेमा पहिले पहुँच सीमित गरेर त्यसपछि छलफल गर्छौँ।",
  "Access levels": "पहुँचका तहहरू",
  "Every archive item is assigned one level. The default for anything unclear is the more restrictive one.":
    "अभिलेखका प्रत्येक सामग्रीलाई एउटा तह दिइन्छ। अस्पष्ट अवस्थाका लागि बढी प्रतिबन्धात्मक तहलाई पूर्वनिर्धारित मानिन्छ।",
  "Verification labels": "प्रमाणीकरणका वर्ग",
  "Not everything recorded is treated as historical fact. Each claim carries one label so readers can judge it for themselves.":
    "अभिलेख गरिएका सबै कुरालाई ऐतिहासिक तथ्य मानिँदैन। पाठकले आफैँ मूल्याङ्कन गर्न सकून् भनेर प्रत्येक दाबीलाई एउटा वर्ग दिइन्छ।",
  Reuse: "पुनःप्रयोग",
  "Proposed default: material may be viewed freely at the Public level. Copying, republishing or commercial use needs written permission from the Society and, where relevant, the contributor. Individual items will state their own terms once the archive opens.":
    "प्रस्तावित पूर्वनिर्धारित व्यवस्था: सार्वजनिक तहका सामग्री निःशुल्क हेर्न सकिन्छ। प्रतिलिपि, पुनःप्रकाशन वा व्यावसायिक प्रयोगका लागि समाज र आवश्यक परे योगदानकर्ताको लिखित अनुमति चाहिन्छ। अभिलेख खुलेपछि प्रत्येक सामग्रीमा त्यसका सर्त उल्लेख गरिनेछ।",
  "Corrections and removal": "सच्याउने तथा हटाउने",
  "If you see a mistake, or you or your family want something changed, restricted or taken down, tell us and quote the item's identifier (for example DHP-PHO-00001).":
    "गल्ती देखिएमा, वा तपाईं वा तपाईंको परिवारले कुनै सामग्री परिवर्तन, सीमित वा हटाउन चाहेमा, सामग्रीको पहिचान सङ्केत (जस्तै DHP-PHO-00001) सहित हामीलाई जानकारी दिनुहोस्।",
  "Send a request": "अनुरोध पठाउनुहोस्",
  "Contact address to be added.": "सम्पर्क ठेगाना थप्न बाँकी छ।",
  "Back to the archive": "अभिलेखमा फर्कनुहोस्",
  Identifier: "पहिचान सङ्केत",
  Type: "प्रकार",
  Date: "मिति",
  Place: "स्थान",
  "Contributor": "योगदानकर्ता",
  Source: "स्रोत",
  Rights: "अधिकार",
  Access: "पहुँच",
  Verification: "प्रमाणीकरण",
  "Open (PDF)": "खोल्नुहोस् (PDF)",
  "We learn by doing it together.": "सँगै गरेर हामी सिक्छौँ।",
  "Language, shared stories, community gatherings and learning resources give Dura students and families ways to carry knowledge forward.":
    "भाषा, साझा कथा, सामुदायिक भेला र सिकाइ सामग्रीले दुरा विद्यार्थी तथा परिवारलाई ज्ञानलाई अगाडि बढाउने बाटो दिन्छ।",
  "Explore our programs": "हाम्रा कार्यक्रम अन्वेषण गर्नुहोस्",
  "Dura Students Society gathering · Handikhola, Lamjung · 2082 BS": "दुरा विद्यार्थी समाजको भेला · हाँडीखोला, लमजुङ · वि.सं. २०८२",
  Program: "कार्यक्रम",
  "Donate in Nepal": "नेपालभित्र सहयोग गर्नुहोस्",
  "Bank transfer, eSewa and Khalti details will appear here.": "बैंक, eSewa र Khalti मार्फत सहयोग गर्ने विवरण यहाँ राखिनेछ।",
  International: "अन्तर्राष्ट्रिय",
  "Bank transfer details for international donors will appear here.": "अन्तर्राष्ट्रिय सहयोगकर्ताका लागि बैंक विवरण यहाँ राखिनेछ।",
  "Real payment details must be added by the Society treasurer. The earlier site showed a sample account number, which was deliberately not copied.":
    "समाजका कोषाध्यक्षले वास्तविक भुक्तानी विवरण थप्नुपर्छ। पुरानो वेबसाइटमा नमुना खाता नम्बर थियो, जुन जानाजानी प्रतिलिपि गरिएको छैन।",
  "Books and learning materials.": "पुस्तक तथा सिकाइ सामग्री।",
  "Language work through time.": "समयसँगै भाषासम्बन्धी काम।",
  "The app": "एप",
  "App screenshots": "एपका स्क्रिनसट",
  "What you can learn": "तपाईंले के सिक्न सक्नुहुन्छ",
  Contributors: "योगदानकर्ताहरू",
  "The people who made Dura Lopa possible, supported by Dura Students Society.":
    "दुरा विद्यार्थी समाजको सहयोगमा दुरा लोपा सम्भव बनाउने व्यक्तिहरू।",
  "Team & governance": "टोली तथा व्यवस्थापन",
  "Tenure": "कार्यकाल",
  "Dura · Search": "दुरा · खोज",
  "Dura dictionary": "दुरा शब्दकोश",
  "Search Dura, Nepali, English or pronunciation. Select a word to see its full entry.":
    "दुरा, नेपाली, अंग्रेजी वा उच्चारणबाट खोज्नुहोस्। पूरा विवरण हेर्न शब्द छान्नुहोस्।",
  "Search Dura, Nepali, English or IPA": "दुरा, नेपाली, अंग्रेजी वा IPA बाट खोज्नुहोस्",
  "Practice with sentences": "वाक्यबाट अभ्यास गर्नुहोस्",
  "Explore language timelines": "भाषा संरक्षणको समयरेखा हेर्नुहोस्",
  "Browse learning resources": "सिकाइ सामग्री हेर्नुहोस्",
  "No results": "कुनै नतिजा भेटिएन",
  "brings Dura students and youth together while supporting the language, culture and knowledge shared across generations.":
    "दुरा विद्यार्थी तथा युवालाई एकताबद्ध गर्दै पुस्तौँदेखि साझा हुँदै आएको भाषा, संस्कृति र ज्ञानको संरक्षणमा सहयोग गर्छ।",
  "Bikram Sambat": "विक्रम संवत्",
  "President": "अध्यक्ष",
  "Vice President": "उपाध्यक्ष",
  "General Secretary": "महासचिव",
  Secretary: "सचिव",
  Treasurer: "कोषाध्यक्ष",
  "Committee Member": "समिति सदस्य",
  "Designer / Developer": "डिजाइनर / विकासकर्ता",
  Developer: "विकासकर्ता",
  Vocal: "स्वर",
  Advisor: "सल्लाहकार",
  "Content Writer": "सामग्री लेखक",
  "Heritage contributions and corrections": "सम्पदा योगदान तथा सुधार",
  "Team & Governance": "टोली तथा व्यवस्थापन",
  "News and updates from Dura Students Society.": "दुरा विद्यार्थी समाजका समाचार तथा अद्यावधिकहरू।",
  "From the archive: Dura Students Society members in Handikhola": "अभिलेखबाट: हाँडीखोलामा दुरा विद्यार्थी समाजका सदस्यहरू",
  "A photograph in the Society's archive shows Dura Students Society members at the 32nd Anniversary of Dura Service Society in Handikhola, Lamjung. The image offers a glimpse of a community gathering; the original caption does not provide the event date or further program details.":
    "समाजको अभिलेखमा रहेको तस्बिरले लमजुङको हाँडीखोलामा दुरा सेवा समाजको ३२औँ वार्षिकोत्सवमा दुरा विद्यार्थी समाजका सदस्यहरूलाई देखाउँछ। तस्बिरले सामुदायिक भेलाको झलक दिन्छ; मूल क्याप्सनमा कार्यक्रम मिति वा थप विवरण छैन।",
  "A heritage project shaped with the community": "समुदायसँगै आकार लिएको सम्पदा परियोजना",
  Announcement: "सूचना",
  "Event report": "कार्यक्रम प्रतिवेदन",
  "Community story": "सामुदायिक कथा",
  "Language & heritage": "भाषा तथा सम्पदा",
  "Open the Dura dictionary": "दुरा शब्दकोश खोल्नुहोस्",
  "Dura Language · Dura Lopa": "दुरा भाषा · दुरा लोपा",
  "Search the Dura–Nepali–English dictionary with IPA and parts of speech.":
    "IPA र शब्दवर्गसहितको दुरा–नेपाली–अंग्रेजी शब्दकोश खोज्नुहोस्।",
  "Search bilingual Dura and Nepali example sentences for language learning.":
    "भाषा सिकाइका लागि दुरा र नेपालीका द्विभाषिक उदाहरण वाक्य खोज्नुहोस्।",
  "Dura language grammar, dictionary and Dura Lopa learning books.":
    "दुरा भाषा व्याकरण, शब्दकोश र दुरा लोपा सिकाइका पुस्तक।",
  "Search in either language.": "कुनै पनि भाषामा खोज्नुहोस्।",
  "Open Dura Lopa": "दुरा लोपा खोल्नुहोस्",
  "This is a searchable index of the published pages.": "यो प्रकाशित पृष्ठहरूको खोज्न मिल्ने सूची हो।",
  "Explore bilingual examples and search in either language.": "द्विभाषिक उदाहरण हेर्नुहोस् र दुवै भाषामा खोज्नुहोस्।",
  "Enter a word or phrase": "शब्द वा वाक्यांश लेख्नुहोस्",
  "Try again": "फेरि प्रयास गर्नुहोस्",
  "No words match your search.": "तपाईंको खोजीसँग मिल्ने शब्द भेटिएन।",
  "Select a word to see its details.": "विवरण हेर्न कुनै शब्द छान्नुहोस्।",
  "This word could not be found. Search the dictionary to continue.":
    "यो शब्द भेटिएन। जारी राख्न शब्दकोशमा खोज्नुहोस्।",
  "Show more": "थप देखाउनुहोस्",
  "Not recorded": "अभिलेख गरिएको छैन",
  "The dictionary could not be loaded.": "शब्दकोश लोड हुन सकेन।",
  "Loading the dictionary…": "शब्दकोश खुल्दैछ…",
  "matching words": "मिल्ने शब्द",
  "Explore bilingual sentences": "द्विभाषिक वाक्य अन्वेषण गर्नुहोस्",
  "Books and learning resources": "पुस्तक तथा सिकाइ सामग्री",
  "Language timelines": "भाषा समयरेखा",
  "Dura Places": "दुरा स्थानहरू",
  "Dura Organizations": "दुरा संस्थाहरू",
  "Dura People": "दुरा व्यक्तिहरू",
  "Dura Statistics": "दुरा तथ्याङ्क",
  "Statistics": "तथ्याङ्क",
  "Digital Archive": "डिजिटल अभिलेख",
  "Community Gallery": "सामुदायिक तस्बिर सङ्ग्रह",
  "Inter-District Quiz Contest": "अन्तर जिल्ला हाजिरीजवाफ प्रतियोगिता",
  "Inter-District Quiz Competition": "अन्तर जिल्ला हाजिरीजवाफ प्रतियोगिता",
  "Language Classes": "भाषा कक्षाहरू",
  Documentation: "अभिलेखीकरण",
  "Cultural Events": "सांस्कृतिक कार्यक्रमहरू",
  Publications: "प्रकाशनहरू",
  Alphabets: "वर्णमाला",
  Dictionary: "शब्दकोश",
  "Sentences with Audio": "अडियोसहितका वाक्यहरू",
  Vocabulary: "शब्दभण्डार",
  Verbs: "क्रियापदहरू",
  "Audio Book": "अडियो पुस्तक",
  "Dura History": "दुरा इतिहास",
  "Oral History": "मौखिक इतिहास",
  "Living Culture": "जीवित संस्कृति",
  Photographs: "तस्बिरहरू",
  "Audio & Video": "अडियो तथा भिडियो",
  "Learning sessions connect Dura youth and elders with teaching materials and the foundations of literacy. Continue learning with the Dura Lopa dictionary, sentences and audio.":
    "सिकाइ सत्रले दुरा युवा र अग्रजलाई शिक्षण सामग्री तथा साक्षरताका आधारसँग जोड्छ। दुरा लोपा शब्दकोश, वाक्य र श्रव्य सामग्रीबाट सिकाइ जारी राख्नुहोस्।",
  "Oral histories, songs and vocabulary become part of a community archive, recorded and shared with attention to context, consent and the people who hold this knowledge.":
    "मौखिक इतिहास, गीत र शब्दभण्डार सामुदायिक अभिलेखको हिस्सा बन्छन् र सन्दर्भ, सहमति तथा ज्ञानका धारकलाई ध्यान दिँदै अभिलेख र साझेदारी गरिन्छ।",
  "Explore digital heritage": "डिजिटल सम्पदा अन्वेषण गर्नुहोस्",
  "Festivals, performances, exhibitions and school outreach create occasions to gather and share Dura culture across generations.":
    "चाडपर्व, प्रस्तुति, प्रदर्शनी र विद्यालयसँगको पहुँचले पुस्तौँबीच दुरा संस्कृति साझा गर्ने अवसर सिर्जना गर्छ।",
  "See Society updates": "समाजका अद्यावधिक हेर्नुहोस्",
  "Books, primers and digital learning resources help learners explore the Dura language and community knowledge.":
    "पुस्तक, प्रारम्भिक पाठ्यपुस्तक र डिजिटल सिकाइ स्रोतले दुरा भाषा तथा सामुदायिक ज्ञान अन्वेषण गर्न सहयोग गर्छन्।",
  "Browse resources": "स्रोत सामग्री हेर्नुहोस्",
  "Students representing districts come together for the annual Shree Khaje Dura Smriti Inter-District Quiz Contest—a day for learning, teamwork and friendly competition.":
    "जिल्लाको प्रतिनिधित्व गर्ने विद्यार्थीहरू वार्षिक श्री खजे दुरा स्मृति अन्तर जिल्ला हाजिरीजवाफ प्रतियोगितामा भेला हुन्छन्—सिकाइ, टोलीकार्य र मैत्रीपूर्ण प्रतिस्पर्धाको दिन।",
  "Explore the quiz": "हाजिरीजवाफ प्रतियोगिता हेर्नुहोस्",
  "Champions through the years": "वर्षौँका विजेता",
  "Recorded wins in the years held; this does not show second or third place.":
    "आयोजना भएका वर्षका अभिलेखित जित; यसमा दोस्रो वा तेस्रो स्थान देखाइएको छैन।",
  "competitions held": "प्रतियोगिता सम्पन्न",
  win: "जित",
  wins: "जित",
  "recorded quiz wins": "अभिलेखित हाजिरीजवाफ जित",
  "Quiz competition history": "हाजिरीजवाफ प्रतियोगिताको इतिहास",
  "Competition not held": "प्रतियोगिता आयोजना भएन",
  "Annual Quiz Competition": "वार्षिक हाजिरीजवाफ प्रतियोगिता",
  Winner: "विजेता",
  "Participating teams": "सहभागी टोली",
  "Teams are listed in position order, as recorded in the source.":
    "स्रोतमा अभिलेख गरिएको स्थानक्रमअनुसार टोली सूचीबद्ध छन्।",
  "Participant names were not listed in the archived source.":
    "अभिलेखित स्रोतमा सहभागीका नाम सूचीबद्ध छैनन्।",
  "Prize sponsors": "पुरस्कार प्रायोजक",
  "Additional sponsors": "थप प्रायोजक",
  "Teams have represented": "टोलीहरूले प्रतिनिधित्व गरेका छन्",
  "years are in Bikram Sambat (BS).": "वर्षहरू विक्रम संवत् (वि.सं.) मा छन्।",
  Abroad: "विदेश",
};

export function translateSiteText(language: "en" | "ne", text: string) {
  return language === "ne" ? nepali[text] ?? text : text;
}

export default function SiteText({ children }: { children: string }) {
  const language = useSiteLanguage();
  const translation =
    language === "ne" ? translateSiteText(language, children) : undefined;

  return (
    <span
      lang={translation ? "ne" : "en"}
      className={translation ? "devanagari-text" : undefined}
    >
      {translation ?? children}
    </span>
  );
}

export function BilingualSiteText({
  english,
  nepali,
}: {
  english: string;
  nepali: string;
}) {
  const language = useSiteLanguage();
  const isNepali = language === "ne";
  return (
    <span lang={language} className={isNepali ? "devanagari-text" : undefined}>
      {isNepali ? nepali : english}
    </span>
  );
}
