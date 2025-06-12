export type Language = 'ar' | 'en' | 'fr'

export interface Translations {
  // Navigation & General
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  
  // Problem Section
  problem: {
    title: string
    subtitle: string
    cards: {
      kitchen: {
        title: string
        description: string
        danger: string
      }
      bathroom: {
        title: string
        description: string
        danger: string
      }
      stairs: {
        title: string
        description: string
        danger: string
      }
      pool: {
        title: string
        description: string
        danger: string
      }
    }
  }
  
  // Solution Section
  solution: {
    title: string
    subtitle: string
    original: string
    technology: string
    dutchTech: string
    imported: string
    certified: string
    guarantee: string
    features: {
      transparent: {
        title: string
        description: string
      }
      noBreaking: {
        title: string
        description: string
      }
      fastDrying: {
        title: string
        description: string
      }
      longLasting: {
        title: string
        description: string
      }
    }
  }
  
  // Before/After Section
  beforeAfter: {
    title: string
    subtitle: string
    beforeLabel: string
    afterLabel: string
    location: string
    description: string
    cta: string
  }
  
  // How It Works
  howItWorks: {
    title: string
    subtitle: string
    steps: {
      inspection: {
        title: string
        description: string
      }
      cleaning: {
        title: string
        description: string
      }
      application: {
        title: string
        description: string
      }
      testing: {
        title: string
        description: string
      }
    }
  }
  
  // Testimonials
  testimonials: {
    title: string
    subtitle: string
    customers: Array<{
      name: string
      location: string
      text: string
      rating: number
    }>
  }
  
  // FAQ
  faq: {
    title: string
    subtitle: string
    questions: Array<{
      question: string
      answer: string
    }>
    hasQuestion: string
    askExperts: string
  }
  
  // Final CTA
  finalCta: {
    title: string
    subtitle: string
    cta: string
    benefits: {
      freeInspection: {
        title: string
        description: string
      }
      freeTrial: {
        title: string
        description: string
      }
      guarantee: {
        title: string
        description: string
      }
    }
    contact: string
  }
  
  // Footer
  footer: {
    description: string
    copyright: string
  }
  
  // Common CTAs
  ctas: {
    whatsapp: string
    freeInspection: string
    freeTrial: string
    protectFamily: string
    bookNow: string
    getQuote: string
  }
}

