import './App.css'
import Container from './components/app';

export default function App() {
  const posts = [
    {
      title: 'Article',
      author: 'Fernando',
      date: '2024-06-01',
      content: 'Nois',
      imageUrl: 'https://i.pinimg.com/564x/f3/cc/38/f3cc38707687aecd13373e5c855d28a4.jpg',
      imageAlt: 'Nois',
    },
    {
      title: 'Segundo Article',
      author: 'Fernando',
      date: '2024-06-02',
      content: 'Nois de novo',
      imageUrl: 'https://i.pinimg.com/564x/f3/cc/38/f3cc38707687aecd13373e5c855d28a4.jpg',
      imageAlt: 'Nois',
    },
  ];

  return (
    <Container posts={posts} />
  );
}