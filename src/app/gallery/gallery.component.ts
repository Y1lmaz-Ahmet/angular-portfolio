import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  galleryItems = [
  {
      imageSrc: '../../assets/apple-app.png', 
      title: 'Apple Website',
      githubLink: 'https://github.com/Y1lmaz-Ahmet/apple_website',
      livePreviewLink: 'https://apple-website-nine-tau.vercel.app/',
    },
  {
      imageSrc: '../../assets/chat-app.png', 
      title: 'react chat app',
      githubLink: 'https://github.com/Y1lmaz-Ahmet/react-firebase-chat-chatssnovvax',
      livePreviewLink: 'https://react-firebase-chat-chatssnovvax.vercel.app/',
    },
    {
      imageSrc: '../../assets/fintrackr.jpg', 
      title: 'Data Analytics website UI',
      githubLink: 'https://github.com/Y1lmaz-Ahmet/FinTrackr',
      livePreviewLink: 'https://vermillion-lolly-636951.netlify.app/',
    },
    {
      imageSrc: '../../assets/todo-app.png', 
      title: 'todo app',
      githubLink: 'https://github.com/Y1lmaz-Ahmet/simple-todo-app',
      livePreviewLink: 'https://todo-app-sable-psi.vercel.app/',
    },
    {
      imageSrc: '../../assets/furniture.jpg', 
      title: 'e-commerce furniture website UI',
      githubLink: 'https://github.com/Y1lmaz-Ahmet/website-design/tree/main/website-design-15',
      livePreviewLink: 'https://website-design-7kge.vercel.app/',
    },
    {
      imageSrc: '../../assets/restaurant.jpg', 
      title: 'Restaurant website UI',
      githubLink: 'https://github.com/Y1lmaz-Ahmet/website-design/tree/main/website-design-16',
      livePreviewLink: 'https://y1lmaz-ahmet-restaurant-website.vercel.app',
    },
    {
      imageSrc: '../../assets/snapmaster.png',
      title: 'Website Design',
      githubLink: 'https://github.com/Y1lmaz-Ahmet/snapmaster',
      livePreviewLink: 'https://snapmaster.vercel.app',
    },
    {
      imageSrc: '../../assets/coffee-shop.jpg', 
      title: 'Coffee shop website UI',
      githubLink: 'https://github.com/Y1lmaz-Ahmet/portfolio-project-coffee-shop',
      livePreviewLink: 'https://portfolio-project-coffee-shop.vercel.app',
    },
    {
      imageSrc: '../../assets/travel-agency.jpg', 
      title: 'Travel Agency website UI',
      githubLink: 'https://github.com/Y1lmaz-Ahmet/website-design/tree/main/website-design-14',
      livePreviewLink: 'https://website-design-ruby.vercel.app/',
    },
    {
      imageSrc: '../../assets/nexa.jpg', 
      title: 'Website Design',
      githubLink: 'https://github.com/Y1lmaz-Ahmet/nexa',
      livePreviewLink: 'https://wondrous-macaron-acf1a4.netlify.app/',
    },
    {
      imageSrc: '../../assets/dashboard.jpg', 
      title: 'Modern Dashboard UI',
      githubLink: 'https://github.com/Y1lmaz-Ahmet/react-dashboard-ay',
      livePreviewLink: 'https://radiant-horse-dee879.netlify.app',
    },
  ];
}
