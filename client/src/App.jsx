import { useState, useEffect } from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import Cursor     from './components/Cursor/Cursor';
import Loader     from './components/Loader/Loader';
import Nav        from './components/Nav/Nav';
import Footer     from './components/Footer/Footer';
import Hero       from './components/Hero/Hero';
import Marquee    from './components/Marquee/Marquee';
import About      from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills     from './components/Skills/Skills';
import Projects   from './components/Projects/Projects';
import Education  from './components/Education/Education';
import Contact    from './components/Contact/Contact';
import './App.scss';

function App() {
  const [data,        setData]        = useState(null);
  const [apiError,    setApiError]    = useState(false);
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    fetch('https://portfolio-api-r00k.onrender.com/api/portfolio')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        console.error('[App] API fetch failed:', err);
        setApiError(true);
      });
  }, []);

  useScrollReveal(data);

  const handleLoaderComplete = () => setPageVisible(true);

  if (apiError) {
    return (
      <div className="api-error">
        <h2>API connection failed</h2>
        <p>Make sure the Express server is running on port 5000:</p>
        <code>cd server &amp;&amp; npm run dev</code>
      </div>
    );
  }

  return (
    <>
      <Cursor />
      <Loader onComplete={handleLoaderComplete} />
      <div className={`page-wrapper${pageVisible ? ' page-visible' : ''}`}>
        {data && (
          <>
            <Nav        meta={data.meta}                                        />
            <Hero       hero={data.hero}                                        />
            <Marquee    items={data.marqueeItems}                               />
            <About      about={data.about}                                      />
            <Experience items={data.experience}                                 />
            <Skills     skills={data.skills}                                    />
            <Projects   projects={data.projects}                                />
            <Education  education={data.education} certs={data.certifications} />
            <Contact    meta={data.meta}                                        />
            <Footer     meta={data.meta}                                        />
          </>
        )}
      </div>
    </>
  );
}

export default App;
