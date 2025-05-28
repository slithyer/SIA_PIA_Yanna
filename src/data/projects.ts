import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'EcoTrack',
    description: 'A mobile application that helps users monitor and reduce their carbon footprint through daily habit tracking and personalized recommendations.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Express'],
    imageUrl: 'https://images.pexels.com/photos/3952013/pexels-photo-3952013.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'in-progress',
    link: 'https://github.com/ecotrack'
  },
  {
    id: '2',
    title: 'FinViz Dashboard',
    description: 'An interactive financial visualization dashboard that helps investors analyze market trends and make data-driven investment decisions.',
    technologies: ['React', 'D3.js', 'TypeScript', 'Express', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'completed',
    link: 'https://finviz-dashboard.example.com'
  },
  {
    id: '3',
    title: 'MindfulMinutes',
    description: 'A meditation and mindfulness app designed to help users incorporate brief mindfulness practices into their busy daily routines.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions'],
    imageUrl: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'completed',
    link: 'https://mindfulminutes.example.com'
  },
  {
    id: '4',
    title: 'SmartHome Hub',
    description: 'An IoT platform that integrates various smart home devices and provides a unified interface for monitoring and control.',
    technologies: ['React', 'Node.js', 'MQTT', 'MongoDB', 'WebSockets'],
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'planned',
    link: 'https://github.com/smarthomehub'
  }
];