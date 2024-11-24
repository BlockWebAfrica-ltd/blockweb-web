import './App.css';
import Home from './pages/Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      {/* SEO tags */}
      <Helmet>
        <title>Blockweb Africa</title>
        <meta name="description" content="We are a group of experienced consultants who have developed and worked as capital market regulators, specializing in blockchain technology." />
        <meta property="og:title" content="Welcome to Blockweb Africa" />
        <meta property="og:description" content="We are a group of experienced consultants who have developed and worked as capital market regulators, specializing in blockchain technology." />
        <meta property="og:image" content="/public/BlockWebLogo.png" />
        <meta property="og:url" content="https://www.blockwebafrica.com/#home" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to Blockweb Africa" />
        <meta name="twitter:description" content="We are a group of experienced consultants who have developed and worked as capital market regulators, specializing in blockchain technology." />
        <meta name="twitter:image" content="/public/BlockWebLogo.png" />
        <meta name="twitter:url" content="https://www.blockwebafrica.com/#home" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Blockweb Africa, blockweb, blockchain technology, capital market regulations, financial technology, fintech solutions, blockchain consulting, crypto regulations, financial markets, digital transformation, blockchain innovation"
        />
        <link rel="canonical" href="https://www.blockwebafrica.com/" />
        <link rel="icon" href="/public/BlockWebLogo.png" />
      </Helmet>

      <Home />
    </div>
  );
}

export default App;
