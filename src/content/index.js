export default {
    nav: {
      logo: 'JN',
      links: [
        { text: 'Projets', to: 'mywork' },
        { text: 'Contactez-moi !', to: 'contact'},
      ],
    },
    header: {
      img: process.env.PUBLIC_URL + '/assets/cv_png2.png',
      text: ['Bonjour!', "C'est Jacques.", 'Je suis'],
      typical: [
        'web developer. 🖥',
        2021,
        'amoureux des 🌳',
        1992,
      ],
      btnText: 'Découvrir plus',
    },
    stack: {
      title: 'Stack',
      tech: [
        {
          img: process.env.PUBLIC_URL + '/assets/symfony2.png',
          alt: 'symfony',
        },
        {
          img: process.env.PUBLIC_URL + '/logo512.png',
          alt: 'react',
        },
        {
          img: process.env.PUBLIC_URL + '/assets/php.png',
          alt: 'php',
        },
        {
          img: process.env.PUBLIC_URL + '/assets/javascript2.png',
          alt: 'javascript',
        },
      ],
      desc: `Développeur full stack , j’ai appris à coder dans divers langages informatiques. Je peux  participer  aux différentes étapes techniques de la création d’un site ou d’une application web ; de la compréhension des besoins utilisateurs, au développement frontend et backend.
      `,
    },
    contact: {
      mail:'j.nguyen@gmail.com',
      title: 'contact',
      content: 'N\'hésitez pas à me contacter',
      networks:[
              {
               link: "https://www.linkedin.com/in/jacques-nguyen-14611117a/",
               img: process.env.PUBLIC_URL + '/assets/LinkedIn.png',
               alt: 'linkedin',
               },
              {
               link : "https://github.com/JacquesN16" ,
               img: process.env.PUBLIC_URL + '/assets/GitHub.png',
               alt: 'github',
               },
              {
               link :"mailto:j.nguyen14216@gmail.com" ,
               img: process.env.PUBLIC_URL + '/assets/Email.png',
               alt: 'email',
               },
       ]
      
    },
  };