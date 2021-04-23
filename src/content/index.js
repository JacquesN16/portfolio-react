export default {
    nav: {
      logo: 'JN',
      links: [
        { text: 'Projets', to: 'mywork' },
        { text: 'Contact', to: 'mycontact'},
      ],
    },
    header: {
      img: process.env.PUBLIC_URL + '/assets/cv_png2.png',
      text: ['Bonjour!', "C'est Jacques.", 'Je suis'],
      typical: [
        'web developer. 🖥',
        2021,
        'amoureux des plantes 🌳',
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
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laudantium fugiat commodi quis incidunt inventore, rem porro minima molestiae blanditiis sit ea doloribus vitae molestias error sapiente temporibus expedita deserunt.
      `,
    },
  };