import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  skills = [
    {
      icon: 'fab fa-react',
      title: 'ReactJS',
      description: 'JavaScript library for building user interfaces.',
    },
    {
      icon: 'fab fa-react',
      title: 'React Native',
      description: 'Framework for building mobile applications using React.',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Vite',
      description: 'Front-end build tool for faster development.',
    },
    {
      icon: 'fab fa-angular',
      title: 'Angular',
      description: 'Front-end framework for creating web applications.',
    },
    {
      icon: 'fas fa-code',
      title: '.NET/C#',
      description: 'Back-end framework for building Windows and web applications.',
    },
    {
      icon: 'fas fa-database',
      title: 'Entity Framework',
      description: 'Object-relational mapping framework for .NET.',
    },
    {
      icon: 'fas fa-code',
      title: 'ASP.NET Core MVC',
      description: 'Web framework for building modern, cloud-based, and internet-connected applications.',
    },
    {
      icon: 'fas fa-database',
      title: 'Firebase',
      description: 'Cloud-based database and backend-as-a-service.',
    },
    {
      icon: 'fas fa-database',
      title: 'MySQL',
      description: 'Relational database management system.',
    },
    {
      icon: 'fas fa-database',
      title: 'MS SQL Server',
      description: 'Microsoft"s relational database management system.',
    },
    {
      icon: 'fab fa-git',
      title: 'GIT',
      description: 'Version control system for tracking changes in source code.',
    },
    {
      icon: 'fab fa-bitbucket',
      title: 'Bitbucket',
      description: 'Web-based platform for version control.',
    },
    {
      icon: 'fab fa-jira',
      title: 'Jira',
      description: 'Project management and issue tracking tool.',
    },
    {
      icon: 'fab fa-html5',
      title: 'HTML',
      description: 'Markup language for creating web pages.',
    },
    {
      icon: 'fab fa-css3',
      title: 'CSS',
      description: 'Style sheet language for web page design.',
    },
    {
      icon: 'fab fa-js',
      title: 'JavaScript',
      description: 'Programming language for web development.',
    },
    {
      icon: 'fab fa-js',
      title: 'TypeScript',
      description: 'Typed superset of JavaScript.',
    },
    {
      icon: 'fas fa-cubes',
      title: 'Bootstrap',
      description: 'Front-end framework for web development.',
    },
    {
      icon: 'fas fa-cubes',
      title: 'Tailwind',
      description: 'Utility-first CSS framework.',
    },
    {
      icon: 'fab fa-sass',
      title: 'SCSS',
      description: 'Syntactically awesome style sheets.',
    },
  ];
}
