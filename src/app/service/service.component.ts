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
      category: 'Front-end frameworks',
    },
    {
      icon: 'fab fa-react',
      title: 'React Native',
      description: 'Framework for building mobile applications using React.',
      category: 'Front-end frameworks',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Vite',
      description: 'Front-end build tool for faster development.',
      category: 'Front-end frameworks',
    },
    {
      icon: 'fab fa-angular',
      title: 'Angular',
      description: 'Front-end framework for creating web applications.',
      category: 'Front-end frameworks',
    },
    {
      icon: 'fas fa-code',
      title: '.NET/C#',
      description: 'Back-end framework for building Windows and web applications.',
      category: 'Back-end frameworks',
    },
    {
      icon: 'fas fa-database',
      title: 'Entity Framework',
      description: 'Object-relational mapping framework for .NET.',
      category: 'Back-end frameworks',
    },
    {
      icon: 'fas fa-code',
      title: 'ASP.NET Core MVC',
      description: 'Web framework for building modern, cloud-based, and internet-connected applications.',
      category: 'Back-end frameworks',
    },
    {
      icon: 'fas fa-database',
      title: 'Firebase',
      description: 'Cloud-based database and backend-as-a-service.',
      category: 'Back-end frameworks',
    },
    {
      icon: 'fas fa-database',
      title: 'MySQL',
      description: 'Relational database management system.',
      category: 'Data management',
    },
    {
      icon: 'fas fa-database',
      title: 'MS SQL Server',
      description: 'Microsoft\'s relational database management system.',
      category: 'Data management',
    },
    {
      icon: 'fab fa-git',
      title: 'GIT',
      description: 'Version control system for tracking changes in source code.',
      category: 'Version control',
    },
    {
      icon: 'fab fa-bitbucket',
      title: 'Bitbucket',
      description: 'Web-based platform for version control.',
      category: 'Version control',
    },
    {
      icon: 'fab fa-jira',
      title: 'Jira',
      description: 'Project management and issue tracking tool.',
      category: 'Version control',
    },
    {
      icon: 'fab fa-html5',
      title: 'HTML',
      description: 'Markup language for creating web pages.',
      category: 'Web development',
    },
    {
      icon: 'fab fa-css3',
      title: 'CSS',
      description: 'Style sheet language for web page design.',
      category: 'Web development',
    },
    {
      icon: 'fab fa-js',
      title: 'JavaScript',
      description: 'Programming language for web development.',
      category: 'Web development',
    },
    {
      icon: 'fab fa-js',
      title: 'TypeScript',
      description: 'Typed superset of JavaScript.',
      category: 'Web development',
    },
    {
      icon: 'fas fa-cubes',
      title: 'Bootstrap',
      description: 'Front-end framework for web development.',
      category: 'Web development',
    },
    {
      icon: 'fas fa-cubes',
      title: 'Tailwind',
      description: 'Utility-first CSS framework.',
      category: 'Web development',
    },
    {
      icon: 'fab fa-sass',
      title: 'SCSS',
      description: 'Syntactically awesome style sheets.',
      category: 'Web development',
    },
  ];

  selectedCategory: string | null = "All Categories";
  isInSelectedCategory(skill: any): boolean {
    if (this.selectedCategory === null) {
      return true; // Toon de vaardigheid als geen categorie is geselecteerd
    } else if (this.selectedCategory === 'All Categories') {
      return true; // Toon de vaardigheid als 'All Categories' is geselecteerd
    } else {
      return this.selectedCategory === skill.category; // Toon de vaardigheid als deze overeenkomt met de geselecteerde categorie
    }
  }
  
  
  

}