export const translations: Record<Language, Translations> = {
  ar: {
    hero: {
      title: "لا تترك الصدفة تحكم سلامة عائلتك",
      subtitle: "تقنية مبتكرة لحماية عائلتك من مخاطر الانزلاق",
      cta: "احصل على فحص مجاني"
    },
    
    problem: {
      title: "المناطق التي تحتاج حماية",
      subtitle: "",
      cards: {
        kitchen: {
          title: "المطبخ",
          description: "الزيت والماء يجعلان أرضية المطبخ خطيرة جداً خاصة عند الطبخ",
          danger: "خطر عالي"
        },
        bathroom: {
          title: "الحمام",
          description: "المكان الأكثر خطورة في المنزل - الماء والصابون يخلقان سطح زلق جداً",
          danger: "خطر شديد"
        },
        stairs: {
          title: "الدرج",
          description: "السقوط من الدرج يمكن أن يسبب إصابات خطيرة جداً أو حتى الوفاة",
          danger: "خطر قاتل"
        },
        pool: {
          title: "المسبح",
          description: "المنطقة المحيطة بالمسبح تصبح زلقة جداً عندما تكون مبللة",
          danger: "خطر متوسط"
        }
      }
    },
    
    solution: {
      title: "Zero Glissage الحل الأمثل",
      subtitle: "تقنية ثورية تجعل أرضياتك آمنة بنسبة 100% بدون تغيير شكلها أو لونها",
      original: "منتج أصلي",
      technology: "التقنية الهولندية الأصلية المضادة للانزلاق",
      dutchTech: "تقنية هولندية متقدمة",
      imported: "منتج أصلي مستورد من هولندا",
      certified: "شهادات أمان أوروبية",
      guarantee: "نتائج مضمونة",
      features: {
        transparent: {
          title: "شفاف تماماً",
          description: "لا يغير شكل أو لون الأرضية"
        },
        noBreaking: {
          title: "بدون تكسير",
          description: "العمل نظيف وسريع"
        },
        fastDrying: {
          title: "سريع الجفاف",
          description: "جاهز للاستعمال خلال ساعات"
        },
        longLasting: {
          title: "يدوم سنوات",
          description: "حماية طويلة المدى"
        }
      }
    },
    
    beforeAfter: {
      title: "النتيجة الحقيقية مع Zero Glissage",
      subtitle: "شاهد التحول المذهل - نفس الأرضية، أمان كامل",
      beforeLabel: "أرضية زلقة وخطيرة",
      afterLabel: "آمنة مع Zero Glissage",
      location: "نتيجة حقيقية - عميل فعلي",
      description: "تحول كامل لأرضية حقيقية بتقنية Zero Glissage",
      cta: "شاهد النتيجة في منزلك - تجربة مجانية"
    },
    
    howItWorks: {
      title: "كيف نعمل؟",
      subtitle: "عملية بسيطة وسريعة لحماية منزلك بشكل نهائي",
      steps: {
        inspection: {
          title: "فحص مجاني",
          description: "نزور منزلك ونفحص المناطق المطلوبة"
        },
        cleaning: {
          title: "تنظيف عميق",
          description: "تنظيف مهني لضمان التصاق مثالي"
        },
        application: {
          title: "تطبيق المنتج",
          description: "تطبيق Zero Glissage بتقنية خاصة"
        },
        testing: {
          title: "اختبار الأمان",
          description: "اختبار فعالية المنتج أمامك"
        }
      }
    },
    
    testimonials: {
      title: "ماذا يقول عملاؤنا؟",
      subtitle: "آراء حقيقية من عائلات مغربية جربت Zero Glissage",
      customers: [
        {
          name: "أحمد المنصوري",
          location: "الدار البيضاء",
          text: "منتج رائع! حل مشكلة الانزلاق في الحمام نهائياً. الأطفال أصبحوا آمنين والأرضية لم تتغير أبداً",
          rating: 5
        },
        {
          name: "فاطمة الزهراء",
          location: "الرباط",
          text: "خدمة مهنية ونتيجة ممتازة. المطبخ أصبح آمن حتى عند الطبخ بالزيت. أنصح به بشدة",
          rating: 5
        },
        {
          name: "محمد الكريمي",
          location: "مراكش",
          text: "سعر معقول ونتيجة مذهلة. تم تطبيقه في جميع أنحاء المنزل ولا يوجد أي تغيير في الشكل",
          rating: 5
        }
      ]
    },
    
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على أهم الأسئلة حول Zero Glissage",
      questions: [
        {
          question: "هل يغير شكل أو لون الأرضية؟",
          answer: "لا، شفاف تماماً ولا يغير الشكل أو اللون. يحافظ على جمال منزلك."
        },
        {
          question: "كم يدوم مفعول Zero Glissage؟",
          answer: "يدوم لسنوات طويلة. مقاوم للتآكل والتنظيف مع ضمان الجودة."
        },
        {
          question: "هل آمن للأطفال والحيوانات؟",
          answer: "نعم، آمن 100%. منتج طبيعي وغير سام بدون مواد كيميائية ضارة."
        },
        {
          question: "كم يستغرق التطبيق؟",
          answer: "من 2-4 ساعات حسب المساحة. يجف بسرعة ويمكن الاستعمال نفس اليوم."
        },
        {
          question: "يعمل على جميع الأرضيات؟",
          answer: "نعم، على السيراميك والرخام والحجر الطبيعي والبورسلان."
        },
        {
          question: "ما هي التكلفة؟",
          answer: "تعتمد على المساحة ونوع الأرضية. فحص وتقدير مجاني."
        }
      ],
      hasQuestion: "لديك سؤال آخر؟",
      askExperts: "اسأل خبرائنا الآن"
    },
    
    finalCta: {
      title: "لا تنتظر حتى يحدث الحادث!",
      subtitle: "احم عائلتك اليوم بـ Zero Glissage",
      cta: "احصل على فحص مجاني الآن",
      benefits: {
        freeInspection: {
          title: "فحص مجاني",
          description: "بدون تكلفة"
        },
        freeTrial: {
          title: "تجربة مجانية",
          description: "اختبر قبل القرار"
        },
        guarantee: {
          title: "ضمان شامل",
          description: "جودة مضمونة"
        }
      },
      contact: "استجابة فورية عبر الواتساب"
    },
    
    footer: {
      description: "الحل الأمثل لحماية عائلتك من مخاطر الانزلاق. تقنية مبتكرة، نتائج مضمونة، وخدمة عالية الجودة.",
      copyright: "© 2024 Zero Glissage. جميع الحقوق محفوظة."
    },
    
    ctas: {
      whatsapp: "تواصل عبر الواتساب",
      freeInspection: "فحص مجاني",
      freeTrial: "تجربة مجانية",
      protectFamily: "احم عائلتك الآن",
      bookNow: "احجز الآن",
      getQuote: "اطلب عرض سعر"
    }
  },
  
  en: {
    hero: {
      title: "Don't Leave Your Family's Safety to Chance",
      subtitle: "Innovative technology to protect your family from slip hazards",
      cta: "Get Free Inspection"
    },
    
    problem: {
      title: "Areas That Need Protection",
      subtitle: "",
      cards: {
        kitchen: {
          title: "Kitchen",
          description: "Oil and water make kitchen floors extremely dangerous, especially while cooking",
          danger: "High Risk"
        },
        bathroom: {
          title: "Bathroom",
          description: "The most dangerous place in the home - water and soap create extremely slippery surfaces",
          danger: "Severe Risk"
        },
        stairs: {
          title: "Stairs",
          description: "Falls from stairs can cause serious injuries or even death",
          danger: "Fatal Risk"
        },
        pool: {
          title: "Pool",
          description: "The area around the pool becomes very slippery when wet",
          danger: "Medium Risk"
        }
      }
    },
    
    solution: {
      title: "Zero Glissage The Optimal Solution",
      subtitle: "Revolutionary technology that makes your floors 100% safe without changing their appearance or color",
      original: "Original Product",
      technology: "Original Dutch Anti-Slip Technology",
      dutchTech: "Advanced Dutch Technology",
      imported: "Original product imported from Holland",
      certified: "European Safety Certificates",
      guarantee: "Guaranteed Results",
      features: {
        transparent: {
          title: "Completely Transparent",
          description: "Doesn't change floor appearance or color"
        },
        noBreaking: {
          title: "No Breaking",
          description: "Clean and fast work"
        },
        fastDrying: {
          title: "Fast Drying",
          description: "Ready to use within hours"
        },
        longLasting: {
          title: "Lasts Years",
          description: "Long-term protection"
        }
      }
    },
    
    beforeAfter: {
      title: "Real Results with Zero Glissage",
      subtitle: "See the amazing transformation - same floor, complete safety",
      beforeLabel: "Slippery and Dangerous Floor",
      afterLabel: "Safe with Zero Glissage",
      location: "Real Result - Actual Customer",
      description: "Complete transformation of real floor with Zero Glissage technology",
      cta: "See the result in your home - Free trial"
    },
    
    howItWorks: {
      title: "How Do We Work?",
      subtitle: "Simple and fast process to protect your home permanently",
      steps: {
        inspection: {
          title: "Free Inspection",
          description: "We visit your home and inspect the required areas"
        },
        cleaning: {
          title: "Deep Cleaning",
          description: "Professional cleaning to ensure perfect adhesion"
        },
        application: {
          title: "Product Application",
          description: "Applying Zero Glissage with special technique"
        },
        testing: {
          title: "Safety Testing",
          description: "Testing product effectiveness in front of you"
        }
      }
    },
    
    testimonials: {
      title: "What Do Our Customers Say?",
      subtitle: "Real opinions from Moroccan families who tried Zero Glissage",
      customers: [
        {
          name: "Ahmed Mansouri",
          location: "Casablanca",
          text: "Excellent product! Completely solved the bathroom slipping problem. The children are safe now and the floor hasn't changed at all",
          rating: 5
        },
        {
          name: "Fatima Zahra",
          location: "Rabat",
          text: "Professional service and excellent results. The kitchen is now safe even when cooking with oil. Highly recommend it",
          rating: 5
        },
        {
          name: "Mohammed Karimi",
          location: "Marrakech",
          text: "Reasonable price and amazing results. Applied throughout the house with no change in appearance",
          rating: 5
        }
      ]
    },
    
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most important questions about Zero Glissage",
      questions: [
        {
          question: "Does it change the floor's appearance or color?",
          answer: "No, it's completely transparent and doesn't change appearance or color. Maintains your home's beauty."
        },
        {
          question: "How long does Zero Glissage last?",
          answer: "Lasts for many years. Resistant to wear and cleaning with quality guarantee."
        },
        {
          question: "Is it safe for children and pets?",
          answer: "Yes, 100% safe. Natural and non-toxic product with no harmful chemicals."
        },
        {
          question: "How long does application take?",
          answer: "2-4 hours depending on area size. Dries quickly and can be used the same day."
        },
        {
          question: "Does it work on all floors?",
          answer: "Yes, on ceramic, marble, natural stone, and porcelain."
        },
        {
          question: "What is the cost?",
          answer: "Depends on area size and floor type. Free inspection and estimate."
        }
      ],
      hasQuestion: "Have another question?",
      askExperts: "Ask our experts now"
    },
    
    finalCta: {
      title: "Don't Wait Until an Accident Happens!",
      subtitle: "Protect your family today with Zero Glissage",
      cta: "Get Free Inspection Now",
      benefits: {
        freeInspection: {
          title: "Free Inspection",
          description: "No cost"
        },
        freeTrial: {
          title: "Free Trial",
          description: "Test before deciding"
        },
        guarantee: {
          title: "Full Guarantee",
          description: "Quality assured"
        }
      },
      contact: "Instant response via WhatsApp"
    },
    
    footer: {
      description: "The optimal solution to protect your family from slip hazards. Innovative technology, guaranteed results, and high-quality service.",
      copyright: "© 2024 Zero Glissage. All rights reserved."
    },
    
    ctas: {
      whatsapp: "Contact via WhatsApp",
      freeInspection: "Free Inspection",
      freeTrial: "Free Trial",
      protectFamily: "Protect Your Family Now",
      bookNow: "Book Now",
      getQuote: "Get Quote"
    }
  },
  
  fr: {
    hero: {
      title: "Ne Laissez Pas le Hasard Décider de la Sécurité de Votre Famille",
      subtitle: "Technologie innovante pour protéger votre famille des risques de glissade",
      cta: "Inspection Gratuite"
    },
    
    problem: {
      title: "Zones Qui Nécessitent Une Protection",
      subtitle: "",
      cards: {
        kitchen: {
          title: "Cuisine",
          description: "L'huile et l'eau rendent les sols de cuisine extrêmement dangereux, surtout pendant la cuisson",
          danger: "Risque Élevé"
        },
        bathroom: {
          title: "Salle de Bain",
          description: "L'endroit le plus dangereux de la maison - l'eau et le savon créent des surfaces très glissantes",
          danger: "Risque Sévère"
        },
        stairs: {
          title: "Escaliers",
          description: "Les chutes dans les escaliers peuvent causer des blessures graves voire la mort",
          danger: "Risque Mortel"
        },
        pool: {
          title: "Piscine",
          description: "La zone autour de la piscine devient très glissante quand elle est mouillée",
          danger: "Risque Moyen"
        }
      }
    },
    
    solution: {
      title: "Zero Glissage La Solution Optimale",
      subtitle: "Technologie révolutionnaire qui rend vos sols 100% sûrs sans changer leur apparence ou couleur",
      original: "Produit Original",
      technology: "Technologie Anti-Glisse Hollandaise Originale",
      dutchTech: "Technologie Hollandaise Avancée",
      imported: "Produit original importé de Hollande",
      certified: "Certificats de Sécurité Européens",
      guarantee: "Résultats Garantis",
      features: {
        transparent: {
          title: "Complètement Transparent",
          description: "Ne change pas l'apparence ou la couleur du sol"
        },
        noBreaking: {
          title: "Sans Casse",
          description: "Travail propre et rapide"
        },
        fastDrying: {
          title: "Séchage Rapide",
          description: "Prêt à utiliser en quelques heures"
        },
        longLasting: {
          title: "Dure Des Années",
          description: "Protection à long terme"
        }
      }
    },
    
    beforeAfter: {
      title: "Résultats Réels avec Zero Glissage",
      subtitle: "Voyez la transformation incroyable - même sol, sécurité complète",
      beforeLabel: "Sol Glissant et Dangereux",
      afterLabel: "Sûr avec Zero Glissage",
      location: "Résultat Réel - Client Actuel",
      description: "Transformation complète d'un sol réel avec la technologie Zero Glissage",
      cta: "Voyez le résultat chez vous - Essai gratuit"
    },
    
    howItWorks: {
      title: "Comment Travaillons-Nous?",
      subtitle: "Processus simple et rapide pour protéger votre maison de façon permanente",
      steps: {
        inspection: {
          title: "Inspection Gratuite",
          description: "Nous visitons votre domicile et inspectons les zones requises"
        },
        cleaning: {
          title: "Nettoyage Profond",
          description: "Nettoyage professionnel pour assurer une adhésion parfaite"
        },
        application: {
          title: "Application du Produit",
          description: "Application de Zero Glissage avec technique spéciale"
        },
        testing: {
          title: "Test de Sécurité",
          description: "Test de l'efficacité du produit devant vous"
        }
      }
    },
    
    testimonials: {
      title: "Que Disent Nos Clients?",
      subtitle: "Opinions réelles de familles marocaines qui ont essayé Zero Glissage",
      customers: [
        {
          name: "Ahmed Mansouri",
          location: "Casablanca",
          text: "Excellent produit! A complètement résolu le problème de glissade dans la salle de bain. Les enfants sont en sécurité maintenant et le sol n'a pas changé du tout",
          rating: 5
        },
        {
          name: "Fatima Zahra",
          location: "Rabat",
          text: "Service professionnel et excellents résultats. La cuisine est maintenant sûre même en cuisinant avec de l'huile. Je le recommande vivement",
          rating: 5
        },
        {
          name: "Mohammed Karimi",
          location: "Marrakech",
          text: "Prix raisonnable et résultats incroyables. Appliqué dans toute la maison sans aucun changement d'apparence",
          rating: 5
        }
      ]
    },
    
    faq: {
      title: "Questions Fréquemment Posées",
      subtitle: "Réponses aux questions les plus importantes sur Zero Glissage",
      questions: [
        {
          question: "Est-ce que ça change l'apparence ou la couleur du sol?",
          answer: "Non, c'est complètement transparent et ne change pas l'apparence ou la couleur. Préserve la beauté de votre maison."
        },
        {
          question: "Combien de temps dure Zero Glissage?",
          answer: "Dure de nombreuses années. Résistant à l'usure et au nettoyage avec garantie de qualité."
        },
        {
          question: "Est-ce sûr pour les enfants et les animaux?",
          answer: "Oui, 100% sûr. Produit naturel et non toxique sans produits chimiques nocifs."
        },
        {
          question: "Combien de temps prend l'application?",
          answer: "2-4 heures selon la taille de la zone. Sèche rapidement et peut être utilisé le même jour."
        },
        {
          question: "Est-ce que ça marche sur tous les sols?",
          answer: "Oui, sur céramique, marbre, pierre naturelle et porcelaine."
        },
        {
          question: "Quel est le coût?",
          answer: "Dépend de la taille de la zone et du type de sol. Inspection et devis gratuits."
        }
      ],
      hasQuestion: "Avez-vous une autre question?",
      askExperts: "Demandez à nos experts maintenant"
    },
    
    finalCta: {
      title: "N'Attendez Pas Qu'un Accident Arrive!",
      subtitle: "Protégez votre famille aujourd'hui avec Zero Glissage",
      cta: "Inspection Gratuite Maintenant",
      benefits: {
        freeInspection: {
          title: "Inspection Gratuite",
          description: "Sans coût"
        },
        freeTrial: {
          title: "Essai Gratuit",
          description: "Testez avant de décider"
        },
        guarantee: {
          title: "Garantie Complète",
          description: "Qualité assurée"
        }
      },
      contact: "Réponse instantanée via WhatsApp"
    },
    
    footer: {
      description: "La solution optimale pour protéger votre famille des risques de glissade. Technologie innovante, résultats garantis et service de haute qualité.",
      copyright: "© 2024 Zero Glissage. Tous droits réservés."
    },
    
    ctas: {
      whatsapp: "Contacter via WhatsApp",
      freeInspection: "Inspection Gratuite",
      freeTrial: "Essai Gratuit",
      protectFamily: "Protégez Votre Famille Maintenant",
      bookNow: "Réserver Maintenant",
      getQuote: "Obtenir un Devis"
    }
  }
} 